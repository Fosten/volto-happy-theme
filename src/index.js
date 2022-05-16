import customBlocks from '@Fosten/volto-happy-theme/components/Blocks/customBlocks'

const applyConfig = (config) => {
  config.blocks = {
    ...config.blocks,
    blocksConfig: {
      ...config.blocks.blocksConfig,
      ...customBlocks},
  }
  return config;
}

export default applyConfig;
