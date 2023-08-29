
import { Component, OnInit } from '@angular/core';
import { PostService } from '../housing.service';

@Component({
  selector: 'search-root',
  templateUrl: 'search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  posts:any;
  
  constructor(private service:PostService) {}
  
  ngOnInit() {
  //     this.service.getPosts()
  //       .subscribe(response => {
  //         this.posts = response;
  //       });
  }

  myFunc() {
    var num1 = ((document.getElementById("exchageRateDate") as HTMLInputElement).value);
    console.log(num1);//here you will get input value through ng-model
    // HousingLocationComponent
    this.service.getPosts(num1)
        .subscribe(response => {
          this.posts = response;
        });
  }
  onLogout() {
    localStorage.removeItem('key')
    alert('User has logged out succesfully')
    // location.reload();
  }

}