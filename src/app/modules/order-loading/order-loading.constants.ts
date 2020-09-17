import { CSVHeader } from '@shared/utils/csv.utils';

export const orderUploadCSVHeader: CSVHeader = [
  {
    columnName: 'NOMBRES',
    field: 'name',
  },
  {
    columnName: 'DIRECCIÓN',
    field: 'address',
  },
  {
    columnName: 'DETALLE',
    field: 'address_detail',
  },
  {
    columnName: 'CELULAR',
    field: 'phone',
  },
  {
    columnName: 'BARRIO',
    field: 'city',
  },
  {
    columnName: 'VALOR DECLARADO',
    field: 'value',
  },
  {
    columnName: 'PAGO CONTRA ENTREGA',
    field: 'isCOD',
  },
  {
    columnName: 'PRODUCTO 1',
    field: 'product1',
  },
  {
    columnName: 'CANTIDAD 1',
    field: 'quantity1',
  },
  {
    columnName: 'PRODUCTO 2',
    field: 'product2',
  },
  {
    columnName: 'CANTIDAD 2',
    field: 'quantity2',
  },
];
