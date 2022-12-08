import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

// createUser(birthday: Datetime, email_address: String, first_name: String, 
// is_active: Boolean, is_male: Boolean, is_staff: Boolean, is_super_user: Boolean, 
// last_name: String, password: String!, username: String!): MutationPayloadUser!

  constructor() { }

  ngOnInit(): void {
    
  }

}
