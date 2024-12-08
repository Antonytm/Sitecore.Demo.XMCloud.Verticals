import jss from '@sitecore-jss/sitecore-jss/layout';
import type { LayoutService } from '@sitecore-jss/sitecore-jss/layout';
import config from '../temp/config';
import clientFactory from './graphql/graphql-create-client-factory';
const { RestLayoutService, GraphQLLayoutService } = jss;

export class LayoutServiceFactory {
  
  create(sitename?: string): LayoutService {
    return config.fetchWith === 'GraphQL'
      ? new GraphQLLayoutService({
        clientFactory,
        siteName: sitename || config.jssAppName || config.sitecoreSiteName,
      })
      : new RestLayoutService({
        apiHost: config.sitecoreApiHost,
        apiKey: config.sitecoreApiKey,
        siteName: sitename || config.jssAppName || config.sitecoreSiteName,
        configurationName: 'sxa-jss',
      });
  }
}

export const layoutServiceFactory = new LayoutServiceFactory();