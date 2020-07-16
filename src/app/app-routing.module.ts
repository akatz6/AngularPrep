import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AllTodosComponent } from './all-todos/all-todos.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';


const routes: Routes = [
  { path: '', component: FormComponent },
  {
    path: 'all-todos',
    component: AllTodosComponent,
  },
  {
    path: 'edit-todos/:id',
    component: EditTodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
