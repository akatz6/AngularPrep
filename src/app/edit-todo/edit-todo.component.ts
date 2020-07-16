import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoListService } from './../service/todo-list.service';


export class Todo{
  constructor(
    public id: number,
    public item: string,
    public category: string,
    public description: string
  ){}
}

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  todo: Todo;
  id: number;
 
  constructor( private route: ActivatedRoute,
    private router: Router, 
    private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todoListService.getById(this.id).subscribe((response) => {
      this.todo = response;
    })
  }

  updateTodo(myform){
    this.todo = myform.value;
    this.todo.id = this.id;
    this.todoListService.updateTodo(this.todo).subscribe((data) =>{
      this.router.navigate(['all-todos']);
    });
  }
}
