const divGrid = document.querySelector('.divGrid');
let height = 16;
let width = 16;

for (let i = 0; i < height; i++) {
    let row = document.createElement('div')
    row.classList.add('row')
    for (let j = 0; j < width; j++) {
        let column = document.createElement('div')
        column.classList.add('column')
        row.appendChild(column)
    }
    divGrid.appendChild(row)
}