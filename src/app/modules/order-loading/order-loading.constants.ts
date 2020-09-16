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
];
