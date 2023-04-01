//UI
const gridContainer = document.getElementById('grid-container');
const mensaje = document.getElementById('mensaje');
const sizeBtn = document.getElementById('popup');
const colorPicker = document.getElementById('colorPicker');
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
const bordeSi = document.querySelector('.borde-si');
const bordeNo = document.querySelector('borde-no');

let color = "black";


//Listeners
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//Crear grilla con prompt
sizeBtn.addEventListener('click', function() {
    let size = getSize();
    createGrid(size);
})

//Slider
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => createGrid(e.target.value)
colorPicker.oninput = (e) => setColor(e.target.value);


//Funciones

//Crea la grilla con el tamaño elegido.
function createGrid(size) {

    gridContainer.innerHTML = '';
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

//Consigue el tamaño para la grilla
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

//Cambia el actual color segun el boton
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

//Cambia el color
function setColor(colorChoice) {
    color = colorChoice;
}

//Resetea la grilla
function resetGrid() {
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = 'white');
}

//Cambia el texto del slider
function updateSizeValue(value) {
    sizeValue.textContent = `${value} x ${value}`
}

function activarBordes() {
    let squareBorder = document.querySelectorAll('.square-div');

    for (let i = 0; i < squareBorder.length; i++) {
        squareBorder[i].style.border = "1px solid black"
    }

}

function desactivarBordes() {
    let squareBorder = document.querySelectorAll('.square-div');

    for (let i = 0; i < squareBorder.length; i++) {
        squareBorder[i].style.border = "0"
    }
}

//Inicia la pagina con esta grilla
createGrid(16);