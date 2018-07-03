export class Relationship {
  public id: number
  public contact_id_a: number
  public contact_id_b: number
  public relationship_type_id: number
  public start_date: Date
  public end_date: Date
  public is_active: boolean
  public description: string
  public is_permission_a_b: boolean
  public is_permission_b_a: boolean
  public case_id: number
}
