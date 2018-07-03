export class MembershipStatus {
  public id: number
  public name: string
  public label: string
  public start_event: string
  public start_event_adjust_unit: string
  public start_event_adjust_interval: number
  public end_event: string
  public end_event_adjust_unit: string
  public end_event_adjust_interval: number
  public is_current_member: boolean
  public is_admin: boolean
  public weight: number
  public is_default: boolean
  public is_active: boolean
  public is_reserved: boolean
}
