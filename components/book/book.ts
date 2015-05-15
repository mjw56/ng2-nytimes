/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'book'
})
@View({
    template: '<h4>{{index}}: {{summary}}</h4>' 
})
export class Book {
    
    index: number;
    summary: string;
    
    constructor() {
        this.index = 0;
        this.summary = 'summary';
    }
    
}
