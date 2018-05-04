import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

//import { DummyService } from './dummy.service';
import { CustomerService } from './customer.service';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  //providers: [DummyService]
})
export class CustomerComponent implements OnInit {
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
  
  _title: string;
  _body: string;
  _added: Array<any> = new Array<any>();

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
  captcha: FormControl;

  _posts = [];
  _error;



  //private frmBuilder: FormBuilder
  constructor(private customerService: CustomerService,
    private _http: HttpClient) { }

  ngOnInit() {
  //   this.customerForm = new FormGroup({
  //     custName: new FormControl('', [Validators.required, Validators.minLength(3)])
      
  //  });
  
  // In Template
  // customerForm.controls['custName']

    this.createFormControls();
    this.createForm();

    this.customerService.getPosts()
    .subscribe(
      response => {
        this._posts = response;
      },
      error => {
        this._error = error;
      }
    );

  }

  onAdd(){
    const requestBody = {
      title: this.custName.value || '[Unspecified]',
      body: this.custAddr.value || '[Unspecified]',
    };

    //Direct call
    // this._http.post("http://jsonplaceholder.typicode.com/posts", requestBody).subscribe(
    //   res => {
    //     this._added.push(res);
    //   }
    // )

    //Call from service
    this.customerService.createPosts(requestBody)
    .subscribe(
      res => {
        this._added.push(res);
      },
      error => {
        this._error = error;
      }
    );
  }

  // search(term){
  //     this._dummyService.search_word(term).subscribe(res => {
  //         this.words = res;
  //     })  
  // }

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
    this.custEmail = new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]);
    this.custAddrSource = new FormControl();
    this.custAccType = new FormControl();
    this.captcha = new FormControl()
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
      custAccType: this.custAccType,
      captcha: this.captcha
    });
  }

}
