import {Component, ViewChild} from '@angular/core';
import {DataTable, DataTableParams, DataTableResource, DataTableTranslations} from '../../datatable';
import {films} from './demo3-data';

interface Film {
  title?: string
  year?: number
  rating?: number
  director?: string
  description?: string
}

@Component({
  selector: 'demo-3',
  templateUrl: './demo3.html',
  styleUrls: ['./demo3.scss']
})
export class Demo3 {

  filmResource = new DataTableResource<Film>(films);
  films: Film[] = [];
  filmCount = 0;
  // special params:
  translations = <DataTableTranslations>{
    indexColumn: 'Index column',
    expandColumn: 'Expand column',
    selectColumn: 'Select column',
    paginationLimit: 'Max results',
    paginationRange: 'Result range'
  };

  @ViewChild(DataTable) filmsTable: DataTable<Film>;

  constructor() {
    this.filmResource.count().then(count => this.filmCount = count);
  }

  reloadFilms(params: DataTableParams) {
    this.filmResource.query(params).then(vals => this.films = vals);
  }

  cellColor(car: any) {
    return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
  };
}
