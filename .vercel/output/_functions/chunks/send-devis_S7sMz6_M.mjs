import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { Resend } from "resend";
//#region src/pages/api/send-devis.js
var send_devis_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
async function POST({ request }) {
	console.log("=== API send-devis called ===");
	try {
		console.log("Step 1: Checking environment variables");
		const apiKey = "re_Z2Y91eb6_BHkMSvA4rZZ8fahbD31bx9EX";
		console.log("API Key found:", true);
		console.log("API Key length:", 36);
		console.log("Step 2: Initializing Resend client");
		const resend = new Resend(apiKey);
		console.log("Resend client initialized successfully");
		console.log("Step 3: Parsing request body");
		const { name, email, phone, clothing_type, service, company, quantity, customization, message } = await request.json();
		console.log("Received form data:", {
			name,
			email,
			itemType: clothing_type || service
		});
		const itemType = clothing_type || service;
		if (!name || !email || !itemType) {
			console.error("Missing required fields:", {
				name: !!name,
				email: !!email,
				itemType: !!itemType
			});
			return new Response(JSON.stringify({ error: "Missing required fields" }), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
		}
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
          ` : ""}
          
          ${company ? `
          <div class="field">
            <div class="label">Entreprise / Institution</div>
            <div class="value">${company}</div>
          </div>
          ` : ""}
          
          <div class="field">
            <div class="label">Type de service</div>
            <div class="value">${clothing_type || service}</div>
          </div>
          
          <div class="field">
            <div class="label">Quantité</div>
            <div class="value">${quantity}</div>
          </div>
          
          ${customization ? `
          <div class="field">
            <div class="label">Détails de personnalisation</div>
            <div class="value">${customization}</div>
          </div>
          ` : ""}
          
          ${message ? `
          <div class="field">
            <div class="label">Message additionnel</div>
            <div class="value">${message}</div>
          </div>
          ` : ""}
        </div>
        <div class="footer">
          <p>Ce message a été envoyé depuis le formulaire de contact de Confection Univers</p>
        </div>
      </body>
      </html>
    `;
		console.log("Attempting to send email via Resend...");
		console.log("API Key exists:", true);
		console.log("API Key length:", 36);
		const data = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "confectionunivers@gmail.com",
			subject: `Nouvelle demande de devis - ${name}`,
			html: htmlContent,
			replyTo: email
		});
		console.log("Email sent successfully:", data);
		return new Response(JSON.stringify({
			success: true,
			data
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		console.error("Error sending email:", error);
		console.error("Error details:", {
			message: error.message,
			name: error.name,
			stack: error.stack
		});
		return new Response(JSON.stringify({
			error: "Failed to send email",
			details: error.message,
			name: error.name
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
}
//#endregion
//#region \0virtual:astro:page:src/pages/api/send-devis@_@js
var page = () => send_devis_exports;
//#endregion
export { page };
