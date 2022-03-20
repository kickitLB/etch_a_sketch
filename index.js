let body = document.body;

let btnDiv= document.createElement('div');
    btnDiv.className = 'userBtns';
    body.appendChild(btnDiv);

let containerDiv = document.createElement('div');
    containerDiv.className = 'container';
    body.appendChild(containerDiv);

let resetBtn = document.createElement('button');
    resetBtn.innerHTML = 'Reset';
    resetBtn.className = 'resetbtn'
    btnDiv.appendChild(resetBtn);
    

let gridBtn = document.createElement('button');
    gridBtn.innerHTML = 'Edit Grid';
    gridBtn.id = 'gridBtn';
    btnDiv.appendChild(gridBtn);

let squares = [];

function createSquares(number) {
    for (i = 0; i < (number * number); i++) {
        squares.splice([i], 0, `square${[i]}`);
    } for (i = 0; i < squares.length; i++) {
        let div = document.createElement('div');
        div.className = 'squareElements';
        div.id = `square${[i]}`;
        containerDiv.appendChild(div);
    }
    squareSize(number)
}

function squareSize(number) {
    for (i = 0; i < (number * number); i++) {
        let square = document.getElementById(`square${[i]}`);
        let height = 960/number;
        let width = 960/number;
        square.style.height = `${height}px`;
        square.style.width = `${width}px`;
    }
}
    
// default number of squares
createSquares(16);


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

let resetBtnSelector = document.querySelector('.resetbtn');
    resetBtnSelector.addEventListener('click', resetColor);

function resetColor() {
    squareElements.forEach(div => {
    div.style.backgroundColor = 'white';
});
}

let gridSelector = document.querySelector('#gridBtn');
    gridSelector.addEventListener('click', editGrid);

function editGrid() {
    while(containerDiv.hasChildNodes()) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    squares.splice(0, squares.length);
    let number = prompt('Edit grid size');
        if (number >= 1 && number <= 100) {
            newGrid(number)
        } else {
            alert('Number invalid. Please enter a number between 1 and 100');
        }
}


function newGrid(number) {
    createSquares(number);
    let squareElements = document.body.querySelectorAll('.container > div');
        squareElements.forEach(div => {
            div.addEventListener('mouseover', changeColor)
        });

    let resetBtnSelector = document.querySelector('.resetbtn');
        resetBtnSelector.addEventListener('click', resetColor);
            function resetColor() {
                squareElements.forEach(div => {
                div.style.backgroundColor = 'white';
            });
            }
}