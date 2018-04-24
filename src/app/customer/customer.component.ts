import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  custName: FormControl;
  custAddr: FormControl;
  custHomePhone: FormControl;
  custOfficePhone: FormControl;
  custMobilePhone: FormControl;
  custFax: FormControl;
  custEmail: FormControl;
  custAddrSource: FormControl;
  custAccType: FormControl;





  //private frmBuilder: FormBuilder
  constructor() { }

  ngOnInit() {
  //   this.customerForm = new FormGroup({
  //     custName: new FormControl('', [Validators.required, Validators.minLength(3)])
      
  //  });
  
  // In Template
  // customerForm.controls['custName']

    this.createFormControls();
    this.createForm();
  }

  createFormControls() { 
    this.custName = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]);
    this.custAddr = new FormControl('', Validators.required);
    this.custHomePhone = new FormControl('', Validators.required);
    this.custOfficePhone = new FormControl();
    this.custMobilePhone = new FormControl();
    this.custFax = new FormControl();
    this.custEmail = new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);
    this.custAddrSource = new FormControl();
    this.custAccType = new FormControl();
  }

  createForm() { 
    this.customerForm = new FormGroup({
      custName: this.custName,
      custAddr: this.custAddr,
      custHomePhone: this.custHomePhone,
      custOfficePhone: this.custOfficePhone,
      custMobilePhone: this.custMobilePhone,
      custFax: this.custFax,
      custEmail: this.custEmail,
      custAddrSource: this.custAddrSource,
      custAccType: this.custAccType
    });
  }

}
