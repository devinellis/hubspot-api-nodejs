import { createConfiguration } from '../../../../codegen/crm/tickets/configuration'
import { AssociationsApi, BasicApi, BatchApi, SearchApi, SimplePublicObjectWithAssociations } from '../../../../codegen/crm/tickets/index'
import { IConfiguration } from '../../../IConfiguration'
import { ObjectDiscovery } from '../ObjectDiscovery'

export class TicketsDiscovery extends ObjectDiscovery<SimplePublicObjectWithAssociations> {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public searchApi: SearchApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = this.createConfiguration(createConfiguration)

    this.associationsApi = new AssociationsApi(configuration)
    this.basicApi = new BasicApi(configuration)
    this.batchApi = new BatchApi(configuration)
    this.searchApi = new SearchApi(configuration)
  }
}
