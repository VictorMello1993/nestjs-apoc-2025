import { IsOptional } from "class-validator";

export class UpdateMovieDTO {
	@IsOptional()
	title?: string;
	@IsOptional()
	director?: string;
	@IsOptional()
	year?: number;
}
