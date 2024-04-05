import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('api/cities')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  getCities(@Query('city') city: string) {
    console.log('city input ', city);
    return this.locationService.getCities(city);
  }
}
