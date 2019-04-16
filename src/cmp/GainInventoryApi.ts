import ApiClient from 'http/ApiClient'
import Response from 'model/response/Response'
import QueryParam from 'model/request/QueryParam'
import ContextPageInfo from 'model/commons/ContextPageInfo'
import GainInventory from 'model/inventory/gain/GainInventory'

export default class GainInventoryApi {
  /**
   * 作废报溢单
   *
   */
  static abolish (id: string, version: number): Promise<Response<void>> {
    return ApiClient.server().post(`{merchant}/gainInventory/abolish`, {}, {
      params: {
        id: id,
        version: version
      }
    }).then((res) => {
      return res.data
    })
  }

  /**
   * 审核报溢单
   *
   */
  static audit (id: string, version: number): Promise<Response<void>> {
    return ApiClient.server().post(`{merchant}/gainInventory/audit`, {}, {
      params: {
        id: id,
        version: version
      }
    }).then((res) => {
      return res.data
    })
  }

  /**
   * 复制
   *
   */
  static copy (id: string): Promise<Response<GainInventory>> {
    return ApiClient.server().get(`{merchant}/gainInventory/copy`, {
      params: {
        id: id
      }
    }).then((res) => {
      return res.data
    })
  }

  /**
   * 创建不持久化的报溢单
   *
   */
  static create (): Promise<Response<GainInventory>> {
    return ApiClient.server().get(`{merchant}/gainInventory/create`).then((res) => {
      return res.data
    })
  }

  /**
   * 导出明细
   *
   */
  static exportGainInventoryDetail (id: string): Promise<Response<string>> {
    return ApiClient.server().post(`{merchant}/gainInventory/detail/export`, {}, {
      params: {
        id: id
      }
    }).then((res) => {
      return res.data
    })
  }

  /**
   * 导出列表
   *
   */
  static exportGainInventoryList (body: QueryParam): Promise<Response<string>> {
    return ApiClient.server().post(`{merchant}/gainInventory/list/export`, body).then((res) => {
      return res.data
    })
  }

  /**
   * 获取报溢单
   *
   */
  static get (id: string, num: string): Promise<Response<GainInventory>> {
    return ApiClient.server().get(`{merchant}/gainInventory/get`, {
      params: {
        id: id,
        num: num
      }
    }).then((res) => {
      return res.data
    })
  }

  /**
   * 下一单
   *
   */
  static next (body: ContextPageInfo): Promise<Response<ContextPageInfo>> {
    return ApiClient.server().post(`{merchant}/gainInventory/next`, body).then((res) => {
      return res.data
    })
  }

  /**
   * 上一单
   *
   */
  static prev (body: ContextPageInfo): Promise<Response<ContextPageInfo>> {
    return ApiClient.server().post(`{merchant}/gainInventory/prev`, body).then((res) => {
      return res.data
    })
  }

  /**
   * 查询报溢单列表
   *
   */
  static query (body: QueryParam): Promise<Response<GainInventory[]>> {
    return ApiClient.server().post(`{merchant}/gainInventory/query`, body).then((res) => {
      return res.data
    })
  }

  /**
   * 删除报溢单
   *
   */
  static remove (id: string, version: number): Promise<Response<void>> {
    return ApiClient.server().post(`{merchant}/gainInventory/remove`, {}, {
      params: {
        id: id,
        version: version
      }
    }).then((res) => {
      return res.data
    })
  }

  /**
   * 保存报溢单
   *
   */
  static save (body: GainInventory): Promise<Response<GainInventory>> {
    return ApiClient.server().post(`{merchant}/gainInventory/save`, body).then((res) => {
      return res.data
    })
  }

  /**
   * 保存并审核报溢单
   *
   */
  static saveAndAudit (body: GainInventory): Promise<Response<GainInventory>> {
    return ApiClient.server().post(`{merchant}/gainInventory/saveAndAudit`, body).then((res) => {
      return res.data
    })
  }

}
