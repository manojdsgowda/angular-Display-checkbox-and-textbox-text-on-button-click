import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  test:string;
  orders = [
    { id: 100, name: 'Physics' },
    { id: 200, name: 'Chemistry' },
    { id: 300, name: 'Maths' },
    { id: 400, name: 'Biology' }
  ];

  constructor(private formBuilder: FormBuilder) {
    const controls = this.orders.map(c => new FormControl(false));
    //controls[0].setValue(true);

    this.form = this.formBuilder.group({
      orders: new FormArray(controls)
    });
  }

  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((v, i) => v ? this.orders[i].name : null)
      .filter(v => v !== null);

    this.test=selectedOrderIds;
  }
}

