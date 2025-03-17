import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";
export class CreateMovieDTO {
	@IsNotEmpty()
	@IsString({ message: "Title must be a string" })
	@Length(3, 20, { message: "Title must have a valid length" })
	title: string;

	@IsNotEmpty()
	@IsString({ message: "Director must be a string" })
	@Length(3, 20, { message: "Director must have a valid length" })
	director: string;

	@IsNotEmpty()
	@IsNumber()
	year: number;
}
