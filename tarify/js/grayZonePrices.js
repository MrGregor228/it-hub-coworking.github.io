var fullGrayZonePrice = document.getElementById('grayZoneInnerText'),
    grayZoneBtn1 = document.getElementById('grayZoneWarningFirst'),
    grayZoneBtn2 = document.getElementById('grayZoneWarningSecond'),
    grayZoneBtn3 = document.getElementById('grayZoneWarningThird'),
    grayZoneBtn4 = document.getElementById('grayZoneWarningFourth'),
    grayZoneBtn5 = document.getElementById('grayZoneWarningFifth'),
    grayZoneHidenContent = document.getElementById('grayZoneShowAndHide');

var grayZoneHoursPrices = {
    firstHour: "В сумі 259 грн",
    secondHour: "В сумі 420 грн",
    thirdHour: "В сумі 581 грн",
    sixHours: "В сумі 1064 грн",
    twelveHours: "В сумі 2030 грн"
};

function grayZonePricesEnabled() {
    grayZoneHidenContent.style = "display: block;";
}
grayZonePricesEnabled();

function grayZoneHidePrices() {
    grayZoneHidenContent.style = "display: none;";
}



function checkGrayZoneButtonsClickFirst() {    
    
    grayZoneBtn2.classList.remove('btn-warning');
    grayZoneBtn3.classList.remove('btn-warning');
    grayZoneBtn4.classList.remove('btn-warning');
    grayZoneBtn5.classList.remove('btn-warning');

    fullGrayZonePrice.innerHTML = grayZoneHoursPrices.firstHour; 

    grayZoneBtn1.classList.add('btn-warning');
    grayZoneHidePrices();
}

function checkGrayZoneButtonsClickSecond() {
    grayZoneBtn1.classList.remove('btn-warning');
    grayZoneBtn3.classList.remove('btn-warning');
    grayZoneBtn4.classList.remove('btn-warning');
    grayZoneBtn5.classList.remove('btn-warning');

    fullGrayZonePrice.innerHTML = grayZoneHoursPrices.secondHour;

    grayZoneBtn2.classList.add('btn-warning');

    grayZoneHidePrices();
}
function checkGrayZoneButtonsClickThird() {
    grayZoneBtn2.classList.remove('btn-warning');
    grayZoneBtn1.classList.remove('btn-warning');
    grayZoneBtn4.classList.remove('btn-warning');
    grayZoneBtn5.classList.remove('btn-warning');

    fullGrayZonePrice.innerHTML = grayZoneHoursPrices.thirdHour;

    grayZoneBtn3.classList.add('btn-warning');

    grayZoneHidePrices();
}
function checkGrayZoneButtonsClickFourth() {
    grayZoneBtn2.classList.remove('btn-warning');
    grayZoneBtn3.classList.remove('btn-warning');
    grayZoneBtn1.classList.remove('btn-warning');
    grayZoneBtn5.classList.remove('btn-warning');

    fullGrayZonePrice.innerHTML = grayZoneHoursPrices.sixHours;

    grayZoneBtn4.classList.add('btn-warning');

    grayZoneHidePrices();
}
function checkGrayZoneButtonsClickFifth() {
    grayZoneBtn2.classList.remove('btn-warning');
    grayZoneBtn3.classList.remove('btn-warning');
    grayZoneBtn4.classList.remove('btn-warning');
    grayZoneBtn1.classList.remove('btn-warning');

    fullGrayZonePrice.innerHTML = grayZoneHoursPrices.twelveHours;

    grayZoneBtn5.classList.add('btn-warning');

    grayZoneHidePrices();
}




