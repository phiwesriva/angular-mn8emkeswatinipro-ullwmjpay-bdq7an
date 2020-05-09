import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {
  advertForm;

 constructor(private formBuilder: FormBuilder,)

    {this.advertForm = this.formBuilder.group 
    ({
      nameandsurname: '',
      Eaddress: '',
      artw: '',
      POP: '',
      Queries: ''
    });
    
    }

  ngOnInit() {
  }
  onSubmit(customerData) {
    // Process checkout data here
    window.alert('Thank you for your advert');
        this.advertForm.reset();

    console.warn('Advert submitted', customerData);
  }

}
