var hideMenu = $('.hide-menu'),
    navigZone = $('list-examples'),
    showMenu = $('.show-menu');

function showButton() {
    hideMenu.css('animation', 'showButton .7s linear');
    hideMenu.css('display', 'block');
    showMenu.css('animation', 'hideButton .7s linear');
    showMenu.css('display', 'none');
    $('.navig-zones').attr('style', 'right: 0px !important');
}

function hideButton() {
    showMenu.css('animation', 'showButton .7s linear');    
    showMenu.css('display', 'block');
    hideMenu.css('animation', 'hideButton .7s linear');    
    hideMenu.css('display', 'none');
    $('.navig-zones').attr('style', 'right: -100% !important');
}

    if (screen.width < 865) {
        $('.navig-zones').attr('style', 'right: -100%');
    } else if (screen.width > 865){
        $('.navig-zones').attr('style', 'right: 0');
    } else {
        console.log('Ошибка');
    }
