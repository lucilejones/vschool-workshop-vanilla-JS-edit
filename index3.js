// example using event delegation
// instead of attaching event listeners to multiple child elements, we can attach a single event listener to a common ancestor (or parent) element
// the parent element then handles all events that bubble up from its children


const form = document.addItem;
const list = document.getElementById("list");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // when the form is submitted, a new list item ('li') is created with its children: 'div', 'newInput', 'editButton', 'deleteButton', and 'saveButton'

    let item = form.title.value;
    form.title.value = "";

    const li = document.createElement("li");
    list.append(li);

    const div = document.createElement("div");
    div.textContent = item;
    li.append(div);

    const newInput = document.createElement("input");
    newInput.style.display = "none"; // Initially hide the input

    const editButton = document.createElement("button");
    editButton.textContent = "edit";

    li.append(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";

    li.append(deleteButton);

    const saveButton = document.createElement("button");
    saveButton.textContent = "save";

    saveButton.style.display = "none"; // Initially hide save button
    li.append(saveButton);

    li.append(newInput);
});

list.addEventListener("click", (event) => {
    // a single event listener is added to the '#list' element to handle click events for all child elements

    const li = event.target.closest("li"); // finds the nearest ancestor 'li' element of the clicked element / the clicked target

    if (!li) return; // If not clicking on a list item, do nothing

    // the relevant child elements within the 'li' are identified
    // querySelector finds the first element that matches a specified CSS selector; in this code we select elements within the 'li' by their tag names and positions
    // ':nth-of-type(n)' - a CSS pseudo-class that matches elements based on their position among siblings of the same type
    const div = li.querySelector("div");
    const newInput = li.querySelector("input");
    const editButton = li.querySelector("button:nth-of-type(1)"); 
    // selects the first button, which is the 'edit' button
    const deleteButton = li.querySelector("button:nth-of-type(2)"); 
    // selects the second button, which is the 'delete' button
    const saveButton = li.querySelector("button:nth-of-type(3)");
    // selects the third button, which is the 'save' button

    // based on which button is clicked, the appropriate action is performed
    if (event.target === editButton) {
        div.style.display = "none";
        newInput.style.display = "block";
        newInput.value = div.textContent;
        editButton.style.display = "none";
        saveButton.style.display = "inline";
        
    } else if (event.target === deleteButton) {
        li.remove();
    } else if (event.target === saveButton) {
        div.textContent = newInput.value;
        newInput.style.display = "none";
        div.style.display = "block";
        saveButton.style.display = "none";
        editButton.style.display = "inline";
    }
});



// note about styling the edit input
// if we use the same insertBefore() in the editButton functionality to keep the formatting (that we use in the index2.js example), that changes the order of the buttons, so then the third button is actually not the save button, and we're clickin on the button that says 'save' and it's deleting it