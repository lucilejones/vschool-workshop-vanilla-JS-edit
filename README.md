# vschool-workshop-vanilla-JS-edit

# index1.js
The first JavaScript file (index1.js) is the one used in the workshop demonstration. It uses a toggle function to switch between the view mode and the edit mode.<br/>

# index2.js
The second JavaScript file (index2.js) is mostly the same code, but the functionality for the edit and the save has been moved outside the submit function.<br/>
This can improve code readability and organization, and make the code modular (separating the concerns) and reusable.<br/>

# index3.js
The third JavaScript file (index3.js) is an example that uses event delegation.<br/>
Instead of attaching event listeners to multiple child elements, we can attach a single event listener to a common ancestor (or parent) element. <br/>
The parent element then handles all events that bubble up from its children.<br/>
Event delegation can consume less memory and be more efficient for handling events on a large number of dynamically created elements.<br/>
The event targets do need to be handled carefullly.
