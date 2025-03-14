import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CrudMoviesModule } from './crud-movies/crud-movies.module';

@Module({
	imports: [CrudMoviesModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
