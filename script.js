let gridSize = Number(prompt("Choose your grid size", "16"));

const gridSelector = document.querySelector('.gridSelector');
gridSelector.addEventListener('click',chooseSize)

function chooseSize () {
    let gridSize = Number(prompt("Choose your grid size", "16"));
    if(gridSize > 100){
        gridSize = 100
    };
    
    container.innerHTML = "";
    let box = [];
    let column = [];

    for (let i = 0; i < gridSize; i++) {
        box[i] = document.createElement('div');
    };
        
    function printrow (rowElement) {
        container.appendChild(rowElement);
        rowElement.classList.add('rows')
    };
    
    box.forEach(printrow);
    
    const rows = container.querySelectorAll('.rows');
    
    for(let row of rows){
        for(let i = 0; i < gridSize; i++){
            let column = document.createElement('div');
            column.classList.add('grid');
            row.appendChild(column);
        };
    };
    
    
    const grid = container.querySelectorAll('.grid');
    
    function paintSquare (square) {
    square.addEventListener('mouseover', ()=>square.style.backgroundColor = 'blue')
    };
    
    grid.forEach(paintSquare)
    
};

const container = document.querySelector('.container');

let box = [];
let column = [];

for (let i = 0; i < gridSize; i++) {
    box[i] = document.createElement('div');
};
    
function printrow (rowElement) {
    container.appendChild(rowElement);
    rowElement.classList.add('rows')
};

box.forEach(printrow);

const rows = container.querySelectorAll('.rows');

for(let row of rows){
    for(let i = 0; i < gridSize; i++){
        let column = document.createElement('div');
        column.classList.add('grid');
        row.appendChild(column);
    };
};

const grid = container.querySelectorAll('.grid');

function paintSquare (square) {
square.addEventListener('mouseover', ()=>square.style.backgroundColor = 'blue')
};

grid.forEach(paintSquare)
