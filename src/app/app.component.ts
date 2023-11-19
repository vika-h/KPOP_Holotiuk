import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `<div class="page-header">
        <h1> Введіть значення: </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <p>квадратичний коефіцієнт</p>
                    <input type="number" [(ngModel)]="a" placeholder = "квадратичний коефіцієнт" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <p>лінійний коефіцієнт</p>
                    <input type="number" [(ngModel)]="b" placeholder="лінійний коефіцієнт" />
                </div>
            </div>
            <div class="form-group">
            <div class="col-md-6">
                <p>вільна стала</p>
                <input type="number" [(ngModel)]="c" placeholder="вільна стала" />
            </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <p></p>
                    <button class="btn btn-default" (click)="calculateRoots()">Розрахувати</button>
                </div>
            </div>
            <h1> Корені рівняння:</h1>
            <div *ngIf="x1 && x2">
              <p>{{x1}}, {{x2}}</p>
            </div>
            <div *ngIf="x1 && !x2">
              <p>{{x1}}</p>
            </div>
            <div *ngIf="!x1">
              <p></p>
            </div>            
        </div>
    </div>`
})
export class AppComponent { 
    a = 0;
    b = 0;
    c = 0;
    x1 = "";
    x2 = "";

    calculateRoots(): void {
        const discriminant = this.b * this.b - 4 * this.a * this.c;
        
        if (discriminant > 0) {
          this.x1 = ((-this.b + Math.sqrt(discriminant)) / (2 * this.a)).toString();
          this.x2 = ((-this.b - Math.sqrt(discriminant)) / (2 * this.a)).toString();
        } else if (discriminant === 0) {
          this.x1 = (-this.b / (2 * this.a)).toString();
        } else {
          this.x1 = null;
        }
    }
}