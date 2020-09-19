import { AllCommunityModules, GridOptions, Module } from '@ag-grid-community/all-modules';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  columnDefs = [
    {
      headerName: 'Nombre',
      field: 'name',
      cellClass: 'cell-wrap-text',
    },
    {
      headerName: 'Alto',
      field: 'height',
      cellClass: 'cell-wrap-text',
    },
    {
      headerName: 'Ancho',
      field: 'width',
      cellClass: 'cell-wrap-text',
    },
    {
      headerName: 'Largo',
      field: 'length',
      cellClass: 'cell-wrap-text',
    },
  ];

  rowData: Array<{ [key: string]: any }> = [
    {
      name: 'miel',
      length: '50',
      width: '50',
      height: '50',
    },
    {
      name: 'miel50',
      length: '50',
      width: '50',
      height: '50',
    },
    {
      name: 'miel100',
      length: '50',
      width: '50',
      height: '50',
    },
  ];

  public gridOptions: GridOptions;
  modules: Module[] = AllCommunityModules;
  constructor() {
    this.gridOptions = {
      rowData: this.rowData,
      columnDefs: this.columnDefs,
      onGridReady: () => {
        // TODO: disable on mobile
        // this.gridOptions.api!.sizeColumnsToFit();
      },
      defaultColDef: {
        sortable: true,
      },
      rowHeight: 48, // recommended row height for material design data grids,
    } as GridOptions;
    setTimeout(() => this.gridOptions.api!.resetRowHeights(), 100);
  }
}
