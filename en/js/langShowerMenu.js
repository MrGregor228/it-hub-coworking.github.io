let buttonIsOnThePage = setInterval(function () {
    var buttonLangMenuShower = document.getElementById("landShow"),
        menuShower = document.getElementById("langShowerMenu");


    buttonLangMenuShower.onclick = $(function () {
        $("#landShow").click(function () {
            $(menuShower).toggleClass("hiddddden");
        });
    });
    console.log("Button is here!");
}, 1000);

setTimeout(function () {
    clearInterval(buttonIsOnThePage);
}, 1500);