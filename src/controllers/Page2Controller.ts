export class Page2Controller {
	constructor() {
		console.log(`${this.capitalize(this.getCurrentPage())} controller...`);
	}
  getCurrentPage(): string {
    return "page2";
  }
	capitalize(str: string = "", lowerRest = false): string {
		return str.slice(0, 1).toUpperCase() +
					(lowerRest ? str.slice(1).toLowerCase() : str.slice(1));
	}
}