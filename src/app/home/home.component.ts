import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { faPencil} from '@fortawesome/free-solid-svg-icons';
import {faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private route: Router) {}
  profile: any = [];
  iconpencil=faPencil;
  icontrash=faTrash;


  all_user_data: any =[
  ];
  issvisible :boolean = false
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [3, 6, 9, 12];
  ngOnInit(): void {
  this.all_user_data = JSON.parse(localStorage.getItem("data_one") || '[]');
  console.log("all emp data");
  console.log(this.all_user_data);
  this.fetchingdata();
  }


  logout(){
    this.route.navigate(['/login']);
  }


  add(){
    let emp_det = {"id":'', "action": "add"};
    localStorage.setItem("editEmpDet", JSON.stringify(emp_det));
    this.route.navigate(['/edit']);
  
  }

  editEmployee(id: any) {
    let emp_det = {"id":id, "action": "edit"};
    localStorage.setItem("editEmpDet", JSON.stringify(emp_det));
    this.route.navigate(['/edit']);
  }

  
  deleteEmployee(id: any) {
    let emp_det = JSON.parse(localStorage.getItem("data_one") || '[]');
    
    let index; 
    for(let i=0; i<emp_det.length; i++)
    {
      if(emp_det[i].id == id) {
        index = i;
        break;
      }     
    }
     emp_det.splice(index,1);
     console.log(emp_det)
     emp_det.push({
      "id" : "",
      "name": "",
      "designation": "",
      'department': "",
      "mobile": "",
      "gender": "",
    });
      localStorage.setItem("data_one", JSON.stringify(emp_det));
    alert("Delete Sucessfull")
    this.all_user_data = JSON.parse(localStorage.getItem("data_one") || '[]');
    console.log(this.all_user_data, 'this.all_user_data')
  }

  fetchingdata() {
    this.profile = this.all_user_data ? this.all_user_data : [];
    this.all_user_data = this.profile.filter(function(e : any){ return e.id !=''; });
    console.log(this.all_user_data);
    // this.all_user_data=this.profile.length;

      (error: any) => {
        alert("Something went wrong!!");
      }
  
  }

  onTableDataChange(event: number){
    this.page = event;
    this.fetchingdata();
  }  
  
  onTableSizeChange(event: { target: { value: number; }; }): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchingdata();
  }
  

}
