// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links (if needed in future pages)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and fact items for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .fact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });


// 3D Model Viewer Controls (index.html)
document.addEventListener('DOMContentLoaded', () => {
    const mv = document.querySelector('#reformerModel');
    if (!mv) return;

    const buttons = document.querySelectorAll('.model-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');

            if (action === 'reset') {
                // Resets camera/orbit to initial
                mv.cameraOrbit = null;
                mv.fieldOfView = null;
            }

            if (action === 'toggle-rotate') {
                mv.autoRotate = !mv.autoRotate;
                btn.textContent = mv.autoRotate ? 'Stop rotate' : 'Start rotate';
            }

            if (action === 'fullscreen') {
                // Fullscreen the model-viewer element
                const el = mv;
                if (!document.fullscreenElement) {
                    el.requestFullscreen?.();
                } else {
                    document.exitFullscreen?.();
                }
            }
        });
    });

    // Show a clearer message if the model fails to load
    mv.addEventListener('error', () => {
        console.error('model.glb failed to load. Check file name/path and server hosting.');
    });
});

});
