import { Resend } from 'resend';

const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}[character]));

const readField = (value, maxLength = 5000) => {
  if (typeof value !== 'string' && typeof value !== 'number') return '';
  return String(value).trim().slice(0, maxLength);
};

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
  const phone = readField(body.phone, 80);
  const company = readField(body.company, 200);
  const itemType = readField(body.clothing_type || body.service, 120);
  const quantity = readField(body.quantity, 32);
  const customization = readField(body.customization);
  const message = readField(body.message);

  if (!name || !email || !itemType) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey || apiKey === 'ta_nouvelle_cle_ici') {
    return res.status(500).json({ error: 'Email service is not configured' });
  }

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    company: escapeHtml(company),
    itemType: escapeHtml(itemType),
    quantity: escapeHtml(quantity),
    customization: escapeHtml(customization),
    message: escapeHtml(message),
  };
  const subjectName = name.replace(/[\r\n]+/g, ' ').slice(0, 120);

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .header h1 { margin: 0; font-size: 28px; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #666; font-size: 14px; margin-bottom: 5px; }
        .value { background: white; padding: 12px; border-radius: 5px; border-left: 4px solid #667eea; white-space: pre-wrap; overflow-wrap: anywhere; }
        .footer { text-align: center; margin-top: 30px; color: #888; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="header"><h1>Nouvelle Demande de Devis</h1></div>
      <div class="content">
        <div class="field"><div class="label">Nom complet</div><div class="value">${safe.name}</div></div>
        <div class="field"><div class="label">Email</div><div class="value">${safe.email}</div></div>
        ${phone ? `<div class="field"><div class="label">Téléphone</div><div class="value">${safe.phone}</div></div>` : ''}
        ${company ? `<div class="field"><div class="label">Entreprise / Institution</div><div class="value">${safe.company}</div></div>` : ''}
        <div class="field"><div class="label">Type de service</div><div class="value">${safe.itemType}</div></div>
        <div class="field"><div class="label">Quantité</div><div class="value">${safe.quantity || 'Non spécifié'}</div></div>
        ${customization ? `<div class="field"><div class="label">Détails de personnalisation</div><div class="value">${safe.customization}</div></div>` : ''}
        ${message ? `<div class="field"><div class="label">Message additionnel</div><div class="value">${safe.message}</div></div>` : ''}
      </div>
      <div class="footer"><p>Ce message a été envoyé depuis le formulaire de contact de Confection Univers</p></div>
    </body>
    </html>
  `;

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL?.trim() || 'Confection Univers <onboarding@resend.dev>',
      to: 'confectionunivers@gmail.com',
      subject: `Nouvelle demande de devis - ${subjectName}`,
      html: htmlContent,
      replyTo: email,
    });

    if (result?.error) {
      console.error('Resend rejected a quote request:', result.error.name || 'provider error');
      return res.status(502).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Unable to send quote request:', error instanceof Error ? error.name : 'unknown error');
    return res.status(502).json({ error: 'Failed to send email' });
  }
}
