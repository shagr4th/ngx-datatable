import {ContentChild, Directive, Input, OnInit, TemplateRef} from '@angular/core';
import {DataTableRow} from '../../';
import {CellCallback} from '../types';

@Directive({
  selector: 'data-table-column'
})
export class DataTableColumn<T> implements OnInit {

  // for [ngClass]
  styleClassObject = {};

  // init:
  @Input()
  header: string;
  @Input()
  sortable = false;
  @Input()
  resizable = false;
  @Input()
  property: string;
  @Input()
  styleClass: string;
  @Input()
  cellColors: CellCallback<T>;
  @Input()
  width: number | string;
  @Input()
  visible = true;

  @ContentChild('cellTemplate')
  cellTemplate: TemplateRef<any>;
  @ContentChild('headerTemplate')
  headerTemplate: TemplateRef<any>;

  getCellColor(row: DataTableRow<T>, index: number) {
    if (this.cellColors !== undefined) {
      return (<CellCallback<T>>this.cellColors)(row.item, row, this, index);
    }
  }

  ngOnInit() {
    this._initCellClass();
  }

  private _initCellClass() {
    if (!this.styleClass && this.property) {
      if (/^[a-zA-Z0-9_]+$/.test(this.property)) {
        this.styleClass = 'column-' + this.property;
      } else {
        this.styleClass = 'column-' + this.property.replace(/[^a-zA-Z0-9_]/g, '');
      }
    }

    if (this.styleClass != null) {
      this.styleClassObject = {
        [this.styleClass]: true
      };
    }
  }
}
