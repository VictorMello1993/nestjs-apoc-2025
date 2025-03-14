import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CrudMoviesService } from "./crud-movies.service";

@Controller("crud-movies")
export class CrudMoviesController {
	constructor(private readonly crudFilmsService: CrudMoviesService) {}
	@Get()
	fetchAll() {
		return this.crudFilmsService.fetchAll();
	}

	@Post()
	create(@Body() data: any) {
		return this.crudFilmsService.create(data);
	}

	@Get(":id")
	getById(@Param("id") id: string) {
		return this.crudFilmsService.getById(id);
	}
}
