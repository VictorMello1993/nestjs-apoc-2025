import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class CurrencyPipe implements PipeTransform {
	transform(value: any, metadata: ArgumentMetadata) {
		const { price } = value;

		if (typeof price !== "number") {
			throw new Error("O valor deve ser um número!");
		}

		const formattedPriceInReais = price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
		return { price: formattedPriceInReais };
	}
}
