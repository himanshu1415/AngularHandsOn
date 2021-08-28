import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showform',
  templateUrl: './showform.component.html',
  styleUrls: ['./showform.component.css']
})
export class ShowformComponent implements OnInit {
  public skillSet = ['FrontEnd','BackEnd','Devops'];
  public firstName: string ="";
  public lastName: string ="";
  public phone: string ="";
  public email: string ="";
  public skills: string ="";
  public showValues: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(employee:any)
  {
    console.log("emp",employee.value);
    this.assignValues(employee.value);
    this.showValues = true;
  }

  public checkForDigits(event:any)
  {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  private assignValues(employee:any)
  {
    this.firstName = employee?.firstName;
    this.lastName = employee?.lastName;
    this.phone = employee?.phone;
    this.email = employee?.email;
    this.skills = employee?.skills;
  }



}
