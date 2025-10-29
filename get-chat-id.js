// Script to get your chat ID
const BOT_TOKEN = '8293920282:AAHFV6viP8NtW_TgdmmhAlxRXEsl6giv0lo';

console.log('🔍 Getting your updates...\n');

fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`)
  .then(res => res.json())
  .then(data => {
    if (data.ok && data.result.length > 0) {
      console.log('✅ Found recent messages:\n');
      data.result.forEach((update, index) => {
        const chat = update.message?.chat || update.channel_post?.chat;
        if (chat) {
          console.log(`Message ${index + 1}:`);
          console.log(`  Chat ID shows: ${chat.id}`);
          console.log(`  User: ${chat.first_name || 'Unknown'} (${chat.username || 'no username'})`);
          console.log(`  Type: ${chat.type}`);
          console.log('');
        }
      });
      console.log('💡 Use one of these Chat IDs in your code!');
    } else {
      console.log('⚠️  No messages found yet!');
      console.log('📝 Please:');
      console.log('   1. Send a message to your bot first');
      console.log('   2. Then run this script again');
    }
  })
  .catch(err => {
    console.error('Error:', err.message);
  });

