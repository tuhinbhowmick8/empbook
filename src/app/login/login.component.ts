import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor( private route: Router) { }

  ngOnInit(): void {
  }



  data={
    email:"",
    password:""
  }

onSubmit(){
  console.log(this.data)
  if(this.data.email=="" || this.data.email==undefined){
    alert("Please Enter User Id")
    return
  }
  if(this.data.password=="" || this.data.password==undefined){
    alert("Please Enter Password")
    return
  }
  if(this.data.email=="admin" && this.data.password=="admin"){
    alert("Login Sucessfull!")
    this.route.navigate(['/home']);
  }
  else{
    alert("Invaild Email Or Password")
    this.route.navigate(['/login']);
  }

}

}
