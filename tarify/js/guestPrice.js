var fullGuestPrice = document.getElementById('guestInnerText'),
    guestBtn1 = document.getElementById('guestWarningFirst'),
    guestBtn2 = document.getElementById('guestWarningSecond'),
    guestBtn3 = document.getElementById('guestWarningThird'),
    guestBtn4 = document.getElementById('guestWarningFourth'),
    guestBtn5 = document.getElementById('guestWarningFifth'),
    guestHidenContent = document.getElementById('GuestShowAndHide');

var guestHoursPrices = {
    firstHour: "В сумі 34 грн",
    secondHour: "В сумі 56 грн",
    thirdHour: "В сумі 78 грн",
    sixHours: "В сумі 144 грн",
    twelveHours: "В сумі 276 грн"
};

function guestPricesEnabled() {
    guestHidenContent.style = "display: block;";
}
guestPricesEnabled();

function guestHidePrices() {
    guestHidenContent.style = "display: none;";
}



function checkGuestButtonsClickFirst() {    
    
    guestBtn2.classList.remove('btn-warning');
    guestBtn3.classList.remove('btn-warning');
    guestBtn4.classList.remove('btn-warning');
    guestBtn5.classList.remove('btn-warning');

    fullGuestPrice.innerHTML = guestHoursPrices.firstHour; 

    guestBtn1.classList.add('btn-warning');
    guestHidePrices();
}

function checkGuestButtonsClickSecond() {
    guestBtn1.classList.remove('btn-warning');
    guestBtn3.classList.remove('btn-warning');
    guestBtn4.classList.remove('btn-warning');
    guestBtn5.classList.remove('btn-warning');

    fullGuestPrice.innerHTML = guestHoursPrices.secondHour;

    guestBtn2.classList.add('btn-warning');

    guestHidePrices();
}
function checkGuestButtonsClickThird() {
    guestBtn2.classList.remove('btn-warning');
    guestBtn1.classList.remove('btn-warning');
    guestBtn4.classList.remove('btn-warning');
    guestBtn5.classList.remove('btn-warning');

    fullGuestPrice.innerHTML = guestHoursPrices.thirdHour;

    guestBtn3.classList.add('btn-warning');

    guestHidePrices();
}
function checkGuestButtonsClickFourth() {
    guestBtn2.classList.remove('btn-warning');
    guestBtn3.classList.remove('btn-warning');
    guestBtn1.classList.remove('btn-warning');
    guestBtn5.classList.remove('btn-warning');

    fullGuestPrice.innerHTML = guestHoursPrices.sixHours;

    guestBtn4.classList.add('btn-warning');

    guestHidePrices();
}
function checkGuestButtonsClickFifth() {
    guestBtn2.classList.remove('btn-warning');
    guestBtn3.classList.remove('btn-warning');
    guestBtn4.classList.remove('btn-warning');
    guestBtn1.classList.remove('btn-warning');

    fullGuestPrice.innerHTML = guestHoursPrices.twelveHours;

    guestBtn5.classList.add('btn-warning');

    guestHidePrices();
}
