// ============================================
// 54 ENTERPRISES - INTERACTIVE FUNCTIONALITY
// ============================================

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Update active nav link
            updateActiveNavLink(this);
        }
    });
});

// Update active navigation link
function updateActiveNavLink(clickedLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    if (clickedLink.classList.contains('nav-link')) {
        clickedLink.classList.add('active');
    }
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.querySelectorAll('.service-card, .partner-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Animated counter for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const isSuffix = element.nextElementSibling?.classList.contains('stat-suffix');

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = isSuffix ? target : Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = isSuffix ? Math.floor(start) : Math.floor(start);
        }
    }, 16);
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.target);
                animateCounter(counter, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-grid');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');

        // Animate hamburger menu
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (mobileMenuBtn.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Form submission handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="animation: spin 1s linear infinite;">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="31.4 31.4" opacity="0.25"/>
                <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="4"/>
            </svg>
            Sending...
        `;
        submitBtn.disabled = true;

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Simulate form submission (replace with actual backend endpoint)
        setTimeout(() => {
            // Show success message
            submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Message Sent!
            `;
            submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

            // Reset form
            contactForm.reset();

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);

            // Log form data (for development - replace with actual submission)
            console.log('Form submitted:', data);

            // In production, you would send this to your backend:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // });
        }, 1500);
    });
}

// Add spin animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    @media (max-width: 768px) {
        .nav-links.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(10, 15, 30, 0.98);
            backdrop-filter: blur(20px);
            padding: var(--space-lg);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation to service images
document.querySelectorAll('.service-image img').forEach(img => {
    img.addEventListener('load', function () {
        this.style.opacity = '1';
    });
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
});

// Console welcome message
console.log(
    '%c54 ENTERPRISES',
    'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #4287f5 0%, #8e44f5 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'
);
console.log(
    '%cWebsite built by The Website Geeks\nhttps://thewebsitegeeks.com',
    'color: #8e44f5; font-size: 12px;'
);

// Track scroll depth for analytics (optional)
let maxScrollDepth = 0;
window.addEventListener('scroll', () => {
    const scrollDepth = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
    if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = Math.floor(scrollDepth);
        if (maxScrollDepth >= 25 && maxScrollDepth % 25 === 0) {
            console.log(`User scrolled ${maxScrollDepth}% of page`);
            // You can send this to analytics: gtag('event', 'scroll_depth', { depth: maxScrollDepth });
        }
    }
});
