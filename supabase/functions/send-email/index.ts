import nodemailer from "npm:nodemailer@6.9.12";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      throw new Error("Alle velden zijn verplicht");
    }

    // Validate environment variables
    const username = Deno.env.get("SMTP_USERNAME");
    const password = Deno.env.get("SMTP_PASSWORD");

    if (!username || !password) {
      console.error("Missing SMTP credentials");
      throw new Error("Email configuratie ontbreekt");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: username,
        pass: password,
      },
    });

    const recipients = ["b.hartog@quicknet.nl", "mhartog.93@gmail.com"];
    const emailContent = `
Naam: ${name}
Email: ${email}
Onderwerp: ${subject}

Bericht:
${message}
    `.trim();

    try {
      // Send email to all recipients
      for (const recipient of recipients) {
        await transporter.sendMail({
          from: username,
          to: recipient,
          subject: "Nieuw bericht van Ben's Photography",
          text: emailContent,
        });
      }
    } catch (emailError) {
      console.error("SMTP Error:", emailError);
      throw new Error("Kon geen verbinding maken met de email server");
    }

    return new Response(
      JSON.stringify({ message: "Email succesvol verzonden" }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    
    const errorMessage = error instanceof Error 
      ? error.message 
      : "Er is een onbekende fout opgetreden";

    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        details: error instanceof Error ? error.stack : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});