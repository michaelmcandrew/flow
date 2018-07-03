export class FinancialTrxn {
  public id: number
  public from_financial_account_id: number
  public to_financial_account_id: number
  public trxn_date: Date
  public total_amount: number
  public fee_amount: number
  public net_amount: number
  public currency: string
  public is_payment: boolean
  public trxn_id: string
  public trxn_result_code: string
  public status_id: number
  public payment_processor_id: number
  public payment_instrument_id: number
  public card_type_id: number
  public check_number: string
  public pan_truncation: string
}
