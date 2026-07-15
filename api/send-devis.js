import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('=== API START ===');
    
    console.log('Step 1: Reading API key');
    const apiKey = process.env.RESEND_API_KEY;
    console.log('API Key status:', apiKey ? 'EXISTS' : 'MISSING');
    
    if (!apiKey || apiKey === 'ta_nouvelle_cle_ici' || apiKey.length < 10) {
      console.log('API Key validation failed');
      return res.status(500).json({ error: 'Server configuration error: API key missing or not configured' });
    }

    console.log('Step 2: Initializing Resend');
    const resend = new Resend(apiKey);
    
    console.log('Step 3: Reading request body');
    const body = req.body;
    const { name, email, phone, clothing_type, service, company, quantity, customization, message } = body;

    console.log('Form data received:', { name, email, service });

    const itemType = clothing_type || service;
    if (!name || !email || !itemType) {
      console.log('Validation failed: missing required fields');
      return res.status(400).json({ error: 'Missing required fields', details: { name: !!name, email: !!email, itemType: !!itemType } });
    }

    console.log('Step 4: Building HTML content');
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
          }
          .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
            color: #666;
            font-size: 14px;
            margin-bottom: 5px;
          }
          .value {
            background: white;
            padding: 12px;
            border-radius: 5px;
            border-left: 4px solid #667eea;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            color: #888;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Nouvelle Demande de Devis</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Nom complet</div>
            <div class="value">${name}</div>
          </div>
          
          <div class="field">
            <div class="label">Email</div>
            <div class="value">${email}</div>
          </div>
          
          ${phone ? `
          <div class="field">
            <div class="label">Téléphone</div>
            <div class="value">${phone}</div>
          </div>
          ` : ''}
          
          ${company ? `
          <div class="field">
            <div class="label">Entreprise / Institution</div>
            <div class="value">${company}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">Type de service</div>
            <div class="value">${clothing_type || service}</div>
          </div>
          
          <div class="field">
            <div class="label">Quantité</div>
            <div class="value">${quantity || 'Non spécifié'}</div>
          </div>
          
          ${customization ? `
          <div class="field">
            <div class="label">Détails de personnalisation</div>
            <div class="value">${customization}</div>
          </div>
          ` : ''}
          
          ${message ? `
          <div class="field">
            <div class="label">Message additionnel</div>
            <div class="value">${message}</div>
          </div>
          ` : ''}
        </div>
        <div class="footer">
          <p>Ce message a été envoyé depuis le formulaire de contact de Confection Univers</p>
        </div>
      </body>
      </html>
    `;

    console.log('Step 5: Sending email via Resend');
    const data = await resend.emails.send({
      from: 'Confection Univers <onboarding@resend.dev>',
      to: 'confectionunivers@gmail.com',
      subject: `Nouvelle demande de devis - ${name}`,
      html: htmlContent,
      replyTo: email,
    });
    console.log("Succès Resend :", data);
    
    console.log('Step 6: Returning success response');
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (anyError) {
    console.error('=== ERROR CAUGHT ===');
    console.error('Error details:', {
      message: anyError.message,
      name: anyError.name,
      stack: anyError.stack,
    });
    return res.status(500).json({ error: 'Failed to send email', details: anyError.message });
  }
}
