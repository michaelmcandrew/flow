export class Campaign {
  public id: number
  public name: string
  public title: string
  public description: string
  public start_date: Date
  public end_date: Date
  public campaign_type_id: number
  public status_id: number
  public external_identifier: string
  public parent_id: number
  public is_active: boolean
  public created_id: number
  public created_date: Date
  public last_modified_id: number
  public last_modified_date: Date
  public goal_general: string
  public goal_revenue: number
}
