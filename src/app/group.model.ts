export class Group {
  public id: number
  public name: string
  public title: string
  public description: string
  public source: string
  public saved_search_id: number
  public is_active: boolean
  public visibility: string
  public where_clause: string
  public select_tables: string
  public where_tables: string
  public group_type: string
  public cache_date: Date
  public refresh_date: Date
  public parents: string
  public children: string
  public is_hidden: boolean
  public is_reserved: boolean
  public created_id: number
  public modified_id: number
}
