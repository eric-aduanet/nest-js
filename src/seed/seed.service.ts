import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResults } from './interfaces/poke-resp.interface';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModule: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    const pokemon = await this.http.get<PokeResults>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );
    await this.pokemonModule.deleteMany();
    const pokemonToCreate: { name: string; no: number }[] = [];
    pokemon.results.forEach(async ({ url, name }) => {
      const segments = url.split('/');
      const pokeNum: number = +segments[segments.length - 2];
      pokemonToCreate.push({ name, no: pokeNum });
    });
    await this.pokemonModule.insertMany(pokemonToCreate);
    return pokemon.results;
  }
}
