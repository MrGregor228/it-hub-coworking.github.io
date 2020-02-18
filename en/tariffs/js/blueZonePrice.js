var fullBlueZonePrice = document.getElementById('blueZoneInnerText'),
    blueZoneBtn1 = document.getElementById('blueZoneWarningFirst'),
    blueZoneBtn2 = document.getElementById('blueZoneWarningSecond'),
    blueZoneBtn3 = document.getElementById('blueZoneWarningThird'),
    blueZoneBtn4 = document.getElementById('blueZoneWarningFourth'),
    blueZoneBtn5 = document.getElementById('blueZoneWarningFifth'),
    blueZoneHidenContent = document.getElementById('blueZoneShowAndHide');
    blueHiddenInnerText = document.getElementById('blue-hidden-inner-text');

var blueZoneHoursPrices = {
    firstHour: "Totaly 191 UAH",
    secondHour: "Totaly 324 UAH",
    thirdHour: "Totaly 457 UAH",
    sixHours: "Totaly 856 UAH",
    twelveHours: "Totaly 1654 UAH"
};

function blueZonePricesEnabled() {
    blueZoneHidenContent.style = "display: block;";
}
blueZonePricesEnabled();

function blueZoneHidePrices() {
    blueZoneHidenContent.style = "display: none;";
    blueHiddenInnerText.style = "display: block";
}



function checkBlueZoneButtonsClickFirst() {    
    
    blueZoneBtn2.classList.remove('btn-warning');
    blueZoneBtn3.classList.remove('btn-warning');
    blueZoneBtn4.classList.remove('btn-warning');
    blueZoneBtn5.classList.remove('btn-warning');

    fullBlueZonePrice.innerHTML = blueZoneHoursPrices.firstHour; 

    blueZoneBtn1.classList.add('btn-warning');
    blueZoneHidePrices();
}

function checkBlueZoneButtonsClickSecond() {
    blueZoneBtn1.classList.remove('btn-warning');
    blueZoneBtn3.classList.remove('btn-warning');
    blueZoneBtn4.classList.remove('btn-warning');
    blueZoneBtn5.classList.remove('btn-warning');

    fullBlueZonePrice.innerHTML = blueZoneHoursPrices.secondHour;

    blueZoneBtn2.classList.add('btn-warning');

    blueZoneHidePrices();
}
function checkBlueZoneButtonsClickThird() {
    blueZoneBtn2.classList.remove('btn-warning');
    blueZoneBtn1.classList.remove('btn-warning');
    blueZoneBtn4.classList.remove('btn-warning');
    blueZoneBtn5.classList.remove('btn-warning');

    fullBlueZonePrice.innerHTML = blueZoneHoursPrices.thirdHour;

    blueZoneBtn3.classList.add('btn-warning');

    blueZoneHidePrices();
}
function checkBlueZoneButtonsClickFourth() {
    blueZoneBtn2.classList.remove('btn-warning');
    blueZoneBtn3.classList.remove('btn-warning');
    blueZoneBtn1.classList.remove('btn-warning');
    blueZoneBtn5.classList.remove('btn-warning');

    fullBlueZonePrice.innerHTML = blueZoneHoursPrices.sixHours;

    blueZoneBtn4.classList.add('btn-warning');

    blueZoneHidePrices();
}
function checkBlueZoneButtonsClickFifth() {
    blueZoneBtn2.classList.remove('btn-warning');
    blueZoneBtn3.classList.remove('btn-warning');
    blueZoneBtn4.classList.remove('btn-warning');
    blueZoneBtn1.classList.remove('btn-warning');

    fullBlueZonePrice.innerHTML = blueZoneHoursPrices.twelveHours;

    blueZoneBtn5.classList.add('btn-warning');

    blueZoneHidePrices();
}




