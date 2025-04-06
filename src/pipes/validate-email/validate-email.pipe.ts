import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Injectable()
export class ValidateEmailPipe implements PipeTransform {
	transform(email: any, metadata: ArgumentMetadata) {
		if (!EMAIL_REGEX.test(email)) {
			throw new BadRequestException("E-mail inválido");
		}
		return email;
	}
}
