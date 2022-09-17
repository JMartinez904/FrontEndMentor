let checked;

const radio = document.querySelectorAll('input[name="rate"]');
const btn = document.querySelector('button[type="button"]');

radio.forEach(input => input.addEventListener('input',clicked));
btn.addEventListener('click',sendRate);

function clicked(e){
    if(checked){
        checked.classList.replace("check","rate");
    } 
    checked = document.querySelector(`label[for="${e.target.value}"]`);
    checked.classList.replace('rate','check');
}

function sendRate(){
    const rateScreen = document.querySelector('.init');
    rateScreen.classList.add('hidden');

    const outScreen = document.querySelector('.output');
    outScreen.classList.remove('hidden');

    const value = checked.getAttribute('for');
    const rate = document.querySelector('#rate');

    rate.textContent = value;
}