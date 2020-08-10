export interface IList {
    adminId?: string,
    description?: string,
    name: string,
    sortValue?: 0,
    tenantId?: string
  }
export interface List {
    id: string,
    description: string,
    name: string,
    authorId: string,
    tenantId: string,
    createDate: string,
    updateDate: string,
    active: boolean,
    archived: boolean,
    sortValue: number,
    _expandables: Array<string>
  }

  export interface Lists{
    items: Array<List>,
    hasNext: boolean
  }


