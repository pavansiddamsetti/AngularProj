import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
signdata={
  username:"",
  password: ""
}
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  signIn(userdata: any){
    this.signdata.username=userdata.username;
    this.signdata.password=userdata.password;
    this.userService.signIn(this.signdata).subscribe(
      (response: any)=>{
        console.log(response);
         },
         function(error){
          alert("Having problem with ur code ")
         }
         
         );
  }

}
