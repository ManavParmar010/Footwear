import { NgModule, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpParams } from "@angular/common/http";

@NgModule({
	declarations: [],
	imports: [CommonModule],
})
export class CustomHttpParams extends HttpParams {
	constructor(@Inject(Boolean) public showLoader?: boolean) {
		super();
	}
}
