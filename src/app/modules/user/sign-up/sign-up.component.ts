import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Apollo, gql } from 'apollo-angular';
import { User } from '../user.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {



  newUser: User = {
    birthday: '',
    email_address: '',
    first_name: '',
    is_active: true, 
    is_male: true, 
    is_staff: false, 
    is_super_user: false, 
    last_name: '', 
    password: '', 
    username: ''
  }

  isPasswordVisible: boolean = false;

  ngOnInit(): void {
  }

  result?: User;
  loading: any;
  error: string = '';
  status: boolean;

  isSuccess?: boolean;

  constructor(private apollo: Apollo) { }

  // createUser(birthday: Datetime, email_address: String, first_name: String, 
  // is_active: Boolean, is_male: Boolean, is_staff: Boolean, is_super_user: Boolean, 
  // last_name: String, password: String!, username: String!): MutationPayloadUser!

  query(newUser: User){
    let mutationString = gql`
    mutation createUser($birthday: Datetime!, $email_address: String!,
      $first_name: String!, $is_active: Boolean!,
      $is_male: Boolean!, $is_staff: Boolean!,
      $is_super_user: Boolean!, $last_name: String!, $password: String!, 
      $username: String!){
      createUser(birthday: $birthday,
       email_address: $email_address
       first_name: $first_name
       is_active: $is_active
       is_male: $is_male
       is_staff: $is_staff
       is_super_user: $is_super_user
       last_name: $last_name
       password: $password,
       username: $username
       ){
        user{
          uid
          email_address,
          first_name,
          is_active,
          is_male,
          is_staff,
          is_super_user,
          last_name,
          username,
        }
        error
        status
      }
    }
    `
    this.apollo
        .mutate({
          mutation: mutationString,
          variables: {
            birthday: newUser.birthday,
            email_address: newUser.email_address,
            first_name: newUser.first_name,
            is_active: newUser.is_active, 
            is_male: newUser.is_male, 
            is_staff: newUser.is_staff, 
            is_super_user: newUser.is_super_user, 
            last_name: newUser.last_name, 
            password: newUser.password, 
            username: newUser.username
          }
          
        }).subscribe(
          ({ data }) => {
            debugger;
            let result = data as any;
            console.log(data);
            this.result =  result?.createUser.user;
            this.error =  result.error;
            this.status =  result.status;
            console.log(this.result)
            this.isSuccess = true;
          },
          error => {
            debugger;
            console.log('there was an error sending the query')
            console.log(error)
            this.isSuccess = false;
          }
        )
  }

  dateChanged(date: any){
    const isoDate = new Date(date.value).toISOString();
    console.log(date.value);
    console.log(isoDate);
    this.newUser.birthday = isoDate;
  }

  signUp(newUser: User){
    this.query(newUser);
  }

}

