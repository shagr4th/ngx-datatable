import {Component, ViewChild} from '@angular/core';
import {DataTable, DataTableParams, DataTableResource} from '../../datatable';
import {cars} from './demo2-data';

interface Car {
  year?: number
  maker?: string
  model?: string
  desc?: string
  price?: number
}

@Component({
  selector: 'demo-2',
  templateUrl: 'demo2.html'
})
export class Demo2 {

  carResource = new DataTableResource<Car>(cars);
  cars: Car[] = [];
  carCount = 0;
  yearLimit = 1999;

  @ViewChild(DataTable) carsTable: DataTable<Car>;

  constructor() {
    this.rowColors = this.rowColors.bind(this);

    this.carResource.count().then(count => this.carCount = count);
  }

  reloadCars(params: DataTableParams) {
    this.carResource.query(params).then(vals => this.cars = vals);
  }

  // custom features:

  carClicked(car: any) {
    alert(car.model);
  }

  rowColors(car: any) {
    if (car.year >= this.yearLimit) {
      return 'rgb(255, 255, 197)';
    }
  }
}
