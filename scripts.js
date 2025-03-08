// scripts.js

// Update copyright year automatically
document.addEventListener('DOMContentLoaded', function() {
    // Set copyright year
    const yearElement = document.querySelector('.copyright');
    if(yearElement) {
        yearElement.innerHTML = `© ${new Date().getFullYear()} John Doe. All rights reserved.`;
    }

    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to skill rows on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe all elements with 'animate' class
    document.querySelectorAll('.animate').forEach(element => {
        element.classList.add('pre-animate');
        observer.observe(element);
    });

    // Contact form submission handler
    const contactBtn = document.querySelector('.btn');
    if(contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            if(!this.classList.contains('btn-animate')) {
                this.classList.add('btn-animate');
                setTimeout(() => {
                    this.classList.remove('btn-animate');
                }, 300);
            }
        });
    }
});
