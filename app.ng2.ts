/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/node/node.d.ts" />

import {bootstrap, Component, View, For} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {BookList} from './components/book-list/book-list';
import {API} from './utils/api';

@Component({
	selector:'app',
	injectables: [API]
})
@View({
	template: `
		<div>
			<h1>{{name}} App</h1>
			<book-list [lists]="lists"></book-list>
		</div>
	`,
	directives: [BookList]
})
class App {
	
	name: string;
	lists: any;
	
	constructor(api: API) {
		
		this.lists = []
		this.name = 'NY Times Best Seller List ';
		
		api.getBooks()
		  .then(r => r.json())
		  .then((r) => { this.lists = r; })	

	}
	
}

bootstrap(App);

