import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  
  constructor(private http: HttpClient) { }
  
  createTodo(todo: Todo) {
    return this.http.post<Todo>(
      `http://localhost:8080/addTodo/`,
      todo
    );
  }

  updateTodo(todo: Todo){
    return this.http.put<Todo>(
      `http://localhost:8080/update-todo/`, todo
    );
  }

  getAll(){
    return this.http.get<Todo[]>(
      `http://localhost:8080/all-todos/`
    );
  }

  filterAll(filter){
    return this.http.get<Todo[]>(
      `http://localhost:8080/all-todos/${filter}`
    );
  }

  deleteById(id){
    return this.http.delete(
      `http://localhost:8080/all-todos/${id}`
    );
  }
  getById(id){
    return this.http.get<Todo>(
      `http://localhost:8080/edit-todo/${id}`
    );
  }
}
