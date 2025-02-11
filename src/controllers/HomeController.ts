export class HomeController {
	constructor() {
		console.log(`${this.getCurrentPage()} controller...`);
	}
  getCurrentPage(): string {
    return "home";
  }
}