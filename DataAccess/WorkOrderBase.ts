import { TransactionBase } from './Transaction'
import { FieldType } from './Record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import { InventoryDetailBase } from './InventoryDetailBase'
import * as record from 'N/record'

/**
 * Work Order Item Sublist
 */
export class ItemSublist extends SublistLine {
   @SublistFieldType.select
   item: number

   @SublistFieldType.decimalnumber
   price: number

   @SublistFieldType.integernumber
   quantity: number

   @SublistFieldType.integernumber
   bomquantity: number

   @SublistFieldType.decimalnumber
   rate: number

   @SublistFieldType.select
   units: number

   @SublistFieldType.decimalnumber
   amount: number

   @SublistFieldType.freeformtext
   description: string

   @SublistFieldType.subrecord(InventoryDetailBase)
   inventorydetail: InventoryDetailBase
}

/**
 * NetSuite Work Order record type
 */
export class WorkOrderBase extends TransactionBase {
   @FieldType.date
   actualproductionenddate: Date

   @FieldType.date
   actualproductionstartdate: Date

   @FieldType.select
   assemblyitem: number

   @FieldType.select
   billofmaterials: number

   @FieldType.select
   billofmaterialsrevision: number

   @FieldType.select
   createdfrom: number

   @FieldType.date
   enddate: Date

   @FieldType.checkbox
   firmed: boolean

   @FieldType.select
   job: number

   @FieldType.integernumber
   quantity: number

   @FieldType.date
   startdate: Date

   @FieldType.select
   units: number

   @FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>

   static recordType () { return record.Type.WORK_ORDER }
}
