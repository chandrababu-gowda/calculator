let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let display = document.querySelector('.display');

numbers.forEach(number => {
    number.addEventListener('click',()=>{
        console.log(`clicked ${number.innerHTML}`);
        display.insertAdjacentText("beforeend",number.innerHTML)
    })
});

operators.forEach(operator => {
    operator.addEventListener('click',()=>{
        console.log(`clicked ${operator.innerHTML}`);
        display.insertAdjacentText("beforeend",operator.innerHTML)
    })
});


// console.log(num);










