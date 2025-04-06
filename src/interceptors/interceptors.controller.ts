import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { FindAgeInterceptor } from "./find-age/find-age.interceptor";

@Controller("interceptors")
export class InterceptorsController {
	@Get()
	@UseInterceptors(FindAgeInterceptor)
	fn() {
		return {
			name: "Fulano",
			birthDate: "15/12/1993",
		};
	}
}
