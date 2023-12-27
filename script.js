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
        date: "January/1/2024", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "event7", // Event's ID (required)
        name: "Christmas", // Event name (required)
        date: "December/25/2023", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "event8", // Event's ID (required)
        name: "Ubhouli", // Event name (required)
        date: "December/26/2023", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },

      {
        id: "event2", // Event's ID (required)
        name: "Sci-Tech Juniors", // Event name (required)
        date: "January/4/2024", // Event date (required)
        type: "event", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "event3", // Event's ID (required)
        name: "Sci-Tech Seniors", // Event name (required)
        date: "January/5/2024", // Event date (required)
        type: "event", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "event4", // Event's ID (required)
        name: "Border's Visiting Day", // Event name (required)
        date: "January/7/2024", // Event date (required)
        type: "event", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        name: "Winter Vacatiom",
        badge: "01/7 - 01/16", // Event badge (optional)
        date: ["January/7/2024", "January/16/2024"], // Date range
        description: "Winter Break!", // Event description (optional)
        type: "holiday",
        color: "#63d867", // Event custom color (optional)
      },
      {
        name: "Report Card Day",
        date: "December/30/2023", // Date range
        description: "Report Card Distribution Day", // Event description (optional)
        type: "event",
        color: "blue", // Event custom color (optional)
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

const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const API_KEY = "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"; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
  // Create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);
  let chatContent =
    className === "outgoing"
      ? `<p></p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi; // return chat <li> element
};

const generateResponse = (chatElement) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const messageElement = chatElement.querySelector("p");

  // Define the properties and message for the API request
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    }),
  };

  // Send POST request to API, get response and set the reponse as paragraph text
  fetch(API_URL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      messageElement.textContent = data.choices[0].message.content.trim();
    })
    .catch(() => {
      messageElement.classList.add("error");
      messageElement.textContent =
        "Oops! Something went wrong. Please try again.";
    })
    .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
};

const handleChat = () => {
  userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
  if (!userMessage) return;

  // Clear the input textarea and set its height to default
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  // Append the user's message to the chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // Display "Thinking..." message while waiting for the response
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

chatInput.addEventListener("input", () => {
  // Adjust the height of the input textarea based on its content
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  // If Enter key is pressed without Shift key and the window
  // width is greater than 800px, handle the chat
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);
chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
