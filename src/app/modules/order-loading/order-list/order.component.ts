import {
  AllCommunityModules,
  GridOptions,
  Module,
  ValueFormatterParams,
} from '@ag-grid-community/all-modules';
import { Component } from '@angular/core';
import { booleanToString, parseCSV, ParsedCSV, stringToBoolean } from '@shared/utils/csv.utils';
import { Maybe } from 'graphql/jsutils/Maybe';
import { orderUploadCSVHeader } from '../order-loading.constants';
import { BoxSize, ProductAndQuantity } from '../order-loading.types';
import { ProductCellComponent } from './item-list-cell.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  columnDefs = [
    {
      headerName: 'Nombre',
      field: 'name',
      cellClass: 'cell-wrap-text',
    },
    {
      headerName: 'Direccion',
      field: 'address',
      cellClass: 'cell-wrap-text',
    },
    {
      headerName: 'Detalle',
      field: 'address_detail',
      cellClass: 'cell-wrap-text',
      autoHeight: true,
    },
    {
      headerName: 'Celular',
      field: 'phone',
    },
    {
      headerName: 'Ciudad',
      field: 'city',
    },
    {
      headerName: 'Valor Declarado',
      field: 'value',
    },
    {
      headerName: 'Productos | Cantidad',
      field: 'products',
      cellRenderer: 'listRenderer',
      cellClass: 'cell-wrap-text',
      autoHeight: true,
    },
    {
      headerName: 'Pago contra entrega',
      field: 'isCOD',
      valueFormatter: (params: ValueFormatterParams) => booleanToString(params.value),
    },
    {
      headerName: 'Tamaño',
      field: 'size',
      valueFormatter: (params: ValueFormatterParams) =>
        (params.value as Maybe<BoxSize>)?.label || '',
    },
  ];

  rowData: Array<{ [key: string]: any }> = [
    {
      name: 'Juan Daniel Peréz Galvis',
      address: 'Calle 12# 2-65',
      phone: '2332473',
      city: 'aaaaaaaaaaaaaaaaaaaaaaa',
      value: '35000',
      isCOD: true,
      products: [
        ['Manzana', 11],
        ['Miel Organica Mc Pato', 4],
        ['Almendras tostadas', 3],
        ['Almendras tostadas', 4],
        ['Almendras tostadas', 1],
      ],
      size: '25x20x10',
      address_detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Alberto Enrique Perez Galvis',
      address: 'Calle 32 Sur #32-65,',
      phone: '341241234',
      city: 'Bogota',
      value: '32000',
      products: [],
      address_detail: 'Conjunto Calarca, Torre 6, Apartamento 420',
    },
    {
      name: 'Pedro Daniel Perez Galvis',
      address: 'Calle 45 Sur Bis #38a-24b',
      phone: '134142',
      city: 'Bogota',
      value: '72000',
      products: [
        ['Manzana', 11],
        ['Miel Organica Mc Pato', 4],
        ['Almendras tostadas', 3],
        ['Almendras tostadas', 4],
        ['Almendras tostadas', 1],
      ],

      size: '25x20x10',
      address_detail: 'Conjunto Calarca, Torre 6, Apartamento 420',
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
      frameworkComponents: {
        listRenderer: ProductCellComponent,
      },
    } as GridOptions;
    setTimeout(() => this.gridOptions.api!.resetRowHeights(), 100);
  }

  async handleFileSelected(file: File) {
    const parsedCSV = await parseCSV(file, orderUploadCSVHeader);
    console.log(parsedCSV);
    this.rowData = this.parsedCsvToTableRows(parsedCSV);

    this.gridOptions.api!.setRowData(this.rowData);
  }

  private parsedCsvToTableRows(parsedCSV: ParsedCSV) {
    return parsedCSV.map((csvRow) => {
      const products: Array<ProductAndQuantity> = [
        [csvRow.product1, csvRow.quantity1],
        [csvRow.product2, csvRow.quantity2],
      ]
        .filter(([product, quantity]) => product && quantity)
        .map(([product, quantity]) => [product, isNaN(+quantity) ? 0 : +quantity]);

      // TODO: fn to find the box size
      const size: BoxSize = { label: '20 X 50 X 12', id: 7 };
      return {
        ...csvRow,
        isCOD: stringToBoolean(csvRow.isCOD),
        products,
        size,
      };
    });
  }
}
