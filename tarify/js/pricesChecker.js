var priceForSmartOffice = document.getElementById('priceForSmartOffice'),
    btn1 = document.getElementById('btnWarningFirst'),
    btn2 = document.getElementById('btnWarningSecond'),
    btn3 = document.getElementById('btnWarningThird'),
    btn4 = document.getElementById('btnWarningFourth'),
    btn5 = document.getElementById('btnWarningFifth');

var buttonsPrices = {
    firstHour: "346",
    secondHour: "634",
    thirdHour: "922",
    sixHours: "1 210",
    twelveHours: "1 498"
};





function checkButtonsClickFirst() {    
    
    btn2.classList.remove('btn-warning');
    btn3.classList.remove('btn-warning');
    btn4.classList.remove('btn-warning');
    btn5.classList.remove('btn-warning');

    priceForSmartOffice.innerHTML = buttonsPrices.firstHour; 

    btn1.classList.add('btn-warning');  
    
}

function checkButtonsClickSecond() {
    btn1.classList.remove('btn-warning');
    btn3.classList.remove('btn-warning');
    btn4.classList.remove('btn-warning');
    btn5.classList.remove('btn-warning');

    priceForSmartOffice.innerHTML = buttonsPrices.secondHour;

    btn2.classList.add('btn-warning');
}
function checkButtonsClickThird() {
    btn2.classList.remove('btn-warning');
    btn1.classList.remove('btn-warning');
    btn4.classList.remove('btn-warning');
    btn5.classList.remove('btn-warning');

    priceForSmartOffice.innerHTML = buttonsPrices.thirdHour;

    btn3.classList.add('btn-warning');
}
function checkButtonsClickFourth() {
    btn2.classList.remove('btn-warning');
    btn3.classList.remove('btn-warning');
    btn1.classList.remove('btn-warning');
    btn5.classList.remove('btn-warning');

    priceForSmartOffice.innerHTML = buttonsPrices.sixHours;

    btn4.classList.add('btn-warning');
}
function checkButtonsClickFifth() {
    btn2.classList.remove('btn-warning');
    btn3.classList.remove('btn-warning');
    btn4.classList.remove('btn-warning');
    btn1.classList.remove('btn-warning');

    priceForSmartOffice.innerHTML = buttonsPrices.twelveHours;

    btn5.classList.add('btn-warning');
}
