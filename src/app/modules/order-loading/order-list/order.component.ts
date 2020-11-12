import {
  AllCommunityModules,
  GridOptions,
  Module,
  ValueFormatterParams
} from '@ag-grid-community/all-modules';
import { Component, OnInit } from '@angular/core';
import { InventoryService } from '@shared/services/inventory.service';
import { OrderService } from '@shared/services/orders.service';
import { booleanToString, parseCSV, ParsedCSV, stringToBoolean } from '@shared/utils/csv.utils';
import { Order_Status_Enum } from 'src/generated/graphql';
import { BoxNotFound, ProductNotFound } from '../../../shared/errors';
import { orderUploadCSVHeader } from '../order-loading.constants';
import { ProductAndQuantity } from '../order-loading.types';
import { ProductCellComponent } from './product-cell/item-list-cell.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {


  columnDefs = [
    {
      headerName: 'Nombre',
      field: 'name',
      cellClass: 'cell-wrap-text',
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: [
          'Bob',
          'Harry',
          'Sally',
          'Mary',
          'John',
          'Jack',
          'Sue',
          'Sean',
          'Niall',
          'Albert',
          'Fred',
          'Jenny',
          'Larry',
        ],
      },
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
      field: 'productsWithQuantity',
      cellRenderer: 'listRenderer',
      cellClass: 'cell-wrap-text',
      autoHeight: true,
      cellRendererParams: {},
    },
    {
      headerName: 'Pago contra entrega',
      field: 'isCOD',
      valueFormatter: (params: ValueFormatterParams) => booleanToString(params.value),
    },
    {
      headerName: 'Tamaño',
      field: 'size',
      valueFormatter: (params: ValueFormatterParams) => {
        let size = null;
        try {
          size = this.orderService.findBox(params.data.productsWithQuantity).label;

        } catch (error) {
          console.log(error.message);
          if (error.message === ProductNotFound) {
            size = "";
          }
          else if (error.message === BoxNotFound) {
            size = "CAPACIDAD MÁXIMA SUPERADA";
          }
        }
        return size;
      },
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
      productsWithQuantity: [
        {
          product: {
            name: 'Manzana',
            id: 11,
          },
          quantity: '2',
        },
        {
          product: {
            name: 'Miel Organica Mc Pato',
            id: 11,
          },
          quantity: 7,
        },
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
      productsWithQuantity: [],
      address_detail: 'Conjunto Calarca, Torre 6, Apartamento 420',
    },
    {
      name: 'Pedro Daniel Perez Galvis',
      address: 'Calle 45 Sur Bis #38a-24b',
      phone: '134142',
      city: 'Bogota',
      value: '72000',
      productsWithQuantity: [
        {
          product: {
            name: 'Miel ñññ Organica Mc Pato',
          },
          quantity: 7,
        },
        {
          product: {
            name: 'Mani Picante',
            id: 9,
          },
          quantity: 7,
        },
      ],

      size: '25x20x10',
      address_detail: 'Conjunto Calarca, Torre 6, Apartamento 420',
    },
  ];

  public gridOptions: GridOptions;
  modules: Module[] = AllCommunityModules;

  constructor(private orderService: OrderService, private inventoryService: InventoryService) {
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

  ngOnInit() {
    this.inventoryService.fetchProducts();
  }

  handleSendClicked() {
    const orders = [
      {
        address: '233',
        city: '23',
        total_product_count: 2,
        total_price: 23,
        total_weight: 23,
        total_volume: 76,
        is_cod: false,
        detail: 'apto 2',
        status: Order_Status_Enum.Located,
        phone: 3433,
      },
      {
        address: '233',
        city: '23',
        total_product_count: 2,
        total_price: 23,
        total_weight: 23,
        total_volume: 76,
        is_cod: false,
        detail: 'apto 2',
        status: Order_Status_Enum.Located,
        phone: 3433,
      },
    ];
    this.orderService.submitOrders(orders).subscribe(console.log);
  }

  async handleFileSelected(file: File) {
    const parsedCSV = await parseCSV(file, orderUploadCSVHeader);
    console.log(parsedCSV);
    this.rowData = this.parsedCsvToTableRows(parsedCSV);

    this.gridOptions.api!.setRowData(this.rowData);
  }

  private parsedCsvToTableRows(parsedCSV: ParsedCSV) {
    return parsedCSV.map((csvRow) => {
      const productsWithQuantity: Array<ProductAndQuantity> = [
        [csvRow.product1, csvRow.quantity1],
        [csvRow.product2, csvRow.quantity2],
      ]
        .filter(([productName, quantity]) => productName || quantity)
        .map(([productName, quantity]) => {
          const product = this.inventoryService.findProductByName(productName);
          const quantityFixed = isNaN(+quantity) ? 0 : Number(quantity);
          if (product) {
            return {
              product,
              quantity: quantityFixed,
            };
          }
          return {
            product: {
              name: productName,
            },
            quantity: quantityFixed,
          };
        });



      return {
        ...csvRow,
        isCOD: stringToBoolean(csvRow.isCOD),
        productsWithQuantity
      };
    });
  }
}
