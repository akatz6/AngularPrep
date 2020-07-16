import { Component, OnInit } from '@angular/core';
import { TodoListService } from './../service/todo-list.service';
import { Router } from '@angular/router';


export class Todo{
  constructor(
    public item: string,
    public category: string,
    public description: string
  ){}
}

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit {

  todos: Todo[]; 
  todo: Todo; 
  constructor(
    private todoListService: TodoListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshAllTodos();
  }

  refreshAllTodos(){
    this.todoListService.getAll().subscribe((response) => {
      this.todos = response;
    })
  }

  onFilterChanged(value){
    if(value.target.value === "null"){
      this.refreshAllTodos();
    }
    this.todoListService.filterAll(value.target.value).subscribe((response) => {
      this.todos = response;
    })
  }

  deleteTodo(id){
    this.todoListService.deleteById(id).subscribe((response) => {
      this.refreshAllTodos();
    })
  }

  updateTodo(id){
    this.router.navigate(['edit-todos', id]);
  }
}
