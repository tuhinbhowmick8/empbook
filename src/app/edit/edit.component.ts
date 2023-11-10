import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route: Router) { }

  data={
    name:"",
    designation:"",
    department:"",
    mobile:"",
    gender:""
  }

  action: any = '';

  ngOnInit(): void {
    let empId = JSON.parse(localStorage.getItem("editEmpDet") || '{}');
    let emp_det = JSON.parse(localStorage.getItem("data_one") || '[]');
    
    this.action = empId.action ? empId.action : 'add';
    if(this.action=="edit") {
      let id = empId.id ? empId.id : '';
    
      for(let i=0; i<emp_det.length; i++)
      {
        if(emp_det[i].id == id) {
          this.data = emp_det[i];
          break;
        }     
      }
    }
  }

  
  
  
  edit_user(){
    let empId = JSON.parse(localStorage.getItem("editEmpDet") || '{}');
    let emp_det = JSON.parse(localStorage.getItem("data_one") || '[]'); 
    let id = empId.id ? empId.id : '';
    let index; 
    for(let i=0; i<emp_det.length; i++)
    {
      if(emp_det[i].id == id) {
        index = i;
        break;
      }     
    }
    emp_det.splice(index,1);  
    emp_det.push(this.data);
    localStorage.setItem("data_one", JSON.stringify(emp_det));
    alert("Update Sucessfully")
    this.route.navigate(['/home']);
  }



  newUserEntry(){

    let emp_det = JSON.parse(localStorage.getItem("data_one") || '[]');
    emp_det.push({
      "id" : Object.keys(emp_det).length+1,
      "name": this.data.name,
      "designation": this.data.designation,
      'department': this.data.department,
      "mobile": this.data.mobile,
      "gender": this.data.gender
    });
    localStorage.setItem("data_one", JSON.stringify(emp_det));
    alert("Added Successfully")
    this.route.navigate(['/home']);

  }
  
  
  
  exit(){
    this.route.navigate(['/home']);
  }
  
  logout(){
    this.route.navigate(['/login']);
  }


  
  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  
  

}
