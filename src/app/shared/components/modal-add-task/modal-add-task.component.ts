import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-modal-add-task',
  templateUrl: './modal-add-task.component.html',
  styleUrls: ['./modal-add-task.component.sass']
})
export class ModalAddTaskComponent implements OnInit {
  formAddTask: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form,event: Event){
    event.preventDefault();
    this.handleAddList(form)
    this.formAddTask.reset()
    
  }

  handleAddList(parameters){
    // this.listService.addList({...parameters, sortValue: 0})
    // .subscribe(res => this.listService.setListItem(JSON.stringify(res)))
  }

}
