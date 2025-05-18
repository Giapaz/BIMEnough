
// Scroll automatico plugin con pausa al passaggio
const pluginContainer = document.querySelector('.plugin-container');
let scrollInterval;

if (pluginContainer) {
    function startScroll() {
        scrollInterval = setInterval(() => {
            pluginContainer.scrollLeft += 2;
            if (pluginContainer.scrollLeft >= pluginContainer.scrollWidth - pluginContainer.clientWidth) {
                pluginContainer.scrollLeft = 0;
            }
        }, 20);
    }

    function stopScroll() {
        clearInterval(scrollInterval);
    }

    pluginContainer.addEventListener('mouseenter', stopScroll);
    pluginContainer.addEventListener('mouseleave', startScroll);

    startScroll();
}

// Evidenziazione dinamica tab attivo (simulata con URL)
const navLinks = document.querySelectorAll("nav ul li");
navLinks.forEach(link => {
    if (link.classList.contains("active")) {
        link.classList.add("highlight");
    }
});

// Animazioni al caricamento
const observers = document.querySelectorAll('section');
const options = { threshold: 0.1 };

const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

observers.forEach(section => {
    animateObserver.observe(section);
});
