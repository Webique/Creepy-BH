// Smooth scrolling for menu links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu a').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) { // Only smooth scroll for section IDs
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                    });
                }
            }
        });
    });

    // Navbar toggle for mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            menu.classList.remove('active');
        }
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => menu.classList.remove('active'));
    });

    // Scroll-triggered animations for sections
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active'); // Add active class
                }
            });
        },
        { threshold: 0.2 } // Trigger animation when 20% of the section is visible
    );

    // Add hidden class to all sections initially
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Smooth appearance for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.classList.add('active');
        }, 500);
    }
});

// Handle logo navigation
document.addEventListener('DOMContentLoaded', () => {
    const logoLink = document.querySelector('.logo-link');

    logoLink.addEventListener('click', (event) => {
        if (window.location.pathname.includes('index.html')) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.location.href = 'index.html';
        }
    });
});
