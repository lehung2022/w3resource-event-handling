1. Write a JavaScript program that creates a button and add a click event listener to log a message when it's clicked.
   HTML:
   <!-- Javascript question 1 -->
   <div>
   <button id="try">Click here</button>
   <h1 id="text"></h1>
   </div>
   <div>
   <button id="clickIt">Click here</button>
   <p id="hoverPara">Hover over this Text !</p>
   <b id="effect"></b>
   </div>
   <!-- Javascript question 1 -->
   JS:
   // Method 1
   document.getElementById("try").addEventListener("click", function () {
   document.getElementById("text").innerText = "Event Handler";
   });
   // Method 2
   const x = document.getElementById("clickIt");
   const y = document.getElementById("hoverPara");

x.addEventListener("click", RespondClick);
y.addEventListener("mouseover", RespondMouseOver);
y.addEventListener("mouseout", RespondMouseOut);

function RespondMouseOver() {
document.getElementById("effect").innerHTML +=
"MouseOver Event" + "<br>";
}

function RespondMouseOut() {
document.getElementById("effect").innerHTML +=
"MouseOut Event" + "<br>";
}

function RespondClick() {
document.getElementById("effect").innerHTML +=
"Click Event" + "<br>";
}

// Method 3
// Create a button element
const button = document.createElement('button');
button.textContent = 'Do not click me';

// Add click event listener to the button
button.addEventListener('click', () => {
console.log('Button has not been clicked!');
});

// Append the button to the document body
document.body.appendChild(button);

---

2.  Write a JavaScript program to create a dropdown menu that shows and hides its options when clicked.
    HTML:

            <!-- Javascript question 2 -->
            <div class="dropdown">
                <button class="dropdown-button">Select a Subject</button>
                <ul id="dropdown-options" class="dropdown-options">
                    <li class="dropdown-option">Mathematics</li>
                    <li class="dropdown-option">English</li>
                    <li class="dropdown-option">Physics</li>
                </ul>
            </div>
            <!-- Javascript question 2 -->

    JS:
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownOptions = document.querySelector('.dropdown-options');
    dropdownButton.addEventListener('click', () => {
    dropdownOptions.style.display = dropdownOptions.style.display === 'none' ? 'block' : 'none';
    });

---

3. Write a JavaScript function that changes the background color of an element when a mouse enters it.
   HTML:
   <!-- Javascript question 3 -->
   <div id="myDiv" class="my-element"></div>
   <!-- Javascript question 3 -->
   JS:
   function changeBackgroundColor(elementId, color) {
   const element = document.getElementById(elementId);
   if (element) {
   element.addEventListener('mouseenter', () => {
   element.style.backgroundColor = color;
   });
   }
   }

// Call the function with element ID and desired color
changeBackgroundColor('myDiv', '0f046b');

---

4. Write a JavaScript program that implements a "form" validation that displays an error message if a required field is left empty when submitting the form.
   HTML:
   <form id="myForm">
   <label for="name">Name:</label>
   <input type="text" id="name" required>
   <br>
   <label for="email">Email:</label>
   <input type="email" id="email" required>
   <br>
   <label for="message">Message:</label>
   <textarea id="message" required></textarea>
   <br>
   <button type="submit">Submit</button>
   </form>
   <div id="errorMessages"></div>
   JS:
   const form = document.getElementById('myForm');
   const errorMessagesDiv = document.getElementById('errorMessages');
   form.addEventListener('submit', (event) => {
   event.preventDefault();
   errorMessagesDiv.innerHTML = '';
   const requiredFields = form.querySelectorAll('[required]');
   requiredFields.forEach((field) => {
   if (field.value.trim() === '') {
   const fieldName = field.getAttribute('name');
   const errorMessage = document.createElement('p');
   errorMessage.textContent = `${fieldName} is required.`;
   errorMessagesDiv.appendChild(errorMessage);
   }
   });
   });

---

5. Write a JavaScript program to create a slideshow that changes the displayed image when a next or previous button is clicked.
   HMTL:
   <div class="slideshow">
   <img id="image" src="./images/Drawing_the_sword.jpg">
   </div>
   <div class="slideshow-button">
   <button id="previousBtn">⬅️</button>
   <button id="nextBtn">➡️</button>
   </div>
   JS:
   const images = ['../images/Drawing_the_sword.jpg', '../images/gia_long.jpg', '../images/joe_musashi.jpg'];
   let currentIndex = 0;

const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const image = document.getElementById('image');

previousBtn.addEventListener('click', () => {
currentIndex = (currentIndex - 1 + images.length) % images.length;
image.src = images[currentIndex];
});

nextBtn.addEventListener('click', () => {
currentIndex = (currentIndex + 1) % images.length;
image.src = images[currentIndex];
});

---

6. Write a JavaScript program to implement drag-and-drop functionality to allow users to reorder items in a list.
HTML:
 <ul id="dragList" class="drag-list">
    <li class="drag-item" draggable="true">Mobile</li>
    <li class="drag-item" draggable="true">Laptop</li>
    <li class="drag-item" draggable="true">Desktop</li>
    <li class="drag-item" draggable="true">Television</li>
    <li class="drag-item" draggable="true">Radio</li>
  </ul>
JS:
const dragList = document.getElementById('dragList');
let draggedItem = null;

// Add event listeners for drag and drop events
dragList.addEventListener('dragstart', handleDragStart);
dragList.addEventListener('dragover', handleDragOver);
dragList.addEventListener('drop', handleDrop);

// Drag start event handler
function handleDragStart(event) {
draggedItem = event.target;
event.dataTransfer.effectAllowed = 'move';
event.dataTransfer.setData('text/html', draggedItem.innerHTML);
event.target.style.opacity = '0.5';
}

// Drag over event handler
function handleDragOver(event) {
event.preventDefault();
event.dataTransfer.dropEffect = 'move';
const targetItem = event.target;
if (targetItem !== draggedItem && targetItem.classList.contains('drag-item')) {
const boundingRect = targetItem.getBoundingClientRect();
const offset = boundingRect.y + (boundingRect.height / 2);
if (event.clientY - offset > 0) {
targetItem.style.borderBottom = 'solid 2px #000';
targetItem.style.borderTop = '';
} else {
targetItem.style.borderTop = 'solid 2px #000';
targetItem.style.borderBottom = '';
}
}
}

// Drop event handler
function handleDrop(event) {
event.preventDefault();
const targetItem = event.target;
if (targetItem !== draggedItem && targetItem.classList.contains('drag-item')) {
if (event.clientY > targetItem.getBoundingClientRect().top + (targetItem.offsetHeight / 2)) {
targetItem.parentNode.insertBefore(draggedItem, targetItem.nextSibling);
} else {
targetItem.parentNode.insertBefore(draggedItem, targetItem);
}
}
targetItem.style.borderTop = '';
targetItem.style.borderBottom = '';
draggedItem.style.opacity = '';
draggedItem = null;
}

---

7. Write a JavaScript program to implement a toggle switch that changes its state when clicked.
   HTML:
   <div class="toggle"></div>
   JS:
   const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
toggle.classList.toggle('on');
});
CSS:
.toggle {
display: inline-block;
width: 60px;
height: 34px;
position: relative;
border-radius: 34px;
background-color: #ccd;
cursor: pointer;
transition: background-color 0.3s;
}

.toggle::before {
content: "";
position: absolute;
width: 24px;
height: 24px;
border-radius: 50%;
background-color: #fff;
top: 4px;
left: 4px;
transition: transform 0.3s;
}

.toggle.on {
background-color: #66bb6a;
}

.toggle.on::before {
transform: translateX(26px);
}

---

8. Write a JavaScript program to create a progress bar that updates its width based on task completion.
   HTML:
   <div class="progress-bar">
   <div class="progress-bar-fill" id="progress"></div>
   </div>
   JS:
   function updateProgress(progressPercentage) {
   const progressBarFill = document.getElementById('progress');
   progressBarFill.style.width = `${progressPercentage}%`;
   }
   // Example usage: updating progress to 75%
   updateProgress(75);
   CSS:
   .progress-bar {
   width: 300px;
   height: 20px;
   background-color: #f0f0f0;
   border-radius: 10px;
   overflow: hidden;
   }

.progress-bar-fill {
height: 100%;
background-color: #4caf50;
transition: width 0.3s;
}

---

9. Write a JavaScript program that adds a keydown event listener to a text input to detect when the "Enter key" is pressed.
   HTML:
   <input type="text" id="textInput" placeholder="Press Enter...">
   JS:
   const textInput = document.getElementById('textInput');
   textInput.addEventListener('keydown', (event) => {
   if (event.key === 'Enter') {
   console.log('Enter key pressed!');
   // Perform desired actions here
   }
   });

---

10. Write a JavaScript function that listens for a double click on an element and performs a specific action.
    HTML:
    <button id="myButton">Double click me!</button>
    JS:
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('dblclick', () => {
    console.log('A double click has been performed!');
    // Perform desired actions here
    });
