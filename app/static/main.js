const spreadsheet = document.querySelector(".spreadSheetHolder");
const rowButton = document.querySelector("#saveButton");
const body = document.body;

function createIndex() {
  const newRow = document.createElement("div");
  newRow.className = "indexRow";
  for (let i = 1; i < 21; i++) {
    const square = document.createElement("div");
    square.className = "dataSquare";
    square.textContent = i;
    newRow.append(square);
  }
  const func = document.createElement("div");
  func.className = "dataSquare";
  func.textContent = "Function";
  newRow.append(func);
  spreadsheet.append(newRow);
}

function createRow(number) {
  const newRow = document.createElement("div");
  newRow.className = `row${number}`;
  for (let i = 1; i < 22; i++) {
    const square = document.createElement("div");
    square.className = "dataSquare";
    const area = document.createElement("textarea");
    area.className = "text";
    square.append(area);
    newRow.append(square);
  }
  spreadsheet.append(newRow);
}

body.addEventListener("load", createIndex());
for (let i = 0; i < 26; i++) {
  rowButton.addEventListener("click", createRow(i));
}
