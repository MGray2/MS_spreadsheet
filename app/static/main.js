const spreadsheet = document.querySelector(".spreadSheetHolder");
const body = document.body;

// numbered squares on the y axis
function createIndex() {
  const newRow = document.createElement("div");
  newRow.className = "indexRow";
  for (let i = 1; i < 41; i++) {
    const square = document.createElement("div");
    square.className = "indexSquare";
    square.textContent = i;
    newRow.append(square);
  }
  const func = document.createElement("div");
  func.className = "indexSquare";
  func.textContent = "Function";
  newRow.append(func);
  spreadsheet.append(newRow);
}

// all of the other tiles
function createRow(number) {
  const newRow = document.createElement("div");
  newRow.className = `col${number}`;
  for (let i = 1; i < 41; i++) {
    const square = document.createElement("div");
    square.className = "dataSquare";
    const area = document.createElement("textarea");
    area.className = "text";
    square.append(area);
    newRow.append(square);
  }
  // function square
  const func = document.createElement("div");
  func.className = "funcSquare";
  const functionText = document.createElement("textarea");
  const functionButton = document.createElement("button");
  functionText.className = "func";
  functionButton.className = "funcButton";
  functionButton.textContent = " ƒ ";
  functionButton.title = "None Selected";
  functionButton.tabIndex = 0;
  func.append(functionText);
  func.append(functionButton);
  newRow.append(func);
  // end
  spreadsheet.append(newRow);
}

function createHorFunctionRow(number) {
  const newRow = document.createElement("div");
  newRow.className = `col${number}`;
  for (let i = 1; i < 42; i++) {
    const square = document.createElement("div");
    square.className = "funcSquare";
    const area = document.createElement("textarea");
    area.className = "func";
    const functionButton = document.createElement("button");
    functionButton.className = "funcButton2";
    functionButton.textContent = " ƒ ";
    functionButton.title = "None Selected";
    functionButton.tabIndex = 0;
    square.append(area);
    square.append(functionButton);
    newRow.append(square);
    spreadsheet.append(newRow);
  }}

// event listeners
function createTable() {
  createIndex();
  for (let i = 0; i < 26; i++) {
    createRow(i);
  }
  createHorFunctionRow(27);
}



createTable();

/*

main.js is just for creating the table, 
the real magic happens in main2.js
*/
