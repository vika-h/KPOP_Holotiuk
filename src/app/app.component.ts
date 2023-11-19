import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.components.html', 
  styleUrls: ['./app.components.css']
})
export class AppComponent {
  employeeName: string = '';
  employeeSalary: number = 0;
  employees: { fullName: string, salary: number }[] = [];

  addEmployee() {
    this.employees.push({ fullName: this.employeeName, salary: this.employeeSalary });
    this.employeeName = '';
    this.employeeSalary = 0;
  }
}
