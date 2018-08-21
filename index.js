import TestBot from './test-bot';

export default async function startTestBot({ token, guildId, channelId }) {
  var testBot = new TestBot(guildId, channelId);
  global.testBot = testBot;

  return testBot.login(token).catch(err => {
    console.error(err);
    process.exit(1);
  });
};
