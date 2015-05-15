/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/whatwg-fetch/whatwg-fetch.d.ts" />

import {Component, View, For} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {Book} from '../book/book';

@Component({
    selector: 'book-list',
    properties: {
		'list': 'list'
	}
})
@View({
    directives: [For, Book],
    template: '<section><book></book></section>'
})
export class BookList { 
    
    constructor() {
    }
    
}
