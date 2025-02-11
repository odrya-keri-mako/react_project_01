import { Util } from "../common/Util";
export class Page2Controller {
	constructor() {
		console.log(`${Util.capitalize(this.getCurrentPage())} controller...`);
	}
  getCurrentPage(): string {
    return "page2";
  }
}