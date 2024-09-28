// 1. Selecting Elements
const elementById = document.getElementById('myId'); // Select by ID
const elementsByClassName = document.getElementsByClassName('myClass'); // Select by class name
const elementsByTagName = document.getElementsByTagName('div'); // Select by tag name
const firstElement = document.querySelector('.myClass'); // Select first matching element
const allElements = document.querySelectorAll('div.myClass'); // Select all matching elements

// 2. Modifying Elements
elementById.textContent = 'New text content'; // Change text content
elementById.innerHTML = '<strong>New HTML content</strong>'; // Change HTML content
elementById.setAttribute('data-custom', 'value'); // Set attribute
const value = elementById.getAttribute('data-custom'); // Get attribute
elementById.style.color = 'blue'; // Change style

// 3. Creating and Appending Elements
const newElement = document.createElement('div'); // Create new element
document.body.appendChild(newElement); // Append as last child
document.body.insertBefore(newElement, referenceElement); // Insert before reference node
elementById.parentNode.removeChild(elementById); // Remove child

// 4. Event Handling
elementById.addEventListener('click', function() {
    alert('Element clicked!'); // Handle click event
});
elementById.removeEventListener('click', handler); // Remove event handler

// 5. Traversing the DOM
const parent = elementById.parentNode; // Get parent
const children = elementById.children; // Get child elements
const firstChild = elementById.firstChild; // Get first child
const lastChild = elementById.lastChild; // Get last child
const next = elementById.nextSibling; // Get next sibling
const previous = elementById.previousSibling; // Get previous sibling
