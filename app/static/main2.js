const iSquares = document.querySelectorAll(".indexSquare"); // 68
const dSquares = document.querySelectorAll(".dataSquare"); // 1041
const fSquares = document.querySelectorAll(".funcSquare"); // 67

const data = document.querySelectorAll(".text"); // 1040
const funcData = document.querySelectorAll(".func"); // 67
const funcButton = document.querySelectorAll(".funcButton"); // 26
const funcButton2 = document.querySelectorAll(".funcButton2"); // 40

const saveButton = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");
const refreshButton = document.querySelector("#refresh");
const restoreButton = document.querySelector("#restoreButton");
const printButton = document.querySelector("#printButton");
const customButton = document.querySelector("#customButton");
const customBar = document.querySelector(".customBar");
const autoSave = document.querySelector("#autoSave");

const customStart = document.querySelectorAll(".customStart"); // 2
const customEnd = document.querySelectorAll(".customEnd"); // 2
const customResult = document.querySelectorAll(".customResult"); // 2
const customFunction = document.querySelectorAll(".customFunction"); // 2

customButton.addEventListener("click", () => {
  if (saveButton.style.display != "none") {
    saveButton.style.display = "none";
    loadButton.style.display = "none";
    refreshButton.style.display = "none";
    restoreButton.style.display = "none";
    printButton.style.display = "none";
    customBar.style.display = "flex";
    autoSave.style.display = "none";
  } else {
    saveButton.style.display = "block";
    loadButton.style.display = "block";
    refreshButton.style.display = "block";
    restoreButton.style.display = "block";
    printButton.style.display = "block";
    customBar.style.display = "none";
    autoSave.style.display = "block";
  }
});

autoSave.addEventListener("click", () => {
  if (autoSave.style.color == "black") {
  autoSave.style.color = "green";
  autoSave.style.borderColor = "white";
  } else {
    autoSave.style.color = "black";
  }
})

window.addEventListener("beforeunload", () => {
  if (autoSave.style.color === "green") {
    save();
  }
})

function preciseStretchAdd(iSquareStart, start, end, overlap) {
  iSquares[iSquareStart].addEventListener("mouseup", () => {
    for (let i = start; i < end; i += 40) {
      dSquares[i].style.height = iSquares[iSquareStart].style.height;
    }
    fSquares[overlap].style.height = iSquares[iSquareStart].style.height;
  });
}

iSquares[67].addEventListener("mouseup", () => {
  for (let i = 0; i < 26; i++) {
    fSquares[i].style.height = iSquares[67].style.height;
  }
  fSquares[66].style.height = iSquares[67].style.height;
});

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
  if (!isNaN(dataType[i].value) === false || dataType[i].value.length === 0) {
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
// Mobile Compatibility *Unused
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

function translator(coordinates) {
  switch (coordinates.toLowerCase()) {
    case "a":
      return 0;
    case "b":
      return 40;
    case "c":
      return 80;
    case "d":
      return 120;
    case "e":
      return 160;
    case "f":
      return 200;
    case "g":
      return 240;
    case "h":
      return 280;
    case "i":
      return 320;
    case "j":
      return 360;
    case "k":
      return 400;
    case "l":
      return 440;
    case "m":
      return 480;
    case "n":
      return 520;
    case "o":
      return 560;
    case "p":
      return 600;
    case "q":
      return 640;
    case "r":
      return 680;
    case "s":
      return 720;
    case "t":
      return 760;
    case "u":
      return 800;
    case "v":
      return 840;
    case "w":
      return 880;
    case "x":
      return 920;
    case "y":
      return 960;
    case "z":
      return 1000;
    default:
      return 0;
  }
}

function clearBorders() {
  for (let i = 1; i < 1041; i++) {
    dSquares[i].style.borderColor = "black";
    dSquares[i].title = "";
  }
}

function targetHighlight(startInput, color, title) {
  startInput.addEventListener("input", () => {
    if (startInput.value.length > 1) {
      const k =
        translator(startInput.value[0]) + parseInt(startInput.value.slice(1));
      dSquares[k].style.borderColor = color;
      dSquares[k].title = title;
      return k; // also returns the index for later use
    }
  });
}

function emptySelection(targetA, targetB) {
  targetA.addEventListener("input", () => {
    if (targetA.value.length === 0 && targetB.value.length === 0) {
      clearBorders();
    }
  });
  targetB.addEventListener("input", () => {
    if (targetA.value.length === 0 && targetB.value.length === 0) {
      clearBorders();
    }
  });
}

emptySelection(customStart[0], customEnd[0]);
emptySelection(customStart[1], customEnd[1]);

// rows
customFunction[0].addEventListener("click", () => {
  const start =
    translator(customStart[0].value[0]) +
    parseInt(customStart[0].value.slice(1));
  const end =
    translator(customEnd[0].value[0]) + parseInt(customEnd[0].value.slice(1));
  let rowStart = parseInt(customStart[0].value.slice(1));
  let rowEnd = parseInt(customEnd[0].value.slice(1));
  if (rowStart < rowEnd) {
    // For loop that iterates rows from start to finish
    for (let i = start; i < rowEnd + 1000; i += 40) {
      dSquares[i].style.borderColor = "blue";
      if (i === end) {
        dSquares[i].style.borderColor = "lime";
        break;
      }
      if (i === rowStart + 1000) {
        i = rowStart + 1 - 40;
        if (rowStart !== rowEnd) {
          rowStart++;
        }
      }

      if (i === start) {
        dSquares[i].style.borderColor = "fuchsia";
      }
      if (i === end) {
        dSquares[i].style.borderColor = "lime";
      }
    }
  } else if (rowStart > rowEnd) {
    // Reverse for loop when row start is ahead of row end
    for (let i = start; i > rowEnd - 1000; i -= 40) {
      dSquares[i].style.borderColor = "blue";
      if (i === end) {
        dSquares[i].style.borderColor = "lime";
        break;
      }
      if (i === rowStart) {
        i = rowStart - 1 + 1040;
        if (rowStart !== rowEnd) {
          rowStart--;
        }
      }

      if (i === start) {
        dSquares[i].style.borderColor = "fuchsia";
      }
      if (i === end) {
        dSquares[i].style.borderColor = "lime";
      }
    }
  } else {
    // needed when the height of a and b are equal
    for (let i = start; i < end; i += 40) {
      dSquares[i].style.borderColor = "blue";
      if (i === start) {
        dSquares[i].style.borderColor = "fuchsia";
      }
      if (i === end) {
        dSquares[i].style.borderColor = "lime";
      }
    }
  }
});

// Columns
customFunction[1].addEventListener("click", () => {
  const start =
    translator(customStart[1].value[0]) +
    parseInt(customStart[1].value.slice(1));
  const end =
    translator(customEnd[1].value[0]) + parseInt(customEnd[1].value.slice(1));

  if (start <= end) {
    // for loop that travels down from start to finish
    for (let i = start; i <= end; i++) {
      dSquares[i].style.borderColor = "cornflowerblue";
      if (i === start) {
        dSquares[i].style.borderColor = "fuchsia";
      }
      if (i === end) {
        dSquares[i].style.borderColor = "lime";
      }
    }
  } else if (start > end) {
    // reverse for loop that travels up from start to finish
    for (let i = start; i >= end; i--) {
      dSquares[i].style.borderColor = "cornflowerblue";
      if (i === start) {
        dSquares[i].style.borderColor = "fuchsia";
      }
      if (i === end) {
        dSquares[i].style.borderColor = "lime";
      }
    }
  }
});

targetHighlight(customStart[0], "fuchsia", "Row Start");
targetHighlight(customStart[1], "fuchsia", "Column Start");
targetHighlight(customEnd[0], "lime", "Row End");
targetHighlight(customEnd[1], "lime", "Column End");
targetHighlight(customResult[0], "red", "Row Result");
targetHighlight(customResult[1], "red", "Column Result");

function cycle(button, e) {
  if (e.key == "f") {
    switch (button.textContent) {
      case " ƒ ":
        button.textContent = "Add";
        button.title = "Addition";
        button.style.color = "black";
        break;
      case "Add":
        button.textContent = "Sub";
        button.title = "Subtraction";
        button.style.color = "black";
        break;
      case "Sub":
        button.textContent = "Mul";
        button.title = "Multiply";
        button.style.color = "black";
        break;
      case "Mul":
        button.textContent = "Avg";
        button.title = "Average";
        button.style.color = "black";
        break;
      case "Avg":
        button.textContent = "A ▼";
        button.title = "Alphabetical Ascending";
        button.style.color = "black";
        break;
      case "A ▼":
        button.textContent = "A ▲";
        button.title = "Alphabetical Descending";
        button.style.color = "black";
        break;
      default:
        button.textContent = " ƒ ";
        button.title = "None Selected";
        button.style.color = "black";
        break;
    }
  } else if (e.key == "r") {
    button.textContent = " ƒ ";
    button.title = "None Selected";
    button.style.color = "black";
  }
}

function buttonCycle() {
  for (let i = 0; i < 26; i++) {
    funcButton[i].addEventListener("keydown", (e) => {
      cycle(funcButton[i], e);
    });
  }
}

function buttonCycle2() {
  for (let i = 0; i < 40; i++) {
    funcButton2[i].addEventListener("keydown", (e) => {
      cycle(funcButton2[i], e);
    });
  }
}

function buttonCycle3() {
  customFunction[0].addEventListener("keydown", (e) => {
    cycle(customFunction[0], e);
  });
  customFunction[1].addEventListener("keydown", (e) => {
    cycle(customFunction[1], e);
  });
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

    // Index Heights
    for (let i = 27; i < 68; i++) {
      iSquares[i].style.height = savedData.savedIHeight[i - 27];
    }

    // Correct Row Heights

    let index = 27;
    let start = 1;
    let end = 1002;
    let overlap = 26;
    for (let i = 27; i < 67; i++) {
      for (let i = start; i < end; i += 40) {
        dSquares[i].style.height = iSquares[index].style.height;
      }
      fSquares[overlap].style.height = iSquares[index].style.height;
      index++;
      start++;
      end++;
      overlap++;
    }

    for (let i = 0; i < 26; i++) {
      fSquares[i].style.height = iSquares[67].style.height;
    }
    fSquares[66].style.height = iSquares[67].style.height;

    if (savedData.autoSave) {
      autoSave.style.color = "green";
      autoSave.style.borderColor = "white";
    }

    return true;
  } else {
    return false;
  }
}

// load any preexisting data on start
document.addEventListener("DOMContentLoaded", () =>
  load(dSquares[0].textContent)
);

// ** Tool Box Buttons **

function save() {
  const dData = [];
  const dColors = [];
  const iColors = [];
  const fData = [];
  const fColors = [];
  const iWidth = [];
  const squareDimension = [];
  const iHeight = [];
  // Square Data
  for (let i = 0; i < 1040; i++) {
    if (data[i].value === "") {
      dData.push("");
    } else {
      dData.push(data[i].value);
    }
  }

  // Data Colors
  for (let i = 0; i < 1040; i++) {
    if (dSquares[i].style.backgroundColor === "") {
      dColors.push("");
    } else {
      dColors.push(dSquares[i].style.backgroundColor);
    }
  }

  // Index Colors
  for (let i = 0; i < 68; i++) {
    if (iSquares[i].style.backgroundColor === "") {
      iColors.push("");
    } else {
      iColors.push(iSquares[i].style.backgroundColor);
    }
  }

  // Function Colors
  for (let i = 0; i < 67; i++) {
    if (fSquares[i].style.backgroundColor === "") {
      fColors.push("");
    } else {
      fColors.push(fSquares[i].style.backgroundColor);
    }
  }

  // Function Data
  for (let i = 0; i < 67; i++) {
    if (funcData[i].value === "") {
      fData.push("");
    } else {
      fData.push(funcData[i].value);
    }
  }

  // Width Of Indexes (A - Z)
  for (let i = 0; i < 27; i++) {
    iWidth.push(iSquares[i].style.width);
  }

  // The First Square
  squareDimension.push(dSquares[0].style.width);
  squareDimension.push(dSquares[0].style.height);

  // Height Of Indexes (1 - 40)
  for (let i = 27; i < 68; i++) {
    iHeight.push(iSquares[i].style.height);
  }

  const memory = {
    savedSData: dData,
    savedSColors: dColors,
    savedIColors: iColors,
    savedFData: fData,
    savedFColors: fColors,
    savedIWidth: iWidth,
    savedSDim: squareDimension,
    savedIHeight: iHeight,
    autoSave: autoSave.style.color === "green" ? true : false,
  };

  // Convert memory to string before storing in local storage
  localStorage.setItem(
    `Save ${dSquares[0].textContent}`,
    JSON.stringify(memory)
  );
}

// Save
saveButton.addEventListener("dblclick", () => {
  save();

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
printButton.addEventListener("click", () => {
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
buttonCycle3();
buttonFoF();

// functional squares are able to do math related operations
mathAll();
horMathAll();
mathFoF();
