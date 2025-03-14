import { Module } from '@nestjs/common';
import { CrudMoviesController } from './crud-movies.controller';
import { CrudMoviesService } from './crud-movies.service';

@Module({
  controllers: [CrudMoviesController],
  providers: [CrudMoviesService]
})
export class CrudMoviesModule {}
