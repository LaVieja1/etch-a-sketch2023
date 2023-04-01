const gridContainer = document.getElementById('grid-container');
const mensaje = document.getElementById('mensaje');
const sizeBtn = document.getElementById('popup');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


sizeBtn.addEventListener('click', function() {
    let size = getSize();
    createGrid(size);
})

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
    if (e.type === "mouseover" && !mouseDown) {
        return
    } else {
        e.target.style.backgroundColor = "black";
    }
}