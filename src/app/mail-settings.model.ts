export class MailSettings {
  public id: number
  public domain_id: number
  public name: string
  public is_default: boolean
  public domain: string
  public localpart: string
  public return_path: string
  public protocol: string
  public server: string
  public port: number
  public username: string
  public password: string
  public is_ssl: boolean
  public source: string
  public activity_status: string
}
