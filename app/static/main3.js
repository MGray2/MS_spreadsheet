const addButton = document.querySelector(".createProjectButton");
const bar = document.querySelector(".createProject");
const holder = document.querySelector(".projectHolder");
let counter = 0;

function loadProjects(name) {
  const information = localStorage.getItem(name);
  if (information) {
    counter++;
    const incoming = JSON.parse(information);
    const space = document.createElement("div");
    const button = document.createElement("button");
    const deleteButton = document.createElement("button");
    const renameButton = document.createElement("button");

    button.className = incoming[0];
    button.textContent = incoming[1];

    deleteButton.className = "deleteButton";
    deleteButton.title = `Delete ${incoming[1]}?`;
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
      const response = window.confirm(
        `Are you sure you want to remove "${incoming[1]}"`
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
    renameButton.title = `Rename ${incoming[1]}?`;
    renameButton.addEventListener("click", () => {
      const response = prompt("Please enter a new name for your project.");
      if (response != null && response.length !== 0) {
        button.textContent = response;
        projectLink.href = `${incoming[3]}/${button.textContent}`;
        const store = [
          button.className,
          button.textContent,
          projectLink.href,
          counter,
        ];
        localStorage.setItem(`project ${incoming[3]}`, JSON.stringify(store));
      }
    });

    // Create the anchor element for the button
    const projectLink = document.createElement("a");
    projectLink.href = incoming[2];
    projectLink.appendChild(button);

    space.append(projectLink);
    space.append(deleteButton);
    space.append(renameButton);
    space.className = "singleProjectHolder";

    holder.append(space);
  }
}

loadProjects("project 1");
loadProjects("project 2");
loadProjects("project 3");
loadProjects("project 4");
loadProjects("project 5");
loadProjects("project 6");
loadProjects("project 7");
loadProjects("project 8");
loadProjects("project 9");
loadProjects("project 10");

addButton.addEventListener("click", () => {
  if (bar.value === "" || bar.value.length > 50) {
    // handle case where bar value is empty
  } else {
    if (counter !== 10) {
      counter++;
      const space = document.createElement("div");
      const button = document.createElement("button");
      const deleteButton = document.createElement("button");
      const renameButton = document.createElement("button");

      button.className = "project";
      button.textContent = bar.value;

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

      renameButton.className = "renameButton";
      renameButton.textContent = "✐";
      renameButton.title = `Rename ${button.textContent}?`;
      renameButton.addEventListener("click", () => {
        const response = prompt("Please enter a new name for your project.");
        if (response != null && response.length !== 0 && response.length < 51) {
          button.textContent = response;
          projectLink.href = `${counter}/${button.textContent}`;
          const store = [
            button.className,
            button.textContent,
            projectLink.href,
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
        button.className,
        button.textContent,
        projectLink.href,
        counter,
      ];
      localStorage.setItem(`project ${counter}`, JSON.stringify(store));
    } else {
      // nothing
    }
  }
});
