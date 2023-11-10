import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
 

  constructor(private route: Router) { }


  
  ngOnInit(): void {
  }

  

// data={
//   id:"",
//   name:"",
//   designation:"",
//   department:"",
//   mobile:"",
//   gender:""
// }

// numberOnly(event: { which: any; keyCode: any; }): boolean {
//   const charCode = (event.which) ? event.which : event.keyCode;
//   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
//     return false;
//   }
//   return true;
// }



// signup(){
//   console.log(this.data);
//   let emp_det = JSON.parse(localStorage.getItem("data_one") || '[]');
//   emp_det.push(this.data);
//   localStorage.setItem("data_one", JSON.stringify(emp_det));
//   alert("Sign Up Sucessfull")
//   this.route.navigate(['/home']);
// }



// exit(){
//   this.route.navigate(['/home']);
// }

// logout(){
//   this.route.navigate(['/login']);
// }



}
