/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
/*-------------------------------- Variables --------------------------------*/
let num1 = [];
let num2= [];
let answer = Number();
let operation = [];
let stop_num2_push = 0;
let num1_negative = 0;
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
  });
});

/*-------------------------------- Functions --------------------------------*/
calculator.addEventListener('click', (event) => {
 
  if(stop_num2_push === 0){
    if (event.target.classList.contains('number')) {
      num1_negative = 2;
      if (operation.length === 0){
        num1.push(event.target.innerText);
        display.textContent = num1.join('');
      }
      else {
        num2.push(event.target.innerText);
        display.textContent = `${num1.join('')} ${operation} ${num2.join('')}`;
      }
    }
    else if (event.target.classList.contains('number') || event.target.innerText === '-') {
      if (num1_negative === 0){
        num1_negative ++;
        if (operation.length === 0){
          num1.push(event.target.innerText);
          display.textContent = num1.join('');
        }
      }
    }
  }
  

  if (num1_negative > 1){
    if (num1.length > 0 && num2.length === 0){
      switch (event.target.innerText) {
        case '/':
          operation = ['/'];
          break;
        case '*':
          operation = ['*'];
          break;
        case '-':
          operation = ['-'];
          break;
        case '+':
          operation = ['+'];
          break;
      }
      display.textContent = `${num1.join('')} ${operation} `;
    }
  }

  if(event.target.innerText === '='){
    if (num2.length !== 0){
      stop_num2_push ++;
      switch (operation.join('')){
        case '/':
          answer = Number(num1.join(''))/Number(num2.join(''));
          break;
        case '*':
          answer = Number(num1.join(''))*Number(num2.join(''));
          break;
        case '-':
          answer = Number(num1.join(''))-Number(num2.join(''));
          break;
        case '+':
          answer = Number(num1.join(''))+Number(num2.join(''));
          break;
      }
      display.textContent = answer;
    }
    else{
      display.textContent = num1.join('');
    }
    num1_negative = 0;
  }


  if (event.target.innerText === 'C'){
    num1 = [];
    num2= [];
    operation = [];
    stop_num2_push = 0;
    display.textContent = '';
  }
  
});