export class PaymentProcessor {
  public id: number
  public domain_id: number
  public name: string
  public description: string
  public payment_processor_type_id: number
  public is_active: boolean
  public is_default: boolean
  public is_test: boolean
  public user_name: string
  public password: string
  public signature: string
  public url_site: string
  public url_api: string
  public url_recur: string
  public url_button: string
  public subject: string
  public class_name: string
  public billing_mode: number
  public is_recur: boolean
  public payment_type: number
  public payment_instrument_id: number
  public accepted_credit_cards: string
}
