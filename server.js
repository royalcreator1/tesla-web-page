import express from 'express';
import cors from 'cors';

const app = express();

// Configure CORS to allow requests from localhost:5173
app.use(cors({
  origin: function (origin, callback) {
    console.log('🌐 CORS Origin:', origin);
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:5174', 'http://127.0.0.1:5174'];
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('❌ CORS blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.use(express.json());

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
  console.log('📨 POST request received from:', req.headers.origin);
  console.log('📨 Request headers:', req.headers);
  
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

