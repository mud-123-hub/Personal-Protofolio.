const words = [
    "Frontend Web Developer.",
    "UI/UX Focused.",
    "Frontend Web Developer.",
    "Creative Designer."
];
const typeTarget = document.getElementById('type-target');

const typingDelay = 100;
const erasingDelay = 50;
const newWordDelay = 1200;

let wordIndex = 0;
let charIndex = 0;
let typingForward = true;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeLoop() {
    const current = words[wordIndex];

    if (typingForward) {
        if (charIndex < current.length) {
            charIndex++;
            typeTarget.textContent = current.slice(0, charIndex);
            await sleep(typingDelay);
            typeLoop();
        } else {
            typingForward = false;
            await sleep(newWordDelay);
            typeLoop();
        }
    } else {
        if (charIndex > 0) {
            charIndex--;
            typeTarget.textContent = current.slice(0, charIndex);
            await sleep(erasingDelay);
            typeLoop();
        } else {
            typingForward = true;
            wordIndex = (wordIndex + 1) % words.length;
            await sleep(300);
            typeLoop();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeLoop, 500);
});

const colorBtns = document.querySelectorAll(".color-btn");
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(colorTitle) {
    alternateStyles.forEach(style => {
        if (colorTitle === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
    localStorage.setItem("activeColor", colorTitle);
}

window.addEventListener("load", () => {
    const savedColor = localStorage.getItem("activeColor");
    if (savedColor) {
        setActiveStyle(savedColor);
    } else {
        setActiveStyle("color1");
    }

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        document.getElementById("dark-mode-toggle").checked = true;
    }
});

colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const colorTitle = btn.getAttribute("data-color").replace(".css", "");
        setActiveStyle(colorTitle);
    });
});


const toggle = document.getElementById("dark-mode-toggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", toggle.checked);
});

const darkToggle = document.getElementById("dark-mode-toggle");

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    darkToggle.checked = true;
}

darkToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", darkToggle.checked);
});


if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    darkToggle.checked = true;
}

darkToggle.addEventListener("change", () => {
    if (darkToggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "true");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "false");
    }
});


const navLinks = document.querySelectorAll(".nav li a");
const sections = document.querySelectorAll(".mainSection > div");

sections[0].classList.add("slide-in");

navLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");

        sections.forEach((sec) => {
            sec.classList.remove("slide-in");
            sec.classList.remove("slide-out");
        });

        const targetSection = sections[index];

        targetSection.classList.add("slide-in");
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});



const toggler = document.querySelector('.navToggler');
const sidebar = document.querySelector('.logoSec');

toggler.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});







