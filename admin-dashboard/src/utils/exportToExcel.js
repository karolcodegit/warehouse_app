import { utils, writeFile } from 'xlsx';

const exportToExcel = (data, filename) => {
  const worksheet = utils.json_to_sheet(data);
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  writeFile(workbook, filename);
};

export default exportToExcel;