// ======================================
// SAVE FOREST - JavaScript
// ======================================

// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// ======================================
// Contact Form
// ======================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    formMessage.textContent =
        `Thank you, ${name}! Welcome to the Save FOREST movement 🌱`;

    contactForm.reset();
});


// ======================================
// Current Year
// ======================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ======================================
// Scroll Animation
// ======================================

const animatedElements = document.querySelectorAll(
    ".about-card, .action-card, .importance-content, .forest-visual"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(element => {
    element.classList.add("hidden");
    observer.observe(element);
});