import {ContentChild, Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: 'data-table-title'
})
export class DataTableTitle {

  @Input()
  title = '';
  @ContentChild('titleTemplate')
  titleTemplate: TemplateRef<any>;
  @Input()
  controls = true;
}
