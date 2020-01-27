var isAStudent = document.getElementById('yes'),
    isNotAStudent = document.getElementById('no'),
    // Тут идут зоны
    zoneContainer = document.getElementById('zoneContainer'),
    zonePlaceCounter = document.getElementById('zonePlaceCounter'),
    whiteZone = document.getElementById('WhiteZone'),
    grayZone = document.getElementById('GrayZone'),
    redZone = document.getElementById('RedZone'),
    blueZone = document.getElementById('BlueZone'),
    meetingRoom = document.getElementById('MeetingRoom'),
    eventHall = document.getElementById('EventHall'),
    // Тут рабочие места (Ноут, ПК, обычное место)
    workPlaceWithPC = document.getElementById('PC'),
    workPlaceWithNotebook = document.getElementById('Notebook'),
    workPlaceOrdinary = document.getElementById('Usuall'),
    // Количество мест, часов
    seatsCounter = document.getElementById('seatsCounter'),
    hoursQuantity = document.getElementById('hoursQuantity'),
    // Сколько часов, людей придут
    hours = document.getElementById('hoursQuantity'),
    people = document.getElementById('placeQuantity'),
    quantityButtons = document.getElementsByClassName('quantity-button'),
    // Если целый день
    wholeDay = document.getElementById('wholeDay'),
    wholePlace = document.getElementById('wholePlace');
// Prices
var firstHourForworkPlaceOrdinary = 18,
    firstHourForworkPlaceWithPC = firstHourForworkPlaceOrdinary + 1,
    firstHourForworkPlaceWithNotebook = firstHourForworkPlaceOrdinary + 2;

// Это общее кол-во мест, кол-во мест с ПК и кол-во мест с ноутами
var workPlace = 115,
    workPlacePC = 5,
    workPlaceNotebook = 10;
// div в котором выводиться общая цена
var cost = document.getElementById('cost');

console.log(firstHourForworkPlaceWithPC);
console.log(firstHourForworkPlaceWithNotebook);
console.log(firstHourForworkPlaceOrdinary);
console.log(workPlace);
console.log(workPlacePC);
console.log(workPlaceNotebook);

var numberOfSeats = {
    whiteZone: 18,
    grayZone: 10,
    redZone: 11,
    blueZone: 8,
    meetingRoom: 8,
    eventHall: 60
};

setInterval(function () {
    if (grayZone.checked == true || blueZone.checked == true || meetingRoom.checked == true || redZone.checked == true || eventHall.checked == true) {
        workPlaceWithPC.setAttribute("disabled", "true");
    } else {
        workPlaceWithPC.removeAttribute("disabled", "true");
    }

    if (whiteZone.checked == true) {
        zonePlaceCounter.innerHTML = "White Zone " + numberOfSeats.whiteZone;
        seatsCounter.max = numberOfSeats.whiteZone;
    } else if (grayZone.checked == true) {
        zonePlaceCounter.innerHTML = "Gray Zone " + numberOfSeats.grayZone;
        seatsCounter.max = numberOfSeats.grayZone;
    } else if (redZone.checked == true) {
        zonePlaceCounter.innerHTML = "Red Zone " + numberOfSeats.redZone;
        seatsCounter.max = numberOfSeats.redZone;
    } else if (blueZone.checked == true) {
        zonePlaceCounter.innerHTML = "Blue Zone " + numberOfSeats.blueZone;
        seatsCounter.max = numberOfSeats.blueZone;
    } else if (meetingRoom.checked == true) {
        zonePlaceCounter.innerHTML = "Meeting room  " + numberOfSeats.meetingRoom;
        seatsCounter.max = numberOfSeats.meetingRoom;
    } else if (eventHall.checked == true) {
        zonePlaceCounter.innerHTML = "Event Hall  " + numberOfSeats.eventHall;
        seatsCounter.max = numberOfSeats.eventHall;
    } else {
        zonePlaceCounter.innerHTML = "";
    }

    if (wholeDay.checked == true) {
        hoursQuantity.setAttribute("disabled", "true");
        $("#quant1 .quantity-button").css("display", "none");
    } else if (wholePlace.checked == true) {
        seatsCounter.setAttribute("disabled", "true");
        $("#quant2 .quantity-button").css("display", "none");
    } else {
        $("#quant1 .quantity-button").css("display", "block");
        $("#quant2 .quantity-button").css("display", "block");

        hoursQuantity.removeAttribute("disabled", "true");
        seatsCounter.removeAttribute("disabled", "true");
    }
    if (seatsCounter.value == 1) {
        if (workPlaceWithPC.checked == true || workPlaceWithNotebook.checked == true || workPlaceOrdinary.checked == true) {
            var f = document.forms.Form;
            f.onchange = function () {
                var n = f.querySelectorAll('[type="checkbox"]'),
                    l = f.querySelectorAll('[type="checkbox"]:checked');
                for (var j = 0; j < n.length; j++)
                    if (l.length >= 1) { // если отметить три и более галочки
                        n[j].disabled = true; // все чекбоксы становятся disabled
                        for (var i = 0; i < l.length; i++)
                            l[i].disabled = false; // но disabled убирается с помеченных галочками чекбоксов
                    } else {
                        n[j].disabled = false; // если выделить менее трёх галочек, то disabled снимается со всех чекбоксов
                    }
            };
        }
    } else {
        console.log("Ошибка");
    }
}, 500);

function getPrice() {
    price = 0;
    if (isAStudent.checked == true) {
        firstHourForworkPlaceOrdinary = 18,
        firstHourForworkPlaceWithPC = firstHourForworkPlaceOrdinary + 1,
        firstHourForworkPlaceWithNotebook = firstHourForworkPlaceOrdinary + 2;
        console.log("Студент/работник КЕІ");
        console.log("Час за обычным раб.местом: " + firstHourForworkPlaceOrdinary + "\n" + "Час за ПК: " + firstHourForworkPlaceWithPC + "\n" + "Час за ноутом: " + firstHourForworkPlaceWithNotebook);
    } else if (isNotAStudent.checked == true) {
        firstHourForworkPlaceOrdinary = 34,
        firstHourForworkPlaceWithPC = firstHourForworkPlaceOrdinary + 1,
        firstHourForworkPlaceWithNotebook = firstHourForworkPlaceOrdinary + 3;
    } else {
        alert('choose!');
    }
    // if () {

    // } else {

    // }


    // cost.innerHTML = ;
}
getPrice();