import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3004;

// Proxy endpoint for Telegram
app.post('/api/send-telegram', async (req, res) => {
  const { text, bot_token, chat_id } = req.body;

  if (!text || !bot_token || !chat_id) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${bot_token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id, text, parse_mode: 'HTML' })
      }
    );

    const data = await response.json();
    
    if (data.ok) {
      res.json({ success: true, message: 'Message sent successfully' });
    } else {
      res.status(400).json({ error: data.description || 'Failed to send message' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy server running on http://localhost:${PORT}`);
  console.log(`📡 Telegram API proxy ready!`);
});

