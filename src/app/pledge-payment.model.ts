export class PledgePayment {
  public id: number
  public pledge_id: number
  public contribution_id: number
  public scheduled_amount: number
  public actual_amount: number
  public currency: string
  public scheduled_date: Date
  public reminder_date: Date
  public reminder_count: number
  public status_id: number
}
