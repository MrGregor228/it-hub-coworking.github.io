var fullGuestPrice = document.getElementById('guestInnerText'),
    guestBtn1 = document.getElementById('guestWarningFirst'),
    guestBtn2 = document.getElementById('guestWarningSecond'),
    guestBtn3 = document.getElementById('guestWarningThird'),
    guestBtn4 = document.getElementById('guestWarningFourth'),
    guestBtn5 = document.getElementById('guestWarningFifth'),
    guestHidenContent = document.getElementById('GuestShowAndHide');
    guestHiddenInnerText = document.getElementById('guest-hidden-inner-text');

var guestHoursPrices = {
    firstHour: "Totaly 34 UAH",
    secondHour: "Totaly 56 UAH",
    thirdHour: "Totaly 78 UAH",
    sixHours: "Totaly 144 UAH",
    twelveHours: "Totaly 276 UAH"
};

function guestPricesEnabled() {
    guestHidenContent.style = "display: block;";
}
guestPricesEnabled();

function guestHidePrices() {
    guestHidenContent.style = "display: none;";
    guestHiddenInnerText.style = "display: block";
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
