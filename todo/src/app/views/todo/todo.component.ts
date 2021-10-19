import { TodoListComponent } from './../../components/todo-list/todo-list.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:any[]=[];

  onNewItem(item: string) {

    this.todos.push({id:Date.now(),name:item,isComplate:false,isUpdate:false});
 
  }
  constructor() { }

  ngOnInit(): void {
  }

 
}
