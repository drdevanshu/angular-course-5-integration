import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { User } from '../user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  loadedUsers: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchUsers();
  }

  private fetchUsers() {
		this.http
		  .get<User[]>('http://localhost:8080/users')
		  .subscribe(users => {
          this.loadedUsers = users;
			    console.log(this.loadedUsers); 
		  });
	  } 
}
