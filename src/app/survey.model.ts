export class Survey {
  public id: number
  public title: string
  public campaign_id: number
  public activity_type_id: number
  public recontact_interval: string
  public instructions: string
  public release_frequency: number
  public max_number_of_contacts: number
  public default_number_of_contacts: number
  public is_active: boolean
  public is_default: boolean
  public created_id: number
  public created_date: Date
  public last_modified_id: number
  public last_modified_date: Date
  public result_id: number
  public bypass_confirm: boolean
  public thankyou_title: string
  public thankyou_text: string
  public is_share: boolean
}
