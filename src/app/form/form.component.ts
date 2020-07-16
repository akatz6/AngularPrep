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
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  todo: Todo;
  constructor(
    private todoListService: TodoListService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveTodo(myform) {
    this.todo = myform.value;
    this.todoListService.createTodo(this.todo).subscribe((data) =>{
      this.router.navigate(['all-todos']);
    });
  }

}
