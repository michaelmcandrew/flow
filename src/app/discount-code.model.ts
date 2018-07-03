export class DiscountCode {
  public id: number
  public code: string
  public description: string
  public filters: string
  public amount: string
  public amount_type: string
  public count_max: number
  public count_use: number
  public events: string
  public pricesets: string
  public memberships: string
  public autodiscount: string
  public organization_id: number
  public active_on: Date
  public expire_on: Date
  public is_active: boolean
  public discount_msg_enabled: boolean
  public discount_msg: string
}
