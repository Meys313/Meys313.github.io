$(document).ready(function() {
    $(".menu-toggle").click(function() {
        $(".header-mobile-menu").toggleClass("menu-toggle_active");
        $("html, body").toggleClass("scroll-hidden");
    });
});