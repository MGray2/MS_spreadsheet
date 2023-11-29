const iSquares = document.querySelectorAll(".indexSquare");
const dSquares = document.querySelectorAll(".dataSquare");
const fSquares = document.querySelectorAll(".funcSquare");

const data = document.querySelectorAll(".text");
const funcData = document.querySelectorAll(".func");
const funcButton = document.querySelectorAll(".funcButton");

const saveButton = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");
const refreshButton = document.querySelector("#refresh");

// visually see everything
console.log(iSquares);
console.log(dSquares);
console.log(fSquares);
console.log(funcButton);

function colorChange(target) {
  switch (target.style.backgroundColor) {
    case "":
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
      target.style.backgroundColor = "";
      break;
  }
}

// index = iSquares[n], start = let i = n, end = i < n

// iSquares 0 - 25 are letters, 26 - 47 are numbers
function colorColumn(index, start, end, overlap) {
  index.addEventListener("click", () => {
    colorChange(index);
    for (let i = start; i < end; i++) {
      dSquares[i].style.backgroundColor = index.style.backgroundColor;
    }
    fSquares[overlap].style.backgroundColor = index.style.backgroundColor;
  });
}

function allColumns() {
  let start = 1;
  let end = 21;
  let overlap = 0;
  for (let i = 0; i < 26; i++) {
    colorColumn(iSquares[i], start, end, overlap);
    start = start + 20;
    end = end + 20;
    overlap = overlap + 1;
  }
}

function colorRow(index, start, end) {
  index.addEventListener("click", () => {
    colorChange(index);
    for (let i = start; i < end + 1; i += 20) {
      dSquares[i].style.backgroundColor = index.style.backgroundColor;
    }
  });
}

function allRows() {
  let start = 1;
  let end = 501;
  for (let i = 26; i < 46; i++) {
    colorRow(iSquares[i], start, end);
    start = start + 1;
    end = end + 1;
  }
}

// iSquare 46 is the index square named 'function'
iSquares[46].addEventListener("click", () => {
  colorChange(iSquares[46]);
  for (let i = 0; i < 26; i++) {
    fSquares[i].style.backgroundColor = iSquares[46].style.backgroundColor;
  }
});

// all squares have color functionality
allColumns();
allRows();

// refresh button
refreshButton.addEventListener("click", () => {
  for (let i = 0; i < 47; i++) {
    iSquares[i].style.backgroundColor = "";
  }
  for (let i = 0; i < 521; i++) {
    dSquares[i].style.backgroundColor = "";
  }
  for (let i = 0; i < 520; i++) {
    data[i].value = "";
  }
  for (let i = 0; i < 26; i++) {
    fSquares[i].style.backgroundColor = "";
  }
  for (let i = 0; i < 25; i++) {
    funcData[i].value = "";
  }
});

function convertNumber(i, dataType) {
  if (!isNaN(dataType[i].value) === false) {
    dataType[i].style.direction = "ltr";
  } else {
    dataType[i].style.direction = "rtl";
  }
}

function numberStyle() {
  for (let i = 0; i < 520; i++) {
    data[i].addEventListener("input", () => {
      convertNumber(i, data);
    });
  }
  for (let i = 0; i < 26; i++) {
    funcData[i].addEventListener("input", () => {
      convertNumber(i, funcData);
    });
  }
}

// enables numbers to be formatted on the left of the square
numberStyle();

function buttonCycle() {
  for (let i = 0; i < 26; i++) {
    funcButton[i].addEventListener("click", () => {
      switch (funcButton[i].textContent) {
        case "Add":
          funcButton[i].textContent = "Sub";
          funcButton[i].title = "Subtraction";
          break;
        case "Sub":
          funcButton[i].textContent = "Avg";
          funcButton[i].title = "Average";
          break;
        case "Avg":
          funcButton[i].textContent = "A ▼";
          funcButton[i].title = "Alphabetical Ascending";
          break;
        case "A ▼":
          funcButton[i].textContent = "A ▲";
          funcButton[i].title = "Alphabetical Descending";
          break;
        default:
          funcButton[i].textContent = "Add";
          funcButton[i].title = "Addition";
          break;
      }
    });
  }
}

// buttons can now cycle between modes
buttonCycle();

function Summation(index, start, end) {
  index.addEventListener("change", () => {
    // code goes here
  });
}

funcButton[0].addEventListener("click", () => {
  let result = 0;
  for (let i = 0; i < 21; i++) {
    if (!isNaN(dSquares[i])) {
      result += dSquares[i];
    }
  }
  funcData[0].value = result;
});
