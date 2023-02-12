// All your imports required for the config here BEFORE this line
import '@plone/volto/config';
import { initialBlocks } from '@Fosten/volto-happy-theme/config/Blocks'

export default function applyConfig(config) {
  // Add here your project's configuration here by modifying `config` accordingly
  config.blocks = {
    ...config.blocks,
    blocksConfig: {
      ...config.blocks.blocksConfig,
      ...initialBlocks},
    }
  return config;
}