import { Component, Input, OnInit ,OnChanges  } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit,OnChanges {
  @Input() todos!: any[]  ;

  taskList!:any[];




  constructor() { 
  }
  ngOnInit(): void {

  }
  removeTodo(item:number){
    this.todos.splice(item,1)
  // this.todos=this.todos.filter(item=>item.id!==id)
  }
    
   
  update(data:any){
    console.log(data);
    data.isUpdate=false

   }
    ngOnChanges(){
      this.taskList=this.todos
      console.log(this.taskList)
    }

    
}

