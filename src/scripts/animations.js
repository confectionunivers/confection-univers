import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import Lenis from "@studio-freight/lenis";

import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

/* ===================================
   LENIS SMOOTH SCROLL
=================================== */

const lenis = new Lenis({
  lerp: 0.08,
  smoothWheel: true,
});

function raf(time) {

  lenis.raf(time);

  requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

/* ===================================
   CURSOR
=================================== */

const cursor = document.querySelector(".cursor");

const blur = document.querySelector(".cursor-blur");

window.addEventListener("mousemove", (e) => {

  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.15,
  });

  gsap.to(blur, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.4,
  });

});

/* ===================================
   HERO TITLE SPLIT
=================================== */

const heroTitle = new SplitType(".hero h1", {
  types: "chars",
});

gsap.from(heroTitle.chars, {

  y: 140,

  opacity: 0,

  stagger: 0.03,

  duration: 1.2,

  ease: "power4.out",

});

/* ===================================
   HERO CONTENT
=================================== */

gsap.from(".hero-mini", {

  opacity: 0,

  y: 30,

  duration: 1,

  delay: 0.5,

});

gsap.from(".hero-text", {

  opacity: 0,

  y: 40,

  duration: 1,

  delay: 0.9,

});

gsap.from(".hero-buttons", {

  opacity: 0,

  y: 40,

  duration: 1,

  delay: 1.1,

});

/* ===================================
   NAVBAR
=================================== */

gsap.from(".nav", {

  y: -100,

  opacity: 0,

  duration: 1.2,

  ease: "power4.out",

});

/* ===================================
   ABOUT SECTION
=================================== */

gsap.from(".about-text", {

  opacity: 0,

  x: -100,

  duration: 1.2,

  scrollTrigger: {

    trigger: ".about",

    start: "top 75%",

  },

});

gsap.from(".about-image", {

  opacity: 0,

  x: 100,

  duration: 1.2,

  scrollTrigger: {

    trigger: ".about",

    start: "top 75%",

  },

});

/* ===================================
   SERVICE CARDS
=================================== */

gsap.utils.toArray(".service-card").forEach((card, i) => {

  gsap.from(card, {

    opacity: 0,

    y: 100,

    duration: 1,

    delay: i * 0.15,

    scrollTrigger: {

      trigger: card,

      start: "top 85%",

    },

  });

});

/* ===================================
   GALLERY ITEMS
=================================== */

gsap.utils.toArray(".gallery-item").forEach((item, i) => {

  gsap.from(item, {

    opacity: 0,

    scale: 0.9,

    duration: 1,

    delay: i * 0.12,

    scrollTrigger: {

      trigger: item,

      start: "top 85%",

    },

  });

});

/* ===================================
   HERO PARALLAX
=================================== */

gsap.to(".hero-bg", {

  yPercent: 15,

  ease: "none",

  scrollTrigger: {

    trigger: ".hero",

    scrub: true,

  },

});

/* ===================================
   PARALLAX GALLERY
=================================== */

gsap.utils.toArray(".gallery-item").forEach((item) => {

  gsap.to(item, {

    yPercent: -10,

    ease: "none",

    scrollTrigger: {

      trigger: item,

      scrub: true,

    },

  });

});

/* ===================================
   CTA
=================================== */

gsap.from(".cta-section h2", {

  opacity: 0,

  y: 80,

  duration: 1,

  scrollTrigger: {

    trigger: ".cta-section",

    start: "top 75%",

  },

});