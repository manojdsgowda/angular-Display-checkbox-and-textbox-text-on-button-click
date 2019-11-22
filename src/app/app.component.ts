import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  list: any[];
    text: string;
  clickMessage = [''];

  ngOnInit() {
    this.list = [{title: 'Physics',checked: false,},
                 {title: 'Chemistry',checked: false,},
                 {title: 'Maths',checked: false,},
                 {title: 'Biology',checked: false,},
                ]
   }

//  get result() {
 //   return this.list.filter(item => item.checked);
 // }

      onClickMe() {
    this.clickMessage = this.list.filter(item => item.checked);
  }

}