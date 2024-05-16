window.onload = function () {

    var window_width = window.screen.width;
    var window_height = window.innerHeight;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);


    function c3Ani() {
        gsap.from(".c3-img", {
            scrollTrigger: {
                trigger: ".card3",
                toggleActions: "restart pause resume pause",
                start: "top center",
                end: "center center",
                scrub: 3,
            },
            duration: 3,
            scale: 1.2,
        });

    }
    // c3Ani();

    function c4Ani() {
        gsap.from(".c4-img", {
            scrollTrigger: {
                trigger: ".card4",
                toggleActions: "restart pause resume pause",
                start: "top center",
                end: "center center",
                scrub: 3,
            },
            duration: 3,
            scale: 1.2,
        });

    }
    // c4Ani();

    function c5Ani() {
        gsap.from(".c5-img", {
            scrollTrigger: {
                trigger: ".card4",
                toggleActions: "restart pause resume pause",
                start: "top center",
                end: "center bottom",
                scrub: 3,
            },
            duration: 3,
            scale: 1.2,
        });

    }
    // c5Ani();
}