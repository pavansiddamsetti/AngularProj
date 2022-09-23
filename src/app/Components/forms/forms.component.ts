import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
user={name:"",
age:0};
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

//   onClickSubmit(result:any) {
//     console.log(result.username); 
//     console.log(result.age);
//  }

 save() {
  //  //alert("hi")
  // console.log(this.name); 
  // console.log(this.age);

 this.userService.createUser(this.user).subscribe( 
 (response: any)=>{
console.log(response);
 },
 function(error){
  alert("Having errors ")
 }
 
 );
 
}

}
