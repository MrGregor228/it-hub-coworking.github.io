var priceForSmartOffice = document.getElementById('priceForSmartOffice'),
    btn1 = document.getElementById('btnWarningFirst'),
    btn2 = document.getElementById('btnWarningSecond'),
    btn3 = document.getElementById('btnWarningThird'),
    btn4 = document.getElementById('btnWarningFourth'),
    btn5 = document.getElementById('btnWarningFifth'),
    whiteZoneHidenContent = document.getElementById('whiteZoneHidenContent'),
    hiddenInnerText = document.getElementsById('white-hidden-inner-text');

var buttonsPrices = {
    firstHour: "В сумі 346 грн",
    secondHour: "В сумі 634 грн",
    thirdHour: "В сумі 922 грн",
    sixHours: "В сумі 1 786 грн",
    twelveHours: "В сумі 3 514 грн"
};


function whiteZonePricesEnabled() {
    whiteZoneHidenContent.style = "display: block;";
}
eventHallPricesEnabled();

function whiteZoneHidePrices() {
    whiteZoneHidenContent.style = "display: none;";
    hiddenInnerText.style = "display: block";
}


function checkButtonsClickFirst() {    
    
    btn2.classList.remove('btn-warning');
    btn3.classList.remove('btn-warning');
    btn4.classList.remove('btn-warning');
    btn5.classList.remove('btn-warning');

    priceForSmartOffice.innerHTML = buttonsPrices.firstHour; 

    btn1.classList.add('btn-warning');
    whiteZoneHidePrices();  
    
}

function checkButtonsClickSecond() {
    btn1.classList.remove('btn-warning');
    btn3.classList.remove('btn-warning');
    btn4.classList.remove('btn-warning');
    btn5.classList.remove('btn-warning');

    priceForSmartOffice.innerHTML = buttonsPrices.secondHour;

    btn2.classList.add('btn-warning');
    whiteZoneHidePrices();
}
function checkButtonsClickThird() {
    btn2.classList.remove('btn-warning');
    btn1.classList.remove('btn-warning');
    btn4.classList.remove('btn-warning');
    btn5.classList.remove('btn-warning');

    priceForSmartOffice.innerHTML = buttonsPrices.thirdHour;

    btn3.classList.add('btn-warning');
    whiteZoneHidePrices();
}
function checkButtonsClickFourth() {
    btn2.classList.remove('btn-warning');
    btn3.classList.remove('btn-warning');
    btn1.classList.remove('btn-warning');
    btn5.classList.remove('btn-warning');

    priceForSmartOffice.innerHTML = buttonsPrices.sixHours;

    btn4.classList.add('btn-warning');
    whiteZoneHidePrices();
}
function checkButtonsClickFifth() {
    btn2.classList.remove('btn-warning');
    btn3.classList.remove('btn-warning');
    btn4.classList.remove('btn-warning');
    btn1.classList.remove('btn-warning');

    priceForSmartOffice.innerHTML = buttonsPrices.twelveHours;

    btn5.classList.add('btn-warning');
    whiteZoneHidePrices();
}
