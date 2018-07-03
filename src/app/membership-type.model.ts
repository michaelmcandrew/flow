export class MembershipType {
  public id: number
  public domain_id: number
  public name: string
  public description: string
  public member_of_contact_id: number
  public financial_type_id: number
  public minimum_fee: number
  public duration_unit: string
  public duration_interval: number
  public period_type: string
  public fixed_period_start_day: number
  public fixed_period_rollover_day: number
  public relationship_type_id: string
  public relationship_direction: string
  public max_related: number
  public visibility: string
  public weight: number
  public receipt_text_signup: string
  public receipt_text_renewal: string
  public auto_renew: boolean
  public is_active: boolean
}
