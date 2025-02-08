import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {AccessToken, RefreshingAuthProvider} from '@twurple/auth';
import {existsSync, readFileSync, writeFileSync} from 'fs';
import {ChatClient} from '@twurple/chat';
import {config} from '../config';
import {MakeOptional} from '@d-fischer/shared-utils';

const {twitch} = config.notifications;

const messages: string[] = [];
let alreadySaying = false;

let tokenData: MakeOptional<AccessToken, 'scope'> = {
  accessToken: twitch.accessToken,
  refreshToken: twitch.refreshToken,
  expiresIn: 0,
  obtainmentTimestamp: 0
};

if (existsSync('./twitch.json')) {
  tokenData = JSON.parse(readFileSync('./twitch.json', 'utf-8'));
}

const authProvider: RefreshingAuthProvider | undefined = new RefreshingAuthProvider(
	{
		clientId: twitch.clientId,
		clientSecret: twitch.clientSecret,
	}
) ?? undefined;

authProvider?.onRefresh((userId: string, newTokenData: AccessToken) => writeFileSync(`./twitch.json`, JSON.stringify(newTokenData, null, 4), 'utf-8'));

let chatClient: ChatClient;
if (!!authProvider && twitch.clientId && twitch.clientSecret && twitch.channel) {
  authProvider.addUserForToken(tokenData, ['chat']).then(() => {
    chatClient = new ChatClient(
      {
        authProvider,
        channels: [twitch.channel],
        authIntents: ['chat']
      }
    );
    
    chatClient.onJoin((channel, user) => {
      if (channel === twitch.channel && user === chatClient.irc.currentNick) {
        while (messages.length) {
          const message: string | undefined = messages.shift();

          if (message !== undefined) {
            try {
              void chatClient.say(channel, message);
              logger.info('✔ twitch message sent');
            } catch (error: unknown) {
              logger.error("✖ couldn't send twitch message", error);
            }
          }
        }
      }
    
      void chatClient.quit();
    });
    
    chatClient.onDisconnect(() => {
      alreadySaying = false;
    });

    if (messages.length > 0 && !alreadySaying) {
      alreadySaying = true;

      chatClient.connect();
    }

    logger.info('✔ twitch integration initialized');
  }).catch((error: unknown) => {
    logger.error("✖ couldn't initialize twitch integration", error);
  });
}

export function sendTwitchMessage(link: Link, store: Store) {
  if (
    tokenData.accessToken &&
    twitch.channel &&
    twitch.clientId &&
    twitch.clientSecret &&
    tokenData.refreshToken
  ) {
    logger.debug('↗ sending twitch message');

    messages.push(
      `${new Date().toLocaleTimeString()} ${Print.inStock(link, store)}\nLINK: ${link.cartUrl ? link.cartUrl : link.url}`
    );

    if (!!chatClient && !alreadySaying) {
      alreadySaying = true;
      
      void chatClient.connect();
    }
  }
}  
