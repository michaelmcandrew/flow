export class ContributionPage {
  public id: number
  public title: string
  public intro_text: string
  public financial_type_id: number
  public payment_processor: string
  public is_credit_card_only: boolean
  public is_monetary: boolean
  public is_recur: boolean
  public is_confirm_enabled: boolean
  public recur_frequency_unit: string
  public is_recur_interval: boolean
  public is_recur_installments: boolean
  public adjust_recur_start_date: boolean
  public is_pay_later: boolean
  public pay_later_text: string
  public pay_later_receipt: string
  public is_partial_payment: boolean
  public initial_amount_label: string
  public initial_amount_help_text: string
  public min_initial_amount: number
  public is_allow_other_amount: boolean
  public default_amount_id: number
  public min_amount: number
  public max_amount: number
  public goal_amount: number
  public thankyou_title: string
  public thankyou_text: string
  public thankyou_footer: string
  public is_email_receipt: boolean
  public receipt_from_name: string
  public receipt_from_email: string
  public cc_receipt: string
  public bcc_receipt: string
  public receipt_text: string
  public is_active: boolean
  public footer_text: string
  public amount_block_is_active: boolean
  public start_date: Date
  public end_date: Date
  public created_id: number
  public created_date: Date
  public currency: string
  public campaign_id: number
  public is_share: boolean
  public is_billing_required: boolean
}