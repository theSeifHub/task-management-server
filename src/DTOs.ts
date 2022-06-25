export interface NewTaskDTO {
  title: string;
  description: string;
}

export interface TaskDTO extends NewTaskDTO {
  id: number;
}
