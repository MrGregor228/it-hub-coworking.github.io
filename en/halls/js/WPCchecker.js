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

        $(workPlaceWithPC).css("opacity", "1");
        $(workPlaceWithNotebook).css("opacity", "1");

        if (whiteZone.checked == true) { // WHITE ZONE FOR ORDINARY SEATS

            seatsCounter.max = numberOfSeats.whiteZone;
            seatsCounter.value = 1;
            zonePlaceCounter.innerHTML = "White Zone " + numberOfSeats.whiteZone;

            workPlaceWithNotebook.disabled = false;
            workPlaceWithPC.disabled = false;

        } else if (grayZone.checked == true) { // GRAY ZONE FOR ORDINARY SEATS

            workPlaceWithPC.checked = false;
            workPlaceWithPC.disabled = true;
            $(workPlaceWithPC).css("opacity", "0.5");
            workPlaceWithNotebook.disabled = false;
            workPlaceWithNotebook.checked = false;

            seatsCounter.max = numberOfSeats.grayZone;
            seatsCounter.value = 1;
            zonePlaceCounter.innerHTML = "Gray Zone " + numberOfSeats.grayZone;

        } else if (redZone.checked == true) { // RED ZONE FOR ORDINARY SEATS

            workPlaceWithPC.checked = false;
            workPlaceWithPC.disabled = true;
            $(workPlaceWithPC).css("opacity", "0.5");
            workPlaceWithNotebook.disabled = false;
            workPlaceWithNotebook.checked = false;

            seatsCounter.max = numberOfSeats.redZone;
            seatsCounter.value = 1;
            zonePlaceCounter.innerHTML = "Red Zone " + numberOfSeats.redZone;

        } else if (blueZone.checked == true) { // BLUE ZONE FOR ORDINARY SEATS
            workPlaceWithPC.checked = false;
            workPlaceWithPC.disabled = true;
            $(workPlaceWithPC).css("opacity", "0.5");
            workPlaceWithNotebook.disabled = false;
            workPlaceWithNotebook.checked = false;

            seatsCounter.max = numberOfSeats.blueZone;
            seatsCounter.value = 1;
            zonePlaceCounter.innerHTML = "Blue Zone " + numberOfSeats.blueZone;

        } else if (meetingRoom.checked == true) { // MEETING ROOM FOR ORDINARY SEATS
            workPlaceWithPC.checked = false;
            workPlaceWithPC.disabled = true;
            $(workPlaceWithPC).css("opacity", "0.5");
            workPlaceWithNotebook.disabled = true;
            $(workPlaceWithNotebook).css("opacity", "0.5");
            workPlaceWithNotebook.checked = false;

            seatsCounter.setAttribute("disabled", "true");
            $("#quant2 .quantity-button").css("display", "none");

            seatsCounter.max = numberOfSeats.meetingRoom;
            seatsCounter.value = 1;
            zonePlaceCounter.innerHTML = "Meeting Room " + numberOfSeats.meetingRoom;

        } else if (eventHall.checked == true) { // EVENT HALL FOR ORDINARY SEATS

            workPlaceWithPC.checked = false;
            workPlaceWithPC.disabled = true;
            $(workPlaceWithPC).css("opacity", "0.5");
            workPlaceWithNotebook.disabled = true;
            $(workPlaceWithNotebook).css("opacity", "0.5");
            workPlaceWithNotebook.checked = false;

            seatsCounter.setAttribute("disabled", "true");
            $("#quant2 .quantity-button").css("display", "none");

            seatsCounter.max = numberOfSeats.eventHall;
            seatsCounter.value = 60;
            zonePlaceCounter.innerHTML = "Event Hall " + numberOfSeats.eventHall;
        } else { // DEFAULT FOR ORDINARY SEAT
            workPlaceWithNotebook.disabled = false;
            workPlaceWithPC.disabled = false;

            workPlaceWithPC.checked = false;
            workPlaceWithNotebook.checked = false;

            $(workPlaceWithPC).css("opacity", "1");
            $(workPlaceWithNotebook).css("opacity", "1");
        }
    } else if (workPlaceWithNotebook.checked == true) { // Если опция с НОУТБУКОМ

        numberOfSeats.whiteZone = workPlaceNotebook;
        numberOfSeats.grayZone = workPlaceNotebook;
        numberOfSeats.redZone = workPlaceNotebook;
        numberOfSeats.blueZone = workPlaceNotebook - 2;
        numberOfSeats.meetingRoom = workPlaceNotebook - 2;

        $(workPlaceWithPC).css("opacity", "1");
        $(workPlaceWithNotebook).css("opacity", "1");

        if (whiteZone.checked == true) { // WHITE ZONE FOR NOTEBOOK SEATS

            workPlaceWithPC.disabled = false;
            workPlaceWithNotebook.disabled = false;

            seatsCounter.max = numberOfSeats.whiteZone;
            seatsCounter.value = 1;
            zonePlaceCounter.innerHTML = "White Zone " + numberOfSeats.whiteZone;

        } else if (grayZone.checked == true) { // GRAY ZONE FOR NOTEBOOK SEATS

            workPlaceWithPC.checked = false;
            workPlaceWithPC.disabled = true;
            $(workPlaceWithPC).css("opacity", "0.5");
            workPlaceWithNotebook.disabled = false;

            seatsCounter.max = numberOfSeats.grayZone;
            seatsCounter.value = 1;
            zonePlaceCounter.innerHTML = "Gray Zone " + numberOfSeats.grayZone;

        } else if (redZone.checked == true) { // RED ZONE FOR NOTEBOOK SEATS

            workPlaceWithPC.checked = false;
            workPlaceWithPC.disabled = true;
            $(workPlaceWithPC).css("opacity", "0.5");
            workPlaceWithNotebook.disabled = false;

            seatsCounter.max = numberOfSeats.redZone;
            seatsCounter.value = 1;
            zonePlaceCounter.innerHTML = "Red Zone " + numberOfSeats.redZone;

        } else if (blueZone.checked == true) { // BLUE ZONE FOR NOTEBOOK SEATS

            workPlaceWithPC.checked = false;
            workPlaceWithPC.disabled = true;
            $(workPlaceWithPC).css("opacity", "0.5");
            workPlaceWithNotebook.disabled = false;

            seatsCounter.max = numberOfSeats.blueZone;
            seatsCounter.value = 1;
            zonePlaceCounter.innerHTML = "Blue Zone " + numberOfSeats.blueZone;

        } else if (meetingRoom.checked == true) { // MEETING ROOM FOR NOTEBOOK SEATS

            workPlaceWithNotebook.checked = false;
            workPlaceWithPC.checked = false;

            workPlaceWithPC.disabled = true;
            $(workPlaceWithPC).css("opacity", "0.5");
            workPlaceWithNotebook.disabled = true;
            $(workPlaceWithNotebook).css("opacity", "0.5");


            seatsCounter.max = numberOfSeats.meetingRoom;
            seatsCounter.value = 1;
            zonePlaceCounter.innerHTML = "Meeting Room " + numberOfSeats.meetingRoom;

        } else if (eventHall.checked == true) { // EVENT HALL FOR NOTEBOOK SEATS

            workPlaceWithNotebook.checked = false;
            workPlaceWithPC.checked = false;

            workPlaceWithPC.disabled = true;
            $(workPlaceWithPC).css("opacity", "0.5");
            workPlaceWithNotebook.disabled = true;
            $(workPlaceWithNotebook).css("opacity", "0.5");

            seatsCounter.setAttribute("disabled", "true");
            $("#quant2 .quantity-button").css("display", "none");

            seatsCounter.max = numberOfSeats.eventHall;
            seatsCounter.value = numberOfSeats.eventHall;
            zonePlaceCounter.innerHTML = "Event Hall " + numberOfSeats.eventHall;

        } else { // DEFAULT FOR NOTEBOOK SEATS

            workPlaceWithNotebook.disabled = false;
            workPlaceWithPC.disabled = false;

            workPlaceWithPC.checked = false;
            workPlaceWithNotebook.checked = false;

            $(workPlaceWithPC).css("opacity", "1");
            $(workPlaceWithNotebook).css("opacity", "1");
        }
        seatsCounter.max = workPlaceNotebook;
        seatsCounter.value = 1;

    } else if (workPlaceWithPC.checked == true) { // Если опция с ПК

        numberOfSeats.whiteZone = workPlacePC;

        if (whiteZone.checked == true) { // WHITE ZONE FOR PC SEATS

            workPlaceWithPC.disabled = false;
            workPlaceWithNotebook.disabled = false;

            seatsCounter.max = numberOfSeats.whiteZone;
            seatsCounter.value = 1;
            zonePlaceCounter.innerHTML = "White Zone " + numberOfSeats.whiteZone;


        } else { // DEFAULT FOR PC SEATS

            workPlaceWithPC.disabled = true;
            workPlaceWithPC.checked = false;

            $(workPlaceWithPC).css("opacity", "0.5");
        }

        seatsCounter.max = workPlacePC;
        seatsCounter.value = 1;

    } else { // DEFAULT FOR PC SEATS
        workPlaceWithPC.disabled = false;
        $(workPlaceWithPC).css("opacity", "1");
        workPlaceWithNotebook.disabled = false;
        $(workPlaceWithNotebook).css("opacity", "1");
        console.log("В этой зоне отсутствуют компьютеры!");
    }
}