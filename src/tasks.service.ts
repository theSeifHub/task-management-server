import { readFileSync } from 'fs';
import { Injectable } from '@nestjs/common';
import { TaskDTO } from './DTOs';

@Injectable()
export class TasksService {
  private readonly tasksFilePath = `${__dirname}/tasks.json`;

  private readTasksFile(): TaskDTO[] {
    try {
      const buf = readFileSync(this.tasksFilePath);
      const tasks = JSON.parse(buf.toString());
      return tasks;
    } catch (err) {
      console.error('ERROR >>', err);
      throw err;
    }
  }

  getAllTasks(): TaskDTO[] {
    const tasks: TaskDTO[] = this.readTasksFile();
    return tasks;
  }

  searchTasks(query: string): TaskDTO[] {
    const allTasks: TaskDTO[] = this.readTasksFile();
    let searchResults: TaskDTO[];
    if (allTasks.length && query) {
      searchResults = allTasks.filter((task) => {
        const indexInTitle = task.title
          .toLowerCase()
          .search(query.toLowerCase());
        const indexInDesc = task.description
          .toLowerCase()
          .search(query.toLowerCase());
        return indexInTitle > -1 || indexInDesc > -1;
      });
    }
    return searchResults;
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
