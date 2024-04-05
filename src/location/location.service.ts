import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class LocationService {
  city_api_key = 'ce3f356e2af44fabaf2eea191666bbb9';

  constructor(private readonly httpService: HttpService) {}
  async getCities(cityInput: string): Promise<any[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${cityInput}&format=json&apiKey=${this.city_api_key}`,
        )
        .pipe(
          catchError((error: AxiosError) => {
            console.log('error in fetching cities ', error);
            throw 'Error fetching cities!';
          }),
        ),
    );
    return data.results;
  }
}
