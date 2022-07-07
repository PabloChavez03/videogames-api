export interface IEnv {
  DB_NAME: string,
  DB_USER: string,
  DB_PORT: number,
  DB_DIALECT: string,
  DB_PASSWORD: string,
}

export interface IGenre {
  id: number,
  name: string,
  slug: string,
  background_image: string,
  games_count: number,
  createdInDb: boolean,
}

export interface IPlatforms {
  id: number,
  name: string,
  slug: string,
  games_count: number,
  background_image: string,
  yearStart?: number,
  yearEnd?: number,
}

export interface IVideogame {
  id: number,
  slug: string,
  name: string,
  description?: string,
  released: string,
  background_image?: string,
  rating: number,
  rating_top?: number,
  genres?: Array<IGenre>,
  platforms?: Array<IPlatforms>,
  createdInDb?: boolean,
}

export interface IGenres {
  count: number;
  next: string | null;
  previous: string | null;
  results: IGenre[];
}

export interface IVideogames {
  count: number;
  next: string | null;
  previous: string | null;
  results: IVideogame[];
}