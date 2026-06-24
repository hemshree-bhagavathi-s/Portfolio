// ================================
// Portfolio JavaScript
// ================================

// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ================================
// Navbar Shadow
// ================================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 6px 18px rgba(0,0,0,0.2)";
    } else {
        navbar.style.boxShadow = "none";
    }

});

// ================================
// Fade Animation
// ================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});

// ================================
// Typing Effect
// ================================

const text = "Aspiring Data Analyst • AI/ML Engineer • Power BI Developer";

const typingElement = document.querySelector(".hero p");

let index = 0;

function typeText() {

    if (typingElement && index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 60);

    }

}

if (typingElement) {
    typingElement.innerHTML = "";
    typeText();
}

// ================================
// Console Message
// ================================

console.log("Welcome to Hemshree's Portfolio 🚀");