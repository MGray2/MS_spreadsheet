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
const restoreButton = document.querySelector("#restoreButton");
const printButton = document.querySelector("#printButton");
const customButton = document.querySelector("#customButton");
const customBar = document.querySelector(".customBar");

customButton.addEventListener("click", () => {
  if (saveButton.style.display != "none") {
    saveButton.style.display = "none";
    loadButton.style.display = "none";
    refreshButton.style.display = "none";
    restoreButton.style.display = "none";
    printButton.style.display = "none";
    customBar.style.display = "flex";
  } else {
    saveButton.style.display = "block";
    loadButton.style.display = "block";
    refreshButton.style.display = "block";
    restoreButton.style.display = "block";
    printButton.style.display = "block";
    customBar.style.display = "none";
  }
});

// visually see everything
console.log(iSquares);
console.log(dSquares);
console.log(fSquares);
console.log(data);

function preciseStretchAdd(iSquareStart, start, end, overlap) {
iSquares[iSquareStart].addEventListener("mouseup", () => {
  for (let i = start; i < end; i += 40) {
    dSquares[i].style.height = iSquares[iSquareStart].style.height;
  }
  fSquares[overlap].style.height = iSquares[iSquareStart].style.height;
});
}

function stretchyRows() {
  let index = 27;
  let start = 1;
  let end = 1002;
  let overlap = 26;
  for (let i = 27; i < 67; i++) {
    preciseStretchAdd(index, start, end, overlap);
    index++;
    start++;
    end++;
    overlap++;
  }
}

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
    case "plum":
      target.style.backgroundColor = "black";
      break;
    default:
      target.style.backgroundColor = "";
      break;
  }
}

function individualColor() {
  for (let i = 1; i < 1041; i++) {
    dSquares[i].addEventListener("keydown", (e) => {
      if (e.code == "ShiftRight") colorChange(dSquares[i]);
    });
  }
  for (let i = 0; i < 67; i++) {
    fSquares[i].addEventListener("keydown", (e) => {
      if (e.code == "ShiftRight") colorChange(fSquares[i]);
    });
  }
}

// index = iSquares[n], start = let i = n, end = i < n
// iSquares 0 - 25 are letters, 26 is hor function, 27+ are numbers
function colorColumn(index, start, end, overlap) {
  index.addEventListener("dblclick", () => {
    colorChange(index);
    for (let i = start; i < end; i++) {
      dSquares[i].style.backgroundColor = index.style.backgroundColor;
    }
    fSquares[overlap].style.backgroundColor = index.style.backgroundColor;
  });
}

function allColumns() {
  let start = 1;
  let end = 41;
  let overlap = 0;
  for (let i = 0; i < 26; i++) {
    colorColumn(iSquares[i], start, end, overlap);
    start += 40;
    end += 40;
    overlap += 1;
  }
}

function colorRow(index, start, end, overlap) {
  index.addEventListener("dblclick", () => {
    colorChange(index);
    for (let i = start; i < end + 1; i += 40) {
      dSquares[i].style.backgroundColor = index.style.backgroundColor;
    }
    fSquares[overlap].style.backgroundColor = index.style.backgroundColor;
  });
}

function allRows() {
  let start = 1;
  let end = 1001;
  let overlap = 26;
  for (let i = 27; i < 67; i++) {
    colorRow(iSquares[i], start, end, overlap);
    start += 1;
    end += 1;
    overlap += 1;
  }
}

// iSquare 67 is the index square named 'function'
iSquares[67].addEventListener("dblclick", () => {
  colorChange(iSquares[67]);
  for (let i = 0; i < 26; i++) {
    fSquares[i].style.backgroundColor = iSquares[67].style.backgroundColor;
  }
  fSquares[66].style.backgroundColor = iSquares[67].style.backgroundColor;
});

// iSquare 26 is the index square named 'function'
iSquares[26].addEventListener("dblclick", () => {
  colorChange(iSquares[26]);
  for (let i = 26; i < 67; i++) {
    fSquares[i].style.backgroundColor = iSquares[26].style.backgroundColor;
  }
});

// refresh button
refreshButton.addEventListener("dblclick", () => {
  for (let i = 0; i < 67; i++) {
    iSquares[i].style.backgroundColor = "";
  }
  for (let i = 0; i < 1021; i++) {
    dSquares[i].style.backgroundColor = "";
  }
  for (let i = 0; i < 1040; i++) {
    data[i].value = "";
  }
  for (let i = 0; i < 67; i++) {
    fSquares[i].style.backgroundColor = "";
  }
  for (let i = 0; i < 67; i++) {
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
  for (let i = 0; i < 1040; i++) {
    data[i].addEventListener("input", () => {
      convertNumber(i, data);
    });
  }
  for (let i = 0; i < 67; i++) {
    funcData[i].addEventListener("input", () => {
      convertNumber(i, funcData);
    });
  }
}
// Mobile Compatibility
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

function buttonCycle() {
  for (let i = 0; i < 26; i++) {
    funcButton[i].addEventListener("keydown", (e) => {
      if (e.key == "f") {
        switch (funcButton[i].textContent) {
          case " ƒ ":
            funcButton[i].textContent = "Add";
            funcButton[i].title = "Addition";
            funcButton[i].style.color = "black";
            break;
          case "Add":
            funcButton[i].textContent = "Sub";
            funcButton[i].title = "Subtraction";
            funcButton[i].style.color = "black";
            break;
          case "Sub":
            funcButton[i].textContent = "Mul";
            funcButton[i].title = "Multiply";
            funcButton[i].style.color = "black";
            break;
          case "Mul":
            funcButton[i].textContent = "Avg";
            funcButton[i].title = "Average";
            funcButton[i].style.color = "black";
            break;
          case "Avg":
            funcButton[i].textContent = "A ▼";
            funcButton[i].title = "Alphabetical Ascending";
            funcButton[i].style.color = "black";
            break;
          case "A ▼":
            funcButton[i].textContent = "A ▲";
            funcButton[i].title = "Alphabetical Descending";
            funcButton[i].style.color = "black";
            break;
          default:
            funcButton[i].textContent = " ƒ ";
            funcButton[i].title = "None Selected";
            funcButton[i].style.color = "black";
            break;
        }
      } else if (e.key == "r") {
        funcButton[i].textContent = " ƒ ";
        funcButton[i].title = "None Selected";
        funcButton[i].style.color = "black";
      }
    });
  }
}

function buttonCycle2() {
  for (let i = 0; i < 40; i++) {
    funcButton2[i].addEventListener("keydown", (e) => {
      if (e.key == "f") {
        switch (funcButton2[i].textContent) {
          case " ƒ ":
            funcButton2[i].textContent = "Add";
            funcButton2[i].title = "Addition";
            funcButton2[i].style.color = "black";
            break;
          case "Add":
            funcButton2[i].textContent = "Sub";
            funcButton2[i].title = "Subtraction";
            funcButton2[i].style.color = "black";
            break;
          case "Sub":
            funcButton2[i].textContent = "Mul";
            funcButton2[i].title = "Multiply";
            funcButton2[i].style.color = "black";
            break;
          case "Mul":
            funcButton2[i].textContent = "Avg";
            funcButton2[i].title = "Average";
            funcButton2[i].style.color = "black";
            break;
          case "Avg":
            funcButton2[i].textContent = "A ▼";
            funcButton2[i].title = "Alphabetical Ascending";
            funcButton2[i].style.color = "black";
            break;
          case "A ▼":
            funcButton2[i].textContent = "A ▲";
            funcButton2[i].title = "Alphabetical Descending";
            funcButton2[i].style.color = "black";
            break;
          default:
            funcButton2[i].textContent = " ƒ ";
            funcButton2[i].title = "None Selected";
            funcButton2[i].style.color = "black";
            break;
        }
      } else if (e.key == "r") {
        funcButton2[i].textContent = " ƒ ";
        funcButton2[i].title = "None Selected";
        funcButton2[i].style.color = "black";
      }
    });
  }
}

funcButton2[40].textContent = "ƒoƒ";
funcButton2[40].title = "None Selected";

function buttonFoF() {
  funcButton2[40].addEventListener("keydown", (e) => {
    if (e.key == "f") {
      switch (funcButton2[40].textContent) {
        case "ƒoƒ":
          funcButton2[40].textContent = "Add";
          funcButton2[40].title = "Addition";
          funcButton2[40].style.color = "black";
          break;
        case "Add":
          funcButton2[40].textContent = "Sub";
          funcButton2[40].title = "Subtraction";
          funcButton2[40].style.color = "black";
          break;
        case "Sub":
          funcButton2[40].textContent = "Mul";
          funcButton2[40].title = "Multiply";
          funcButton2[40].style.color = "black";
          break;
        case "Mul":
          funcButton2[40].textContent = "Avg";
          funcButton2[40].title = "Average";
          funcButton2[40].style.color = "black";
          break;
        default:
          funcButton2[40].textContent = "ƒoƒ";
          funcButton2[40].title = "None Selected";
          funcButton2[40].style.color = "black";
          break;
      }
    } else if (e.key == "r") {
      funcButton2[40].textContent = "ƒoƒ";
      funcButton2[40].title = "None Selected";
      funcButton2[40].style.color = "black";
    }
  });
}

// start = 0, end = 40
function math(index, start, end) {
  funcButton[index].addEventListener("click", () => {
    if (funcButton[index].textContent === "Add") {
      funcButton[index].style.color = "darkred";
      let result = 0;
      for (let i = start; i < end; i++) {
        if (!isNaN(Number(data[i].value))) {
          result += Number(data[i].value);
        }
      }
      funcData[index].value = result;
    } else if (funcButton[index].textContent === "Sub") {
      funcButton[index].style.color = "darkred";
      let result = 0;
      for (let i = start; i < end; i++) {
        if (!isNaN(Number(data[i].value))) {
          result -= Number(data[i].value);
        }
      }
      funcData[index].value = result;
    } else if (funcButton[index].textContent === "Mul") {
      funcButton[index].style.color = "darkred";
      let result = 1;
      for (let i = start; i < end; i++) {
        if (!isNaN(Number(data[i].value)) && Number(data[i].value !== "")) {
          result *= Number(data[i].value);
        }
      }
      funcData[index].value = result;
    } else if (funcButton[index].textContent === "Avg") {
      funcButton[index].style.color = "darkred";
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
      funcButton[index].style.color = "darkred";
      const list = [];
      for (let i = start; i < end; i++) {
        if (data[i].value !== "") {
          list.push(data[i].value);
        }
      }

      const newList = list.sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: "base" })
      );
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
      funcButton[index].style.color = "darkred";
      const list = [];
      for (let i = start; i < end; i++) {
        if (data[i].value !== "") {
          list.push(data[i].value);
        }
      }
      const newList = list.sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: "base" })
      );
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
  let end = 40;
  for (let i = 0; i < 26; i++) {
    math(i, start, end);
    start += 40;
    end += 40;
  }
}

function horMath(index, start, end, display) {
  funcButton2[index].addEventListener("click", () => {
    if (funcButton2[index].textContent === "Add") {
      funcButton2[index].style.color = "darkred";
      let result = 0;
      for (let i = start; i < end; i += 40) {
        if (!isNaN(Number(data[i].value))) {
          result += Number(data[i].value);
        }
      }
      funcData[display].value = result;
    } else if (funcButton2[index].textContent === "Sub") {
      funcButton2[index].style.color = "darkred";
      let result = 0;
      for (let i = start; i < end; i += 40) {
        if (!isNaN(Number(data[i].value))) {
          result -= Number(data[i].value);
        }
      }
      funcData[display].value = result;
    } else if (funcButton2[index].textContent === "Mul") {
      funcButton2[index].style.color = "darkred";
      let result = 1;
      for (let i = start; i < end; i += 40) {
        if (!isNaN(Number(data[i].value)) && Number(data[i].value !== "")) {
          result *= Number(data[i].value);
        }
      }
      funcData[display].value = result;
    } else if (funcButton2[index].textContent === "Avg") {
      funcButton2[index].style.color = "darkred";
      let result = 0;
      let length = 0;
      for (let i = start; i < end; i += 40) {
        if (!isNaN(Number(data[i].value)) && Number(data[i].value !== "")) {
          result += Number(data[i].value);
          length++;
        }
      }
      result /= length;
      funcData[display].value = result;
    } else if (funcButton2[index].textContent === "A ▼") {
      funcButton2[index].style.color = "darkred";
      const list = [];
      for (let i = start; i < end; i += 40) {
        if (data[i].value !== "") {
          list.push(data[i].value);
        }
      }

      const newList = list.sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: "base" })
      );
      // Update the original data array based on the sorted values
      let sortedIndex = 0;
      for (let i = start; i < end; i += 40) {
        if (data[i].value !== "") {
          data[i].value = newList[sortedIndex];
          sortedIndex++;
        } else {
          data[i].value = "";
        }
      }
    } else if (funcButton2[index].textContent === "A ▲") {
      funcButton2[index].style.color = "darkred";
      const list = [];
      for (let i = start; i < end; i += 40) {
        if (data[i].value !== "") {
          list.push(data[i].value);
        }
      }
      const newList = list.sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: "base" })
      );
      newList.reverse();
      let sortedIndex = 0;
      for (let i = start; i < end; i += 40) {
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
  let end = 1040;
  let display = 26;
  for (let i = 0; i < 40; i++) {
    horMath(i, start, end, display);
    start += 1;
    end += 1;
    display += 1;
  }
}

function mathFoF() {
  funcButton2[40].addEventListener("click", () => {
    if (funcButton2[40].textContent === "Add") {
      funcButton2[40].style.color = "darkred";
      let result = 0;
      for (let i = 0; i < 66; i++) {
        if (!isNaN(Number(funcData[i].value))) {
          result += Number(funcData[i].value);
        }
      }
      funcData[66].value = result;
    } else if (funcButton2[40].textContent === "Sub") {
      funcButton2[40].style.color = "darkred";
      let result = 0;
      for (let i = 0; i < 66; i++) {
        if (!isNaN(Number(funcData[i].value))) {
          result -= Number(funcData[i].value);
        }
      }
      funcData[66].value = result;
    } else if (funcButton2[40].textContent === "Mul") {
      funcButton2[40].style.color = "darkred";
      let result = 1;
      for (let i = 0; i < 66; i++) {
        if (
          !isNaN(Number(funcData[i].value)) &&
          Number(funcData[i].value !== "")
        ) {
          result *= Number(funcData[i].value);
        }
      }
      funcData[66].value = result;
    } else if (funcButton2[40].textContent === "Avg") {
      funcButton2[40].style.color = "darkred";
      let result = 0;
      let length = 0;
      for (let i = 0; i < 66; i++) {
        if (
          !isNaN(Number(funcData[i].value)) &&
          Number(funcData[i].value !== "")
        ) {
          result += Number(funcData[i].value);
          length++;
        }
      }
      result /= length;
      funcData[66].value = result;
    }
  });
}

function load(saveNumber) {
  // general purpose load operation
  const rawSavedData = localStorage.getItem(`Save ${saveNumber}`);
  if (rawSavedData) {
    const savedData = JSON.parse(rawSavedData);

    // Square Data
    for (let i = 0; i < 1040; i++) {
      if (savedData.savedSData[i] !== "") {
        data[i].value = savedData.savedSData[i];
      } else {
        data[i].value = "";
      }
    }
  
    // Square Colors
    for (let i = 0; i < 1040; i++) {
      if (savedData.savedSColors[i] !== "") {
        dSquares[i].style.backgroundColor = savedData.savedSColors[i];
      } else {
        dSquares[i].style.backgroundColor = "";
      }
    }
  
    // Index Colors
    for (let i = 0; i < 68; i++) {
      if (savedData.savedIColors[i] !== "") {
        iSquares[i].style.backgroundColor = savedData.savedIColors[i];
      } else {
        iSquares[i].style.backgroundColor = "";
      }
    }
  
    // Function Data
    for (let i = 0; i < 67; i++) {
      if (savedData.savedFData[i] !== "") {
        funcData[i].value = savedData.savedFData[i];
      } else {
        funcData[i].value = "";
      }
      
    }
  
    // Function Colors
    for (let i = 0; i < 67; i++) {
      if (savedData.savedFColors[i] !== "") {
        fSquares[i].style.backgroundColor = savedData.savedFColors[i];
      } else {
        fSquares[i].style.backgroundColor = "";
      }
    }
  
    // Index Widths
    for (let i = 0; i < 27; i++) {
      iSquares[i].style.width = savedData.savedIWidth[i];
    }
  
  // The First Square
  dSquares[0].style.width = savedData.savedSDim[0];
  dSquares[0].style.height = savedData.savedSDim[1];


  return true;
} else {
  return false;
}
}

// load any preexisting data on start
document.addEventListener("DOMContentLoaded", () => load(dSquares[0].textContent));

// ** Tool Box Buttons **

// Save
saveButton.addEventListener("dblclick", () => {
  const dData = [];
  const dColors = [];
  const iColors = [];
  const fData = [];
  const fColors = [];
  const iWidth = [];
  const squareDimension = [];
  for (let i = 0; i < 1040; i++) { // cell data
    if (data[i].value === "") {
      dData.push("");
    } else {
      dData.push(data[i].value);
    }
  }
  for (let i = 0; i < 1040; i++) {
    if (dSquares[i].style.backgroundColor === "") { // cell color
      dColors.push("");
    } else {
      dColors.push(dSquares[i].style.backgroundColor);
    }
  }
  for (let i = 0; i < 68; i++) {
    if (iSquares[i].style.backgroundColor === "") { // index color
      iColors.push("");
    } else {
      iColors.push(iSquares[i].style.backgroundColor);
    }
  }
  for (let i = 0; i < 67; i++) {
    if (fSquares[i].style.backgroundColor === "") { // function color
      fColors.push("");
    } else {
      fColors.push(fSquares[i].style.backgroundColor);
    }
  }
  for (let i = 0; i < 67; i++) {
    if (funcData[i].value === "") { // function data
      fData.push("");
    } else {
      fData.push(funcData[i].value)
    }
  }
  for (let i = 0; i < 27; i++) { // index width
    iWidth.push(iSquares[i].style.width)
  }
  squareDimension.push(dSquares[0].style.width);
  squareDimension.push(dSquares[0].style.height);


  const memory = {
    savedSData : dData, 
    savedSColors : dColors, 
    savedIColors : iColors, 
    savedFData : fData, 
    savedFColors : fColors,
    savedIWidth : iWidth,
    savedSDim : squareDimension
  };

  // Convert memory to string before storing in local storage
  localStorage.setItem(
    `Save ${dSquares[0].textContent}`,
    JSON.stringify(memory)
  );
  
  alert("Save Successful");
});

// Load
loadButton.addEventListener("dblclick", () => load(dSquares[0].textContent));

// Restore
restoreButton.addEventListener("dblclick", () => {
  num = prompt("Enter file number to restore");
  load(num);
  

  if (load(num)) {
    alert(`Load Successful: File ${num} → File ${dSquares[0].textContent}`);
  } else if (!load(num)) {
    alert("File not found");
  }
});

// Print
printButton.addEventListener("dblclick", () => {
  window.print();
});

// ** Fuction Calls **

// enables individual coloring 
individualColor();

// all squares have color functionality
allColumns();
allRows();

// enables numbers to be formatted on the right of the square
numberStyle();

// enables resizable rows
stretchyRows();

// buttons can now cycle between modes
buttonCycle();
buttonCycle2();
buttonFoF();

// functional squares are able to do math related operations
mathAll();
horMathAll();
mathFoF();
