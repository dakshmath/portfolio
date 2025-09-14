// Simple, clean JavaScript - no fancy animations

document.addEventListener('DOMContentLoaded', function() {
    // Update active navigation link based on current page
    updateActiveNavLink();
    
    // Add smooth scrolling for any anchor links
    addSmoothScrolling();
    
    // Simple image lazy loading effect
    lazyLoadImages();
    
    // Initialize gallery modal if on gallery page
    initGalleryModal();
});

// Update active navigation link
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.style.color = '#4A90E2';
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
                observer.unobserve(container);
            }
        });
    });
    
    imageContainers.forEach(container => {
        imageObserver.observe(container);
    });
}

// Gallery Modal Functionality
function initGalleryModal() {
    const modal = document.getElementById('galleryModal');
    if (!modal) return; // Exit if not on gallery page
    
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.querySelector('.modal-caption');
    const modalCounter = document.querySelector('.modal-counter');
    const closeBtn = document.querySelector('.modal-close');
    const prevBtn = document.querySelector('.modal-prev');
    const nextBtn = document.querySelector('.modal-next');
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;
    
    galleryItems.forEach((item, index) => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            openModal(index);
        });
    });
    
    // Open modal function
    function openModal(index) {
        currentIndex = index;
        const item = galleryItems[index];
        const img = item.querySelector('.gallery-image');
        const caption = item.querySelector('.gallery-caption');
        
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modalCaption.textContent = caption.textContent;
        modalCounter.textContent = `${index + 1} / ${galleryItems.length}`;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Navigate to previous image
    function prevImage() {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
        openModal(currentIndex);
    }
    
    // Navigate to next image
    function nextImage() {
        currentIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
        openModal(currentIndex);
    }
    
    // Event listeners
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation for modal
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        }
    });
    
    // Prevent image dragging
    modalImage.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
}

document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
    });
});

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