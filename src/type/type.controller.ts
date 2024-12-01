import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UseGuards,
  } from '@nestjs/common';
  import { GetUser } from '../auth/decorators';
  import { JwtGuard } from '../auth/guard';
  import { TypeService } from './type.service';
  import {
    CreateTypeDto,
    EditTypeDto,
  } from './dto';

@UseGuards(JwtGuard)
@Controller('types')
export class TypeController {
    constructor(
        private typeService: TypeService,
      ) {}
    
      @Get()
      getTypes(@GetUser('id') userId: number) {
        return this.typeService.getTypes();
      }
    
      @Get(':id')
      getTypeById(
        @Param('id', ParseIntPipe) postId: number,
      ) {
        return this.typeService.getTypeById(
          postId,
        );
      }
    
      @Post()
      createType(
        // @GetUser('id') userId: number,
        @Body() dto: CreateTypeDto,
      ) {
        return this.typeService.createType(
          dto,
        );
      }
    
      @Patch(':id')
      editTypeById(
        @GetUser('id') userId: number,
        @Param('id', ParseIntPipe) postId: number,
        @Body() dto: EditTypeDto,
      ) {
        return this.typeService.editTypeById(
          postId,
          dto,
        );
      }
    
      @HttpCode(HttpStatus.NO_CONTENT)
      @Delete(':id')
      deleteTypeById(
        @Param('id', ParseIntPipe) postId: number,
      ) {
        return this.typeService.deleteTypeById(
          postId,
        );
      }
}
