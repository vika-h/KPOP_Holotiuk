import { Component, OnInit, Inject } from '@angular/core';
import { AppService, Results } from './app.service';
import{MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent implements OnInit {
  title = 'Lab5';
  users: any[];
  displayedColumns:string[] = ['name','last_name','gender','dob','age', 'actions']
  selectedUsers: any[] = [];
  constructor(private appService:AppService, private dialog:MatDialog){}

  ngOnInit():void
  {
    this.appService.getUsers().subscribe(users => {
      this.users = users.results;
    })
  }

  onRowClicked(row:any)
  {
      this.dialog.open(DialogComp,{
      data:row});
  }

  addToSelected(row: any) 
  {
    let existingUser = this.selectedUsers.find((x)=>x.name.first == row.name.first);
    if(existingUser == null){
    this.selectedUsers.push(row)};
  }
}

@Component({
  selector:'dialogComp',
  template:`<p>Name:{{data.name.first}}
  <p>Last:{{data.name.last}}
  <p>Gender:{{data.gender}}
  <p>Dob:{{data.dob.date}}
  <p>Age:{{data.dob.age}}
  `
})  
export class DialogComp{

  constructor(public dialogRef: MatDialogRef<DialogComp>,
    @Inject(MAT_DIALOG_DATA) public data: any){}
}