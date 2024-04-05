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
import { WeatherService } from './weather.service';

@Controller('api/weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  getWeather(
    @Query('latitude') latitude: number,
    @Query('longitude') longitude: number,
  ) {
    console.log(latitude, longitude);
    return this.weatherService.getWeather(latitude, longitude);
  }
}
