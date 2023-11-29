const spreadsheet = document.querySelector(".spreadSheetHolder");
const body = document.body;

// numbered squares on the y axis
function createIndex() {
  const newRow = document.createElement("div");
  newRow.className = "indexRow";
  for (let i = 1; i < 21; i++) {
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
  for (let i = 1; i < 21; i++) {
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
  functionButton.textContent = "Add";
  func.append(functionText);
  func.append(functionButton);
  newRow.append(func);
  // end
  spreadsheet.append(newRow);
}

// event listeners
function createTable() {
  body.addEventListener("load", createIndex());
  for (let i = 0; i < 26; i++) {
    createRow(i);
  }
}

createTable();

/*
Im gonna be honest with you, 
main.js is just for creating the table, 
all other functions will probably be located in main2.js. 
*/
