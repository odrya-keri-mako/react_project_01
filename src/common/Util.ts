export class Util {
	public static capitalize(str: string = "", lowerRest = false): string {
		return str.slice(0, 1).toUpperCase() +
					(lowerRest ? str.slice(1).toLowerCase() : str.slice(1));
	}
}