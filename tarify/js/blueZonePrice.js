var fullBlueZonePrice = document.getElementById('blueZoneInnerText'),
    blueZoneBtn1 = document.getElementById('blueZoneWarningFirst'),
    blueZoneBtn2 = document.getElementById('blueZoneWarningSecond'),
    blueZoneBtn3 = document.getElementById('blueZoneWarningThird'),
    blueZoneBtn4 = document.getElementById('blueZoneWarningFourth'),
    blueZoneBtn5 = document.getElementById('blueZoneWarningFifth'),
    blueZoneHidenContent = document.getElementById('blueZoneShowAndHide');

var blueZoneHoursPrices = {
    firstHour: "В сумі 191 грн",
    secondHour: "В сумі 324 грн",
    thirdHour: "В сумі 457 грн",
    sixHours: "В сумі 856 грн",
    twelveHours: "В сумі 1654 грн"
};

function blueZonePricesEnabled() {
    blueZoneHidenContent.style = "display: block;";
}
blueZonePricesEnabled();

function blueZoneHidePrices() {
    blueZoneHidenContent.style = "display: none;";
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




