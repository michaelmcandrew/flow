export class Grant {
  public contact_id: number
  public application_received_date: Date
  public decision_date: Date
  public money_transfer_date: Date
  public grant_due_date: Date
  public grant_report_received: boolean
  public grant_type_id: number
  public amount_total: number
  public amount_requested: number
  public amount_granted: number
  public currency: string
  public rationale: string
  public status_id: number
  public financial_type_id: number
  public id: number
}
