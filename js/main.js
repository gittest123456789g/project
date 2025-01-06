////gsap/////////
gsap.registerPlugin(ScrollTrigger);





gsap.from(".card-se .card-one", {
  scale: 0.8,
  opacity: 0,
  rotateY: 45,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".card-se .cards",
    start: "top 80%",
    end: "bottom center",
    scrub: true,
  },
});

gsap.from(" .btn-contact a", {
  scale: 0.8,
  opacity: 0,
  duration: 1.5,
  ease: "elastic.out(1, 0.3)",
  scrollTrigger: {
    trigger: " .btn-contact",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
  },
});
gsap.from(" .btn-contactt a", {
  scale: 0.8,
  opacity: 0,
  duration: 1.5,
  ease: "elastic.out(1, 0.3)",
  scrollTrigger: {
    trigger: " .btn-contactt",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
  },
});

gsap.to(".btn-contact a", {
  scale: 1.1,
  repeat: -1,
  yoyo: true,
  duration: 0.8,
  ease: "power1.inOut",
  delay: 1.5,
});
gsap.to(".btn-contactt a", {
  scale: 1.1,
  repeat: -1,
  yoyo: true,
  duration: 0.8,
  ease: "power1.inOut",
  delay: 1.5,
});
gsap.registerPlugin(ScrollTrigger);



gsap.from(".why .head img", {
  scale: 0.5,
  opacity: 0,
  duration: 1.5,
  ease: "elastic.out(1, 0.3)",
  scrollTrigger: {
    trigger: ".why",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});



gsap.from(".why .content-section h5, .why .content-section p, ", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".why .content-section",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
  },
});


gsap.registerPlugin(ScrollTrigger);



gsap.from(".banner .head .ccc img", {
  rotate: -180,
  scale: 0.5,
  opacity: 0,
  duration: 1.5,
  ease: "elastic.out(1, 0.5)",
  scrollTrigger: {
    trigger: ".banner .head .ccc",
    start: "top 80%",
    end: "bottom center",
    scrub: true,
  },
});

gsap.from(".banner .head .des", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".banner .head .des",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
  },
});

////gsap/////////
