let shapes = Array.from(document.getElementsByClassName("shape1"));
let shapesmenu = Array.from(document.getElementsByClassName("shape2"));
let shapesParent = document.querySelector(".bg .shape");

$(".menu").click(function () {
    $("nav .container .port").toggleClass("active");
    $("menu").toggleClass("active");
    $(".menu").toggleClass("active");
    $(".menu p").toggleClass("active");
    $(".menu a").toggleClass("active");
    $(".menu a .hamburger hr").toggleClass("active");
    $(".bg").toggleClass("active");
    $(".bg .shape .shape1").toggleClass("active");
    $(".bg .shape .shape2").toggleClass("active");
    $(".bg .squareout .sql").toggleClass("active");
    $(".bg .squareout .sqr").toggleClass("active");
    $("main").toggleClass("active");
    $("menu div").toggleClass("active");
});
