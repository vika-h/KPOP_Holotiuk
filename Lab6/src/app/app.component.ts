import { Component, OnInit, Inject } from '@angular/core';
import { AppService } from './app.service';
import{MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent implements OnInit {
  title = 'Lab6';
  users: any[];
  displayedColumns:string[] = ['id','title','completed', 'actions']
  selectedUsers: any[] = [];
  constructor(private appService:AppService, private dialog:MatDialog, private storage: Storage){this.initStorage();}

  ngOnInit():void
  {
    this.loadTodos();
    this.clearSelectedUsers();
    this.loadSelectedUsers();
  }

  loadTodos(): void {
  this.appService.getTodos().subscribe((Todo: any[]) => {
    this.users = Todo.slice(0, 20);
  }) 
  }
  onRowClicked(row:any){
    this.dialog.open(DialogComp,{
    data:row});

  }
  addToSelected(row: any) {
    let existingUser = this.selectedUsers.find((x)=>x.id == row.id);
    if(existingUser == null){
    this.selectedUsers.push(row)};
    this.saveSelectedUsers();
  }
  clearSelectedUsers() {
    this.selectedUsers = [];
    this.saveSelectedUsers();
  }
  private async initStorage() {
    await this.storage.create();
  }
  private async loadSelectedUsers() {
    this.selectedUsers = (await this.storage.get('selectedUsers')) || [];
  }

  private saveSelectedUsers() {
    this.storage.set('selectedUsers', this.selectedUsers);
  }
}

@Component({
  selector:'dialogComp',
  template:`<p>Id:{{data.id}}
  <p>Title:{{data.title}}
  <p>Completed:{{data.completed}}
  `
})  
export class DialogComp{

  constructor(public dialogRef: MatDialogRef<DialogComp>,
    @Inject(MAT_DIALOG_DATA) public data: any){}
}

