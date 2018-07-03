export class Pledge {
  public contact_id: number
  public financial_type_id: number
  public contribution_page_id: number
  public amount: number
  public original_installment_amount: number
  public currency: string
  public frequency_unit: string
  public frequency_interval: number
  public frequency_day: number
  public installments: number
  public start_date: Date
  public create_date: Date
  public acknowledge_date: Date
  public modified_date: Date
  public cancel_date: Date
  public end_date: Date
  public max_reminders: number
  public initial_reminder_day: number
  public additional_reminder_day: number
  public status_id: number
  public is_test: boolean
  public campaign_id: number
  public id: number
  public next_pay_date: Date
}
