import { AllCommunityModules, GridOptions, Module } from '@ag-grid-community/all-modules';
import { AfterViewInit, Component } from '@angular/core';
import { InventoryService } from '../../../shared/services/inventory.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements AfterViewInit {
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
    {
      headerName: 'Precio',
      field: 'price',
      cellClass: 'cell-wrap-text',
    },
  ];

  public gridOptions: GridOptions;
  modules: Module[] = AllCommunityModules;
  ngAfterViewInit() {
    this.inventoryService.fetchProducts();
    this.inventoryService.products$.subscribe(data => {
      this.gridOptions.api!.setRowData(data);
    });
  }

  constructor(private inventoryService: InventoryService) {




    this.gridOptions = {
      rowData: undefined,
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
