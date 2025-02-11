export class Page2Controller {
	constructor() {
		console.log(`${this.getCurrentPage()} controller...`);
	}
  getCurrentPage(): string {
    return "page2";
  }
}