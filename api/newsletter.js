import { Resend } from 'resend';

const readEmail = (value) => typeof value === 'string' ? value.trim().slice(0, 320) : '';
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

  const email = readEmail(body?.email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey || apiKey === 'ta_nouvelle_cle_ici') {
    return res.status(500).json({ error: 'Email service is not configured' });
  }

  try {
    const resend = new Resend(apiKey);
    const segmentId = process.env.RESEND_NEWSLETTER_SEGMENT_ID?.trim();

    if (segmentId) {
      const result = await resend.contacts.create({
        email,
        segments: [{ id: segmentId }],
        unsubscribed: false,
      });

      if (result?.error) {
        const errorMessage = String(result.error.message || '').toLowerCase();
        const alreadySubscribed = result.error.statusCode === 409
          || errorMessage.includes('already exists')
          || errorMessage.includes('already been taken');
        if (!alreadySubscribed) {
          console.error('Resend rejected a newsletter contact:', result.error.name || 'provider error');
          return res.status(502).json({ error: 'Unable to register the email address' });
        }
      }
    } else {
      // Without a Resend segment configured, notify the team so the address can be added manually.
      const result = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL?.trim() || 'Confection Univers <onboarding@resend.dev>',
        to: 'confectionunivers@gmail.com',
        replyTo: email,
        subject: 'Nouvelle inscription à la newsletter',
        html: `<p>Nouvelle demande d'inscription à la newsletter :</p><p><strong>${escapeHtml(email)}</strong></p>`,
      });

      if (result?.error) {
        console.error('Resend rejected a newsletter notification:', result.error.name || 'provider error');
        return res.status(502).json({ error: 'Unable to register the email address' });
      }
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Unable to process newsletter registration:', error instanceof Error ? error.name : 'unknown error');
    return res.status(502).json({ error: 'Unable to register the email address' });
  }
}
