//This calculator support the addition, substraction, division, and multiplication 

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
let num2_negative = 0; 
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
      if (num2_negative !== 0){
        num2.push(event.target.innerText);
        display.textContent = `${num1.join('')} ${operation} ${num2.join('')}`;
        num2_negative++;
      }
    }
  }
  

  if (num1_negative > 1 && num2_negative === 0){
      switch (event.target.innerText) {
        case '/':
          if (num1.length > 0 && num2.length === 0){
            operation = ['/'];
          }
          break;
        case '*':
          if (num1.length > 0 && num2.length === 0){
            operation = ['*'];
          }
          break;
        case '-':
          if (num1.length > 0 && num2.length === 0 && operation.length === 0){
            operation = ['-'];
          }
          else if(num1.length > 0 && (num2.length >=0 && num2.length < 1) && operation.length <= 1){
            num2.push(event.target.innerText);
          } 
          break;
        case '+':
          if (num1.length > 0 && num2.length === 0 && operation.length === 0){
            operation = ['+'];
          }
          else if(num1.length > 0 && (num2.length >=0 && num2.length < 1) && operation.length <= 1){
            num2.push(event.target.innerText);
          } 
          break;
      }
      display.textContent = `${num1.join('')} ${operation} ${num2.join('')} `;
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
    num2_negative ++;
    num1_negative = 0;
  }


  if (event.target.innerText === 'C'){
    num1 = [];
    num2= [];
    answer = Number();
    operation = [];
    stop_num2_push = 0;
    num1_negative = 0;
    num2_negative = 0;  
    display.textContent = '';
  }
  
});