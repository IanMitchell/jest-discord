import Discord from 'discord.js';

const DEFAULTS = {
  TIMEOUT: 3,
};

export default class TestBot extends Discord.Client {
  constructor(defaultGuildId, defaultChannelId, defaultTimeout = DEFAULTS.TIMEOUT) {
    super();
    this.defaultTimeout = defaultTimeout;

    this.on('ready', () => {
      this.testGuild = this.guilds.get(defaultGuildId);
      this.testChannel = this.channels.get(defaultChannelId);
    });
  }

  prompt(message, timeout = this.defaultTimeout) {
    return new Promise((resolve, reject) => {
      this.testChannel
        .send(message)
        .then(() => {
          this.testChannel.awaitMessages(
            (msg) => msg.content,
            { max: 1, time: this.defaultTimeout * 1000, errors: ['time'] }
          ).then((msgs) => resolve(msgs.first()));
        });
    });
  }
}
