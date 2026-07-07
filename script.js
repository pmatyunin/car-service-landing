/* ======================================
        MOBILE MENU
====================================== */

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

if (burger) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
    });
}

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        burger.classList.remove("active");
        nav.classList.remove("active");
    });
});

/* ======================================
        FAQ ACCORDION
====================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {
                other.classList.remove("active");
                other.querySelector(".faq-answer").style.maxHeight = null;
            }

        });

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }

    });

});

/* ======================================
        SCROLL PROGRESS
====================================== */

const progress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    progress.style.width = (scrollTop / height) * 100 + "%";

});

/* ======================================
        HEADER SHADOW
====================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(8,8,8,.92)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(12,12,12,.65)";
        header.style.boxShadow = "none";

    }

});

/* ======================================
        SCROLL ANIMATION
====================================== */

const revealElements = document.querySelectorAll(
    ".service-card,.review-card,.advantage,.stat,.faq-item,.contact-form"
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
    threshold: .15
}

);

revealElements.forEach(el => {

    el.classList.add("reveal");

    observer.observe(el);

});

/* ======================================
        SMOOTH BUTTON EFFECT
====================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

/* ======================================
        FORM
====================================== */

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = form.querySelector("button");

        button.textContent = "Отправлено ✓";

        button.disabled = true;

        setTimeout(() => {

            form.reset();

            button.disabled = false;

            button.textContent = "Записаться";

        }, 2500);

    });

}