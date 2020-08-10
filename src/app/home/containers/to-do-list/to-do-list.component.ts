import { ModalAddListComponent } from './../../../shared/components/modal-add-list/modal-add-list.component';
import { List, Lists } from './../../../shared/interfaces/list';
import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.sass']
})
export class ToDoListComponent implements OnInit {

  lists: Lists
  isEmpty: boolean = false;
  modalRef: BsModalRef;

  constructor(
    private listService: ListService,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    this.getList()

  }

  getList() {
    this.listService.getLists()
      .subscribe(res => {
        if(this.isEmpty == true) this.isEmpty = false
        if (!res || res.items.length == 0) this.isEmpty = true
        this.lists = res
      })
  }

  openModal() {
    this.modalService.onHide.subscribe((reason: string) => {
      this.getList()
    })
    this.modalRef = this.modalService.show(ModalAddListComponent, { class: 'modal-add-list modal-lg' });
    this.modalRef.content.closeBtnName = 'Close';
  }

  parseList(list) {
    return JSON.parse(list)
  }

}
