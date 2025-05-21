const workCards = document.querySelectorAll(".work-card");
workCards.forEach(card => {
   const workMore = card.querySelector(".work-card-more");
   workMore.style.width = "0px";
   workMore.style.transition = "all 0.4s ease";
});

const defaultOpen = document.getElementById("opened");
if (defaultOpen) {
   defaultOpen.style.width = "70vw";
}
workCards.forEach(card => {
   const workMore = card.querySelector(".work-card-more");
   card.addEventListener("click", function () {
      // Collapse all others
      workCards.forEach(otherCard => {
         const otherMore = otherCard.querySelector(".work-card-more");
         if (otherCard !== card) {
            otherMore.style.width = "0px";
         }
      });
      // Toggle current card
      if (workMore.style.width === "0px") {
         workMore.style.width = "70vw";
      } else {
         workMore.style.width = "0px";
      }
   });
});

const testimonialSwiper = new Swiper('.swiper-testimonials', {
   effect: 'slide',
   slidesPerView: "auto",
   centeredSlides: true,
   initialSlide: 1,
   spaceBetween: 20,
   pagination: {
      el: '.swiper-pagination-new',
      clickable: true,
   },
   grabCursor: true,
});

gsap.to(".hero-video", {
   height: "70vh",
   scrollTrigger: {
      trigger: ".scroll-wrapper",
      start: "3% 0%",
      end: "90% 0%",
      scrub: true,
      markers: false,
   }
});

gsap.to(".hero-tittle", {
   fontSize: "1.5rem",
   fontWeight: "600",
   scrollTrigger: {
      trigger: ".scroll-wrapper",
      start: "3% 0%",
      end: "80% 0%",
      scrub: true,
      markers: false,
   }
});
gsap.to(".hero-tittle.top", {
   y: "100%",
   scrollTrigger: {
      trigger: ".scroll-wrapper",
      start: "40% 0%",
      end: "70% 0%",
      scrub: true,
      markers: false,
   }
});
gsap.to(".hero-tittle.down", {
   y: "-100%",
   scrollTrigger: {
      trigger: ".scroll-wrapper",
      start: "40% 0%",
      end: "70% 0%",
      scrub: true,
      markers: false,
   }
});
gsap.to(".about-tittle", {
   fontSize: "10vw",
   fontWeight: "900",
   color: "#A5A5A0",
   scrollTrigger: {
      trigger: ".section_about",
      start: "0% 120%",
      end: "10% 0%",
      scrub: true,
      markers: false,
   }
});
gsap.to(".about-tittle", {
   fontSize: "10vw",
   fontWeight: "900",
   color: "#A5A5A0",
   scrollTrigger: {
      trigger: ".section_pricing",
      start: "0% 120%",
      end: "10% 0%",
      scrub: true,
      markers: false,
   }
});
gsap.to(".about-tittle", {
   fontSize: "13vw",
   fontWeight: "900",
   color: "#A5A5A0",
   scrollTrigger: {
      trigger: ".section_team",
      start: "0% 120%",
      end: "10% 0%",
      scrub: true,
      markers: false,
   }
});

gsap.to(".horizental-wrapper", {
   x: "-64%",
   scrollTrigger: {
      trigger: ".work-content-wrapper",
      start: "top top",
      end: "200% top",
      scrub: true,
      markers: false,
   }
});

