var hideMenu = document.getElementById('hide-menu'),
    navigZone = document.getElementById('list-examples'),
    showMenu = document.getElementById('show-menu'),
    queryNavigationZone = $('#list-examples');

function showButton() {
    hideMenu.style = 'animation: showButton .7s linear';
    hideMenu.style = 'display: block';
    showMenu.style = 'animation: hideButton .7s linear';
    showMenu.style = 'display: none';
    $('#list-examples').css('right', '0');
}

function hideButton() {
    showMenu.style = 'animation: showButton .7s linear';    
    showMenu.style = 'display: block';
    hideMenu.style = 'animation: hideButton .7s linear';    
    hideMenu.style = 'display: none';
    $('#list-examples').css('right', '-100%');
}

setInterval(function () {
    if (screen.width > 865 && $(queryNavigationZone).css('right', '-100%') == true) {
        navigationZone.css('right', '0px');
    }
},100);