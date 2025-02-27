import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResults } from './interfaces/poke-resp.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokeResults>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );
    data.results.forEach(({ url }) => {
      const segments = url.split('/');
      const pokeNum: number = +segments[segments.length - 2];
    });
    return data.results;
  }
}
