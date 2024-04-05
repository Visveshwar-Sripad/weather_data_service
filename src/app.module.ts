import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [WeatherModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
