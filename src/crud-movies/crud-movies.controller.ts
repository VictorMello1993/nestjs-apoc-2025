import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common";
import { CrudMoviesService } from "./crud-movies.service";
import { CreateMovieDTO } from "./dto/CreateMovieDTO";
import { UpdateMovieDTO } from "./dto/UpdateMovieDTO";

@Controller("crud-movies")
export class CrudMoviesController {
	constructor(private readonly crudFilmsService: CrudMoviesService) {}
	@Get()
	fetchAll(@Query("desc") desc: string) {
		return this.crudFilmsService.fetchAll(desc);
	}

	@Post()
	create(@Body() data: CreateMovieDTO) {
		return this.crudFilmsService.create(data);
	}

	@Get(":id")
	getById(@Param("id") id: string) {
		return this.crudFilmsService.getById(id);
	}

	@Put(":id")
	updateOne(@Param("id") id: string, @Body() data: UpdateMovieDTO) {
		return this.crudFilmsService.updateOne(id, data);
	}
}
