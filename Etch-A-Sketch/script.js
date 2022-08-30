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

function deleteGrid() {
    
}

createGrid(dimension);

function addHoveredClass(element) {
    element.classList.add('hovered')
};

const squares = document.querySelectorAll('.gridSquare')
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        addHoveredClass(square)
    })
})

const newGrid = document.querySelector('button')
newGrid.addEventListener('click', () => {
    let newDimChosen = false;
    while (newDimChosen != true) {
        let newDim = prompt('Please choose a new grid size. Max = 100')
        if (newDim <= 100) {
            newDimChosen = true;
            createGrid(newDim)
        } else {
            alert('Please choose a number less that 100')
        }
    }
})

