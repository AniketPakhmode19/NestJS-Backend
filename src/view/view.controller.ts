import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { ViewService } from './view.service';
import { DetailsInterceptor } from 'src/interceptor/details.interceptor';


@Controller('view')
export class ViewController {
  constructor(private readonly viewService: ViewService) {}

  @Get()
  @UseInterceptors(DetailsInterceptor)
  findAll() {
    return this.viewService.findAll();
  }

  @Get(':id')
  @UseInterceptors(DetailsInterceptor)
  findOne(@Param('id') id: number) {
    return this.viewService.findOne(+id);
  }

}
