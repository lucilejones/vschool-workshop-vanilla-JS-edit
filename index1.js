const form = document.addItem
const list = document.getElementById("list")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    var item = form.title.value
    form.title.value = ""

    var li = document.createElement("li")
    li.style.textAlign = "center"
    li.style.marginBottom = "10px"
    list.append(li)

    var div = document.createElement("div")
    div.textContent = item
    li.append(div)

    var newInput = document.createElement("input")

    var editButton = document.createElement("button")
    editButton.textContent = "edit"
    editButton.style.margin = "2.5px"
    editButton.addEventListener("click", function () {
        div.replaceWith(newInput)
        newInput.value = item
        editButton.remove()

        li.insertBefore(saveButton, deleteButton)
    })
    li.append(editButton)

    var deleteButton = document.createElement("button")
    deleteButton.textContent = "x"
    deleteButton.style.margin = "2.5px"
    deleteButton.addEventListener("click", function () {
        li.remove()
    })
    li.append(deleteButton)

    var saveButton = document.createElement("button")
    saveButton.textContent = "save"
    saveButton.style.margin = "2.5px"
    saveButton.addEventListener("click", function () {
        item = newInput.value
        div.textContent = item
        newInput.replaceWith(div)
        saveButton.remove()
        li.insertBefore(editButton, deleteButton)

    })

})