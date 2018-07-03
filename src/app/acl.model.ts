export class Acl {
  public id: number
  public name: string
  public deny: boolean
  public entity_table: string
  public entity_id: number
  public operation: string
  public object_table: string
  public object_id: number
  public acl_table: string
  public acl_id: number
  public is_active: boolean
}
