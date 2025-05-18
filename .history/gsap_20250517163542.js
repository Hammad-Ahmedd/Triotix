gsap.to(".hero-video",{
   height:"70vh",
   scrollTrigger:{
    trigger:".scroll-wrapper",
    start: "3% 0%",
    end: "90% 0%",
    scrub: true,
    markers: false,
   }
});

gsap.to(".hero-tittle",{
    fontSize:"1.5rem",
   fontWeight:"600",
   scrollTrigger:{
    trigger:".scroll-wrapper",
    start: "3% 0%",
    end: "80% 0%",
    scrub: true,
    markers: false,
   }
});
gsap.to(".hero-tittle.top",{
    y:"100%",
   scrollTrigger:{
    trigger:".scroll-wrapper",
    start: "40% 0%",
    end: "70% 0%",
    scrub: true,
    markers: false,
   }
});
gsap.to(".hero-tittle.down",{
   y:"-100%",
   scrollTrigger:{
    trigger:".scroll-wrapper",
    start: "40% 0%",
    end: "70% 0%",
    scrub: true,
    markers: false,
   }
});