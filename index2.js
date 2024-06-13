const form = document.addItem;
const list = document.getElementById("list");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var item = form.title.value;
    form.title.value = "";

    var li = document.createElement("li");
    li.style.textAlign = "center";
    li.style.marginBottom = "10px";
    list.append(li);

    var div = document.createElement("div");
    div.textContent = item;
    li.appendChild(div);

    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.style.display = "none"; // Initially hide input

    var editButton = document.createElement("button");
    editButton.textContent = "edit";
    editButton.style.margin = "2.5px";
    editButton.addEventListener("click", function () {
        toggleEditView();
    });
    li.appendChild(editButton);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.style.margin = "2.5px";
    deleteButton.addEventListener("click", function () {
        li.remove();
    });
    li.appendChild(deleteButton);

    var saveButton = document.createElement("button");
    saveButton.textContent = "save";
    saveButton.style.margin = "2.5px";
    saveButton.style.display = "none"; // Initially hide save button
    saveButton.addEventListener("click", function () {
        item = newInput.value;
        div.textContent = item;
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
