var priceForSmartOffice = document.getElementById('priceForSmartOffice'),
    btn1 = document.getElementById('btnWarningFirst'),
    btn2 = document.getElementById('btnWarningSecond'),
    btn3 = document.getElementById('btnWarningThird'),
    btn4 = document.getElementById('btnWarningFourth'),
    btn5 = document.getElementById('btnWarningFifth');

let buttonsPrices = {
    _4people: "11 000",
    _6people: "18 000",
    _8people: "24 000",
    _10people: "30 000",
    _20people: "60 000"
};





function checkButtonsClickFirst() {    
    
    btn2.classList.remove('btn-warning');
    btn3.classList.remove('btn-warning');
    btn4.classList.remove('btn-warning');
    btn5.classList.remove('btn-warning');

    priceForSmartOffice.innerHTML = buttonsPrices._4people; 

    btn1.classList.add('btn-warning');  
    
}

function checkButtonsClickSecond() {
    btn1.classList.remove('btn-warning');
    btn3.classList.remove('btn-warning');
    btn4.classList.remove('btn-warning');
    btn5.classList.remove('btn-warning');

    priceForSmartOffice.innerHTML = buttonsPrices._6people;

    btn2.classList.add('btn-warning');
}
function checkButtonsClickThird() {
    btn2.classList.remove('btn-warning');
    btn1.classList.remove('btn-warning');
    btn4.classList.remove('btn-warning');
    btn5.classList.remove('btn-warning');

    priceForSmartOffice.innerHTML = buttonsPrices._8people;

    btn3.classList.add('btn-warning');
}
function checkButtonsClickFourth() {
    btn2.classList.remove('btn-warning');
    btn3.classList.remove('btn-warning');
    btn1.classList.remove('btn-warning');
    btn5.classList.remove('btn-warning');

    priceForSmartOffice.innerHTML = buttonsPrices._10people;

    btn4.classList.add('btn-warning');
}
function checkButtonsClickFifth() {
    btn2.classList.remove('btn-warning');
    btn3.classList.remove('btn-warning');
    btn4.classList.remove('btn-warning');
    btn1.classList.remove('btn-warning');

    priceForSmartOffice.innerHTML = buttonsPrices._20people;

    btn5.classList.add('btn-warning');
}
