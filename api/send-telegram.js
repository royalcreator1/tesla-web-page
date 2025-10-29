export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text, bot_token, chat_id } = req.body;

  // Validate required fields
  if (!text || !bot_token || !chat_id) {
    return res.status(400).json({ error: 'Missing required fields: text, bot_token, chat_id' });
  }

  try {
    // Forward request to Telegram API
    const response = await fetch(
      `https://api.telegram.org/bot${bot_token}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chat_id,
          text: text,
          parse_mode: 'HTML',
        }),
      }
    );

    const data = await response.json();
    
    if (data.ok) {
      return res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully' 
      });
    } else {
      return res.status(400).json({ 
        error: data.description || 'Failed to send message' 
      });
    }
  } catch (error) {
    console.error('Telegram API error:', error);
    return res.status(500).json({ 
      error: error.message || 'Failed to send message to Telegram' 
    });
  }
}

