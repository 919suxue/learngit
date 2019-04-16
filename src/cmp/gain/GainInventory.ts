import AbstractBill from 'model/AbstractBill'
import Ucn from 'model/entity/Ucn'
import GainInventoryLine from 'model/inventory/gain/GainInventoryLine'

export default class GainInventory extends AbstractBill {
  // 仓库
  warehouse: Nullable<Ucn>
  // 状态
  status: Nullable<string>
  // 溢余金额
  costAmount: number = 0
  // 备注
  remark: Nullable<string>
  // 单据行列表
  lines: GainInventoryLine[] = []
}
