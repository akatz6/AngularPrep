import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public item: string,
    public category: string,
    public description: string
  ){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
    
  }

 

}
