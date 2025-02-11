export class Page1Controller {
	constructor() {
		console.log(`${this.getCurrentPage()} controller...`);
	}
  getCurrentPage(): string {
    return "page1";
  }
}