import { Util } from "../common/Util";
export class Page1Controller {
	constructor() {
		console.log(`${Util.capitalize(this.getCurrentPage())} controller...`);
	}
  getCurrentPage(): string {
    return "page1";
  }
}