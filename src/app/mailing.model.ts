export class Mailing {
  public id: number
  public domain_id: number
  public header_id: number
  public footer_id: number
  public reply_id: number
  public unsubscribe_id: number
  public resubscribe_id: number
  public optout_id: number
  public name: string
  public mailing_type: string
  public from_name: string
  public from_email: string
  public replyto_email: string
  public template_type: string
  public template_options: string
  public subject: string
  public body_text: string
  public body_html: string
  public url_tracking: boolean
  public forward_replies: boolean
  public auto_responder: boolean
  public open_tracking: boolean
  public is_completed: boolean
  public msg_template_id: number
  public override_verp: boolean
  public created_id: number
  public created_date: Date
  public modified_date: Date
  public scheduled_id: number
  public scheduled_date: Date
  public approver_id: number
  public approval_date: Date
  public approval_status_id: number
  public approval_note: string
  public is_archived: boolean
  public visibility: string
  public campaign_id: number
  public dedupe_email: boolean
  public sms_provider_id: number
  public hash: string
  public location_type_id: number
  public email_selection_method: string
  public language: string
}