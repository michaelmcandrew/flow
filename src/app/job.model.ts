export class Job {
  public id: number
  public domain_id: number
  public run_frequency: string
  public last_run: Date
  public scheduled_run_date: Date
  public name: string
  public description: string
  public api_entity: string
  public api_action: string
  public parameters: string
  public is_active: boolean
}
