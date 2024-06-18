// this example moves the edit and save functionality outside of the submit function
// this can improve code readability and organization
// it makes the code modular (separating the concerns) and reusable

const form = document.addItem;
const list = document.getElementById("list");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const item = form.title.value;
    form.title.value = "";

    const li = document.createElement("li");

    const div = document.createElement("div");
    div.textContent = item;

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.style.display = "none"; // Initially hide input

    const editButton = document.createElement("button");
    editButton.textContent = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";

    const saveButton = document.createElement("button");
    saveButton.textContent = "save";
    saveButton.style.display = "none"; // Initially hide save button

    li.appendChild(div);
    li.appendChild(newInput);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    li.appendChild(saveButton);

    list.append(li);

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    editButton.addEventListener("click", function () {
        toggleEditView(div, newInput, editButton, saveButton);
    });

    saveButton.addEventListener("click", function () {
        saveEditView(div, newInput, editButton, saveButton);
    });
});

function toggleEditView(div, newInput, editButton, saveButton) {
    if (newInput.style.display === "none") {
        // Switch to edit mode
        div.style.display = "none"; // hides the div
        newInput.style.display = "block"; // shows the input
        newInput.value = div.textContent;
        editButton.style.display = "none"; // hides the edit button
        saveButton.style.display = "inline-block"; // shows the save button
    } else {
        // Switch to view mode
        div.style.display = "block"; // shows the div
        newInput.style.display = "none"; // hides the input
        editButton.style.display = "inline-block"; // shows the edit button
        saveButton.style.display = "none"; // hides the save button
    }
}

function saveEditView(div, newInput, editButton, saveButton) {
    const newItem = newInput.value;
    div.textContent = newItem;
    toggleEditView(div, newInput, editButton, saveButton);
}
