const addButton = document.querySelector(".createProjectButton");
const bar = document.querySelector(".createProject");
const holder = document.querySelector(".projectHolder");

const loads = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const unloads = [];


function loadProjects(name) {
  const information = localStorage.getItem(name);
  if (information) {
    const incoming = JSON.parse(information);
    const space = document.createElement("div");
    const button = document.createElement("button");
    const deleteButton = document.createElement("button");
    const renameButton = document.createElement("button");

    button.className = "project";
    button.textContent = incoming[0];

    deleteButton.className = "deleteButton";
    deleteButton.title = `Delete ${button.textContent}?`;
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
      const response = window.confirm(
        `Are you sure you want to remove "${button.textContent}"`
      );
      if (response) {
        localStorage.removeItem(name);
        button.remove();
        deleteButton.remove();
        renameButton.remove();
      }
    });

    renameButton.className = "renameButton";
    renameButton.textContent = "✐";
    renameButton.title = `Rename ${button.textContent}?`;
    renameButton.addEventListener("click", () => {
      const response = prompt("Please enter a new name for your project.");
      if (response != null && response.length !== 0) {
        button.textContent = response;
        projectLink.href = `${incoming[1]}/${button.textContent}`;
        const store = [
          button.textContent,
          incoming[1],
        ];
        localStorage.setItem(`project ${incoming[1]}`, JSON.stringify(store));
      }
    });

    // Create the anchor element for the button
    const projectLink = document.createElement("a");
    projectLink.href = `${incoming[1]}/${button.textContent}`;
    projectLink.appendChild(button);

    space.append(projectLink);
    space.append(deleteButton);
    space.append(renameButton);
    space.className = "singleProjectHolder";

    holder.append(space);
    return true;
  } else {
    return false;
  }
}


for (item of loads) {
  if (!loadProjects(`project ${item}`)) {
    unloads.push(item);
  }
}


addButton.addEventListener("click", () => {
  if (bar.value === "") {
    // handle case where bar value is empty
  } else {
    if (unloads.length !== 0) {
      const counter = unloads.shift();
      const space = document.createElement("div");
      const button = document.createElement("button");
      const deleteButton = document.createElement("button");
      const renameButton = document.createElement("button");

      button.className = "project";
      button.textContent = bar.value;
      
      // delete button
      deleteButton.className = "deleteButton";
      deleteButton.title = `Delete ${button.textContent}?`;
      deleteButton.textContent = "X";
      deleteButton.addEventListener("click", () => {
        const response = window.confirm(
          `Are you sure you want to remove "${button.textContent}"`
        );
        if (response) {
          localStorage.removeItem(`Project ${counter}`);
          button.remove();
          deleteButton.remove();
          renameButton.remove();
        }
      });

      // rename button
      renameButton.className = "renameButton";
      renameButton.textContent = "✐";
      renameButton.title = `Rename ${button.textContent}?`;
      renameButton.addEventListener("click", () => {
        const response = prompt("Please enter a new name for your project.");
        if (response != null && response.length !== 0 && response.length < 51) {
          button.textContent = response;
          projectLink.href = `${counter}/${button.textContent}`;
          const store = [
            button.textContent,
            counter,
          ];
          localStorage.setItem(`project ${counter}`, JSON.stringify(store));
        }
      });

      // Create the anchor element for the button
      const projectLink = document.createElement("a");
      projectLink.href = `${counter}/${button.textContent}`;
      projectLink.appendChild(button);

      space.append(projectLink);
      space.append(deleteButton);
      space.append(renameButton);
      space.className = "singleProjectHolder";

      holder.append(space);

      const store = [
        button.textContent,
        counter,
      ];
      localStorage.setItem(`project ${counter}`, JSON.stringify(store));
    } else {
      // nothing
    }
  }
});
