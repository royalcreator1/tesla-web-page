// Quick test script for Telegram bot
const BOT_TOKEN = '8293920282:AAHFV6viP8NtW_TgdmmhAlxRXEsl6giv0lo';

console.log('🔍 Testing Telegram Setup...\n');

// First, let's get bot info
fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getMe`)
  .then(res => res.json())
  .then(data => {
    if (data.ok) {
      console.log('✅ Bot is active:', data.result.first_name);
      console.log('📱 Username:', '@' + data.result.username);
      console.log('\n📝 IMPORTANT: Send a message to your bot first!');
      console.log('   1. Open Telegram');
      console.log('   2. Search for @' + data.result.username);
      console.log('   3. Start a conversation');
      console.log('   4. Send any message (like "hello")');
      console.log('   5. Then run: node get-chat-id.js');
    } else {
      console.log('❌ Bot error:', data.description);
    }
  });

