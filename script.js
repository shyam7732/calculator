
let currentInput = document.querySelector('.currentInput');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');
let btnClickValue = []

buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

        if (!btn.id.match('erase')) {
            btnClickValue.push(btn.value)
            currentInput.innerHTML = btnClickValue.join('');
        }

        if (btn.id.match('evaluate')) {
            currentInput.innerHTML = eval(btnClickValue.join(''));
            currentInput.style.color = "#fff";
        }

        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = btnClickValue.join('');
        }

    })
})

clearbtn.addEventListener("click", () => {

    btnClickValue = [''];
    currentInput.innerHTML = 0;
    
})