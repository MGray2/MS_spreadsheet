const addButton = document.querySelector(".createProjectButton");
const bar = document.querySelector(".createProject");
const holder = document.querySelector(".projectHolder");
let counter = 0;

function loadProjects(name) {
  const information = localStorage.getItem(name);
  if (information) {
    counter++
    const incoming = JSON.parse(information);
    const space = document.createElement("div");
    const project = document.createElement("a");
    const button = document.createElement("button");
    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
      localStorage.removeItem(name);
    });
    button.className = incoming[0];
    button.textContent = incoming[1];
    space.append(button);
    space.append(deleteButton);
    project.append(space);
    project.href = incoming[2];
    holder.append(project);
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
  } else {
    if (counter !== 10) {
      counter++;
      const space = document.createElement("div");
      const project = document.createElement("a");
      const button = document.createElement("button");
      const deleteButton = document.createElement("button");
      deleteButton.className = "deleteButton";
      deleteButton.textContent = "X";
      deleteButton.addEventListener("dblclick", () => {
        localStorage.removeItem(`project ${counter}`);
      });
      button.className = "project";
      button.textContent = bar.value;
      space.append(button);
      space.append(deleteButton);
      project.append(space);
      project.href = `${counter}/${button.textContent}`;
      holder.append(project);
      const store = [button.className, button.textContent, project.href];
      localStorage.setItem(`project ${counter}`, JSON.stringify(store));
    } else {
    }
  }
});
