document.addEventListener("DOMContentLoaded", function () {
    // Typing animation
    const words = ["Web Developer", "Frontend Developer", "Digital Marketing", "Video Editor", "App Developer", "Freelancer", "Bug Hunter", "Content Creator"];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    const typingSpeed = 100;
    const erasingSpeed = 100;
    const newWordDelay = 200;

    function type() {
        if (charIndex < words[wordIndex].length) {
            currentWord += words[wordIndex].charAt(charIndex);
            document.querySelector('.typing-animation').textContent = currentWord;
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newWordDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            currentWord = currentWord.slice(0, -1);
            document.querySelector('.typing-animation').textContent = currentWord;
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed + 1100);
        }
    }

    type();

    // Progress bar animation
    const progressBars = document.querySelectorAll('.progress-done');
    progressBars.forEach(bar => {
        setTimeout(() => {
            bar.style.width = bar.getAttribute('data-done') + '%';
            bar.style.opacity = 1;
        }, 500);
    });

    // Circular skills animation
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        let percent = circle.getAttribute('data-percent');
        circle.style.setProperty('--percent', percent);
    });

    // Smooth scrolling and active nav highlighting
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    // Smooth Scroll on Nav Click
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Update Active Nav on Scroll
    function updateActiveNav() {
        let scrollPos = window.scrollY;
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 50; // Offset for header
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                navLinks.forEach(link => link.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();  // Run on load to set the initial active state
});
