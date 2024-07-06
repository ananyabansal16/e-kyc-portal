import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { AppService } from './app.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-kyc-portal';

  public users: user[] | undefined;

  constructor(private  ekycService: AppService) { }
    
  ngOnInit() {
    this.getUsers();
  }

    public getUsers(): void{
      this.ekycService.getAllUsers().subscribe(
        (response: user[]) => {
          this.users = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
}

