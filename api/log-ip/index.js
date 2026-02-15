// api/log-ip/index.js

export default async function handler(req, res) {
  // 1. Verificar que el método de la solicitud sea POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  // 2. Obtener la IP del visitante desde los headers de la solicitud
  // Vercel inyecta estos headers automáticamente^1
  const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection.remoteAddress;

  // 3. Obtener el User Agent
  const userAgent = req.headers['user-agent'] || 'User Agent desconocido';

  // 4. Construir el mensaje para Discord
  const messageContent = `**Nueva visita detectada:**\n**IP:** \`${ip}\`\n**User Agent:** \`${userAgent}\``;

  try {
    // 5. Enviar a Discord usando fetch (disponible en Node.js 18+ en Vercel)
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!discordWebhookUrl) {
      console.error("Error: DISCORD_WEBHOOK_URL no está configurada.");
      return res.status(500).json({ message: 'Error de configuración del servidor' });
    }

    const discordPayload = {
      content: messageContent,
      username: 'IP Logger',
    };

    await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(discordPayload),
    });

    // 6. Responder al cliente que todo fue bien
    res.status(200).json({ success: true, message: 'IP registrada' });

  } catch (error) {
    console.error('Error al enviar a Discord:', error);
    res.status(500).json({ message: 'Error al procesar la solicitud' });
  }
}
