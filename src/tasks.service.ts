import { readFileSync, writeFileSync } from 'fs';
import { Injectable } from '@nestjs/common';
import { TaskDTO } from './DTOs';

@Injectable()
export class TasksService {
  private readonly tasksFilePath = `${__dirname}/tasks.json`;

  private getTasksFromDataFile(): TaskDTO[] {
    try {
      const buf = readFileSync(this.tasksFilePath);
      const tasks = JSON.parse(buf.toString());
      return tasks;
    } catch (err) {
      console.error('ERROR >>', err);
      throw err;
    }
  }

  private writeToTasksFile(newContent: TaskDTO[]): void {
    try {
      const data = JSON.stringify(newContent, null, 2);
      writeFileSync(this.tasksFilePath, data);
    } catch (err) {
      console.error('ERROR >>', err);
      throw err;
    }
  }

  private generateId(num: number): number {
    return (num + 1) * 2;
  }

  getAllTasks(): TaskDTO[] {
    const tasks: TaskDTO[] = this.getTasksFromDataFile();
    return tasks;
  }

  searchTasks(query: string): TaskDTO[] {
    const allTasks: TaskDTO[] = this.getTasksFromDataFile();
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

  createTask(title: string, description: string): number {
    const tasks = this.getTasksFromDataFile();
    const newTask: TaskDTO = {
      id: this.generateId(tasks.length),
      title,
      description,
    };
    tasks.push(newTask);
    this.writeToTasksFile(tasks);
    return newTask.id;
  }

  editTask(): string {
    return 'Hello World!';
  }

  deleteTask(): string {
    return 'Hello World!';
  }
}
