import express from 'express';
import cors from 'cors';

const app = express();

// Configure CORS to allow requests from localhost:5173
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Handle preflight requests
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(200);
});

const PORT = 3004;

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Telegram Proxy Server is running!',
    endpoint: '/api/send-telegram',
    method: 'POST'
  });
});

// Proxy endpoint for Telegram
app.post('/api/send-telegram', async (req, res) => {
  const { text, bot_token, chat_id } = req.body;

  console.log('📨 Received request:', { text: text.substring(0, 50), bot_token: bot_token ? 'present' : 'missing', chat_id });

  if (!text || !bot_token || !chat_id) {
    console.log('❌ Missing fields');
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    console.log('📤 Sending to Telegram...');
    const response = await fetch(
      `https://api.telegram.org/bot${bot_token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id, text, parse_mode: 'HTML' }),
        signal: AbortSignal.timeout(10000) // 10 second timeout
      }
    );

    const data = await response.json();
    console.log('📥 Telegram response:', data);
    
    if (data.ok) {
      res.json({ success: true, message: 'Message sent successfully' });
    } else {
      console.log('❌ Telegram error:', data.description);
      res.status(400).json({ error: data.description || 'Failed to send message' });
    }
  } catch (error) {
    console.error('❌ Proxy Error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy server running on http://localhost:${PORT}`);
  console.log(`📡 Telegram API proxy ready!`);
});

