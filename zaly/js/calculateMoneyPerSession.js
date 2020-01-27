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
// var workPlace = 115,
//     workPlacePC = 5,
//     workPlaceNotebook = 10;
// div в котором выводиться общая цена
var cost = document.getElementById('cost');
// console.log(firstHourForworkPlaceWithPC);
// console.log(firstHourForworkPlaceWithNotebook);
// console.log(firstHourForworkPlaceOrdinary);
// console.log(workPlace);
// console.log(workPlacePC);
// console.log(workPlaceNotebook);

var numberOfSeats = {
    whiteZone: 18,
    grayZone: 10,
    redZone: 11,
    blueZone: 8,
    meetingRoom: 8,
    eventHall: 60
};

function whitezone() {
    zonePlaceCounter.innerHTML = "White Zone " + numberOfSeats.whiteZone;
    seatsCounter.max = numberOfSeats.whiteZone;
    seatsCounter.value = numberOfSeats.whiteZone;
}
function grayzone() {
    zonePlaceCounter.innerHTML = "Gray Zone " + numberOfSeats.grayZone;
    seatsCounter.max = numberOfSeats.grayZone;
    seatsCounter.value = numberOfSeats.grayZone;
}
function redzone() {
    zonePlaceCounter.innerHTML = "Red Zone " + numberOfSeats.redZone;
    seatsCounter.max = numberOfSeats.redZone;
    seatsCounter.value = numberOfSeats.redZone;
}
function bluezone() {
    zonePlaceCounter.innerHTML = "Blue Zone " + numberOfSeats.blueZone;
    seatsCounter.max = numberOfSeats.blueZone;
    seatsCounter.value = numberOfSeats.blueZone;
}
function meetingroom() {
    zonePlaceCounter.innerHTML = "Meeting room  " + numberOfSeats.meetingRoom;
    seatsCounter.max = numberOfSeats.meetingRoom;
    seatsCounter.value = numberOfSeats.meetingRoom;
}
function eventhall() {
    zonePlaceCounter.innerHTML = "Event Hall  " + numberOfSeats.eventHall;
    seatsCounter.max = numberOfSeats.eventHall;
    seatsCounter.value = numberOfSeats.eventHall;
}

var zonesChecker = setInterval(function () {
    if (grayZone.checked == true || blueZone.checked == true || meetingRoom.checked == true || redZone.checked == true || eventHall.checked == true) {
        workPlaceWithPC.setAttribute("disabled", "true");
    } else {
        workPlaceWithPC.removeAttribute("disabled", "true");
    }

    if (wholeDay.checked == true) {
        hoursQuantity.setAttribute("disabled", "true");
        $("#quant1 .quantity-button").css("display", "none");
        hoursQuantity.value = 12.5;
    } else if (wholePlace.checked == true) {
        seatsCounter.setAttribute("disabled", "true");
        $("#quant2 .quantity-button").css("display", "none");
        let seats = function () {
            if (whiteZone.checked == true) {
                seatsCounter.max = numberOfSeats.whiteZone;
                seatsCounter.value = numberOfSeats.whiteZone;
            } else if (grayZone.checked == true) {
                seatsCounter.max = numberOfSeats.grayZone;
                seatsCounter.value = numberOfSeats.grayZone;
            } else if (blueZone.checked == true) {
                seatsCounter.max = numberOfSeats.redZone;
                seatsCounter.value = numberOfSeats.redZone;
            } else if (meetingRoom.checked == true) {
                seatsCounter.max = numberOfSeats.blueZone;
                seatsCounter.value = numberOfSeats.blueZone;
            } else if (redZone.checked == true) {
                seatsCounter.max = numberOfSeats.meetingRoom;
                seatsCounter.value = numberOfSeats.meetingRoom;
            } else if (eventHall.checked == true) {
                seatsCounter.max = numberOfSeats.eventHall;
                seatsCounter.value = numberOfSeats.eventHall;
            } else {
                console.log("Помилка");
            }
        };
        return seats();
    } else {
        $("#quant1 .quantity-button").css("display", "block");
        $("#quant2 .quantity-button").css("display", "block");

        hoursQuantity.removeAttribute("disabled", "true");
        seatsCounter.removeAttribute("disabled", "true");
    }
    
}, 500);

var student = {
    firstHour: 18,
    everyNextHour: 14,
    placeWithLaptop: 19,
    everyNextHourWithLaptop: 15,
    placeWithPC: 20,
    everyNextHourWithPC: 16
};

var notStudent = {
    firstHour: 34,
    everyNextHour: 22,
    placeWithLaptop: 35,
    everyNextHourWithLaptop: 23,
    placeWithPC: 37,
    everyNextHourWithPC: 24
};

function getPrice() {
    price = 0;
    if (isAStudent.checked == true) {
        console.log("Студент/работник КЕІ");
        console.log("Час за обычным раб.местом: " + student.firstHour + "\n" + "Час за ПК: " + student.placeWithPC + "\n" + "Час за ноутом: " + student.placeWithLaptop);
        if (workPlaceWithPC.checked == true) {
            console.log("Часов за ПК " + hoursQuantity.value);
            price = (seatsCounter.value * student.placeWithPC) + (hoursQuantity.value * student.everyNextHourWithPC);
            console.log("Человек " + seatsCounter.value * student.placeWithPC);
        } else if (workPlaceWithNotebook.checked == true) {            
            console.log("Часов за ноутом" + hoursQuantity.value);
            price = (seatsCounter.value * student.placeWithLaptop) + (hoursQuantity.value * student.everyNextHourWithLaptop);
            console.log("Человек " + seatsCounter.value * student.placeWithLaptop);
        } else if (workPlaceOrdinary.checked == true) {
            console.log("Часов за обычным раб.местом" + hoursQuantity.value);
            price = (seatsCounter.value * student.firstHour) + (hoursQuantity.value * student.everyNextHour);
            console.log("Человек " + seatsCounter.value * student.firstHour);
        } else {
            alert('Ви студент КЕІ КНЕУ чи ні?');
        }
        console.log(+price);
        cost.innerHTML = +price;
        clearInterval(zonesChecker);
    } else if (isNotAStudent.checked == true) {
        console.log("Не студент");
        console.log("Час за обычным раб.местом: " + notStudent.firstHour + "\n" + "Час за ПК: " + notStudent.placeWithPC + "\n" + "Час за ноутом: " + notStudent.placeWithLaptop);
        console.log();
    } else {
        console.log("Сделайте выбор!")
    }
    // if () {

    // } else {

    // }


    // cost.innerHTML = ;
}
getPrice();
// hoursQuantity
// seatsCounter

// workPlaceWithPC
// workPlaceWithNotebook
// workPlaceOrdinary
// if (seatsCounter.value == 1) {
    //     if (workPlaceWithPC.checked == true || workPlaceWithNotebook.checked == true || workPlaceOrdinary.checked == true && whiteZone.checked != true) {
    //         var f = document.forms.Form;
    //         f.onchange = function () {
    //             var n = f.querySelectorAll('[type="checkbox"]'),
    //                 l = f.querySelectorAll('[type="checkbox"]:checked');
    //             for (var j = 0; j < n.length; j++)
    //                 if (l.length >= 1) { // если отметить три и более галочки
    //                     n[j].disabled = true; // все чекбоксы становятся disabled
    //                     for (var i = 0; i < l.length; i++)
    //                         l[i].disabled = false; // но disabled убирается с помеченных галочками чекбоксов
    //                 } else {
    //                     n[j].disabled = false; // если выделить менее трёх галочек, то disabled снимается со всех чекбоксов
    //                 }
    //         };
    //     }
    // } else {
    //     f.disabled = false;
    //     console.log("Ошибка");
    // }