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
    this.list = [{title: 'Physics'},
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



import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  emailFormArray: Array<any> = [];
  test: Array<any> = [];
  categories = [ 
    {name :"email1", id: 1},
    {name :"email2", id: 2},
    {name :"email3", id: 3},
    {name :"email4", id: 4}
  ];

  onChange(email:string, isChecked: boolean) {
      if(isChecked) {
        this.emailFormArray.push(email);
      } else {
        let index = this.emailFormArray.indexOf(email);
        this.emailFormArray.splice(index,1);
      }
  }

  onClickMe() {
     this.test= this.emailFormArray;
  }
}