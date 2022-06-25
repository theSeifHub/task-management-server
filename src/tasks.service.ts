import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks(): string {
    return 'Hello World!';
  }

  createTask(): string {
    return 'Hello World!';
  }

  editTask(): string {
    return 'Hello World!';
  }

  deleteTask(): string {
    return 'Hello World!';
  }
}
