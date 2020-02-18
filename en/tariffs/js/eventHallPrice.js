var fullEventHallPrice = document.getElementById('eventHallInnerText'),
    eventHallBtn1 = document.getElementById('eventHallWarningFirst'),
    eventHallBtn2 = document.getElementById('eventHallWarningSecond'),
    eventHallBtn3 = document.getElementById('eventHallWarningThird'),
    eventHallBtn4 = document.getElementById('eventHallWarningFourth'),
    eventHallBtn5 = document.getElementById('eventHallWarningFifth'),
    eventHallHidenContent = document.getElementById('eventHallShowAndHide');
    eventHiddenInnerText = document.getElementById('event-hidden-inner-text');

var eventHallHoursPrices = {
    firstHour: "Totaly 260 UAH",
    secondHour: "Totaly 520 UAH",
    thirdHour: "Totaly 780 UAH",
    sixHours: "Totaly 1560 UAH",
    twelveHours: "Totaly 3120 UAH"
};

function eventHallPricesEnabled() {
    eventHallHidenContent.style = "display: block;";
}
eventHallPricesEnabled();

function eventHallHidePrices() {
    eventHallHidenContent.style = "display: none;";
    eventHiddenInnerText.style = "display: block";
}



function checkEventHallButtonsClickFirst() {    
    
    eventHallBtn2.classList.remove('btn-warning');
    eventHallBtn3.classList.remove('btn-warning');
    eventHallBtn4.classList.remove('btn-warning');
    eventHallBtn5.classList.remove('btn-warning');

    fullEventHallPrice.innerHTML = eventHallHoursPrices.firstHour; 

    eventHallBtn1.classList.add('btn-warning');
    eventHallHidePrices();
}

function checkEventHallButtonsClickSecond() {
    eventHallBtn1.classList.remove('btn-warning');
    eventHallBtn3.classList.remove('btn-warning');
    eventHallBtn4.classList.remove('btn-warning');
    eventHallBtn5.classList.remove('btn-warning');

    fullEventHallPrice.innerHTML = eventHallHoursPrices.secondHour;

    eventHallBtn2.classList.add('btn-warning');

    eventHallHidePrices();
}
function checkEventHallButtonsClickThird() {
    eventHallBtn2.classList.remove('btn-warning');
    eventHallBtn1.classList.remove('btn-warning');
    eventHallBtn4.classList.remove('btn-warning');
    eventHallBtn5.classList.remove('btn-warning');

    fullEventHallPrice.innerHTML = eventHallHoursPrices.thirdHour;

    eventHallBtn3.classList.add('btn-warning');

    eventHallHidePrices();
}
function checkEventHallButtonsClickFourth() {
    eventHallBtn2.classList.remove('btn-warning');
    eventHallBtn3.classList.remove('btn-warning');
    eventHallBtn1.classList.remove('btn-warning');
    eventHallBtn5.classList.remove('btn-warning');

    fullEventHallPrice.innerHTML = eventHallHoursPrices.sixHours;

    eventHallBtn4.classList.add('btn-warning');

    eventHallHidePrices();
}
function checkEventHallButtonsClickFifth() {
    eventHallBtn2.classList.remove('btn-warning');
    eventHallBtn3.classList.remove('btn-warning');
    eventHallBtn4.classList.remove('btn-warning');
    eventHallBtn1.classList.remove('btn-warning');

    fullEventHallPrice.innerHTML = eventHallHoursPrices.twelveHours;

    eventHallBtn5.classList.add('btn-warning');

    eventHallHidePrices();
}




