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

  ngOnInit(){

  }
  //: void {
  //this.contactForm = new FormGroup({
    //'nameandsurname': new FormControl(this.contact.nameandsurname, [
      //Validators.required,
      //Validators.minLength(4)
      //forbiddenNameValidator(/bob/i)  Here's how you pass in the custom validator.
    //]),

    //'Cname': new FormControl(this.contact.Cname),

    //'Cnumber': new FormControl(this.contact.Cnumber, [
      //Validators.required,
      //Validators.minLength(4)
     // <!-- forbiddenNameValidator(/bob/i)  Here's how you pass in the custom validator.
    //]),
    
    //'Eaddress': new FormControl(this.contact.Eaddress),
    //'areaofinterest': new FormControl(this.contact.areaofinterest, Validators.required),
       

    //'Info': new FormControl(this.contact.Info, [
      //Validators.required,
      //Validators.minLength(4)
     // <!-- forbiddenNameValidator(/bob/i)  Here's how you pass in the custom validator.
    //])
    
  //});
  //}

  
//get nameandsurname() { return this.contact.get('nameandsurname'); }
//get Cnumber() { return this.contact.get('Cnumber'); }
//get areaofinterest() { return this.contact.get('areaofinterest'); }
//get Info() { return this.contact.get('Info'); }
//

onSubmit(customerData) {
    // Process checkout data here
    window.alert('Thank you for contacting us');
    this.contactForm.reset();

    console.warn('Information submitted', customerData);
  }
  

}
