import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardTaskComponent } from './components/card-task/card-task.component';
import { ModalAddListComponent } from './components/modal-add-list/modal-add-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalAddTaskComponent } from './components/modal-add-task/modal-add-task.component';



@NgModule({
  declarations: [CardListComponent, CardTaskComponent, ModalAddListComponent, ModalAddTaskComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CardListComponent]
})
export class SharedModule { }
