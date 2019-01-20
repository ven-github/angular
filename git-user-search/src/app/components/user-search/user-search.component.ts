import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  private userName = "ven-github"
  private response: Object
  constructor(private http: HttpClient) {

  }

  public search() {
    this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe(response => {
        this.response = response;
        console.log(this.response);
      });
  }



  ngOnInit() {
  }

}
