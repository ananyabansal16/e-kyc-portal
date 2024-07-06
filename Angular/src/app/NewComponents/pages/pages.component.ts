import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {


  constructor(private appService : AppService){}

  ngOnInIt(): void{}

  public user = {
    id : 0,
    ekycCode : '',
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

  formSubmit(){
    console.log(this.user);
    if (this.user.username != '' || this.user.username != null){
      this.user.id = getRandomId();
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
function getRandomId(): number {
  return Math.floor((Math.random()*6)+1);
}

