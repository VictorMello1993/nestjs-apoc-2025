import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { LogMiddleware } from "./log/log.middleware";
import { MiddlewareController } from "./middleware.controller";

@Module({
	controllers: [MiddlewareController],
})
export class MiddlewareModule {
	configure(consumer: MiddlewareConsumer) {
		//Aplicando o middleware para todas as rotas "/middleware" através de um controller
		// consumer.apply(LogMiddleware).forRoutes(MiddlewareController);

		//Aplicando o middleware para todas as rotas  "/middleware" aplicando a todos os métodos HTTP
		// consumer.apply(LogMiddleware).forRoutes({
		// 	path: "/middleware",
		// 	method: RequestMethod.ALL,
		// });

		//Aplicando o middleware para todas as rotas exceto "/middleware/without"
		consumer
			.apply(LogMiddleware)
			.exclude({
				path: "/middleware/without",
				method: RequestMethod.ALL,
			})
			.forRoutes(MiddlewareController);
	}
}
