import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Account, basedSearchObject, pagination } from '../class';
import { sortingService } from '../Helper/sorting-helper';
import { ApiAccountService } from '../services/apiAccount.service';
import { ModalAccountComponent } from './modal-account/modal-account.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @ViewChild(ModalAccountComponent) modalEmp!:ModalAccountComponent;
  constructor(private api: ApiAccountService,
    public http: HttpClient,
    private sort: sortingService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  AccountId: string = "";
  isSearchDivVisible:boolean = false;
  isSearching: boolean = false;
  changeExtendSearchDivVisible(){
    this.isSearchDivVisible = !this.isSearchDivVisible;
  }
  public data: Account[] = [];
  public searchObject: basedSearchObject = {
    name: '',
    status: -1
  };

  statusMeaning: Array<string> = ["Ngừng hoạt động", "Hoạt động"];
  permissionMeaning = [{id:"administrator",name:"Quản trị viên"}, {id:"customer",name:"Khách hàng"}, {id:"freelancer",name:"Cộng tác viên"}];
  public page: pagination = {
    currentPage: 1,
    pageSize: 20,
    sortColumn: "firstName",
    sortOrder: "ASC",
  };

  addNew(obj: Account) {
    this.data.push(obj);
  }
  update(obj: Account) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].Id == obj.Id) {
        this.data[i] = obj;
        break;
      }
    }
  }
  public totalData: number = 0;
  
  
  fetchData() {
    if (this.isSearching == true) {
      this.api.searchPage(this.page, this.searchObject).subscribe(
        result => {
         
          if (result.status == 1) {
            
            this.data = result.list;
            this.totalData = result.numberOfRecords;
          }                  
        })
    }
    else {
      this.api.getPage(this.page).subscribe((result) => {
        this.data = result.list;
        this.totalData = result.numberOfRecords;
      }
      );
    }
  }

  renderPage(event: number) {
    this.page.currentPage = event;
    this.fetchData();
  }

  GetSortColumn(column: string) {
    if (this.page.sortColumn != column) {
      this.page.sortOrder = '';
    }
    this.page.sortColumn = column;
    this.page.sortOrder = this.sort.changeSortOrder(this.page.sortOrder);
    this.fetchData();
  }

  delete(id: string) {
    const cf = confirm("Bạn có chắc chắn muốn xóa không?");
    if (cf) {
      this.api.delete(id).subscribe(result => {
        if (result.status == 0) {
          alert("Không tìm được đối tượng");
          console.log(result.details);
        }
        if (result.status == 1) {
          alert("Xóa thành công");
          this.deleteDataInBrowser(id);
        }
      })
    }
  }
  search() {
      this.isSearching = true;
      this.page.currentPage = 1;
      this.fetchData();
  }
  resetSearching(){
    this.isSearching = false;
      this.page.currentPage = 1;
      this.fetchData();
  }
  deleteDataInBrowser(id: string) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].Id === id) {
        this.data.splice(i, 1);
        this.totalData -= 1;
      }
    }
  }

  openAccountModal(modalType:string, id?:string){
    if(modalType=='create'){
      this.modalEmp.openModal(modalType);
    }
    if(modalType=='edit'){
      this.modalEmp.openModal(modalType,id);
    }
  }
}
