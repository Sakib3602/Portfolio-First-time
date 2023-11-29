gsap.to(".name h1", {
    transform: "translateX(-390%)",
    fontWeight: "10",
   scrollTrigger: {
    trigger:".name",
    scroller: "body",
    // markers: true,
    start:"top 0",
    end: "top -200%",
    scrub:true,
    pin:true
   }
});


