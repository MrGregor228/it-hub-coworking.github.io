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
var cost = document.getElementById('cost'),
    reGet = document.getElementById('reGet');
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
    seatsCounter.value = 1;
    workPlaceWithPC.removeAttribute("disabled", "true");
}

function grayzone() {
    zonePlaceCounter.innerHTML = "Gray Zone " + numberOfSeats.grayZone;
    seatsCounter.max = numberOfSeats.grayZone;
    seatsCounter.value = 1;
    workPlaceWithPC.setAttribute("disabled", "true");
    workPlaceWithPC.checked = false;

}

function redzone() {
    zonePlaceCounter.innerHTML = "Red Zone " + numberOfSeats.redZone;
    seatsCounter.max = numberOfSeats.redZone;
    seatsCounter.value = 1;
    workPlaceWithPC.setAttribute("disabled", "true");
    workPlaceWithPC.checked = false;

}

function bluezone() {
    zonePlaceCounter.innerHTML = "Blue Zone " + numberOfSeats.blueZone;
    seatsCounter.max = numberOfSeats.blueZone;
    seatsCounter.value = 1;
    workPlaceWithPC.setAttribute("disabled", "true");
    workPlaceWithPC.checked = false;

}

function meetingroom() {
    zonePlaceCounter.innerHTML = "Meeting room  " + numberOfSeats.meetingRoom;
    seatsCounter.max = numberOfSeats.meetingRoom;
    seatsCounter.value = 1;
    workPlaceWithPC.setAttribute("disabled", "true");
    workPlaceWithPC.checked = false;

}

function eventhall() {
    zonePlaceCounter.innerHTML = "Event Hall  " + numberOfSeats.eventHall;
    seatsCounter.max = numberOfSeats.eventHall;
    seatsCounter.value = 1;
    workPlaceWithPC.setAttribute("disabled", "true");
    workPlaceWithPC.checked = false;

}

wholePlace.onclick = function () {
    if (whiteZone.checked == true && wholePlace.checked == true) {
        seatsCounter.max = numberOfSeats.whiteZone;
        seatsCounter.value = numberOfSeats.whiteZone;
        workPlaceWithPC.setAttribute("disabled", "false");
    } else if (grayZone.checked == true && wholePlace.checked == true) {
        seatsCounter.max = numberOfSeats.grayZone;
        seatsCounter.value = numberOfSeats.grayZone;
        workPlaceWithPC.setAttribute("disabled", "true");
    } else if (blueZone.checked == true && wholePlace.checked == true) {
        seatsCounter.max = numberOfSeats.redZone;
        seatsCounter.value = numberOfSeats.redZone;
        workPlaceWithPC.setAttribute("disabled", "true");
    } else if (meetingRoom.checked == true && wholePlace.checked == true) {
        seatsCounter.max = numberOfSeats.blueZone;
        seatsCounter.value = numberOfSeats.blueZone;
        workPlaceWithPC.setAttribute("disabled", "true");
    } else if (redZone.checked == true && wholePlace.checked == true) {
        seatsCounter.max = numberOfSeats.meetingRoom;
        seatsCounter.value = numberOfSeats.meetingRoom;
        workPlaceWithPC.setAttribute("disabled", "true");
    } else if (eventHall.checked == true && wholePlace.checked == true) {
        seatsCounter.max = numberOfSeats.eventHall;
        seatsCounter.value = numberOfSeats.eventHall;
        workPlaceWithPC.setAttribute("disabled", "true");
    } else {
        alert('Выберете помещение!');
        wholePlace.checked = false;
        console.log("Помилка");
    }
};

var zonesChecker = setInterval(function () {

    if (wholeDay.checked == true) {

        hoursQuantity.setAttribute("disabled", "true");
        $("#quant1 .quantity-button").css("display", "none");
        hoursQuantity.value = 12.5;

    } else if (wholePlace.checked == true) {

        seatsCounter.setAttribute("disabled", "true");
        $("#quant2 .quantity-button").css("display", "none");

    } else {

        $("#quant1 .quantity-button").css("display", "block");
        $("#quant2 .quantity-button").css("display", "block");

        hoursQuantity.removeAttribute("disabled", "true");
        seatsCounter.removeAttribute("disabled", "true");
    }

}, 500);

var student = {
    // usuall place
    firstHour: 18,
    everyNextHour: 14,
    // place with laptop
    placeWithLaptop: 19,
    everyNextHourWithLaptop: 15,
    // place with PC
    placeWithPC: 20,
    everyNextHourWithPC: 16
};

var notStudent = {
    // usuall place
    firstHour: 34,
    everyNextHour: 22,
    // place with laptop
    placeWithLaptop: 35,
    everyNextHourWithLaptop: 23,
    // place with PC
    placeWithPC: 37,
    everyNextHourWithPC: 24
};

//     whiteZone: 18,
//     grayZone: 10,
//     redZone: 11,
//     blueZone: 8,
//     meetingRoom: 8,
//     eventHall: 60

function workPlacesChecker() {

    if (workPlaceOrdinary.checked == true) { // если выбранно ОБЫЧНОЕ МЕСТО

        seatsCounter.max = workPlaceNotebook;
        seatsCounter.value = 1;

        numberOfSeats.whiteZone = 13;
        numberOfSeats.grayZone = 10;
        numberOfSeats.redZone = 11;
        numberOfSeats.blueZone = 8;
        numberOfSeats.meetingRoom = 8;
        numberOfSeats.eventHall = 60;

        if (whiteZone.checked == true) { // WHITE ZONE FOR ORDINARY SEATS

            seatsCounter.max = numberOfSeats.whiteZone;
            seatsCounter.value = 1;
            zonePlaceCounter.innerHTML = "White Zone " + numberOfSeats.whiteZone;

            workPlaceWithNotebook.disabled = false;
            $(workPlaceWithNotebook).css("background", "lightgray");

        } else if (grayZone.checked == true) { // GRAY ZONE FOR ORDINARY SEATS

            seatsCounter.max = numberOfSeats.grayZone;
            seatsCounter.value = 1;
            zonePlaceCounter.innerHTML = "Gray Zone " + numberOfSeats.grayZone;

            workPlaceWithPC.disabled = true;
             workPlaceWithNotebook.disabled = false;
            $(workPlaceWithNotebook).css("background", "lightgray");
            $(workPlaceWithPC).css("background", "red");

        } else if (redZone.checked == true) { // RED ZONE FOR ORDINARY SEATS

            zonePlaceCounter.innerHTML = "Red Zone " + numberOfSeats.redZone;

            seatsCounter.max = numberOfSeats.redZone;
            seatsCounter.value = 1;

            workPlaceWithPC.disabled = true;
             workPlaceWithNotebook.disabled = false;
            $(workPlaceWithNotebook).css("background", "lightgray");
            $(workPlaceWithPC).css("background", "red");

        } else if (blueZone.checked == true) { // BLUE ZONE FOR ORDINARY SEATS

            zonePlaceCounter.innerHTML = "Blue Zone " + numberOfSeats.blueZone;

            seatsCounter.max = numberOfSeats.blueZone;
            seatsCounter.value = 1;

            workPlaceWithPC.disabled = true;
             workPlaceWithNotebook.disabled = false;
            $(workPlaceWithNotebook).css("background", "lightgray");
            $(workPlaceWithPC).css("background", "red");

        } else if (meetingRoom.checked == true) { // MEETING ROOM FOR ORDINARY SEATS

            zonePlaceCounter.innerHTML = "Meeting Room " + numberOfSeats.meetingRoom;

            seatsCounter.max = numberOfSeats.meetingRoom;
            seatsCounter.value = 1;

            workPlaceWithPC.disabled = true;
             workPlaceWithNotebook.disabled = false;
            $(workPlaceWithNotebook).css("background", "lightgray");
            $(workPlaceWithPC).css("background", "red");

        } else if (eventHall.checked == true) { // EVENT HALL FOR ORDINARY SEATS

            zonePlaceCounter.innerHTML = "Event Hall " + numberOfSeats.eventHall;

            seatsCounter.max = numberOfSeats.eventHall;
            seatsCounter.value = 1;

            workPlaceWithPC.disabled = true;
            workPlaceWithNotebook.disabled = true;

            $(workPlaceWithPC).css("background", "red");
            $(workPlaceWithNotebook).css("background", "red");

        } else { // DEFAULT FOR ORDINARY SEAT
            workPlaceWithNotebook.disabled = false;
            workPlaceWithPC.disabled = false;
            $(workPlaceWithPC).css("background", "lightgray");
            $(workPlaceWithNotebook).css("background", "lightgray");
        }



        // zonePlaceCounter.innerHTML = "Blue Zone " + numberOfSeats.blueZone;
        // zonePlaceCounter.innerHTML = "Meeting room  " + numberOfSeats.meetingRoom;
        // zonePlaceCounter.innerHTML = "Event Hall  " + numberOfSeats.eventHall;

    } else if (workPlaceWithNotebook.checked == true) { // Если опция с НОУТБУКОМ

        numberOfSeats.whiteZone = workPlaceNotebook;
        numberOfSeats.grayZone = workPlaceNotebook;
        numberOfSeats.redZone = workPlaceNotebook;
        numberOfSeats.blueZone = workPlaceNotebook - 2;
        numberOfSeats.meetingRoom = workPlaceNotebook - 2;


        if (whiteZone.checked == true) { // WHITE ZONE FOR NOTEBOOK SEATS

            seatsCounter.max = numberOfSeats.whiteZone;
            seatsCounter.value = 1;
            zonePlaceCounter.innerHTML = "White Zone " + numberOfSeats.whiteZone;

            workPlaceWithPC.disabled = false;
            workPlaceWithNotebook.disabled = false;
            $(workPlaceWithNotebook).css("background", "lightgray");

        } else if (grayZone.checked == true) { // GRAY ZONE FOR NOTEBOOK SEATS

            seatsCounter.max = numberOfSeats.grayZone;
            seatsCounter.value = 1;

            zonePlaceCounter.innerHTML = "Gray Zone " + numberOfSeats.grayZone;

            workPlaceWithPC.disabled = true;
            workPlaceWithPC.checked = false;
            workPlaceWithNotebook.disabled = false;
            $(workPlaceWithNotebook).css("background", "lightgray");
            $(workPlaceWithPC).css("background", "red");

        } else if (redZone.checked == true) { // RED ZONE FOR NOTEBOOK SEATS

            seatsCounter.max = numberOfSeats.redZone;
            seatsCounter.value = 1;

            zonePlaceCounter.innerHTML = "Red Zone " + numberOfSeats.redZone;

            workPlaceWithPC.disabled = true;
            workPlaceWithPC.checked = false;
            workPlaceWithNotebook.disabled = false;
            $(workPlaceWithNotebook).css("background", "lightgray");
            $(workPlaceWithPC).css("background", "red");

        } else if (blueZone.checked == true) { // BLUE ZONE FOR NOTEBOOK SEATS

            seatsCounter.max = numberOfSeats.blueZone;
            seatsCounter.value = 1;

            zonePlaceCounter.innerHTML = "Blue Zone " + numberOfSeats.blueZone;

            workPlaceWithPC.disabled = true;
            workPlaceWithPC.checked = false;
            workPlaceWithNotebook.disabled = false;
            $(workPlaceWithNotebook).css("background", "lightgray");
            $(workPlaceWithPC).css("background", "red");

        } else if (meetingRoom.checked == true) { // MEETING ROOM FOR NOTEBOOK SEATS

            seatsCounter.max = numberOfSeats.meetingRoom;
            seatsCounter.value = 1;

            zonePlaceCounter.innerHTML = "Meeting Room " + numberOfSeats.meetingRoom;

            workPlaceWithPC.disabled = true;
            workPlaceWithPC.checked = false;
            workPlaceWithNotebook.disabled = false;
            $(workPlaceWithNotebook).css("background", "lightgray");
            $(workPlaceWithPC).css("background", "red");

        } else if (eventHall.checked == true) { // EVENT HALL FOR NOTEBOOK SEATS

            seatsCounter.max = numberOfSeats.eventHall;
            seatsCounter.value = 1;

            zonePlaceCounter.innerHTML = "Event Hall " + numberOfSeats.eventHall;

            workPlaceWithPC.disabled = true;
            workPlaceWithPC.checked = false;
            workPlaceWithNotebook.disabled = true;
            workPlaceWithNotebook.checked = false;

            $(workPlaceWithPC).css("background", "red");
            $(workPlaceWithNotebook).css("background", "red");

        } else { // DEFAULT FOR NOTEBOOK SEATS

            workPlaceWithPC.disabled = false;
            $(workPlaceWithPC).css("background", "lightgray");
            workPlaceWithNotebook.disabled = false;
            $(workPlaceWithNotebook).css("background", "lightgray");
        }
        seatsCounter.max = workPlaceNotebook;
        seatsCounter.value = 1;

    } else if (workPlaceWithPC.checked == true) { // Если опция с ПК

        numberOfSeats.whiteZone = workPlacePC;

        if (whiteZone.checked == true) { // WHITE ZONE FOR PC SEATS

            seatsCounter.max = numberOfSeats.whiteZone;
            seatsCounter.value = 1;
            zonePlaceCounter.innerHTML = "White Zone " + numberOfSeats.whiteZone;
            
            workPlaceWithPC.disabled = false;
            $(workPlaceWithPC).css("background", "lightgray");
            $(workPlaceWithPC.checked).css("background", "orange");
            

         } else if (grayZone.checked == true || redZone.checked == true || blueZone.checked == true || meetingRoom.checked == true || eventHall.checked == true) { // GRAY ZONE FOR PC SEATS
            workPlaceWithPC.disabled = true;
            workPlaceWithPC.checked = false;
            $(workPlaceWithPC).css("background", "red");
        }
        //     workPlaceWithPC.disabled = true;
        //     workPlaceWithPC.checked = false;
        //     $(workPlaceWithPC).css("background", "red");

        // } else if (redZone.checked == true) { // RED ZONE FOR PC SEATS

        //     seatsCounter.max = numberOfSeats.redZone;
        //     seatsCounter.value = 1;

        //     zonePlaceCounter.innerHTML = "Red Zone " + numberOfSeats.redZone;

        //     workPlaceWithPC.disabled = true;
        //     workPlaceWithPC.checked = false;
        //     $(workPlaceWithPC).css("background", "red");

        // } else if (blueZone.checked == true) { // BLUE ZONE FOR PC SEATS

        //     seatsCounter.max = numberOfSeats.blueZone;
        //     seatsCounter.value = 1;

        //     zonePlaceCounter.innerHTML = "Blue Zone " + numberOfSeats.blueZone;

        //     workPlaceWithPC.disabled = true;
        //     workPlaceWithPC.checked = false;
        //     $(workPlaceWithPC).css("background", "red");

        // } else if (meetingRoom.checked == true) { // MEETING ROOM FOR PC SEATS

        //     seatsCounter.max = numberOfSeats.meetingRoom;
        //     seatsCounter.value = 1;

        //     zonePlaceCounter.innerHTML = "Meeting Room " + numberOfSeats.meetingRoom;

        //     workPlaceWithPC.disabled = true;
        //     workPlaceWithPC.checked = false;
        //     $(workPlaceWithPC).css("background", "red");

        // } else if (eventHall.checked == true) { // EVENT HALL FOR PC SEATS

        //     seatsCounter.max = numberOfSeats.eventHall;
        //     seatsCounter.value = 1;

        //     zonePlaceCounter.innerHTML = "Event Hall " + numberOfSeats.eventHall;

        //     workPlaceWithPC.disabled = true;
        //     workPlaceWithPC.checked = false;
        //     workPlaceWithNotebook.disabled = true;
        //     workPlaceWithNotebook.checked = false;

        //     $(workPlaceWithPC).css("opacity", "0.5");
        //     $(workPlaceWithNotebook).css("opacity", "0.5");

        // }

    } else { // DEFAULT FOR PC SEATS
        workPlaceWithPC.disabled = false;
        $(workPlaceWithPC).css("background", "lightgray");
        workPlaceWithNotebook.disabled = false;
        $(workPlaceWithNotebook).css("background", "lightgray");
        console.log("В этой зоне отсутствуют компьютеры!");
    }
}



function getPrice() {
    price = 0;

    if (isAStudent.checked == true) {
        console.log("Студент/работник КЕІ");
        console.log("Час за обычным раб.местом: " + student.firstHour + "\n" + "Час за ПК: " + student.placeWithPC + "\n" + "Час за ноутом: " + student.placeWithLaptop);
        if (workPlaceWithPC.checked == true) {
            console.log("Часов за ПК " + hoursQuantity.value);
            price = (seatsCounter.value * student.placeWithPC) + ((hoursQuantity.value - 1) * student.everyNextHourWithPC);
            console.log(+price + " грн");
            cost.innerHTML = "Вартість становить: " + price + " грн";
            clearInterval(zonesChecker);
        } else if (workPlaceWithNotebook.checked == true) {
            console.log("Часов за ноутом" + hoursQuantity.value);
            price = (seatsCounter.value * student.placeWithLaptop) + ((hoursQuantity.value - 1) * student.everyNextHourWithLaptop);
            console.log(+price + " грн");
            cost.innerHTML = "Вартість становить: " + price + " грн";
            clearInterval(zonesChecker);
        } else if (workPlaceOrdinary.checked == true) {
            console.log("Часов за обычным раб.местом" + hoursQuantity.value);
            price = (seatsCounter.value * student.firstHour) + ((hoursQuantity.value - 1) * student.everyNextHour);
            console.log(+price + " грн");
            cost.innerHTML = "Вартість становить: " + price + " грн";
            clearInterval(zonesChecker);
        } else {
            alert('Ви студент КЕІ КНЕУ чи ні?');
        }
        $('.hider').css("animation", "hiderrr .3s linear forwards");
        $('.hider').css("height", "0%");
        setTimeout(function () {
            $('.hider').css("display", "none");
        }, 500);


    } else if (isNotAStudent.checked == true) {
        console.log("Не студент");
        console.log("Час за обычным раб.местом: " + notStudent.firstHour + "\n" + "Час за ПК: " + notStudent.placeWithPC + "\n" + "Час за ноутом: " + notStudent.placeWithLaptop);
        if (workPlaceWithPC.checked == true) {
            console.log("Часов за ПК " + hoursQuantity.value);
            price = (seatsCounter.value * notStudent.placeWithPC) + ((hoursQuantity.value - 1) * notStudent.everyNextHourWithPC);
            console.log(+price + " грн");
            cost.innerHTML = "Вартість становить: " + price + " грн";
            clearInterval(zonesChecker);
        } else if (workPlaceWithNotebook.checked == true) {
            console.log("Часов за ноутом" + hoursQuantity.value);
            price = (seatsCounter.value * notStudent.placeWithLaptop) + ((hoursQuantity.value - 1) * notStudent.everyNextHourWithLaptop);
            console.log(+price + " грн");
            cost.innerHTML = "Вартість становить: " + price + " грн";
            clearInterval(zonesChecker);
        } else if (workPlaceOrdinary.checked == true) {
            console.log("Часов за обычным раб.местом" + hoursQuantity.value);
            price = (seatsCounter.value * notStudent.firstHour) + ((hoursQuantity.value - 1) * notStudent.everyNextHour);
            console.log(+price + " грн");
            cost.innerHTML = "Вартість становить: " + price + " грн";
            clearInterval(zonesChecker);
        } else {
            alert('Ви студент КЕІ КНЕУ чи ні?');
        }
        $('.hider').css("animation", "hiderrr .3s linear forwards");
        $('.hider').css("height", "0%");
        setTimeout(function () {
            $('.hider').css("display", "none");
        }, 500);
    }
    setInterval(zonesChecker, 500);
}
getPrice();

function reGetPrice() {
    isAStudent.checked = false;
    isNotAStudent.checked = false;

    whiteZone.checked = false;
    grayZone.checked = false;
    redZone.checked = false;
    blueZone.checked = false;
    meetingRoom.checked = false;
    eventHall.checked = false;

    workPlaceWithPC.checked = false;
    workPlaceWithNotebook.checked = false;
    workPlaceOrdinary.checked = false;

    $(workPlaceWithPC).css("background", "lightgray");
    $(workPlaceWithNotebook).css("background", "lightgray");

    seatsCounter.value = 1;
    hoursQuantity.value = 1;

    wholeDay.checked = false;
    wholePlace.checked = false;

    

    var zonesChecker = setInterval(function () {

        if (wholeDay.checked == true) {
            hoursQuantity.setAttribute("disabled", "true");
            $("#quant1 .quantity-button").css("display", "none");
            hoursQuantity.value = 12.5;
        } else if (wholePlace.checked == true) {
            seatsCounter.setAttribute("disabled", "true");
            $("#quant2 .quantity-button").css("display", "none");
        } else {
            $("#quant1 .quantity-button").css("display", "block");
            $("#quant2 .quantity-button").css("display", "block");

            hoursQuantity.removeAttribute("disabled", "true");
            seatsCounter.removeAttribute("disabled", "true");
        }

        if (grayZone.checked == true || blueZone.checked == true || meetingRoom.checked == true || redZone.checked == true || eventHall.checked == true) {
            workPlaceWithPC.setAttribute("disabled", "true");
        } else {
            workPlaceWithPC.removeAttribute("disabled", "true");
        }
        

    }, 500);

    $('.hider').css("animation", "showwww .3s linear forwards");
    setTimeout(function () {
        $('.hider').css("display", "block");
    }, 500);

    return zonesChecker;
}
reGetPrice();