function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top 29%",
    end: "top 0%",
    scrub: 1.8,
  },
});

tl.to(
  ".page1 h1",
  {
    x: -50,
  },
  "anim"
);

tl.to(
  ".page1 h2",
  {
    x: 50,
  },
  "anim"
);

tl.to(
  ".page1 video",
  {
    width: "85%",
  },
  "anim"
);

var crsr = document.querySelector("#cursor");
var crsr_blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x - 15 + "px";
  crsr.style.top = dets.y - 15 + "px";
  crsr_blur.style.left = dets.x - 200 + "px";
  crsr_blur.style.top = dets.y - 200 + "px";
});

gsap.to(".page2", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".page2",
    scroller: ".main",
    start: "top -30%",
    end: "top -80%",
    scrub: 2,
  },
});

gsap.to(".page3", {
  backgroundColor: "#163801",
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",
    start: "top -20%",
    end: "top -50%",
    scrub: 2,
  },
});

gsap.to(".page4", {
  backgroundColor: "#358238",
  scrollTrigger: {
    trigger: ".page4",
    scroller: ".main",
    start: "top -20%",
    end: "top 80%",
    scrub: 5,
  },
});

gsap.to(".page5", {
  backgroundColor: "#07ad6b",
  scrollTrigger: {
    trigger: ".page5",
    scroller: ".main",
    start: "top -20%",
    end: "top 80%",
    scrub: 5,
  },
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 1.8;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transition = "all ease 0.5s";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
    crsr.style.transition = "none";
  });
});

var h4all = document.querySelectorAll("#scroller h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 1.8;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transition = "all ease 0.5s";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
    crsr.style.transition = "none";
  });
});

var h4all = document.querySelectorAll(".overlay");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 1.8;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transition = "all ease 0.5s";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
    crsr.style.transition = "none";
  });
});

var h4all = document.querySelectorAll(".overlay-acad button");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 1.8;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transition = "all ease 0.5s";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
    crsr.style.transition = "none";
  });
});

gsap.from("#our-motto img, #our-motto-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#our-motto",
    scroller: ".main",
    start: "top 60%",
    end: "top 55%",
    scrub: 7,
  },
});

gsap.from(".stats h4, .stats p", {
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".stats h4",
    scroller: ".main",
    start: "top 80%",
    end: "top 55%",
    scrub: 7,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: ".main",
    // markers:true,
    start: "top 55%",
    end: "top 75%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: ".main",
    // markers:true,
    start: "top 55%",
    end: "top 75%",
    scrub: 4,
  },
});

var testimonials = document.getElementById("testimonials");
var control1 = document.getElementById("control1");
var control2 = document.getElementById("control2");
var control3 = document.getElementById("control3");

control1.onclick = function () {
  testimonials.style.transform = "translateX(870px)";
  control1.classList.add("active");
  control2.classList.remove("active");
  control3.classList.remove("active");
};

control2.onclick = function () {
  testimonials.style.transform = "translateX(0px)";
  control1.classList.remove("active");
  control2.classList.add("active");
  control3.classList.remove("active");
};

control3.onclick = function () {
  testimonials.style.transform = "translateX(-870px)";
  control1.classList.remove("active");
  control2.classList.remove("active");
  control3.classList.add("active");
};

$(document).ready(function () {
  $("#calendar").evoCalendar({
    theme: "Royal Navy",

    calendarEvents: [
      {
        id: "event1", // Event's ID (required)
        name: "New Year", // Event name (required)
        date: "January/1/2020", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "event2", // Event's ID (required)
        name: "Sci-Tech Juniors", // Event name (required)
        date: "January/4/2020", // Event date (required)
        type: "event", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "event3", // Event's ID (required)
        name: "Sci-Tech Seniors", // Event name (required)
        date: "January/5/2020", // Event date (required)
        type: "event", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "event4", // Event's ID (required)
        name: "Border's Visiting Day", // Event name (required)
        date: "January/7/2020", // Event date (required)
        type: "event", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        name: "Winter Vacatiom",
        badge: "01/7 - 01/16", // Event badge (optional)
        date: ["January/7/2023", "January/16/2023"], // Date range
        description: "Winter Break!", // Event description (optional)
        type: "holiday",
        color: "#63d867", // Event custom color (optional)
      },
      {
        name: "Vacation Leave",
        badge: "02/13 - 02/15", // Event badge (optional)
        date: ["February/13/2020", "February/15/2020"], // Date range
        description: "Vacation leave for 3 days.", // Event description (optional)
        type: "event",
        color: "#63d867", // Event custom color (optional)
      },
    ],
  });
});
