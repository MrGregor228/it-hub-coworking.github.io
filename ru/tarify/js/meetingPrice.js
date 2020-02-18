var fullMeetingPrice = document.getElementById('meetingInnerText'),
    meetingBtn1 = document.getElementById('meetingWarningFirst'),
    meetingBtn2 = document.getElementById('meetingWarningSecond'),
    meetingBtn3 = document.getElementById('meetingWarningThird'),
    meetingBtn4 = document.getElementById('meetingWarningFourth'),
    meetingBtn5 = document.getElementById('meetingWarningFifth'),
    meetingHidenContent = document.getElementById('meetingShowAndHide');
    meetingHiddenInnerText = document.getElementById('meeting-hidden-inner-text');

var meetingHoursPrices = {
    firstHour: "В сумі 150 грн",
    secondHour: "В сумі 300 грн",
    thirdHour: "В сумі 450 грн",
    sixHours: "В сумі 900 грн",
    twelveHours: "В сумі 1800 грн"
};

function meetingPricesEnabled() {
    meetingHidenContent.style = "display: block;";
}
meetingPricesEnabled();

function meetingHidePrices() {
    meetingHidenContent.style = "display: none;";
    meetingHiddenInnerText.style = "display: block";
}



function checkMeetingButtonsClickFirst() {    
    
    meetingBtn2.classList.remove('btn-warning');
    meetingBtn3.classList.remove('btn-warning');
    meetingBtn4.classList.remove('btn-warning');
    meetingBtn5.classList.remove('btn-warning');

    fullMeetingPrice.innerHTML = meetingHoursPrices.firstHour; 

    meetingBtn1.classList.add('btn-warning');
    meetingHidePrices();
}

function checkMeetingButtonsClickSecond() {
    meetingBtn1.classList.remove('btn-warning');
    meetingBtn3.classList.remove('btn-warning');
    meetingBtn4.classList.remove('btn-warning');
    meetingBtn5.classList.remove('btn-warning');

    fullMeetingPrice.innerHTML = meetingHoursPrices.secondHour;

    meetingBtn2.classList.add('btn-warning');

    meetingHidePrices();
}
function checkMeetingButtonsClickThird() {
    meetingBtn2.classList.remove('btn-warning');
    meetingBtn1.classList.remove('btn-warning');
    meetingBtn4.classList.remove('btn-warning');
    meetingBtn5.classList.remove('btn-warning');

    fullMeetingPrice.innerHTML = meetingHoursPrices.thirdHour;

    meetingBtn3.classList.add('btn-warning');

    meetingHidePrices();
}
function checkMeetingButtonsClickFourth() {
    meetingBtn2.classList.remove('btn-warning');
    meetingBtn3.classList.remove('btn-warning');
    meetingBtn1.classList.remove('btn-warning');
    meetingBtn5.classList.remove('btn-warning');

    fullMeetingPrice.innerHTML = meetingHoursPrices.sixHours;

    meetingBtn4.classList.add('btn-warning');

    meetingHidePrices();
}
function checkMeetingButtonsClickFifth() {
    meetingBtn2.classList.remove('btn-warning');
    meetingBtn3.classList.remove('btn-warning');
    meetingBtn4.classList.remove('btn-warning');
    meetingBtn1.classList.remove('btn-warning');

    fullMeetingPrice.innerHTML = meetingHoursPrices.twelveHours;

    meetingBtn5.classList.add('btn-warning');

    meetingHidePrices();
}




