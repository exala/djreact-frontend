
import { Component, OnInit } from '@angular/core';
import { PostService } from './housing.service';
  
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts:any;
  
  constructor(private service:PostService) {}
  
  ngOnInit() {
  }

  myFunc() {
    var num1 = ((document.getElementById("exchageRateDate") as HTMLInputElement).value);
    // console.log(num1);//here you will get input value through ng-model
    this.service.getPosts(num1)
        .subscribe(response => {
          this.posts = response;
        });
  }

}