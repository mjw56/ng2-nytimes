/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'book',
    properties: {
		book: 'book'
	}
})
@View({
    template: `<p>{{book.index}}: {{book.summary}}</p>`
})
export class Book { }
