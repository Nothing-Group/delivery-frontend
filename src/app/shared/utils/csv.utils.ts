import { Maybe } from 'graphql/jsutils/Maybe';
import * as Papa from 'papaparse';
export type CSVHeader = Array<{
  columnName: string;
  field: string;
}>;
export type ParsedCSV = Array<{
  [key: string]: string;
}>;
export const parseCSV = (file: File, headerStructure: CSVHeader): Promise<ParsedCSV> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      encoding: 'utf-8',
      complete: (results) => {
        const transformed = results.data.map((row) => {
          const newRow = {};
          headerStructure.forEach(({ columnName, field }) => {
            if (!(columnName in (row as any))) {
              throw new Error(`Row does not contain "${columnName}"`);
            }
            newRow[field] = (row as any)[columnName]?.trim();
          });
          return newRow;
        });
        return resolve(transformed);
      },
      error: reject,
    });
  });
};

export const stringToBoolean = (str: Maybe<string>): Maybe<boolean> => {
  if (str === 'SI') {
    return true;
  }
  if (str === 'NO') {
    return false;
  }
  return undefined;
};

export const booleanToString = (bool: Maybe<boolean>): string => {
  if (bool === true) {
    return 'SI';
  }
  if (bool === false) {
    return 'NO';
  }
  return '';
};
