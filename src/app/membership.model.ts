export class Membership {
  public contact_id: number
  public membership_type_id: number
  public join_date: Date
  public start_date: Date
  public end_date: Date
  public source: string
  public status_id: number
  public is_override: boolean
  public status_override_end_date: Date
  public owner_membership_id: number
  public max_related: number
  public is_test: boolean
  public is_pay_later: boolean
  public contribution_recur_id: number
  public campaign_id: number
  public id: number
  public active_only: boolean
}
