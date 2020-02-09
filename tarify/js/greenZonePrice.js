var fullGreenZonePrice = document.getElementById('greenZoneInnerText'),
    greenZoneBtn1 = document.getElementById('greenZoneWarningFirst'),
    greenZoneBtn2 = document.getElementById('greenZoneWarningSecond'),
    greenZoneBtn3 = document.getElementById('greenZoneWarningThird'),
    greenZoneBtn4 = document.getElementById('greenZoneWarningFourth'),
    greenZoneBtn5 = document.getElementById('greenZoneWarningFifth'),
    greenZoneHidenContent = document.getElementById('greenZoneShowAndHide');

var greenZoneHoursPrices = {
    firstHour: "В сумі 191 грн",
    secondHour: "В сумі 324 грн",
    thirdHour: "В сумі 457 грн",
    sixHours: "В сумі 856 грн",
    twelveHours: "В сумі 1654 грн"
};

function greenZonePricesEnabled() {
    greenZoneHidenContent.style = "display: block;";
}
greenZonePricesEnabled();

function greenZoneHidePrices() {
    greenZoneHidenContent.style = "display: none;";
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




