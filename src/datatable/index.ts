import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DataTableColumn} from './components/column/column.directive';
import {DataTablePagination} from './components/pagination/pagination.component';
import {DataTableRow} from './components/row/row.component';
import {DataTable} from './components/table/table.component';
import {DataTableTitleComponent} from './components/title/title.component';
import {DataTableTitle} from './components/title/title.directive';
import {HideDirective} from './utils/hide.directive';
import {MinPipe} from './utils/min.pipe';
import {PxPipe} from './utils/px.pipe';

export * from './components/types';
export * from './tools/data-table-resource';

export {DataTable, DataTableColumn, DataTableRow, DataTableTitle};

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DataTable,
    DataTableColumn,
    DataTableTitle,
    DataTableRow,
    DataTablePagination,
    DataTableTitleComponent,
    PxPipe,
    HideDirective,
    MinPipe
  ],
  exports: [DataTable, DataTableColumn, DataTableTitle]
})
export class DataTableModule {
}
