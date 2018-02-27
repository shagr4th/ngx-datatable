import {DataTableColumn} from './column/column.directive';
import {DataTableRow} from './row/row.component';

export type RowCallback<T> = (item: any, row: DataTableRow<T>, index: number) => string;
export type CellCallback<T> = (item: any, row: DataTableRow<T>, column: DataTableColumn<T>, index: number) => string;

export interface DataTableTranslations {
  indexColumn: string
  selectColumn: string
  expandColumn: string
  paginationLimit: string
  paginationRange: string
}

export const defaultTranslations = <DataTableTranslations>{
  indexColumn: 'index',
  selectColumn: 'select',
  expandColumn: 'expand',
  paginationLimit: 'Limit',
  paginationRange: 'Results'
};

export interface DataTableParams {
  offset?: number
  limit?: number
  sortBy?: string
  sortAsc?: boolean
}

export interface DataTableRowEvent<T> {
  row?: DataTableRow<T>
  event?: MouseEvent
}

export interface DataTableCellEvent<T> {
  row?: DataTableRow<T>
  column?: DataTableColumn<T>
  event?: MouseEvent
}

export interface DataTableHeaderEvent<T> {
  column?: DataTableColumn<T>
  event?: MouseEvent
}
