import { Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { CreateMovieDTO } from "./dto/CreateMovieDTO";
import { UpdateMovieDTO } from "./dto/UpdateMovieDTO";

@Injectable()
export class CrudMoviesService {
	private movies = [
		{ title: "Movie1", director: "Director 1", year: 2001 },
		{ title: "Movie2", director: "Director 2", year: 2002 },
		{ title: "Movie3", director: "Director 3", year: 2003 },
	];
	fetchAll(desc = "false") {
		if (desc === "true") {
			return this.movies.slice().reverse();
		}
		return this.movies;
	}

	create(data: CreateMovieDTO) {
		return this.movies.push(data);
	}

	getById(id: string) {
		return this.movies[+id];
	}

	updateOne(id: string, data: UpdateMovieDTO) {
		const currentMovie = this.movies[+id];

		const filteredData = Object.fromEntries(Object.entries(data).filter(([_, value]) => value !== undefined));
		const updatedMovie = { ...currentMovie, ...filteredData };

		this.movies[+id] = updatedMovie as any;

		return updatedMovie;
	}

	removeOne(id: string) {
		const removedMovie = this.movies.splice(+id, 1);
		return removedMovie;
	}
}
