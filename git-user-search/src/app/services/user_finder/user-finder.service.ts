import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserFinderService {

  private response: Object

  constructor(private client: HttpClient) {

  }

  public findUser(userName: string): Object {

    this.client.get('https://api.github.com/users/' + userName)
    .subscribe(response => {
      this.response = response;
      console.log(this.response);
    });
    setTimeout(null, 1000);
    return this.response;
  }
}
