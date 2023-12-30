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

    deleteButton.className = "deleteButton";
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
      localStorage.removeItem(name);
    });

    button.className = incoming[0];
    button.textContent = incoming[1];

    // Create the anchor element for the button
    const projectLink = document.createElement("a");
    projectLink.href = incoming[2];
    projectLink.appendChild(button);

    space.append(projectLink);
    space.append(deleteButton);

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
  if (bar.value === "") {
    // handle case where bar value is empty
  } else {
    if (counter !== 10) {
      counter++;
      const space = document.createElement("div");
      const button = document.createElement("button");
      const deleteButton = document.createElement("button");

      deleteButton.className = "deleteButton";
      deleteButton.textContent = "X";
      deleteButton.addEventListener("dblclick", () => {
        localStorage.removeItem(`project ${counter}`);
      });

      button.className = "project";
      button.textContent = bar.value;

      // Create the anchor element for the button
      const projectLink = document.createElement("a");
      projectLink.href = `${counter}/${button.textContent}`;
      projectLink.appendChild(button);

      space.append(projectLink);
      space.append(deleteButton);

      holder.append(space);

      const store = [button.className, button.textContent, projectLink.href];
      localStorage.setItem(`project ${counter}`, JSON.stringify(store));
    } else {
      // handle case where counter is 10
    }
  }
});
