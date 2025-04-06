import { Body, Controller, Get, Post, Query, UsePipes } from "@nestjs/common";
import { CurrencyPipe } from "./currency/currency.pipe";
import { ValidateEmailPipe } from "./validate-email/validate-email.pipe";

@Controller("pipes")
export class PipesController {
	@Post("/currency")
	@UsePipes(CurrencyPipe) //O pipe é chamado mais de uma vez quando tiver mais de um parâmetro recebido no controller
	//Se não especificar o decorator @UsePipes, e especificar o pipe para somente um parâmetro recebido no controller pelo decorator (ex: @Body), só será executado uma vez para aquele parâmetro
	pipeTransform(@Body() data: any) {
		const { price } = data;
		return `Preço obtido: ${price}`;
	}

	@Get("/email")
	@UsePipes(ValidateEmailPipe)
	pipeValidate(@Query("email") email: string) {
		return `Email recebido: ${email}`;
	}
}
