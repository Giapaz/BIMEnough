// Screenshot Carousel Component with Side Images and Fixed Navigation
class ScreenshotCarousel {
    constructor(element, images) {
        this.carousel = element;
        this.images = images;
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.autoplayDelay = 4000; // 4 seconds
        this.isTransitioning = false;
        
        this.init();
    }
    
    init() {
        this.createCarousel();
        this.createNavigation();
        this.createDots();
        this.updateCarousel();
        this.startAutoplay();
        this.addEventListeners();
    }
    
    createCarousel() {
        // Create all slides with proper structure for side-by-side display
        const slidesHTML = this.images.map((img, index) => `
            <div class="carousel-slide" data-index="${index}">
                <img src="${img.src}" alt="${img.alt}" loading="lazy">
            </div>
        `).join('');
        
        this.carousel.innerHTML = `
            <div class="carousel-container">
                ${slidesHTML}
            </div>
        `;
        
        this.container = this.carousel.querySelector('.carousel-container');
        this.slides = this.carousel.querySelectorAll('.carousel-slide');
        this.totalSlides = this.images.length;
    }
    
    createNavigation() {
        const prevButton = document.createElement('button');
        prevButton.className = 'carousel-nav carousel-prev';
        prevButton.setAttribute('aria-label', 'Previous image');
        prevButton.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        
        const nextButton = document.createElement('button');
        nextButton.className = 'carousel-nav carousel-next';
        nextButton.setAttribute('aria-label', 'Next image');
        nextButton.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        
        this.carousel.appendChild(prevButton);
        this.carousel.appendChild(nextButton);
        
        this.prevButton = prevButton;
        this.nextButton = nextButton;
    }
    
    createDots() {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'carousel-dots';
        
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.dataset.index = i;
            dotsContainer.appendChild(dot);
        }
        
        this.carousel.appendChild(dotsContainer);
        this.dots = dotsContainer.querySelectorAll('.carousel-dot');
    }
    
    getPrevIndex() {
        return this.currentIndex === 0 ? this.totalSlides - 1 : this.currentIndex - 1;
    }
    
    getNextIndex() {
        return this.currentIndex === this.totalSlides - 1 ? 0 : this.currentIndex + 1;
    }
    
    updateCarousel() {
        // Rimosso il controllo isTransitioning che bloccava gli aggiornamenti
        
        const prevIndex = this.getPrevIndex();
        const nextIndex = this.getNextIndex();
        
        // Update slide positions and visibility
        this.slides.forEach((slide, index) => {
            // Rimuovi tutte le classi
            slide.classList.remove('active', 'prev', 'next', 'hidden');
            
            if (index === this.currentIndex) {
                slide.classList.add('active');
            } else if (index === prevIndex) {
                slide.classList.add('prev');
            } else if (index === nextIndex) {
                slide.classList.add('next');
            } else {
                slide.classList.add('hidden');
            }
        });
        
        // Update dots
        this.dots.forEach((dot, index) => {
            const isActive = index === this.currentIndex;
            dot.classList.toggle('active', isActive);
        });
    }
    
    next() {
        if (this.isTransitioning) {
            return;
        }
        
        this.isTransitioning = true;
        this.currentIndex = this.getNextIndex();
        
        this.updateCarousel();
        
        // Ridotto timeout da 500ms a 300ms
        setTimeout(() => {
            this.isTransitioning = false;
        }, 300);
        
        this.restartAutoplay();
    }
    
    prev() {
        if (this.isTransitioning) {
            return;
        }
        
        this.isTransitioning = true;
        this.currentIndex = this.getPrevIndex();
        
        this.updateCarousel();
        
        // Ridotto timeout da 500ms a 300ms
        setTimeout(() => {
            this.isTransitioning = false;
        }, 300);
        
        this.restartAutoplay();
    }
    
    goToSlide(index) {
        if (this.isTransitioning || index === this.currentIndex || index < 0 || index >= this.totalSlides) {
            return;
        }
        
        this.isTransitioning = true;
        this.currentIndex = index;
        this.updateCarousel();
        
        // Ridotto timeout da 500ms a 300ms
        setTimeout(() => {
            this.isTransitioning = false;
        }, 300);
        
        this.restartAutoplay();
    }
    
    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            this.next();
        }, this.autoplayDelay);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    
    restartAutoplay() {
        this.stopAutoplay();
        this.startAutoplay();
    }
    
    addEventListeners() {
        // Navigation buttons - Fixed event listeners
        this.prevButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.prev();
        });
        
        this.nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.next();
        });
        
        // Dots - Fixed event listeners
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.goToSlide(index);
            });
        });
        
        // Side slides click navigation
        this.slides.forEach((slide) => {
            slide.addEventListener('click', (e) => {
                if (slide.classList.contains('prev')) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.prev();
                } else if (slide.classList.contains('next')) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.next();
                }
            });
        });
        
        // Pause autoplay on hover
        this.carousel.addEventListener('mouseenter', () => this.stopAutoplay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoplay());
        
        // Keyboard navigation
        this.carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.prev();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.next();
            }
        });
        
        // Touch/swipe support
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        
        this.carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        this.carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const deltaX = startX - endX;
            const deltaY = startY - endY;
            
            // Only trigger if horizontal swipe is more significant than vertical
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        });
    }
    
    destroy() {
        this.stopAutoplay();
        this.carousel.innerHTML = '';
    }
}

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.screenshot-carousel');
    
    carousels.forEach(carousel => {
        const pluginName = carousel.dataset.plugin;
        
        if (pluginName) {
            // Determine the correct path based on the current page location
            const isEnglishPage = window.location.pathname.includes('/en/');
            const basePath = isEnglishPage ? '../../assets/img/screenshots' : '../assets/img/screenshots';
            
            const images = [
                {
                    src: `${basePath}/${pluginName}/${pluginName} 1.png`,
                    alt: `${pluginName} Screenshot 1`
                },
                {
                    src: `${basePath}/${pluginName}/${pluginName} 2.png`,
                    alt: `${pluginName} Screenshot 2`
                },
                {
                    src: `${basePath}/${pluginName}/${pluginName} 3.png`,
                    alt: `${pluginName} Screenshot 3`
                },
                {
                    src: `${basePath}/${pluginName}/${pluginName} 4.png`,
                    alt: `${pluginName} Screenshot 4`
                }
            ];
            
            new ScreenshotCarousel(carousel, images);
        }
    });
});

// Export for global access
window.ScreenshotCarousel = ScreenshotCarousel;