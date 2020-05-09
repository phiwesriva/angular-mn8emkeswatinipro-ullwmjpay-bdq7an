import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
/*import { Validators } from '@angular/forms';*/

@Component({
  selector: 'app-subsc',
  templateUrl: './subsc.component.html',
  styleUrls: ['./subsc.component.css']
})
export class SubscComponent implements OnInit {
subscForm;
/*insights = new FormControl('');*/
  constructor(
    private formBuilder: FormBuilder,) { 
    this.subscForm = this.formBuilder.group({

     
      /*copiesperissue: '',*/
      nameandsurname: '',
      Cname: '',
      /*address: '',*/
      /*Tnumber: '',*/
      Cnumber: '',
      Eaddress: '',
      DOB: '',
      insights: ''
       /*Paddress: '',
      POP: '',
      Queries: ''*/
    });}

  ngOnInit() {
  }

onSubmit(customerData) {
    // Process checkout data here
 window.alert('Thank you for subscribing');
    this.subscForm.reset();

    console.warn('Your subscribtion has been submitted', customerData);
  }
  

}
