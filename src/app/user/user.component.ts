import { Component, OnInit } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService, AuthService],
})
export class UserComponent implements OnInit{
  input: any;

  constructor(private userService: UserService,
    private router: Router){}
  
  ngOnInit(): void {  
    this.input = {
      username: '',
      password: ''
    };
  }
  onLogin() {
    this.userService.loginUser(this.input).subscribe(
      response => {
        console.log(response.access) // to get the access key
        alert('User '+this.input.username+' logged')
        localStorage.setItem('key', response.access);
        this.router.navigate(['/search'])
      },
      (error) => {
        alert('Wrong Credentials')
        location.reload()
      }
    )
  }
}


