const gridContainer = document.getElementById('grid-container');
const mensaje = document.getElementById('mensaje');
const sizeBtn = document.getElementById('popup');
const colorPicker = document.getElementById('colorPicker');

let color = "black";

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


sizeBtn.addEventListener('click', function() {
    let size = getSize();
    createGrid(size);
})

colorPicker.oninput = (e) => setColor(e.target.value);

function createGrid(size) {

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amountDivs = size * size;

    for (let i = 0; i < amountDivs; i++) {
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('square-div');
        squareDiv.setAttribute('draggable', 'false');
        squareDiv.addEventListener("mouseover", changeColor);
        squareDiv.addEventListener("mousedown", changeColor);
        gridContainer.appendChild(squareDiv);
    }
}

function getSize() {
    gridContainer.innerHTML = '';
    let inputChoice = prompt("¿De que tamaño sera la grilla?");

    if (inputChoice == "") {
        mensaje.textContent = "Por favor, introducir un numero";
    } else if (inputChoice < 1 || inputChoice > 100) {
        mensaje.textContent = "Introducir un numero entre 1 y 100";
    } else {
        mensaje.textContent = "A dibujar!";
        return inputChoice;
    }
}

function changeColor(e) {
    if (e.type === "mouseover" && !mouseDown) return;

    if (color == "black") {
        this.style.backgroundColor = 'black';
    } else if (color == "white") {
        this.style.backgroundColor = 'white';
    } else if (color == 'random') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else {
        this.style.backgroundColor = color;
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetGrid() {
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = 'white');
}

createGrid(16);