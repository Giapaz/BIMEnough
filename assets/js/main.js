/**
 * BimEnough.com Main JavaScript
 * Handles navigation, smooth scrolling, and interactive features
 */

(function() {
    'use strict';

    // Global app object
    const BimEnoughApp = {
        // Configuration
        config: {
            headerHeight: 80,
            scrollOffset: 20,
            animationDuration: 300,
            breakpoints: {
                mobile: 768,
                tablet: 1024,
                desktop: 1200
            }
        },

        // State
        state: {
            isMenuOpen: false,
            currentSection: 'home',
            isScrolling: false,
            socialFollowStatus: {
                linkedin: false,
                youtube: false
            }
        },

        // DOM elements
        elements: {},

        // Initialize the application
        init() {
            this.cacheDOMElements();
            this.bindEvents();
            this.initSmoothScrolling();
            this.initActiveNavigation();
            this.initDownloadLogic();
            this.initMobileMenu();
            this.initScrollEffects();
            
            // Wait for DOM to be fully loaded
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this.onDOMReady();
                });
            } else {
                this.onDOMReady();
            }
        },

        // Cache frequently used DOM elements
        cacheDOMElements() {
            this.elements = {
                header: document.querySelector('.header'),
                nav: document.querySelector('.navbar'),
                mobileToggle: document.querySelector('.mobile-toggle'),
                navMenu: document.querySelector('.nav-menu'),
                navLinks: document.querySelectorAll('.nav-link'),
                sections: document.querySelectorAll('section[id]'),
                downloadBtn: document.querySelector('#download-btn'),
                downloadText: document.querySelector('#download-text'),
                linkedinBtn: document.querySelector('#linkedin-follow'),
                youtubeBtn: document.querySelector('#youtube-follow'),
                socialButtons: document.querySelectorAll('.btn-social'),
                heroStats: document.querySelectorAll('.stat-number'),
                featureCards: document.querySelectorAll('.feature-card'),
                toolCards: document.querySelectorAll('.tool-card')
            };
        },

        // Bind event listeners
        bindEvents() {
            // Window events
            window.addEventListener('scroll', this.throttle(this.onScroll.bind(this), 16));
            window.addEventListener('resize', this.throttle(this.onResize.bind(this), 100));
            window.addEventListener('load', this.onWindowLoad.bind(this));

            // Navigation events
            if (this.elements.mobileToggle) {
                this.elements.mobileToggle.addEventListener('click', this.toggleMobileMenu.bind(this));
            }

            // Social follow events
            if (this.elements.linkedinBtn) {
                this.elements.linkedinBtn.addEventListener('click', this.handleSocialFollow.bind(this));
            }
            if (this.elements.youtubeBtn) {
                this.elements.youtubeBtn.addEventListener('click', this.handleSocialFollow.bind(this));
            }

            // Download button event
            if (this.elements.downloadBtn) {
                this.elements.downloadBtn.addEventListener('click', this.handleDownload.bind(this));
            }

            // Smooth scroll for navigation links
            this.elements.navLinks.forEach(link => {
                if (link.getAttribute('href').startsWith('#')) {
                    link.addEventListener('click', this.handleNavClick.bind(this));
                }
            });

            // Hero action buttons
            document.querySelectorAll('.hero-actions .btn').forEach(btn => {
                if (btn.getAttribute('href').startsWith('#')) {
                    btn.addEventListener('click', this.handleNavClick.bind(this));
                }
            });
        },

        // Initialize smooth scrolling
        initSmoothScrolling() {
            // Polyfill for browsers that don't support smooth scrolling
            if (!('scrollBehavior' in document.documentElement.style)) {
                this.loadPolyfill('https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/dist/smoothscroll.min.js');
            }
        },

        // Initialize active navigation highlighting
        initActiveNavigation() {
            this.updateActiveNavigation();
        },

        // Initialize download logic
        initDownloadLogic() {
            this.updateDownloadButton();
        },

        // Initialize mobile menu
        initMobileMenu() {
            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (this.state.isMenuOpen && 
                    !this.elements.navMenu.contains(e.target) && 
                    !this.elements.mobileToggle.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });

            // Close mobile menu when clicking on navigation links
            this.elements.navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (this.state.isMenuOpen) {
                        this.closeMobileMenu();
                    }
                });
            });
        },

        // Initialize scroll effects
        initScrollEffects() {
            // Add intersection observer for animations
            if ('IntersectionObserver' in window) {
                this.initIntersectionObserver();
            }
        },

        // Initialize intersection observer for scroll animations
        initIntersectionObserver() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, observerOptions);

            // Observe feature cards and tool cards
            [...this.elements.featureCards, ...this.elements.toolCards].forEach(card => {
                observer.observe(card);
            });
        },

        // Handle window load
        onWindowLoad() {
            // Remove any loading classes
            document.body.classList.remove('loading');
            
            // Trigger animations
            this.animateHeroStats();
        },

        // Handle DOM ready
        onDOMReady() {
            // Add loaded class for CSS transitions
            document.body.classList.add('loaded');
            
            // Initialize any third-party libraries here
            this.initExternalLibraries();
        },

        // Handle scroll events
        onScroll() {
            if (this.state.isScrolling) return;

            this.updateActiveNavigation();
            this.updateHeaderStyle();
        },

        // Handle resize events
        onResize() {
            // Close mobile menu on resize to desktop
            if (window.innerWidth >= this.config.breakpoints.mobile && this.state.isMenuOpen) {
                this.closeMobileMenu();
            }
        },

        // Handle navigation link clicks
        handleNavClick(e) {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            
            if (href.startsWith('#')) {
                const targetId = href.substring(1);
                this.scrollToSection(targetId);
            }
        },

        // Handle social follow buttons
        handleSocialFollow(e) {
            e.preventDefault();
            const platform = e.currentTarget.dataset.platform;
            
            // Toggle follow status
            this.state.socialFollowStatus[platform] = !this.state.socialFollowStatus[platform];
            
            // Update button appearance
            this.updateSocialButton(e.currentTarget, platform);
            
            // Update download button state
            this.updateDownloadButton();
            
            // In a real implementation, you would handle the actual social follow here
            // For demo purposes, we just simulate the follow
            this.simulateSocialFollow(platform);
        },

        // Handle download button click
        handleDownload(e) {
            e.preventDefault();
            
            if (this.isDownloadEnabled()) {
                // In a real implementation, this would trigger the actual download
                this.simulateDownload();
            }
        },

        // Toggle mobile menu
        toggleMobileMenu() {
            this.state.isMenuOpen = !this.state.isMenuOpen;
            
            this.elements.mobileToggle.classList.toggle('active', this.state.isMenuOpen);
            this.elements.navMenu.classList.toggle('active', this.state.isMenuOpen);
            document.body.classList.toggle('menu-open', this.state.isMenuOpen);
        },

        // Close mobile menu
        closeMobileMenu() {
            this.state.isMenuOpen = false;
            this.elements.mobileToggle.classList.remove('active');
            this.elements.navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        },

        // Scroll to section
        scrollToSection(sectionId) {
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                this.state.isScrolling = true;
                
                const offsetTop = targetSection.offsetTop - this.config.headerHeight + this.config.scrollOffset;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Reset scrolling state after animation
                setTimeout(() => {
                    this.state.isScrolling = false;
                }, this.config.animationDuration);
            }
        },

        // Update active navigation
        updateActiveNavigation() {
            const scrollPosition = window.scrollY + this.config.headerHeight + 50;
            let currentSection = 'home';
            
            this.elements.sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            if (currentSection !== this.state.currentSection) {
                this.state.currentSection = currentSection;
                
                // Update navigation links
                this.elements.navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${currentSection}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        },

        // Update header style based on scroll
        updateHeaderStyle() {
            if (window.scrollY > 10) {
                this.elements.header.classList.add('scrolled');
            } else {
                this.elements.header.classList.remove('scrolled');
            }
        },

        // Update social button appearance
        updateSocialButton(button, platform) {
            if (this.state.socialFollowStatus[platform]) {
                button.classList.add('followed');
                button.innerHTML = button.innerHTML.replace('Follow on', 'Following on').replace('Subscribe on', 'Subscribed on');
            } else {
                button.classList.remove('followed');
                button.innerHTML = button.innerHTML.replace('Following on', 'Follow on').replace('Subscribed on', 'Subscribe on');
            }
        },

        // Update download button state
        updateDownloadButton() {
            if (!this.elements.downloadBtn || !this.elements.downloadText) return;
            
            const isEnabled = this.isDownloadEnabled();
            
            this.elements.downloadBtn.disabled = !isEnabled;
            
            if (isEnabled) {
                this.elements.downloadText.textContent = 'Download BimE Tools';
                this.elements.downloadBtn.classList.remove('disabled');
            } else {
                const followedCount = Object.values(this.state.socialFollowStatus).filter(Boolean).length;
                if (followedCount === 0) {
                    this.elements.downloadText.textContent = 'Follow both to unlock download';
                } else if (followedCount === 1) {
                    this.elements.downloadText.textContent = 'Follow one more to unlock download';
                }
                this.elements.downloadBtn.classList.add('disabled');
            }
        },

        // Check if download is enabled
        isDownloadEnabled() {
            return this.state.socialFollowStatus.linkedin && this.state.socialFollowStatus.youtube;
        },

        // Animate hero stats
        animateHeroStats() {
            this.elements.heroStats.forEach((stat, index) => {
                const originalText = stat.textContent;
                const isNumber = /^\d+/.test(originalText);
                
                if (isNumber) {
                    const targetNumber = parseInt(originalText);
                    let currentNumber = 0;
                    const increment = targetNumber / 30;
                    const suffix = originalText.replace(/^\d+/, '');
                    
                    const timer = setInterval(() => {
                        currentNumber += increment;
                        if (currentNumber >= targetNumber) {
                            currentNumber = targetNumber;
                            clearInterval(timer);
                        }
                        stat.textContent = Math.floor(currentNumber) + suffix;
                    }, 50);
                }
                
                // Stagger the animation
                stat.style.animationDelay = `${index * 200}ms`;
                stat.classList.add('animate-in');
            });
        },

        // Simulate social follow (for demo purposes)
        simulateSocialFollow(platform) {
            console.log(`Simulating ${platform} follow`);
            
            // In a real implementation, you would:
            // 1. Open the social media page in a new tab
            // 2. Track the follow status via API or user confirmation
            // 3. Update the UI accordingly
            
            if (platform === 'linkedin') {
                // window.open('https://linkedin.com/company/bimenough', '_blank');
            } else if (platform === 'youtube') {
                // window.open('https://youtube.com/@bimenough', '_blank');
            }
        },

        // Simulate download (for demo purposes)
        simulateDownload() {
            console.log('Simulating download');
            
            // Show a temporary success message
            const originalText = this.elements.downloadText.textContent;
            this.elements.downloadText.textContent = 'Download starting...';
            
            setTimeout(() => {
                this.elements.downloadText.textContent = 'Download complete!';
                setTimeout(() => {
                    this.elements.downloadText.textContent = originalText;
                }, 2000);
            }, 1500);
            
            // In a real implementation, you would:
            // 1. Trigger the actual file download
            // 2. Track download analytics
            // 3. Show appropriate success/error messages
        },

        // Initialize external libraries
        initExternalLibraries() {
            // Initialize any third-party libraries here
            // For example: analytics, chat widgets, etc.
        },

        // Load external script polyfill
        loadPolyfill(src) {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.head.appendChild(script);
        },

        // Utility function: throttle
        throttle(func, delay) {
            let timeoutId;
            let lastExecTime = 0;
            
            return function(...args) {
                const currentTime = Date.now();
                
                if (currentTime - lastExecTime > delay) {
                    func.apply(this, args);
                    lastExecTime = currentTime;
                } else {
                    clearTimeout(timeoutId);
                    timeoutId = setTimeout(() => {
                        func.apply(this, args);
                        lastExecTime = Date.now();
                    }, delay - (currentTime - lastExecTime));
                }
            };
        },

        // Utility function: debounce
        debounce(func, delay) {
            let timeoutId;
            
            return function(...args) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => func.apply(this, args), delay);
            };
        }
    };

    // Initialize the application
    BimEnoughApp.init();

    // Expose app to global scope for debugging (remove in production)
    if (typeof window !== 'undefined') {
        window.BimEnoughApp = BimEnoughApp;
    }

})();

// Additional CSS classes for animations (can be added via JavaScript)
const animationStyles = `
<style>
.animate-in {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.6s ease;
}

.feature-card,
.tool-card {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

.hero .stat-number {
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.5s ease;
}

.hero .stat-number.animate-in {
    opacity: 1;
    transform: scale(1);
}

.header.scrolled {
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.btn-social.followed {
    background-color: var(--success) !important;
    border-color: var(--success) !important;
}

.btn-social.followed:hover {
    background-color: var(--success) !important;
    opacity: 0.9;
}

@media (max-width: 767px) {
    .nav-menu {
        position: fixed;
        top: var(--header-height);
        left: 0;
        right: 0;
        background: white;
        border-top: 1px solid var(--neutral-mid);
        box-shadow: var(--shadow-lg);
        transform: translateY(-100%);
        transition: transform var(--transition-base);
        z-index: 1000;
    }
    
    .nav-menu.active {
        transform: translateY(0);
    }
    
    .nav-list {
        flex-direction: column;
        padding: var(--spacing-lg);
        gap: var(--spacing-md);
    }
    
    .nav-link {
        padding: var(--spacing-md) 0;
        border-bottom: 1px solid var(--neutral-mid);
        width: 100%;
    }
    
    .dropdown-menu {
        position: static;
        opacity: 1;
        visibility: visible;
        transform: none;
        box-shadow: none;
        border: none;
        background: var(--neutral-light);
        margin-top: var(--spacing-sm);
    }
    
    body.menu-open {
        overflow: hidden;
    }
}
</style>
`;

// Inject animation styles
if (document.head) {
    document.head.insertAdjacentHTML('beforeend', animationStyles);
} else {
    document.addEventListener('DOMContentLoaded', () => {
        document.head.insertAdjacentHTML('beforeend', animationStyles);
    });
}