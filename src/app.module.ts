import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CrudMoviesModule } from "./crud-movies/crud-movies.module";
import { MiddlewareModule } from "./middleware/middleware.module";
import { PipesModule } from "./pipes/pipes.module";
import { InterceptorsModule } from './interceptors/interceptors.module';

@Module({
	imports: [CrudMoviesModule, MiddlewareModule, PipesModule, InterceptorsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
