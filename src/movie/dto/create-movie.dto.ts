import ITomatoes from "../interfaces/ITomatoes";

export class CreateMovieDto {

    plot: string;

    genres: Array<string>;

    runtime: number;

    rated: string;

    cast: Array<string>;

    poster: string;

    title: string;

    fullplot: string;

    countries: Array<string>;

    released: Date;

    directors: Array<string>;

    writers: Array<string>;

    awards: object;

    lastupdated: string;

    year: number;

    imdb: object;

    type: string;

    tomatoes: ITomatoes
}
