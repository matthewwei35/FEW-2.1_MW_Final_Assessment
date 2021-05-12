const data = require("./data.json");

// Helper Functions //
function isEmpty(str: string): boolean {
  const words: string[] = str.trim().split('');
  for (let i: number = 0; i < words.length; i += 1) {
    if (words[i] !== ('\n' || '\r' || '\t')) {
      return false;
    }
  }
  return true;
}

function upperFirst(str: string): string {
  if (isEmpty(str) === true) {
    return '';
  }
  const strEndSlice: string = str.slice(1);
  const firstLetter: string = str[0].toUpperCase();
  return firstLetter + strEndSlice;
}

// Solution //
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function formatNumber(number: string): string {
  const areaCode: string = number.slice(0, 3)
  const middle: string = number.slice(3, 6)
  const end: string = number.slice(6)
  return `(${areaCode}) ${middle}-${end}`
}

function printData() {
  console.log(`${upperFirst(data[0].first_name)} ${upperFirst(data[0].last_name)}`)

  console.log(`${upperFirst(data[0].make)} ${upperFirst(data[0].model)}`)

  const purchaseDate = new Date(data[0].purchased)
  console.log(`${months[purchaseDate.getMonth()]} ${purchaseDate.getDate()}, ${purchaseDate.getFullYear()}`)

  console.log(formatNumber(data[0].phone))
}

printData()
