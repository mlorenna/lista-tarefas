import { ListService } from './../../../home/services/list.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-modal-add-list',
  templateUrl: './modal-add-list.component.html',
  styleUrls: ['./modal-add-list.component.sass']
})
export class ModalAddListComponent implements OnInit {
  title: string;
  list: any[] = [];
  formAddList: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
    private listService: ListService
    ) { }

  ngOnInit(): void {
    this.formAddList = this.formBuilder.group({
      name: '',
      description: ''
    });
  }


  onSubmit(form,event: Event){
    event.preventDefault();
    this.handleAddList(form)
    this.formAddList.reset()
    this.bsModalRef.hide()
  }

  handleAddList(parameters){
    this.listService.addList({...parameters, sortValue: 0})
    .subscribe(res => this.listService.setListItem(JSON.stringify(res)))
  }

}
