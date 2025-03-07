var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove:false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel:true
});
swiper.slideMove = function (s, e) {
    console.log(s)
}
function Navigate(index) {
    for (let i of hello.querySelectorAll(".Links li")) i.classlist.remove("activeLink")
        Array.from(hello.querySelectorAll(".Links li"))[index].classList.add("activeLink")
    swiper.slideTo(index, 1000, true)
}