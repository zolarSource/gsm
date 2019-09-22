const topMenuMobileLinks = $('.top-menu-mobile__links');
const topMenuMobile = $('.top-menu-mobile');
const button = $('.top-menu-mobile__right__burger');    

button.on('click', () => {
    topMenuMobileLinks.toggleClass('top-menu-mobile__links_active');
    button.toggleClass('top-menu-mobile__right__burger_active');
});

$(window).on('scroll', () => {
    if($(window).scrollTop() == 0){
        topMenuMobile.css('box-shadow', 'none');
    } else {
        topMenuMobile.css('box-shadow', '0px 0px 10px rgba(0,0, 0, 0.5)');
    }
});
