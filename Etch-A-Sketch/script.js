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

function addHoveredClass(element) {
    element.classList.add('hovered')
};


createGrid(dimension);

const squares = document.querySelectorAll('.gridSquare')
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        addHoveredClass(square)
    })
})

