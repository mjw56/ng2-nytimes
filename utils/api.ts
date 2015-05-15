declare var fetch;

export class API {
	
	getBooks() {
		return fetch('http://localhost:3001/api/books')
	}
}