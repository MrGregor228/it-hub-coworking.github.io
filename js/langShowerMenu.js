var buttonLangMenuShower = document.getElementById("landShow"),
    menuShower = document.getElementById("langShowerMenu");


buttonLangMenuShower.onclick = $(function () {
    $("#landShow").click(function () {
        $(menuShower).toggleClass("hiddddden");
    });
});
console.log("Button is here!");