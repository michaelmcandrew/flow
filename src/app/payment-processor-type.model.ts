export class PaymentProcessorType {
  public id: number
  public name: string
  public title: string
  public description: string
  public is_active: boolean
  public is_default: boolean
  public user_name_label: string
  public password_label: string
  public signature_label: string
  public subject_label: string
  public class_name: string
  public url_site_default: string
  public url_api_default: string
  public url_recur_default: string
  public url_button_default: string
  public url_site_test_default: string
  public url_api_test_default: string
  public url_recur_test_default: string
  public url_button_test_default: string
  public billing_mode: number
  public is_recur: boolean
  public payment_type: number
  public payment_instrument_id: number
}
