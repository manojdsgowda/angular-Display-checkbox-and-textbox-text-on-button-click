import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  list: any[];
    text: string;
  clickMessage: string;
    text1: string;
  clickMessage1 = '';
  test:string;

  ngOnInit() {
    this.list = [{title: 'Physics',},
                 {title: 'Chemistry'},
                 {title: 'Maths'},
                 {title: 'Biology'},
                ]
   }
   
      onClickMe() {
        this.clickMessage1 = 'Student Name is '+ this.text1;
    //this.clickMessage = this.list.filter(item => item.checked);

    this.clickMessage =JSON.stringify(this.list.filter(item =>
    item.checked));
  }

}