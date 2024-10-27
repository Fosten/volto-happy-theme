// All your imports required for the config here BEFORE this line

export default function applyConfig(config) {
  // Add here your project's configuration here by modifying `config` accordingly

  //include site title in <title>
  if (!config.settings.siteTitleFormat) {
    config.settings.siteTitleFormat = { includeSiteTitle: true };
  } else config.settings.siteTitleFormat.includeSiteTitle = true;
  config.settings.titleAndSiteTitleSeparator = '|';

  return config;
}
