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
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(@Req() req: Request, @Res() res: Response): any {
    return {};
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
