import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class WeatherService {
  weather_api_key = 'cb28359d11882f26fcbd68a5492beb35';

  constructor(private readonly httpService: HttpService) {}
  async getWeather(latitude: number, longitude: number): Promise<any[]> {
    console.log(latitude, longitude);
    const { data } = await firstValueFrom(
      this.httpService
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.weather_api_key}`,
        )
        .pipe(
          catchError((error: AxiosError) => {
            console.log('error in fetching weather ', error.response.data);
            throw 'Error fetching cities!';
          }),
        ),
    );
    return data;
  }
}
