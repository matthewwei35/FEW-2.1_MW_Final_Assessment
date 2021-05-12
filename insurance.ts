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
function printData() {
  console.log(`${upperFirst(data[0].first_name)} ${upperFirst(data[0].last_name)}`)
}

printData()
