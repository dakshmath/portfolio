// Simple, clean JavaScript - no fancy animations

document.addEventListener('DOMContentLoaded', function() {
    // Update active navigation link based on current page
    updateActiveNavLink();
    
    // Add smooth scrolling for any anchor links
    addSmoothScrolling();
    
    // Simple image lazy loading effect
    lazyLoadImages();
});

// Update active navigation link
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.style.color = '#007bff';
            link.style.fontWeight = '600';
        }
    });
}

// Smooth scrolling for anchor links
function addSmoothScrolling() {
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
}

// Simple lazy loading for images (when you add real images)
function lazyLoadImages() {
    const imageContainers = document.querySelectorAll('.experience-image, .project-image, .media-item');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target;
                // When you add real images, replace the placeholder text
                // with actual img elements here
                observer.unobserve(container);
            }
        });
    });
    
    imageContainers.forEach(container => {
        imageObserver.observe(container);
    });
}

// Add click handlers for project links (to handle any special behavior)
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // You can add analytics tracking here if needed
        // e.g., track which projects get the most clicks
    });
});

// Simple form validation if you add contact forms later
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '#28a745';
        }
    });
    
    return isValid;
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Add keyboard shortcuts if needed
    // e.g., 'h' for home, 'j' for journey, 'p' for projects
    if (e.altKey) {
        switch(e.key) {
            case 'h':
                window.location.href = 'index.html';
                break;
            case 'j':
                window.location.href = 'journey.html';
                break;
            case 'p':
                window.location.href = 'projects.html';
                break;
            case 'g':
                window.location.href = 'gallery.html';
                break;
        }
    }
});

document.querySelector('.fixed-name').addEventListener('click', e => {
    e.preventDefault();
    window.location.href = 'index.html';
  });