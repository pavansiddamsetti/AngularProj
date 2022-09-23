import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  //roles: string[] = ["ROLE_READER","ROLE_AUTHOR","ROLE_MODERATOR"];

  user= {
username: "",
email: "",
role:[""],
password: ""
  }
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onClickSubmit(Users: any){
    
    this.user.username=Users.username;
    this.user.email=Users.email;
    this.user.password=Users.password;
    const result: any[] = [];
    result[0]=Users.role;
   this.user.role=result;
this.userService.signUp(this.user).subscribe(
(response: any)=>{
  console.log(response);
   },
   function(error){
    alert("Having problem with ur code ")
   }
   
   );
}
}