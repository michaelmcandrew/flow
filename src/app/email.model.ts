export class Email {
  public id: number
  public contact_id: number
  public location_type_id: number
  public email: string
  public is_primary: boolean
  public is_billing: boolean
  public on_hold: boolean
  public is_bulkmail: boolean
  public hold_date: Date
  public reset_date: Date
  public signature_text: string
  public signature_html: string
}
