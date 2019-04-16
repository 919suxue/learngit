import AbstractBusinessBillLine from 'model/AbstractBusinessBillLine'

export default class GainInventoryLine extends AbstractBusinessBillLine {
  // 报溢单uuid
  gainInventory: Nullable<string>
  // 溢余数量
  qty: number = 0
  // 溢余金额
  costAmount: number = 0
  // 备注
  remark: Nullable<string>
}
