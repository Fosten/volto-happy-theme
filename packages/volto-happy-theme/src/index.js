// All your imports required for the config here BEFORE this line
import '@plone/volto/config';
import customBlocks from './components/Blocks/customBlocks';

export default function applyConfig(config) {
  // Add here your project's configuration here by modifying `config` accordingly
  config.blocks = {
    ...config.blocks,
    initialBlocks: {
      'News Item': ['title', 'description', 'byline', 'leadimage', 'slate'],
    },
    blocksConfig: {
      ...config.blocks.blocksConfig,
      ...config.blocks.initialBlocks,
      ...customBlocks,
    },
  };

  //include site title in <title>
  if (!config.settings.siteTitleFormat) {
    config.settings.siteTitleFormat = { includeSiteTitle: true };
  } else config.settings.siteTitleFormat.includeSiteTitle = true;
  config.settings.titleAndSiteTitleSeparator = '|';

  return config;
}
