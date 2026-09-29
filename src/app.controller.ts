import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service.js';
import { ApiParam, ApiQuery } from '@nestjs/swagger';
import { z } from 'zod';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('param/:id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the parameter',
    example: '123',
  })
  getParam(@Param('id') id: string): string {
    return `This route has no schema for ID: ${id}`;
  }

  @Get('param-with-schema/:id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the parameter with schema',
    example: '123',
  })
  getParamWithSchema(@Param('id', { schema: z.string() }) id: string): string {
    return `This route has a schema for ID: ${id}`;
  }

  @Get('query/:id')
  @ApiQuery({
    name: 'id',
    description: 'The ID of the query parameter',
    example: '123',
  })
  getQueryParam(@Query('id') id: string): string {
    return `This route has no schema for ID: ${id}`;
  }

  @Get('query-with-schema/:id')
  @ApiQuery({
    name: 'id',
    description: 'The ID of the query parameter with schema',
    example: '123',
  })
  getQueryParamWithSchema(
    @Query('id', { schema: z.string() }) id: string,
  ): string {
    return `This route has a schema for ID: ${id}`;
  }
}
