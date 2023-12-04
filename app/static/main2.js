const iSquares = document.querySelectorAll(".indexSquare");
const dSquares = document.querySelectorAll(".dataSquare");
const fSquares = document.querySelectorAll(".funcSquare");

const data = document.querySelectorAll(".text");
const funcData = document.querySelectorAll(".func");
const funcButton = document.querySelectorAll(".funcButton");
const funcButton2 = document.querySelectorAll(".funcButton2");

const saveButton = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");
const refreshButton = document.querySelector("#refresh");

// visually see everything
console.log(funcData);

dSquares[0].style.color = "transparent";
dSquares[0].style.borderColor = "black";

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

function individualColor() {
  for (let i = 1; i < 521; i++) {
    dSquares[i].addEventListener("dblclick", () => {
      colorChange(dSquares[i]);
    });
  }
  for (let i = 0; i < 47; i++) {
    fSquares[i].addEventListener("dblclick", () => {
      colorChange(fSquares[i])
    })
  }
}

individualColor();
// index = iSquares[n], start = let i = n, end = i < n

// iSquares 0 - 25 are letters, 26 is hor function,27 - 48 are numbers
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
    start += 20;
    end += 20;
    overlap += 1;
  }
}

function colorRow(index, start, end, overlap) {
  index.addEventListener("click", () => {
    colorChange(index);
    for (let i = start; i < end + 1; i += 20) {
      dSquares[i].style.backgroundColor = index.style.backgroundColor;
    }
    fSquares[overlap].style.backgroundColor = index.style.backgroundColor;
  });
}

function allRows() {
  let start = 1;
  let end = 501;
  let overlap = 26;
  for (let i = 27; i < 47; i++) {
    colorRow(iSquares[i], start, end, overlap);
    start += 1;
    end += 1;
    overlap += 1;
  }
}

// iSquare 47 is the index square named 'function'
iSquares[47].addEventListener("click", () => {
  colorChange(iSquares[47]);
  for (let i = 0; i < 26; i++) {
    fSquares[i].style.backgroundColor = iSquares[47].style.backgroundColor;
  }
  fSquares[46].style.backgroundColor = iSquares[47].style.backgroundColor;
});

// iSquare 26 is the index square named 'function'
iSquares[26].addEventListener("click", () => {
  colorChange(iSquares[26]);
  for (let i = 26; i < 47; i++) {
    fSquares[i].style.backgroundColor = iSquares[26].style.backgroundColor;
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
  for (let i = 0; i < 47; i++) {
    fSquares[i].style.backgroundColor = "";
  }
  for (let i = 0; i < 46; i++) {
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
  for (let i = 0; i < 47; i++) {
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

function buttonCycle2() {
  for (let i = 0; i < 20; i++) {
    funcButton2[i].addEventListener("contextmenu", () => {
      switch (funcButton2[i].textContent) {
        case " ƒ ":
          funcButton2[i].textContent = "Add";
          funcButton2[i].title = "Addition";
          break;
        case "Add":
          funcButton2[i].textContent = "Sub";
          funcButton2[i].title = "Subtraction";
          break;
        case "Sub":
          funcButton2[i].textContent = "Mul";
          funcButton2[i].title = "Multiply";
          break;
        case "Mul":
          funcButton2[i].textContent = "Avg";
          funcButton2[i].title = "Average";
          break;
        case "Avg":
          funcButton2[i].textContent = "A ▼";
          funcButton2[i].title = "Alphabetical Ascending";
          break;
        case "A ▼":
          funcButton2[i].textContent = "A ▲";
          funcButton2[i].title = "Alphabetical Descending";
          break;
        default:
          funcButton2[i].textContent = " ƒ ";
          funcButton2[i].title = "None Selected";
          break;
      }
    });
  }
}

funcButton2[20].textContent = "ƒoƒ";

function buttonFoF() {
  
    funcButton2[20].addEventListener("contextmenu", () => {
      switch (funcButton2[20].textContent) {
        case "ƒoƒ":
          funcButton2[20].textContent = "Add";
          funcButton2[20].title = "Addition";
          break;
        case "Add":
          funcButton2[20].textContent = "Sub";
          funcButton2[20].title = "Subtraction";
          break;
        case "Sub":
          funcButton2[20].textContent = "Mul";
          funcButton2[20].title = "Multiply";
          break;
        case "Mul":
          funcButton2[20].textContent = "Avg";
          funcButton2[20].title = "Average";
          break;
        default:
          funcButton2[20].textContent = "ƒoƒ";
          funcButton2[20].title = "Function of Functions";
          break;
      }
    });
  }


// buttons can now cycle between modes
buttonCycle();
buttonCycle2();
buttonFoF();

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
      const list = [];
      for (let i = start; i < end; i++) {
        if (data[i].value !== "") {
          list.push(data[i].value);
        }
      }

      const newList = list.sort();
      // Update the original data array based on the sorted values
      let sortedIndex = 0;
      for (let i = start; i < end; i++) {
        if (data[i].value !== "") {
          data[i].value = newList[sortedIndex];
          sortedIndex++;
        } else {
          data[i].value = "";
        }
      }
    } else if (funcButton[index].textContent === "A ▲") {
      const list = [];
      for (let i = start; i < end; i++) {
        if (data[i].value !== "") {
          list.push(data[i].value);
        }
      }
      const newList = list.sort();
      newList.reverse();
      let sortedIndex = 0;
      for (let i = start; i < end; i++) {
        if (data[i].value !== "") {
          data[i].value = newList[sortedIndex];
          sortedIndex++;
        } else {
          data[i].value = "";
        }
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

function horMath(index, start, end, display) {
  funcButton2[index].addEventListener("click", () => {
    if (funcButton2[index].textContent === "Add") {
      let result = 0;
      for (let i = start; i < end; i += 20) {
        if (!isNaN(Number(data[i].value))) {
          result += Number(data[i].value);
        }
      }
      funcData[display].value = result;
    } else if (funcButton2[index].textContent === "Sub") {
      let result = 0;
      for (let i = start; i < end; i += 20) {
        if (!isNaN(Number(data[i].value))) {
          result -= Number(data[i].value);
        }
      }
      funcData[display].value = result;
    } else if (funcButton2[index].textContent === "Mul") {
      let result = 1;
      for (let i = start; i < end; i += 20) {
        if (!isNaN(Number(data[i].value)) && Number(data[i].value !== "")) {
          result *= Number(data[i].value);
        }
      }
      funcData[display].value = result;
    } else if (funcButton2[index].textContent === "Avg") {
      let result = 0;
      let length = 0;
      for (let i = start; i < end; i += 20) {
        if (!isNaN(Number(data[i].value)) && Number(data[i].value !== "")) {
          result += Number(data[i].value);
          length++;
        }
      }
      result /= length;
      funcData[display].value = result;
    } else if (funcButton2[index].textContent === "A ▼") {
      const list = [];
      for (let i = start; i < end; i += 20) {
        if (data[i].value !== "") {
          list.push(data[i].value);
        }
      }

      const newList = list.sort();
      // Update the original data array based on the sorted values
      let sortedIndex = 0;
      for (let i = start; i < end; i += 20) {
        if (data[i].value !== "") {
          data[i].value = newList[sortedIndex];
          sortedIndex++;
        } else {
          data[i].value = "";
        }
      }
    } else if (funcButton2[index].textContent === "A ▲") {
      const list = [];
      for (let i = start; i < end; i += 20) {
        if (data[i].value !== "") {
          list.push(data[i].value);
        }
      }
      const newList = list.sort();
      newList.reverse();
      let sortedIndex = 0;
      for (let i = start; i < end; i += 20) {
        if (data[i].value !== "") {
          data[i].value = newList[sortedIndex];
          sortedIndex++;
        } else {
          data[i].value = "";
        }
      }
    }
  });
}

function horMathAll() {
  let start = 0;
  let end = 500;
  let display = 26;
  for (let i = 0; i < 20; i++) {
    horMath(i, start, end, display);
    start += 1;
    end += 1;
    display += 1;
  }
}

function mathFoF() {
  funcButton2[20].addEventListener("click", () => {
    if (funcButton2[20].textContent === "Add") {
      let result = 0;
      for (let i = 0; i < 46; i++) {
        if (!isNaN(Number(funcData[i].value))) {
          result += Number(funcData[i].value);
        }
      }
      funcData[46].value = result;
    } else if (funcButton2[20].textContent === "Sub") {
      let result = 0;
      for (let i = 0; i < 46; i++) {
        if (!isNaN(Number(funcData[i].value))) {
          result -= Number(funcData[i].value);
        }
      }
      funcData[46].value = result;
    } else if (funcButton2[20].textContent === "Mul") {
      let result = 1;
      for (let i = 0; i < 46; i++) {
        if (!isNaN(Number(funcData[i].value)) && Number(funcData[i].value !== "")) {
          result *= Number(funcData[i].value);
        }
      }
      funcData[46].value = result;
    } else if (funcButton2[20].textContent === "Avg") {
      let result = 0;
      let length = 0;
      for (let i = 0; i < 46; i++) {
        if (!isNaN(Number(funcData[i].value)) && Number(funcData[i].value !== "")) {
          result += Number(funcData[i].value);
          length++;
        }
      }
      result /= length;
      funcData[46].value = result;}})}

// functional squares are able to do math related operations
mathAll();
horMathAll();
mathFoF();

// save and load functionalities
saveButton.addEventListener("dblclick", () => {
  const information = [];
  const information2 = [];
  for (let i = 0; i < 520; i++) {
    if (data[i].value === "") {
      information.push("");
    } else {
      information.push(data[i].value);
    }
  }
  // Convert array to string before storing in local storage
  localStorage.setItem(
    `Save ${dSquares[0].textContent}`,
    JSON.stringify(information)
  );
  for (let i = 0; i < 520; i++) {
    if (dSquares[i].style.backgroundColor === "") {
      information2.push("");
    } else {
      information2.push(dSquares[i].style.backgroundColor);
    }
  }
  localStorage.setItem(
    `Colors ${dSquares[0].textContent}`,
    JSON.stringify(information2)
  );
});

// Load button event listener
loadButton.addEventListener("dblclick", () => {
  const savedData = localStorage.getItem(`Save ${dSquares[0].textContent}`);
  const savedData2 = localStorage.getItem(`Colors ${dSquares[0].textContent}`);
  if (savedData) {
    // Convert string back to array when retrieving from local storage
    const parsedData = JSON.parse(savedData);
    for (let i = 0; i < 520; i++) {
      if (parsedData[i] !== "") {
        data[i].value = parsedData[i];
      } else {
        data[i].value = "";
      }
    }
  }
  if (savedData2) {
    const parsedData2 = JSON.parse(savedData2);
    for (let i = 0; i < 520; i++) {
      if (parsedData2[i] !== "") {
        dSquares[i].style.backgroundColor = parsedData2[i];
      } else {
        dSquares[i].style.backgroundColor = "";
      }
    }
  }
});

// load any preexisting data on start
document.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem(`Save ${dSquares[0].textContent}`);
  const savedData2 = localStorage.getItem(`Colors ${dSquares[0].textContent}`);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    for (let i = 0; i < 520; i++) {
      if (parsedData[i] !== "") {
        data[i].value = parsedData[i];
      } else {
        data[i].value = "";
      }
    }
  }
  if (savedData2) {
    const parsedData2 = JSON.parse(savedData2);
    for (let i = 0; i < 520; i++) {
      if (parsedData2[i] !== "") {
        dSquares[i].style.backgroundColor = parsedData2[i];
      } else {
        dSquares[i].style.backgroundColor = "";
      }
    }
  }
});
