// this example adds and removes elements for each edit and save
// the example in index2.js (with the toggle) is more efficient

const form = document.addItem
const list = document.getElementById("list")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    let item = form.title.value
    form.title.value = ""

    const li = document.createElement("li")

    const div = document.createElement("div")
    div.textContent = item

    const newInput = document.createElement("input")

    const editButton = document.createElement("button")
    editButton.textContent = "edit"

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "x"

    const saveButton = document.createElement("button")
    saveButton.textContent = "save"

    li.append(div)
    li.append(editButton)
    li.append(deleteButton)

    list.append(li)

    editButton.addEventListener("click", function () {
        div.replaceWith(newInput)
        newInput.value = item
        newInput.style.display = "block"
        editButton.remove()

        li.insertBefore(saveButton, deleteButton)
    })

    deleteButton.addEventListener("click", function () {
        li.remove()
    })

    saveButton.addEventListener("click", function () {
        item = newInput.value
        div.textContent = item
        newInput.replaceWith(div)
        saveButton.remove()
        li.insertBefore(editButton, deleteButton)

    })

})
