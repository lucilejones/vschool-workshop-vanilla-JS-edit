const form = document.addItem;
const list = document.getElementById("list");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const item = form.title.value;
    form.title.value = "";

    const li = document.createElement("li");
    list.append(li);

    const div = document.createElement("div");
    div.textContent = item;
    li.appendChild(div);

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.style.display = "none"; // Initially hide input

    const editButton = document.createElement("button");
    editButton.textContent = "edit";

    editButton.addEventListener("click", function () {
        toggleEditView();
    });
    li.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";

    deleteButton.addEventListener("click", function () {
        li.remove();
    });
    li.appendChild(deleteButton);

    const saveButton = document.createElement("button");
    saveButton.textContent = "save";

    saveButton.style.display = "none"; // Initially hide save button
    saveButton.addEventListener("click", function () {
        const newItem = newInput.value;
        div.textContent = newItem;
        toggleEditView();
    });
    li.appendChild(saveButton);

    function toggleEditView() {
        if (newInput.style.display === "none") {
            // Switch to edit mode
            div.style.display = "none";
            newInput.style.display = "block";
            newInput.value = div.textContent;
            editButton.style.display = "none";
            saveButton.style.display = "inline-block";

            li.insertBefore(newInput, editButton);
            li.insertBefore(saveButton, deleteButton)
        } else {
            // Switch to view mode
            div.style.display = "block";
            newInput.style.display = "none";
            editButton.style.display = "inline-block";
            saveButton.style.display = "none";
        }
    }

    li.appendChild(newInput);
});
