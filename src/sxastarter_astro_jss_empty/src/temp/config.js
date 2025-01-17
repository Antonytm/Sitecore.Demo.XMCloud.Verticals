const config = {};
config.sitecoreSiteName = import.meta.env.SITECORE_SITE_NAME || 'astro';
config.sitecoreApiKey = import.meta.env.SITECORE_API_KEY || '{6D3F291E-66A5-4703-887A-D549AF83D859}';
config.sitecoreApiHost = import.meta.env.SITECORE_API_HOST || 'https://xmcloudcm.localhost';
config.graphQLEndpointPath = import.meta.env.GRAPH_QL_ENDPOINT_PATH || '/sitecore/api/graph/edge';
config.graphQLEndpoint = import.meta.env.GRAPH_QL_ENDPOINT || 'https://xmcloudcm.localhost/sitecore/api/graph/edge';
config.rootItemId = import.meta.env.ROOT_ITEM_ID || '{A13C890B-43EA-45E2-8BAD-A8838112B83D}';
config.defaultLanguage = import.meta.env.DEFAULT_LANGUAGE || 'en';
config.fetchWith = import.meta.env.FETCH_WITH || 'GraphQL';
config.jssAppName = import.meta.env.JSS_APP_NAME || 'services';
export default config;