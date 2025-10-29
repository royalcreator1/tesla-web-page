# Telegram Bot Setup for Form Submissions

This guide will help you set up a Telegram bot to receive form submissions from your website.

## Step 1: Create a Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Send the message: `/newbot`
3. Follow the instructions to name your bot (e.g., "Yantra Motors Bot")
4. BotFather will give you a **token** like: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`

## Step 2: Get Your Chat ID

1. Search for **@userinfobot** on Telegram
2. Start a conversation with it
3. It will show your Chat ID (e.g., `123456789`)
4. Copy this number

## Step 3: Configure Your Bot

Update the following files with your credentials:

### For Book Test Drive Form:
File: `src/components/BookTestDriveForm.jsx`

Replace on lines 18-19:
```javascript
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';
```

### For Contact Form:
File: `src/components/ContactForm.jsx`

Replace on lines 17-18:
```javascript
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';
```

## Example Configuration

```javascript
// Example (DO NOT use these - they are fake!)
const TELEGRAM_BOT_TOKEN = '1234567890:ABCdefGHIjklMNOpqrsTUVwxyz';
const TELEGRAM_CHAT_ID = '123456789';
```

## Step 4: Test Your Setup

1. Fill out the "Book Test Drive" form on your website
2. Submit the form
3. Check your Telegram messages - you should receive the form data!

## Security Note

⚠️ **IMPORTANT**: The current implementation exposes your bot token in the frontend code, which is not secure for production. For production, you should:

1. Create a backend API endpoint (using Node.js, Python, etc.)
2. Send form data to your backend
3. Have the backend send messages to Telegram
4. Store bot credentials securely on the server

## Troubleshooting

- **"Failed to send request"**: Check that your bot token and chat ID are correct
- **No messages received**: Make sure you've started a conversation with the bot by sending it a message first
- **CORS errors**: You may need to set up a backend proxy to handle CORS issues

## Need Help?

- Telegram Bot API Documentation: https://core.telegram.org/bots/api
- BotFather Commands: https://core.telegram.org/bots#6-botfather

