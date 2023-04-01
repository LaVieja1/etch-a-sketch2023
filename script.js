const gridContainer = document.getElementById('grid-container');

function createGrid(size) {

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amountDivs = size * size;

    for (let i = 0; i < amountDivs; i++) {
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('square-div');
        gridContainer.appendChild(squareDiv);
    }
}

createGrid(16);