import { Util } from "../common/Util";
export class HomeController {
	constructor() {
		console.log(`${Util.capitalize(this.getCurrentPage())} controller...`);
	}
  getCurrentPage(): string {
    return "home";
  }
}