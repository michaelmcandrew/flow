export class MailingJob {
  public id: number
  public mailing_id: number
  public scheduled_date: Date
  public start_date: Date
  public end_date: Date
  public status: string
  public is_test: boolean
  public job_type: string
  public parent_id: number
  public job_offset: number
  public job_limit: number
}
