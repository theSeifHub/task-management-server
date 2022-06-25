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
} from '@nestjs/common';
import { TaskDTO } from './DTOs';
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
  createTask(@Req() req: Request, @Res() res: Response): number {
    return 1;
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
