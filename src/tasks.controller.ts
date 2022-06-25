import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  Res,
  Request,
  Response,
  Query,
  Body,
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
        data: tasks,
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

  @Put()
  editTask(@Req() req: Request, @Res() res: Response): number {
    return 1;
  }

  @Delete()
  deleteTask(@Req() req: Request, @Res() res: Response): number {
    return 1;
  }
}
