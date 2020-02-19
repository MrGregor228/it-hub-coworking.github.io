var fullEventHallPrice = document.getElementById('eventHallInnerText'),
    eventHallBtn1 = document.getElementById('eventHallWarningFirst'),
    eventHallBtn2 = document.getElementById('eventHallWarningSecond'),
    eventHallBtn3 = document.getElementById('eventHallWarningThird'),
    eventHallBtn4 = document.getElementById('eventHallWarningFourth'),
    eventHallBtn5 = document.getElementById('eventHallWarningFifth'),
    eventHallHidenContent = document.getElementById('eventHallShowAndHide');
    eventHiddenInnerText = document.getElementById('event-hidden-inner-text');

var eventHallHoursPrices = {
    firstHour: "В сумме 260 грн",
    secondHour: "В сумме 520 грн",
    thirdHour: "В сумме 780 грн",
    sixHours: "В сумме 1560 грн",
    twelveHours: "В сумме 3120 грн"
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




