let body = document.body;
let container = document.body.querySelector('.container');

let squares = [];
    for (i = 0; i < (16*16); i++) {
        squares.splice([i], 0, `square${[i]}` );
    }

let newDiv = document.createElement('div');
    newDiv.className = 'userBtns';
    body.appendChild(newDiv);

let resetBtn = document.createElement('button');
    resetBtn.innerHTML = 'Reset';
    resetBtn.className = 'resetbtn'
    newDiv.appendChild(resetBtn);

let resetBtnSelector = document.querySelector('.resetbtn');
    resetBtnSelector.addEventListener('click', resetColor);

let grid = document.createElement('button');
    grid.innerHTML = 'Edit Grid';
    grid.id = 'gridBtn';
    newDiv.appendChild(grid);

let gridSelector = document.querySelector('#gridBtn');
gridSelector.addEventListener('click', editGrid);

function editGrid() {
    prompt('Edit Grid');
}

for (i = 0; i < squares.length; i++) {
    let div = document.createElement('div');
    div.className = 'squareElements';
    div.id = `square${[i]}`;
    container.appendChild(div);
}

let squareElements = document.body.querySelectorAll('.container > div');
    squareElements.forEach(div => {
        div.addEventListener('mouseover', changeColor)
    });

function changeColor() {
    let target = getDivID(event);
    let getElement = document.getElementById(`${target}`);
    getElement.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
}

function getDivID(event){
    return event.target.id;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 255);
}


function resetColor() {
    squareElements.forEach(div => {
        div.style.backgroundColor = 'white';
    });
}