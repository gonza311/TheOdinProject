const divGrid = document.querySelector('.divGrid');
let dimension = 16;

function createGrid(dim) {
    for (let i = 0; i < dim; i++) {
        let row = document.createElement('div')
        row.classList.add('row')
        for (let j = 0; j < dim; j++) {
            let column = document.createElement('div')
            column.classList.add('column')
            column.classList.add('gridSquare')
            row.appendChild(column)
        }
        divGrid.appendChild(row)
    }
};

createGrid(dimension);

function deleteGrid() {
    let rows = document.querySelectorAll('.row')
    rows.forEach(row => {
        row.remove()
    })
}

function addHoveredClass(element) {
    element.classList.add('hovered')
};

function addMouse() {
    let squares = document.querySelectorAll('.gridSquare')
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            square.style.backgroundColor = '#' + randomColor;
        })
    })
}

addMouse()

const newGrid = document.querySelector('button')
newGrid.addEventListener('click', () => {
    let newDimChosen = false;
    while (newDimChosen != true) {
        let newDim = prompt('Please choose a new grid size. Max = 100')
        if (newDim <= 100) {
            newDimChosen = true;
            deleteGrid();
            createGrid(newDim);
            addMouse()
        } else {
            alert('Please choose a number less that 100')
        }
    }
})

