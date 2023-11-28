const spreadsheet = document.querySelector(".spreadSheetHolder");
const rowButton = document.querySelector("#saveButton");
const refreshButton = document.querySelector("#refresh");
const indexSquares = document.querySelectorAll(".indexSquares");
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
  newRow.className = `row${number}`;
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
  functionText.className = "func";
  func.append(functionText);
  newRow.append(func);
  // end
  spreadsheet.append(newRow);
}

function colorChange(target) {
  switch (target.style.backgroundColor) {
    case "transparent":
      target.style.backgroundColor = "bisque";
      break;
    case "bisque":
      target.style.backgroundColor = "lightcoral";
      break;
    case "lightcoral":
      target.style.backgroundColor = "lightblue";
      break;
    case "lightblue":
      target.style.backgroundColor = "lightgreen";
      break;
    case "lightgreen":
      target.style.backgroundColor = "orange";
      break;
    case "orange":
      target.style.backgroundColor = "pink";
      break;
    case "pink":
      target.style.backgroundColor = "plum";
      break;
    default:
      target.style.backgroundColor = "transparent";
      break;
  }
}

// event listeners
function createTable() {
  body.addEventListener("load", createIndex());
  for (let i = 0; i < 26; i++) {
    rowButton.addEventListener("click", createRow(i));
  }
}

createTable();

console.log(indexSquares);
