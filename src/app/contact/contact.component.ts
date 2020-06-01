import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {
contactForm;

constructor(
    private formBuilder: FormBuilder,) { 
    this.contactForm = this.formBuilder.group({
      nameandsurname: ['', Validators.required],
      Cname: '',
      Cnumber: ['', Validators.required],
      Eaddress: '',
      areaofinterest: ['', Validators.required],
      Info: ['', Validators.required]


    });}

  ngOnInit()
//{}
  
  : void {
  //this.contactForm = new FormGroup({
    this.contactForm = this.formBuilder.group({
    'nameandsurname': new FormControl(this.contactForm.nameandsurname, [
      Validators.required,
      Validators.minLength(4),
      //forbiddenNameValidator(/bob/i) //<-- Here's how you pass in the custom validator.
    ]),

    'Cname': new FormControl(this.contactForm.Cname),

    'Cnumber': new FormControl(this.contactForm.Cnumber, [
      Validators.required,
      Validators.minLength(10)
     // <!-- forbiddenNameValidator(/bob/i)  Here's how you pass in the custom validator.
    ]),
    
    'Eaddress': new FormControl(this.contactForm.Eaddress),
    'areaofinterest': new FormControl(this.contactForm.areaofinterest, Validators.required),
       

    'Info': new FormControl(this.contactForm.Info, [
      Validators.required,
      Validators.minLength(4)
     // <!-- forbiddenNameValidator(/bob/i)  Here's how you pass in the custom validator.
    ])
    
  });
  }

  
get nameandsurname() { return this.contactForm.get('nameandsurname'); }
get Cnumber() { return this.contactForm.get('Cnumber'); }
get areaofinterest() { return this.contactForm.get('areaofinterest'); }
get Info() { return this.contactForm.get('Info'); }


onSubmit(customerData) {
    // Process checkout data here
    window.alert('Thank you for contacting us');
    this.contactForm.reset();

    console.warn('Information submitted', customerData);
  }
  

}
