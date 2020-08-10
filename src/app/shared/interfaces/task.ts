export interface ITask {
  deadline?: string,
  description?: string,
  name: string,
  notes?: string,
  sortValue?: number,
  statusId?: string,
  timeDeadlineType?: 'DAYS',
  timeDeadlineValue?: number
}

export interface Task {
  id: string,
  description: string,
  listId: string,
  authorId: string,
  tenantId: string,
  name: string,
  statusId: string,
  createDate: string,
  updateDate: string,
  active: boolean,
  sortValue: number,
  deadline?: string,
  _expandables: Array<string>
}

export interface Tasks {
  items: Array<Task>,
  hasNext: boolean
}