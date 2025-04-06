import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";

const DAY_IN_MILLIS = 1000 * 60 * 60 * 24;
const DAYS_IN_A_YEAR = 365.25; //365 dias considerando anos bissextos

@Injectable()
export class FindAgeInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		return new Observable((observer) => {
			return next.handle().subscribe({
				next: (person) => {
					const [day, month, year] = person.birthDate.split("/");
					const birthDateMillis = new Date(year, month - 1, day).getTime();
					const dateNowMillis = new Date().getTime();
					const diffMillis = dateNowMillis - birthDateMillis;
					const ageInDays = Math.floor(diffMillis / DAY_IN_MILLIS);
					const ageInYears = Math.floor(ageInDays / DAYS_IN_A_YEAR);
					const newPerson = { ...person, age: ageInYears };

					observer.next(newPerson);
					observer.complete();
				},
			});
		});
	}
}
