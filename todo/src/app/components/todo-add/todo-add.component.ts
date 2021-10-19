import { Component, EventEmitter,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @Output() newTodo: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  addTodo(item:string){
    console.log(item);
    this.newTodo.emit(item);
 
    
  }
 
}
