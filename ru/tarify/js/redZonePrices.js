var fullRedZonePrice = document.getElementById('redZoneInnerText'),
    redZoneBtn1 = document.getElementById('redZoneWarningFirst'),
    redZoneBtn2 = document.getElementById('redZoneWarningSecond'),
    redZoneBtn3 = document.getElementById('redZoneWarningThird'),
    redZoneBtn4 = document.getElementById('redZoneWarningFourth'),
    redZoneBtn5 = document.getElementById('redZoneWarningFifth'),
    redZoneHidenContent = document.getElementById('redZoneShowAndHide');
    redHiddenInnerText = document.getElementById('red-hidden-inner-text');

var redZoneHoursPrices = {
    firstHour: "В сумме 330 грн",
    secondHour: "В сумме 564 грн",
    thirdHour: "В сумме 798 грн",
    sixHours: "В сумме 1500 грн",
    twelveHours: "В сумме 2904 грн"
};

function redZonePricesEnabled() {
    redZoneHidenContent.style = "display: block;";
}
redZonePricesEnabled();

function redZoneHidePrices() {
    redZoneHidenContent.style = "display: none;";
    redHiddenInnerText.style = "display: block";
}



function checkRedZoneButtonsClickFirst() {    
    
    redZoneBtn2.classList.remove('btn-warning');
    redZoneBtn3.classList.remove('btn-warning');
    redZoneBtn4.classList.remove('btn-warning');
    redZoneBtn5.classList.remove('btn-warning');

    fullRedZonePrice.innerHTML = redZoneHoursPrices.firstHour; 

    redZoneBtn1.classList.add('btn-warning');
    redZoneHidePrices();
}

function checkRedZoneButtonsClickSecond() {
    redZoneBtn1.classList.remove('btn-warning');
    redZoneBtn3.classList.remove('btn-warning');
    redZoneBtn4.classList.remove('btn-warning');
    redZoneBtn5.classList.remove('btn-warning');

    fullRedZonePrice.innerHTML = redZoneHoursPrices.secondHour;

    redZoneBtn2.classList.add('btn-warning');

    redZoneHidePrices();
}
function checkRedZoneButtonsClickThird() {
    redZoneBtn2.classList.remove('btn-warning');
    redZoneBtn1.classList.remove('btn-warning');
    redZoneBtn4.classList.remove('btn-warning');
    redZoneBtn5.classList.remove('btn-warning');

    fullRedZonePrice.innerHTML = redZoneHoursPrices.thirdHour;

    redZoneBtn3.classList.add('btn-warning');

    redZoneHidePrices();
}
function checkRedZoneButtonsClickFourth() {
    redZoneBtn2.classList.remove('btn-warning');
    redZoneBtn3.classList.remove('btn-warning');
    redZoneBtn1.classList.remove('btn-warning');
    redZoneBtn5.classList.remove('btn-warning');

    fullRedZonePrice.innerHTML = redZoneHoursPrices.sixHours;

    redZoneBtn4.classList.add('btn-warning');

    redZoneHidePrices();
}
function checkRedZoneButtonsClickFifth() {
    redZoneBtn2.classList.remove('btn-warning');
    redZoneBtn3.classList.remove('btn-warning');
    redZoneBtn4.classList.remove('btn-warning');
    redZoneBtn1.classList.remove('btn-warning');

    fullRedZonePrice.innerHTML = redZoneHoursPrices.twelveHours;

    redZoneBtn5.classList.add('btn-warning');

    redZoneHidePrices();
}




