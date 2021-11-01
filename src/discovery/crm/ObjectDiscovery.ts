import { any } from 'bluebird'
import * as _ from 'lodash'
import { BaseDiscovery } from '../BaseDiscovery'

export class ObjectDiscovery<T> extends BaseDiscovery {
  public basicApi: any

  public async getAll(properties?: Array<string>, associations?: Array<string>, archived?: boolean): Promise<T[]> {
    let after
    let result: T[] = []
    do {
      let response = await this.basicApi.getPage(100, after, properties, associations, archived)
      result = result.concat(response.results)
      after = _.get(response, 'paging.next.after')
    } while (!_.isNil(after))

    return result
  }
}
