
// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animate elements on scroll
const animateOnScroll = () => {
    const sections = document.querySelectorAll('section');
    const features = document.querySelectorAll('.feature-card');
    const projects = document.querySelectorAll('.project-card');

    sections.forEach(section => {
        const position = section.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });

    features.forEach(feature => {
        const position = feature.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            feature.classList.add('visible');
        }
    });

    projects.forEach(project => {
        const position = project.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            project.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

