var priceForSmartOffice = document.getElementById('priceForSmartOffice'),
    btn1 = document.getElementById('btnWarningFirst'),
    btn2 = document.getElementById('btnWarningSecond'),
    btn3 = document.getElementById('btnWarningThird'),
    btn4 = document.getElementById('btnWarningFourth'),
    btn5 = document.getElementById('btnWarningFifth'),
    whiteZoneHidenContent = document.getElementById('whiteZoneHidenContent'),
    whiteHiddenInnerText = document.getElementById('white-hidden-inner-text');

var buttonsPrices = {
    firstHour: "Totaly 346 UAH",
    secondHour: "Totaly 634 UAH",
    thirdHour: "Totaly 922 UAH",
    sixHours: "Totaly 1 786 UAH",
    twelveHours: "Totaly 3 514 UAH"
};


function whiteZonePricesEnabled() {
    whiteZoneHidenContent.style = "display: block;";
}
eventHallPricesEnabled();

function whiteZoneHidePrices() {
    whiteZoneHidenContent.style = "display: none;";
    whiteHiddenInnerText.style = "display: block";
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
