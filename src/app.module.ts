import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CrudMoviesModule } from "./crud-movies/crud-movies.module";
import { MiddlewareModule } from "./middleware/middleware.module";

@Module({
	imports: [CrudMoviesModule, MiddlewareModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
