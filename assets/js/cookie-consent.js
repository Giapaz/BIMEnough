// Cookie consent and privacy management
class CookieManager {
    constructor() {
        this.consentKey = 'bimeCookieConsent';
        this.consent = this.getStoredConsent();
        this.init();
    }

    init() {
        // Check if consent is needed
        if (!this.consent.hasConsented) {
            this.showCookieBanner();
        }
        
        // Apply consent preferences
        this.applyConsent();
    }

    getStoredConsent() {
        try {
            const stored = localStorage.getItem(this.consentKey);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (e) {
            console.warn('Error reading cookie consent:', e);
        }
        
        return {
            hasConsented: false,
            essential: true,    // Always true
            analytics: false,   // Default false
            functional: false,  // Default false
            timestamp: null
        };
    }

    saveConsent(consent) {
        this.consent = {
            ...consent,
            timestamp: new Date().toISOString()
        };
        
        try {
            localStorage.setItem(this.consentKey, JSON.stringify(this.consent));
        } catch (e) {
            console.warn('Error saving cookie consent:', e);
        }
    }

    showCookieBanner() {
        // Create banner if it doesn't exist
        if (!document.getElementById('cookie-banner')) {
            this.createCookieBanner();
        }
        
        // Show banner
        const banner = document.getElementById('cookie-banner');
        banner.classList.add('show');
    }

    hideCookieBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.classList.remove('show');
            setTimeout(() => {
                banner.remove();
            }, 300);
        }
    }

    createCookieBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        
        // Detect language
        const isEnglish = document.documentElement.lang === 'en' || 
                         window.location.pathname.includes('/en/');
        
        const text = isEnglish ? {
            title: 'Cookie Preferences',
            message: 'We use cookies to improve your experience and provide essential functionality. By clicking "Accept All", you consent to our use of cookies.',
            acceptAll: 'Accept All',
            essential: 'Essential Only',
            customize: 'Customize',
            privacyLink: 'Privacy Policy',
            cookieLink: 'Cookie Policy'
        } : {
            title: 'Preferenze Cookie',
            message: 'Utilizziamo cookie per migliorare la tua esperienza e fornire funzionalità essenziali. Cliccando "Accetta Tutto", acconsenti all\'uso dei nostri cookie.',
            acceptAll: 'Accetta Tutto',
            essential: 'Solo Essenziali',
            customize: 'Personalizza',
            privacyLink: 'Privacy Policy',
            cookieLink: 'Cookie Policy'
        };

        const privacyUrl = isEnglish ? '../privacy-policy.html' : 'privacy-policy.html';
        const cookieUrl = isEnglish ? '../cookie-policy.html' : 'cookie-policy.html';

        banner.innerHTML = `
            <div class="container">
                <div class="cookie-content">
                    <div class="cookie-text">
                        <h3>${text.title}</h3>
                        <p>${text.message} 
                        <a href="${privacyUrl}">${text.privacyLink}</a> | 
                        <a href="${cookieUrl}">${text.cookieLink}</a></p>
                    </div>
                    <div class="cookie-actions">
                        <button class="button button-outline" onclick="cookieManager.acceptEssential()">${text.essential}</button>
                        <button class="button button-secondary" onclick="cookieManager.showCustomizeModal()">${text.customize}</button>
                        <button class="button button-primary" onclick="cookieManager.acceptAll()">${text.acceptAll}</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(banner);
    }

    acceptAll() {
        this.saveConsent({
            hasConsented: true,
            essential: true,
            analytics: true,
            functional: true
        });
        this.applyConsent();
        this.hideCookieBanner();
    }

    acceptEssential() {
        this.saveConsent({
            hasConsented: true,
            essential: true,
            analytics: false,
            functional: false
        });
        this.applyConsent();
        this.hideCookieBanner();
    }

    showCustomizeModal() {
        // For now, show a simple alert - could be expanded to a full modal
        const isEnglish = document.documentElement.lang === 'en' || 
                         window.location.pathname.includes('/en/');
        
        const message = isEnglish ? 
            'Cookie customization will be implemented in a future update. For now, you can choose "Essential Only" for minimal cookies or "Accept All" for full functionality.' :
            'La personalizzazione dei cookie sarà implementata in un aggiornamento futuro. Per ora, puoi scegliere "Solo Essenziali" per cookie minimi o "Accetta Tutto" per la funzionalità completa.';
        
        alert(message);
    }

    applyConsent() {
        // Clear non-essential data if consent is withdrawn
        if (!this.consent.functional) {
            // Clear social gate data
            try {
                localStorage.removeItem('bimeFollowedLinkedin');
                localStorage.removeItem('bimeFollowedYoutube');
            } catch (e) {
                console.warn('Error clearing functional data:', e);
            }
        }

        if (!this.consent.analytics) {
            // Clear analytics data if any
            try {
                // For now, we only have counter data which we'll keep as it's functional
                // In future, remove actual analytics cookies here
            } catch (e) {
                console.warn('Error clearing analytics data:', e);
            }
        }
    }

    // Method to revoke consent (for privacy controls)
    revokeConsent() {
        this.consent = {
            hasConsented: false,
            essential: true,
            analytics: false,
            functional: false,
            timestamp: null
        };
        
        try {
            localStorage.removeItem(this.consentKey);
        } catch (e) {
            console.warn('Error revoking consent:', e);
        }
        
        this.showCookieBanner();
    }

    // Check if specific consent is given
    hasConsent(type) {
        return this.consent[type] || false;
    }
}

// Initialize cookie manager
let cookieManager;
document.addEventListener('DOMContentLoaded', () => {
    cookieManager = new CookieManager();
});

// Export for global access
window.cookieManager = cookieManager;