"use server";

import { Resend } from 'resend';

// A chave será lida automaticamente do arquivo .env.local 
const resend = new Resend(process.env.RESEND_API_KEY || 're_123456');

export async function sendEmailAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Todos os campos são obrigatórios." };
  }

  try {
    const data = await resend.emails.send({
      from: 'Contato do Portfólio <onboarding@resend.dev>', // Email base do Resend
      to: ['pedropauloteodoro26@gmail.com'], // O Pedrin deve alterar para o seu email real
      subject: `🚨 Novo Contato Web: ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #FF9800;">Você recebeu uma nova mensagem de contato!</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong><br/>
          <span style="background: #f4f4f4; padding: 15px; display: block; border-left: 4px solid #FF9800; border-radius: 4px;">
            ${message}
          </span>
          </p>
        </div>
      `
    });

    return { success: true, data };
  } catch (error: any) {
    return { error: error.message || "Erro desconhecido ao enviar email." };
  }
}
