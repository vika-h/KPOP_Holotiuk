import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html', // Шлях до HTML-файлу
  styleUrls: ['./child.component.css'] // Шлях до CSS-файлу
})
export class ChildComponent {
  @Input() employees: { fullName: string, salary: number }[];

  getMaxSalaryEmployeeName(): string {
    if (this.employees.length === 0) {
      return 'Інформація відсутня';
    }

    const maxSalary = Math.max(...this.employees.map(employee => employee.salary));
    const maxSalaryEmployee = this.employees.find(employee => employee.salary === maxSalary);

    return maxSalaryEmployee ? maxSalaryEmployee.fullName : 'Інформація відсутня';
  }
}
