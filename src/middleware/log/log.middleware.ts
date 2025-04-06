import { Injectable, Logger, NestMiddleware } from "@nestjs/common";

const ERROR_MESSAGE = "Número menor do que 10!";

@Injectable()
export class LogMiddleware implements NestMiddleware {
	use(req: any, res: any, next: () => void) {
		const logger = new Logger(LogMiddleware.name);
		const { n } = req.body;

		if (n < 10) {
			logger.error(ERROR_MESSAGE);
			res.status(400).send({ message: ERROR_MESSAGE });
			return;
		}

		logger.log("Número maior do que 10. Tudo certo!");
		next();
	}
}
