var fullresidentPrice = document.getElementById('residentInnerText'),
    residentBtn1 = document.getElementById('residentWarningFirst'),
    residentBtn2 = document.getElementById('residentWarningSecond'),
    residentBtn3 = document.getElementById('residentWarningThird'),
    residentBtn4 = document.getElementById('residentWarningFourth'),
    residentBtn5 = document.getElementById('residentWarningFifth'),
    residentHidenContent = document.getElementById('residentShowAndHide');
    residentHiddenInnerText = document.getElementById('resident-hidden-inner-text');

var residentHoursPrices = {
    firstHour: "Totaly 18 UAH",
    secondHour: "Totaly 32 UAH",
    thirdHour: "Totaly 54 UAH",
    sixHours: "Totaly 108 UAH",
    twelveHours: "Totaly 216 UAH"
};

function residentPricesEnabled() {
    residentHidenContent.style = "display: block;";
}
residentPricesEnabled();

function residentHidePrices() {
    residentHidenContent.style = "display: none;";
    residentHiddenInnerText.style = "display: block";
}



function checkResidentButtonsClickFirst() {    
    
    residentBtn2.classList.remove('btn-warning');
    residentBtn3.classList.remove('btn-warning');
    residentBtn4.classList.remove('btn-warning');
    residentBtn5.classList.remove('btn-warning');

    fullresidentPrice.innerHTML = residentHoursPrices.firstHour; 

    residentBtn1.classList.add('btn-warning');
    residentHidePrices();
}

function checkResidentButtonsClickSecond() {
    residentBtn1.classList.remove('btn-warning');
    residentBtn3.classList.remove('btn-warning');
    residentBtn4.classList.remove('btn-warning');
    residentBtn5.classList.remove('btn-warning');

    fullresidentPrice.innerHTML = residentHoursPrices.secondHour;

    residentBtn2.classList.add('btn-warning');

    residentHidePrices();
}
function checkResidentButtonsClickThird() {
    residentBtn2.classList.remove('btn-warning');
    residentBtn1.classList.remove('btn-warning');
    residentBtn4.classList.remove('btn-warning');
    residentBtn5.classList.remove('btn-warning');

    fullresidentPrice.innerHTML = residentHoursPrices.thirdHour;

    residentBtn3.classList.add('btn-warning');

    residentHidePrices();
}
function checkResidentButtonsClickFourth() {
    residentBtn2.classList.remove('btn-warning');
    residentBtn3.classList.remove('btn-warning');
    residentBtn1.classList.remove('btn-warning');
    residentBtn5.classList.remove('btn-warning');

    fullresidentPrice.innerHTML = residentHoursPrices.sixHours;

    residentBtn4.classList.add('btn-warning');

    residentHidePrices();
}
function checkResidentButtonsClickFifth() {
    residentBtn2.classList.remove('btn-warning');
    residentBtn3.classList.remove('btn-warning');
    residentBtn4.classList.remove('btn-warning');
    residentBtn1.classList.remove('btn-warning');

    fullresidentPrice.innerHTML = residentHoursPrices.twelveHours;

    residentBtn5.classList.add('btn-warning');

    residentHidePrices();
}




