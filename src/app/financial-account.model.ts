export class FinancialAccount {
  public id: number
  public name: string
  public contact_id: number
  public financial_account_type_id: number
  public accounting_code: string
  public account_type_code: string
  public description: string
  public parent_id: number
  public is_header_account: boolean
  public is_deductible: boolean
  public is_tax: boolean
  public tax_rate: number
  public is_reserved: boolean
  public is_active: boolean
  public is_default: boolean
}
