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
console.log(data);
console.log(funcData);
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
refreshButton.addEventListener("dblclick", () => {
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
    funcButton[i].addEventListener("contextmenu", () => {
      switch (funcButton[i].textContent) {
        case " ƒ ":
          funcButton[i].textContent = "Add";
          funcButton[i].title = "Addition";
          break;
        case "Add":
          funcButton[i].textContent = "Sub";
          funcButton[i].title = "Subtraction";
          break;
        case "Sub":
          funcButton[i].textContent = "Mul";
          funcButton[i].title = "Multiply";
          break;
        case "Mul":
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
          funcButton[i].textContent = " ƒ ";
          funcButton[i].title = "None Selected";
          break;
      }
    });
  }
}

// buttons can now cycle between modes
buttonCycle();

// start = 0, end = 20
function math(index, start, end) {
  funcButton[index].addEventListener("click", () => {
    if (funcButton[index].textContent === "Add") {
      let result = 0;
      for (let i = start; i < end; i++) {
        if (!isNaN(Number(data[i].value))) {
          result += Number(data[i].value);
        }
      }
      funcData[index].value = result;
    } else if (funcButton[index].textContent === "Sub") {
      let result = 0;
      for (let i = start; i < end; i++) {
        if (!isNaN(Number(data[i].value))) {
          result -= Number(data[i].value);
        }
      }
      funcData[index].value = result;
    } else if (funcButton[index].textContent === "Mul") {
      let result = 1;
      for (let i = start; i < end; i++) {
        if (!isNaN(Number(data[i].value)) && Number(data[i].value !== "")) {
          result *= Number(data[i].value);
        }
      }
      funcData[index].value = result;
    } else if (funcButton[index].textContent === "Avg") {
      let result = 0;
      let length = 0;
      for (let i = start; i < end; i++) {
        if (!isNaN(Number(data[i].value)) && Number(data[i].value !== "")) {
          result += Number(data[i].value);
          length++;
        }
      }
      result /= length;
      funcData[index].value = result;
    } else if (funcButton[index].textContent === "A ▼") {
      for (let i = start; i < end; i++) {
        console.log(data[i].value);
      }
    }
  });
}

function mathAll() {
  let start = 0;
  let end = 20;
  for (let i = 0; i < 26; i++) {
    math(i, start, end);
    start += 20;
    end += 20;
  }
}

// functional squares are able to do math related operations
mathAll();

saveButton.addEventListener("dblclick", () => {
  const information = [];
  for (let i = 0; i < 520; i++) {
    if (data[i].value === "") {
      information.push("");
    } else {
      information.push(data[i].value);
    }
  }
  localStorage.setItem("save1", information);
});

loadButton.addEventListener("dblclick", () => {
  const savedData = localStorage.getItem("save1");
  console.log(savedData);
  for (let i = 0; i < 520; i++) {
    if (!Boolean(savedData[i].value)) {
      data[i].value = savedData[i];
    } else {
      data[i].value = "";
    }
  }
});
