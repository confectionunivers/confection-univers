import { Resend } from 'resend';

const readField = (value, maxLength = 5000) => {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
};
const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[character]));

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader?.('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Invalid request body' });
    }
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  const name = readField(body.name, 200);
  const email = readField(body.email, 320);
  const comment = readField(body.comment, 5000);
  const postTitle = readField(body.postTitle, 240);

  if (!name || !email || !comment) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey || apiKey === 'ta_nouvelle_cle_ici') {
    return res.status(500).json({ error: 'Email service is not configured' });
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL?.trim() || 'Confection Univers <onboarding@resend.dev>',
      to: 'confectionunivers@gmail.com',
      replyTo: email,
      subject: `Nouveau commentaire${postTitle ? ` — ${postTitle.replace(/[\r\n]+/g, ' ')}` : ''}`,
      html: `
        <h2>Nouveau commentaire à modérer</h2>
        ${postTitle ? `<p><strong>Article :</strong> ${escapeHtml(postTitle)}</p>` : ''}
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Commentaire :</strong></p>
        <div style="white-space: pre-wrap; overflow-wrap: anywhere;">${escapeHtml(comment)}</div>
      `,
    });

    if (result?.error) {
      console.error('Resend rejected a comment:', result.error.name || 'provider error');
      return res.status(502).json({ error: 'Unable to send the comment' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Unable to send comment:', error instanceof Error ? error.name : 'unknown error');
    return res.status(502).json({ error: 'Unable to send the comment' });
  }
}
