import { ModalAddListComponent } from './../../../shared/components/modal-add-list/modal-add-list.component';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass']
})
export class NotFoundComponent implements OnInit {

  constructor(
    ) { }

  ngOnInit(): void {
  }

  openModal(){
  }

}
