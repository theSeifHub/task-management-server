import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Body,
  Param,
} from '@nestjs/common';
import { NewTaskDTO, TaskDTO } from './DTOs';
import { TasksService } from './tasks.service';

@Controller('api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(@Query('q') query: string) {
    try {
      const tasks: TaskDTO[] = query
        ? this.tasksService.searchTasks(query)
        : this.tasksService.getAllTasks();
      return {
        msg: 'Success',
        data: {
          tasks,
          count: tasks.length,
        },
      };
    } catch (err) {
      console.error(err);
    }
  }

  @Post()
  createTask(@Body() body: NewTaskDTO) {
    try {
      const { title, description } = body;
      const newTaskId: number = this.tasksService.createTask(
        title,
        description,
      );
      return {
        msg: 'Success',
        data: newTaskId,
      };
    } catch (err) {
      console.error(err);
    }
  }

  @Put(':taskId')
  updateTask(@Param('taskId') taskId: string, @Body() body: TaskDTO) {
    try {
      const { title, description } = body;
      const updatedTaskId: number = this.tasksService.updateTask(
        +taskId,
        title,
        description,
      );
      return {
        msg: 'Success',
        data: updatedTaskId,
      };
    } catch (err) {
      console.error(err);
    }
  }

  @Delete(':taskId')
  deleteTask(@Param('taskId') taskId: string) {
    try {
      const deletedTaskId: number = this.tasksService.deleteTask(+taskId);
      return {
        msg: 'Success',
        data: deletedTaskId,
      };
    } catch (err) {
      console.error(err);
    }
  }
}
