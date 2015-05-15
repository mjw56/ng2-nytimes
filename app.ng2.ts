/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/node/node.d.ts" />
import {bootstrap, Component, View, For} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {XHR} from 'angular2/src/services/xhr';
import {BookList} from './components/book-list/book-list';
import {API} from './utils/api';

@Component({
	selector:'app',
	injectables: [API]
})
@View({
	directives: [
		BookList,
		For
	],
	template: 
		'<div>' +
			'<h1>{{name}} App</h1>' +
			'{{lists.length}}' +
		'</div>'
})
class App {
	
	name: string;
	lists: any;
	list: any;
	
	constructor(api: API) {
		
		this.lists = [{title: 'heyo'}]
		this.name = 'NY Times Best Seller List ';
		
		api.getBooks()
		.then(r => r.json())
        .then(r => {
			this.lists = r;
			
			console.log(this.lists)
		});		

	}
	
}

bootstrap(App);

