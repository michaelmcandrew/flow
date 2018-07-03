export class PaymentToken {
  public id: number
  public contact_id: number
  public payment_processor_id: number
  public token: string
  public created_date: Date
  public created_id: number
  public expiry_date: Date
  public email: string
  public billing_first_name: string
  public billing_middle_name: string
  public billing_last_name: string
  public masked_account_number: string
  public ip_address: string
}
