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
