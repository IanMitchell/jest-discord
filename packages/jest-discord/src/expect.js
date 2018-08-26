/* global expect */

import toBeMessage from './assertions/toBeMessage';
import toHaveEmbed from './assertions/toHaveEmbed';

expect.extend({
  toBeMessage,
  toHaveEmbed,
});
