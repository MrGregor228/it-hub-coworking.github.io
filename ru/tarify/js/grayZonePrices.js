var fullGrayZonePrice = document.getElementById('grayZoneInnerText'),
    grayZoneBtn1 = document.getElementById('grayZoneWarningFirst'),
    grayZoneBtn2 = document.getElementById('grayZoneWarningSecond'),
    grayZoneBtn3 = document.getElementById('grayZoneWarningThird'),
    grayZoneBtn4 = document.getElementById('grayZoneWarningFourth'),
    grayZoneBtn5 = document.getElementById('grayZoneWarningFifth'),
    grayZoneHidenContent = document.getElementById('grayZoneShowAndHide');
    grayHiddenInnerText = document.getElementById('gray-hidden-inner-text');

var grayZoneHoursPrices = {
    firstHour: "В сумме 259 грн",
    secondHour: "В сумме 420 грн",
    thirdHour: "В сумме 581 грн",
    sixHours: "В сумме 1064 грн",
    twelveHours: "В сумме 2030 грн"
};

function grayZonePricesEnabled() {
    grayZoneHidenContent.style = "display: block;";
}
grayZonePricesEnabled();

function grayZoneHidePrices() {
    grayZoneHidenContent.style = "display: none;";
    grayHiddenInnerText.style = "display: block";
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




