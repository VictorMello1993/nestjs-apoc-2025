import { Injectable } from "@nestjs/common";

@Injectable()
export class CrudMoviesService {
	private movies = [
		{ title: "Movie1", director: "Director 1", year: 2001 },
		{ title: "Movie2", director: "Director 2", year: 2002 },
		{ title: "Movie3", director: "Director 3", year: 2003 },
	];
	fetchAll() {
		return this.movies;
	}

	create(data: any) {
		return this.movies.push(data);
	}

	getById(id: string) {
		return this.movies[+id];
	}
}
