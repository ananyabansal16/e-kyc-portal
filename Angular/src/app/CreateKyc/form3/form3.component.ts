import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
//import {User} from 'src/user.ts';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component {


  formtype:String="IND"

  clientTypeDisplay(type:String){
    this.formtype=type;
  }

  optionValue:String = "Select an option";



  public user = {
    id : 0,
    ekycCode :'',
    username : '',
    password : '',
    email : '',
    ctype : 'IND',
    fname : '',
    mname : '',
    lname : '',
    gender : '',
    prefix : '',
    rfname : '',
    rmname : '',
    rlname : '',
    relationship : '',
    rprefix : '', 
    dob : '',
    mobile : '',
    addl1 : '',
    city : '',
    district : '',
    state : '',
    country : '', 
    pincode : 0,
    caddl1 : '',
    ccity : '',
    cdistrict : '',
    cstate : '',
    ccountry : '',
    cpincode : 0
  }

  ngOnInIt(): void{}

  constructor(private appService : AppService){}


  formSubmit(){
    console.log(this.user);
    if (this.user.fname == '' || this.user.fname == null){
      alert('fname is required !!');
      return;
    }
   

  //createekyc: appservice
  this.appService.createEKyc(this.user).subscribe(
    (data) => {
      //success
      console.log(data);
      alert('Success');
    },
    (error) => {
      //error
      console.log(error);
      alert('Something went wrong ');
    }
  )
}

}
