import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {

  formtype:String="ind"

  clientTypeDisplay(type:String){
    this.formtype=type;
  }

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
   
  //search: appservice
  this.appService.getUserById(this.user.id).subscribe(
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
