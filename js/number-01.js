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
