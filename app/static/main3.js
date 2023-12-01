const addButton = document.querySelector(".createProjectButton");
const bar = document.querySelector(".createProject");
const holder = document.querySelector(".projectHolder");
let counter = 0

document.addEventListener("DOMContentLoaded", () => {
    const information = localStorage.getItem("project 1")
    if (information) {
    counter++
    const incoming = JSON.parse(information)
    const space = document.createElement("div");
    const project = document.createElement("a");
    const button = document.createElement("button");
    const deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => {
            localStorage.removeItem("project 1");
        })
    button.className = incoming[0];
    button.textContent = incoming[1];
    space.append(button)
    space.append(deleteButton);
    project.append(space)
    project.href = incoming[2];
    holder.append(project);
}
})

document.addEventListener("DOMContentLoaded", () => {
    const information = localStorage.getItem("project 2")
    if (information) {
    counter++
    const incoming = JSON.parse(information)
    const space = document.createElement("div");
    const project = document.createElement("a");
    const button = document.createElement("button");
    const deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => {
            localStorage.removeItem("project 2");
        })
    button.className = incoming[0];
    button.textContent = incoming[1];
    space.append(button)
    space.append(deleteButton);
    project.append(space)
    project.href = incoming[2];
    holder.append(project);
}
})

document.addEventListener("DOMContentLoaded", () => {
    const information = localStorage.getItem("project 3")
    if (information) {
    counter++
    const incoming = JSON.parse(information)
    const space = document.createElement("div");
    const project = document.createElement("a");
    const button = document.createElement("button");
    const deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => {
            localStorage.removeItem("project 3");
        })
    button.className = incoming[0];
    button.textContent = incoming[1];
    space.append(button)
    space.append(deleteButton);
    project.append(space)
    project.href = incoming[2];
    holder.append(project);
}
})

document.addEventListener("DOMContentLoaded", () => {
    const information = localStorage.getItem("project 4")
    if (information) {
    counter++
    const incoming = JSON.parse(information)
    const space = document.createElement("div");
    const project = document.createElement("a");
    const button = document.createElement("button");
    const deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => {
            localStorage.removeItem("project 4");
        })
    button.className = incoming[0];
    button.textContent = incoming[1];
    space.append(button)
    space.append(deleteButton);
    project.append(space)
    project.href = incoming[2];
    holder.append(project);
}
})

addButton.addEventListener("click", () => {
    if (bar.value === "") {
      
    } else {
        if (counter !== 4) {
        counter++
        const space = document.createElement("div");
        const project = document.createElement("a");
        const button = document.createElement("button");
        const deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
        deleteButton.textContent = "X";
        deleteButton.addEventListener("dblclick", () => {
            localStorage.removeItem(`project ${counter}`);
        })
        button.className = "project";
        button.textContent = bar.value;
        space.append(button)
        space.append(deleteButton);
        project.append(space)
        project.href = `${counter}`;
        holder.append(project);
        const store = [button.className, button.textContent, project.href];
        localStorage.setItem(`project ${counter}`, JSON.stringify(store)) } else {}
    }
})

