/**
 * BimEnough.com Cookie Consent Manager
 * Handles GDPR compliant cookie consent functionality
 */

(function() {
    'use strict';

    const CookieConsent = {
        // Configuration
        config: {
            cookieName: 'bimenough_cookie_consent',
            cookieExpiry: 365, // days
            autoShow: true,
            position: 'bottom',
            showDelay: 1000, // milliseconds
            categories: {
                essential: {
                    name: 'Essential Cookies',
                    description: 'These cookies are necessary for the website to function and cannot be switched off.',
                    required: true,
                    enabled: true
                },
                analytics: {
                    name: 'Analytics Cookies',
                    description: 'These cookies help us understand how visitors interact with our website.',
                    required: false,
                    enabled: false
                },
                marketing: {
                    name: 'Marketing Cookies',
                    description: 'These cookies are used to track visitors across websites for marketing purposes.',
                    required: false,
                    enabled: false
                }
            }
        },

        // State
        state: {
            consentGiven: false,
            consentDate: null,
            preferences: {},
            bannerVisible: false,
            modalVisible: false
        },

        // DOM elements
        elements: {},

        // Initialize cookie consent
        init() {
            this.cacheDOMElements();
            this.loadSavedPreferences();
            this.bindEvents();
            
            if (this.config.autoShow && !this.state.consentGiven) {
                this.showBannerDelayed();
            }
            
            // Initialize tracking based on current consent
            this.initializeTracking();
        },

        // Cache DOM elements
        cacheDOMElements() {
            this.elements = {
                banner: document.getElementById('cookie-consent'),
                acceptBtn: document.getElementById('cookie-accept'),
                settingsBtn: document.getElementById('cookie-settings'),
                modal: document.getElementById('cookie-settings-modal') || this.createModal()
            };
        },

        // Bind event listeners
        bindEvents() {
            if (this.elements.acceptBtn) {
                this.elements.acceptBtn.addEventListener('click', this.acceptAll.bind(this));
            }

            if (this.elements.settingsBtn) {
                this.elements.settingsBtn.addEventListener('click', this.showSettings.bind(this));
            }

            // Listen for escape key to close modal
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.state.modalVisible) {
                    this.hideSettings();
                }
            });
        },

        // Load saved preferences from localStorage
        loadSavedPreferences() {
            try {
                const saved = localStorage.getItem(this.config.cookieName);
                if (saved) {
                    const data = JSON.parse(saved);
                    this.state.consentGiven = true;
                    this.state.consentDate = new Date(data.date);
                    this.state.preferences = { ...this.config.categories, ...data.preferences };
                    
                    // Check if consent is still valid (not expired)
                    const expiryDate = new Date(this.state.consentDate);
                    expiryDate.setDate(expiryDate.getDate() + this.config.cookieExpiry);
                    
                    if (new Date() > expiryDate) {
                        this.resetConsent();
                    }
                }
            } catch (error) {
                console.warn('Error loading cookie preferences:', error);
                this.resetConsent();
            }
        },

        // Save preferences to localStorage
        savePreferences() {
            try {
                const data = {
                    date: new Date().toISOString(),
                    preferences: this.state.preferences,
                    version: '1.0'
                };
                
                localStorage.setItem(this.config.cookieName, JSON.stringify(data));
                this.state.consentGiven = true;
                this.state.consentDate = new Date();
                
                // Trigger custom event
                this.dispatchConsentEvent('consent-given');
            } catch (error) {
                console.error('Error saving cookie preferences:', error);
            }
        },

        // Reset consent
        resetConsent() {
            try {
                localStorage.removeItem(this.config.cookieName);
                this.state.consentGiven = false;
                this.state.consentDate = null;
                this.state.preferences = { ...this.config.categories };
                
                // Disable non-essential tracking
                this.disableTracking();
                
                // Trigger custom event
                this.dispatchConsentEvent('consent-reset');
            } catch (error) {
                console.error('Error resetting consent:', error);
            }
        },

        // Show banner with delay
        showBannerDelayed() {
            setTimeout(() => {
                this.showBanner();
            }, this.config.showDelay);
        },

        // Show banner
        showBanner() {
            if (this.elements.banner && !this.state.bannerVisible) {
                this.elements.banner.classList.remove('hidden');
                this.elements.banner.classList.add('show');
                this.state.bannerVisible = true;
                
                // Trigger custom event
                this.dispatchConsentEvent('banner-shown');
            }
        },

        // Hide banner
        hideBanner() {
            if (this.elements.banner && this.state.bannerVisible) {
                this.elements.banner.classList.add('hidden');
                this.elements.banner.classList.remove('show');
                this.state.bannerVisible = false;
                
                // Trigger custom event
                this.dispatchConsentEvent('banner-hidden');
            }
        },

        // Accept all cookies
        acceptAll() {
            // Enable all categories
            Object.keys(this.config.categories).forEach(category => {
                this.state.preferences[category] = {
                    ...this.config.categories[category],
                    enabled: true
                };
            });
            
            this.savePreferences();
            this.hideBanner();
            this.initializeTracking();
            
            // Show confirmation message
            this.showNotification('Cookie preferences saved. All cookies accepted.', 'success');
        },

        // Accept only essential cookies
        acceptEssential() {
            // Enable only essential cookies
            Object.keys(this.config.categories).forEach(category => {
                this.state.preferences[category] = {
                    ...this.config.categories[category],
                    enabled: this.config.categories[category].required
                };
            });
            
            this.savePreferences();
            this.hideBanner();
            this.initializeTracking();
            
            // Show confirmation message
            this.showNotification('Cookie preferences saved. Only essential cookies accepted.', 'info');
        },

        // Show settings modal
        showSettings() {
            if (this.elements.modal) {
                this.populateSettingsModal();
                this.elements.modal.classList.add('active');
                this.state.modalVisible = true;
                document.body.style.overflow = 'hidden';
                
                // Trigger custom event
                this.dispatchConsentEvent('settings-shown');
            }
        },

        // Hide settings modal
        hideSettings() {
            if (this.elements.modal && this.state.modalVisible) {
                this.elements.modal.classList.remove('active');
                this.state.modalVisible = false;
                document.body.style.overflow = '';
                
                // Trigger custom event
                this.dispatchConsentEvent('settings-hidden');
            }
        },

        // Create settings modal HTML
        createModal() {
            const modalHTML = `
                <div id="cookie-settings-modal" class="cookie-settings-modal">
                    <div class="cookie-settings-content">
                        <div class="cookie-settings-header">
                            <h3>Cookie Settings</h3>
                            <p>We use cookies to enhance your browsing experience and analyze our traffic. Choose which types of cookies you'd like to allow.</p>
                        </div>
                        <div id="cookie-categories"></div>
                        <div class="cookie-settings-actions">
                            <button type="button" class="btn btn-outline" id="cookie-save-essential">Essential Only</button>
                            <button type="button" class="btn btn-primary" id="cookie-save-all">Accept All</button>
                            <button type="button" class="btn btn-secondary" id="cookie-save-preferences">Save Preferences</button>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.insertAdjacentHTML('beforeend', modalHTML);
            
            const modal = document.getElementById('cookie-settings-modal');
            
            // Bind modal events
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideSettings();
                }
            });
            
            document.getElementById('cookie-save-essential').addEventListener('click', () => {
                this.acceptEssential();
                this.hideSettings();
            });
            
            document.getElementById('cookie-save-all').addEventListener('click', () => {
                this.acceptAll();
                this.hideSettings();
            });
            
            document.getElementById('cookie-save-preferences').addEventListener('click', () => {
                this.saveCustomPreferences();
                this.hideSettings();
            });
            
            return modal;
        },

        // Populate settings modal with current preferences
        populateSettingsModal() {
            const container = document.getElementById('cookie-categories');
            if (!container) return;
            
            container.innerHTML = '';
            
            Object.entries(this.config.categories).forEach(([key, category]) => {
                const isEnabled = this.state.preferences[key]?.enabled || category.enabled;
                const isRequired = category.required;
                
                const categoryHTML = `
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h4>${category.name}</h4>
                            <label class="cookie-toggle">
                                <input type="checkbox" 
                                       data-category="${key}" 
                                       ${isEnabled ? 'checked' : ''} 
                                       ${isRequired ? 'disabled' : ''}>
                                <span class="cookie-toggle-slider"></span>
                            </label>
                        </div>
                        <p class="cookie-category-description">${category.description}</p>
                    </div>
                `;
                
                container.insertAdjacentHTML('beforeend', categoryHTML);
            });
            
            // Bind toggle events
            container.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', (e) => {
                    const category = e.target.dataset.category;
                    if (!this.config.categories[category].required) {
                        this.state.preferences[category] = {
                            ...this.config.categories[category],
                            enabled: e.target.checked
                        };
                    }
                });
            });
        },

        // Save custom preferences from modal
        saveCustomPreferences() {
            this.savePreferences();
            this.hideBanner();
            this.initializeTracking();
            
            // Show confirmation message
            this.showNotification('Cookie preferences saved successfully.', 'success');
        },

        // Initialize tracking based on consent
        initializeTracking() {
            if (!this.state.consentGiven) return;
            
            // Initialize analytics if enabled
            if (this.state.preferences.analytics?.enabled) {
                this.initializeAnalytics();
            }
            
            // Initialize marketing if enabled
            if (this.state.preferences.marketing?.enabled) {
                this.initializeMarketing();
            }
        },

        // Disable all tracking
        disableTracking() {
            this.disableAnalytics();
            this.disableMarketing();
        },

        // Initialize analytics (placeholder)
        initializeAnalytics() {
            console.log('Analytics tracking initialized');
            
            // Example: Initialize Google Analytics
            // gtag('config', 'GA_MEASUREMENT_ID');
            
            // Trigger custom event
            this.dispatchConsentEvent('analytics-enabled');
        },

        // Disable analytics (placeholder)
        disableAnalytics() {
            console.log('Analytics tracking disabled');
            
            // Example: Disable Google Analytics
            // window['ga-disable-GA_MEASUREMENT_ID'] = true;
            
            // Trigger custom event
            this.dispatchConsentEvent('analytics-disabled');
        },

        // Initialize marketing (placeholder)
        initializeMarketing() {
            console.log('Marketing tracking initialized');
            
            // Example: Initialize Facebook Pixel, Google Ads, etc.
            
            // Trigger custom event
            this.dispatchConsentEvent('marketing-enabled');
        },

        // Disable marketing (placeholder)
        disableMarketing() {
            console.log('Marketing tracking disabled');
            
            // Trigger custom event
            this.dispatchConsentEvent('marketing-disabled');
        },

        // Show notification message
        showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `cookie-notification cookie-notification-${type}`;
            notification.textContent = message;
            
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--success);
                color: white;
                padding: 12px 20px;
                border-radius: 6px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 10002;
                font-size: 14px;
                transform: translateX(100%);
                transition: transform 0.3s ease;
            `;
            
            if (type === 'error') {
                notification.style.background = 'var(--error)';
            } else if (type === 'warning') {
                notification.style.background = 'var(--warning)';
            } else if (type === 'info') {
                notification.style.background = 'var(--info)';
            }
            
            document.body.appendChild(notification);
            
            // Animate in
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 100);
            
            // Auto remove
            setTimeout(() => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }, 3000);
        },

        // Dispatch custom events
        dispatchConsentEvent(eventType, data = {}) {
            const event = new CustomEvent(`cookie-consent:${eventType}`, {
                detail: {
                    preferences: this.state.preferences,
                    timestamp: new Date().toISOString(),
                    ...data
                }
            });
            
            document.dispatchEvent(event);
        },

        // Public API methods
        getConsent() {
            return {
                given: this.state.consentGiven,
                date: this.state.consentDate,
                preferences: this.state.preferences
            };
        },

        hasConsent(category) {
            return this.state.consentGiven && 
                   this.state.preferences[category]?.enabled === true;
        },

        updatePreferences(preferences) {
            this.state.preferences = { ...this.state.preferences, ...preferences };
            this.savePreferences();
            this.initializeTracking();
        },

        showConsentBanner() {
            this.showBanner();
        },

        hideConsentBanner() {
            this.hideBanner();
        },

        openSettings() {
            this.showSettings();
        },

        reset() {
            this.resetConsent();
            this.showBanner();
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            CookieConsent.init();
        });
    } else {
        CookieConsent.init();
    }

    // Expose API to global scope
    window.CookieConsent = {
        getConsent: CookieConsent.getConsent.bind(CookieConsent),
        hasConsent: CookieConsent.hasConsent.bind(CookieConsent),
        updatePreferences: CookieConsent.updatePreferences.bind(CookieConsent),
        showBanner: CookieConsent.showConsentBanner.bind(CookieConsent),
        hideBanner: CookieConsent.hideConsentBanner.bind(CookieConsent),
        openSettings: CookieConsent.openSettings.bind(CookieConsent),
        reset: CookieConsent.reset.bind(CookieConsent)
    };

})();