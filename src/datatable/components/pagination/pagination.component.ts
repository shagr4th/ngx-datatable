import {Component, forwardRef, Inject} from '@angular/core';
import {DataTable} from '../../';


@Component({
  selector: 'data-table-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss']
})
export class DataTablePagination<T> {

  constructor(@Inject(forwardRef(() => DataTable)) public dataTable: DataTable<T>) {
  }

  pageBack() {
    this.dataTable.offset -= Math.min(this.dataTable.limit, this.dataTable.offset);
  }

  pageForward() {
    this.dataTable.offset += this.dataTable.limit;
  }

  pageFirst() {
    this.dataTable.offset = 0;
  }

  pageLast() {
    this.dataTable.offset = (this.maxPage - 1) * this.dataTable.limit;
  }

  get maxPage() {
    return Math.ceil(this.dataTable.itemCount / this.dataTable.limit);
  }

  get limit() {
    return this.dataTable.limit;
  }

  set limit(value) {
    // TODO better way to handle that value of number <input> is string?
    this.dataTable.limit = Number(<any>value);
  }

  get page() {
    return this.dataTable.page;
  }

  set page(value) {
    this.dataTable.page = Number(<any>value);
  }
}
