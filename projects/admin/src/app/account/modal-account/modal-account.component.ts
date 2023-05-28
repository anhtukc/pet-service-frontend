import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiAccountService } from '../../services/apiAccount.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Account } from '../../class';

@Component({
  selector: 'app-modal-account',
  templateUrl: './modal-account.component.html',
  styleUrls: ['./modal-account.component.css']
})
export class ModalAccountComponent {
  constructor(private modalService: NgbModal,private apiAccount:ApiAccountService) { }
  public sex:string[]=['nam', 'nữ'];
  public Editor = ClassicEditor;
  @Input() statusMeaning;
  @Output() updateEvent = new EventEmitter();
  @Output() createEvent = new EventEmitter();
  @ViewChild('modalCustomer') optionModal: TemplateRef<any>;

  public typeModal = '';

  public account:Account ={}


  public openModal(typeModal: string, id?: string) {
    this.typeModal = typeModal;
    this.modalService.open(this.optionModal);
    if (typeModal == 'create') {
      this.createNew();
    }
    if (typeModal == 'edit') {
      this.getById(id);
    }
  }
  public async create() {
    this.account.PhoneConfirmed = true;
          this.apiAccount.addNew(this.account).subscribe(result => {
            if (result.status == 0) {
              alert("Thêm mới thất bại")
            }
            if (result.status == 1) {
              alert("Thêm mới thành công")
              this.account = result.obj;
              this.createEvent.emit(this.account);
            }})
  }
  public async update() {

  }

  getById(id: string) {
      this.apiAccount.getById(id).subscribe(
      result => {
        this.account = result.obj;      
      }
    )  
  }
  createNew() {
    this.account = {}
  }
}
