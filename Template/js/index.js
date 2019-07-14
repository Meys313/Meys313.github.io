//Choose your perfect plan tabs
function showTab(e, idOne, idTwo) {
    let buttons = document.querySelectorAll('.text-btns_item'),
    tabs = document.querySelectorAll('.plan-card_item__wrapper'), i;
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active-text_btn');
    }
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.add('hide');
        tabs[i].classList.remove('relative-card');
        tabs[i].classList.remove('absolute-card');
    }
    document.getElementById(idOne).classList.remove('hide');
    document.getElementById(idOne).classList.add('relative-card');
    document.getElementById(idTwo).classList.remove('hide');
    document.getElementById(idTwo).classList.add('absolute-card');
    e.target.classList.add('active-text_btn');
}
//create your set
document.querySelector('.set-editor_btn').addEventListener('mouseover', function() {
  document.querySelector('.set-editor_list').classList.add('active-block');
})
//menu
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $("#bottom-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $("#mobile-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
//mobile-menu
var mobileBtn = document.querySelector('.mobile-menu_icon');
var mobileMenu = document.querySelector('.mobile-menu');
$(mobileMenu).on("click","a", function (event) {
    $(mobileMenu).toggleClass('mobile-menu_active');
    $(mobileBtn).toggleClass('mobile-btn_active');
});
mobileBtn.addEventListener('click', function() {
    this.classList.toggle('mobile-btn_active');
    mobileMenu.classList.toggle('mobile-menu_active');
});

//MOBILE DISCOUNT
let discount = document.querySelector('.mobile-discount_btn');
discount.addEventListener('click', function() {
    document.querySelector('.mobile-discount').style.display =  'none';
});
window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 4200) {
        document.querySelector('.mobile-discount').classList.add('mobile-discount_active')
    }
})
// cervices
/*window.onload = function() {
    var ctx = canvas.getContext('2d');
    var angles = document.querySelectorAll('.services_item__img');
    canvas.width = document.querySelector('.services-content').clientWidth;
    canvas.height = document.querySelector('.services-content').clientHeight;
    //for (var i = 0; i < angles.length; i++) {
        var firstAngleY = angles[0].offsetTop + 55;
        var firstAngleX = angles[0].offsetLeft + 55;
        var secondAngleY = angles[1].offsetTop + 155;
        var secondAngleX = angles[1].offsetLeft + 55;
        var thirdAngleX = angles[2].offsetTop + 55;
        var thirdAngleY = angles[2].offsetLeft + 55;
        ctx.beginPath();
        ctx.moveTo(firstAngleX, firstAngleY);
        ctx.quadraticCurveTo(secondAngleY, secondAngleX, thirdAngleY, thirdAngleX)
        ctx.stroke()
        //var angleTop = Math.round(angles[i].getBoundingClientRect().)
    //}
}*/