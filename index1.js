const form = document.addItem
const list = document.getElementById("list")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    let item = form.title.value
    form.title.value = ""

    const li = document.createElement("li")
    list.append(li)

    const div = document.createElement("div")
    div.textContent = item
    li.append(div)

    const newInput = document.createElement("input")

    const editButton = document.createElement("button")
    editButton.textContent = "edit"

    editButton.addEventListener("click", function () {
        div.replaceWith(newInput)
        newInput.value = item
        newInput.style.display = "block"
        editButton.remove()

        li.insertBefore(saveButton, deleteButton)
    })
    li.append(editButton)

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "x"

    deleteButton.addEventListener("click", function () {
        li.remove()
    })
    li.append(deleteButton)

    const saveButton = document.createElement("button")
    saveButton.textContent = "save"

    saveButton.addEventListener("click", function () {
        item = newInput.value
        div.textContent = item
        newInput.replaceWith(div)
        saveButton.remove()
        li.insertBefore(editButton, deleteButton)

    })

})
