const data = require("./data.json");
const D = require("@matthewwei35/date_lib")

// ---- Helper Functions ---- //
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

// ---- Solution ---- //
const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function formatNumber(number: string): string {
  if (isEmpty(number) === true) {
    return 'No phone number on file'
  }
  const areaCode: string = number.slice(0, 3)
  const middle: string = number.slice(3, 6)
  const end: string = number.slice(6)
  return `(${areaCode}) ${middle}-${end}`
}

function printData() {
  for (let i: number = 0; i < data.length ; i += 1) {
    // Divider
    console.log('~~~~~~~~~~')

    // Name
    console.log(`${upperFirst(data[i].first_name)} ${upperFirst(data[i].last_name)}`)

    // Car Model
    console.log(`${upperFirst(data[i].make)} ${upperFirst(data[i].model)}`)

    // Purchase Date
    const purchaseDate: Date = new Date(data[i].purchased)
    console.log(`Purchased: ${months[purchaseDate.getMonth()]} ${purchaseDate.getDate()}, ${purchaseDate.getFullYear()}`)

    // Last Payment
    const lastPayment = new D(data[i].lastpayment)
    console.log(lastPayment.when())

    // Phone Number
    console.log(`Phone: ${formatNumber(data[i].phone)}`)

    // City
    console.log(`City: ${upperFirst(data[i].city)}`)
  }
}

printData()

module.exports = {formatNumber}
