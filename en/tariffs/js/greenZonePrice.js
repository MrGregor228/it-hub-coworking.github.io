var fullGreenZonePrice = document.getElementById('greenZoneInnerText'),
    greenZoneBtn1 = document.getElementById('greenZoneWarningFirst'),
    greenZoneBtn2 = document.getElementById('greenZoneWarningSecond'),
    greenZoneBtn3 = document.getElementById('greenZoneWarningThird'),
    greenZoneBtn4 = document.getElementById('greenZoneWarningFourth'),
    greenZoneBtn5 = document.getElementById('greenZoneWarningFifth'),
    greenZoneHidenContent = document.getElementById('greenZoneShowAndHide');
    greenHiddenInnerText = document.getElementById('green-hidden-inner-text');

var greenZoneHoursPrices = {
    firstHour: "Totaly 191 UAH",
    secondHour: "Totaly 324 UAH",
    thirdHour: "Totaly 457 UAH",
    sixHours: "Totaly 856 UAH",
    twelveHours: "Totaly 1654 UAH"
};

function greenZonePricesEnabled() {
    greenZoneHidenContent.style = "display: block;";
}
greenZonePricesEnabled();

function greenZoneHidePrices() {
    greenZoneHidenContent.style = "display: none;";
    greenHiddenInnerText.style = "display: block";
}



function checkGreenZoneButtonsClickFirst() {    
    
    greenZoneBtn2.classList.remove('btn-warning');
    greenZoneBtn3.classList.remove('btn-warning');
    greenZoneBtn4.classList.remove('btn-warning');
    greenZoneBtn5.classList.remove('btn-warning');

    fullGreenZonePrice.innerHTML = greenZoneHoursPrices.firstHour; 

    greenZoneBtn1.classList.add('btn-warning');
    greenZoneHidePrices();
}

function checkGreenZoneButtonsClickSecond() {
    greenZoneBtn1.classList.remove('btn-warning');
    greenZoneBtn3.classList.remove('btn-warning');
    greenZoneBtn4.classList.remove('btn-warning');
    greenZoneBtn5.classList.remove('btn-warning');

    fullGreenZonePrice.innerHTML = greenZoneHoursPrices.secondHour;

    greenZoneBtn2.classList.add('btn-warning');

    greenZoneHidePrices();
}
function checkGreenZoneButtonsClickThird() {
    greenZoneBtn2.classList.remove('btn-warning');
    greenZoneBtn1.classList.remove('btn-warning');
    greenZoneBtn4.classList.remove('btn-warning');
    greenZoneBtn5.classList.remove('btn-warning');

    fullGreenZonePrice.innerHTML = greenZoneHoursPrices.thirdHour;

    greenZoneBtn3.classList.add('btn-warning');

    greenZoneHidePrices();
}
function checkGreenZoneButtonsClickFourth() {
    greenZoneBtn2.classList.remove('btn-warning');
    greenZoneBtn3.classList.remove('btn-warning');
    greenZoneBtn1.classList.remove('btn-warning');
    greenZoneBtn5.classList.remove('btn-warning');

    fullGreenZonePrice.innerHTML = greenZoneHoursPrices.sixHours;

    greenZoneBtn4.classList.add('btn-warning');

    greenZoneHidePrices();
}
function checkGreenZoneButtonsClickFifth() {
    greenZoneBtn2.classList.remove('btn-warning');
    greenZoneBtn3.classList.remove('btn-warning');
    greenZoneBtn4.classList.remove('btn-warning');
    greenZoneBtn1.classList.remove('btn-warning');

    fullGreenZonePrice.innerHTML = greenZoneHoursPrices.twelveHours;

    greenZoneBtn5.classList.add('btn-warning');

    greenZoneHidePrices();
}




