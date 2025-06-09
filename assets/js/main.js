document.addEventListener('DOMContentLoaded', () => {
    
    // --- ELEMENTI DEL DOM ---
    const downloadCounterEl = document.getElementById('download-counter');
    const donationCounterEl = document.getElementById('donation-counter');
    
    // Elementi pagina Download
    const followLinkedinBtn = document.getElementById('follow-linkedin');
    const followYoutubeBtn = document.getElementById('follow-youtube');
    const linkedinCodeInput = document.getElementById('linkedin-code');
    const youtubeCodeInput = document.getElementById('youtube-code');
    const linkedinStatusEl = document.getElementById('linkedin-status');
    const youtubeStatusEl = document.getElementById('youtube-status');
    const downloadSection = document.getElementById('download-section');
    const downloadLink = document.getElementById('download-link');
    const donationDisplayEl = document.getElementById('donation-counter-display');

    // --- LOGICA DEI CONTATORI ---
    const mockApi = {
        getCounters: () => {
            const now = new Date();
            const storedData = JSON.parse(localStorage.getItem('bimeCounters')) || {
                downloads: 2456,
                monthly_donations: 127,
                last_reset_month: now.getMonth()
            };
            
            if (now.getMonth() !== storedData.last_reset_month) {
                storedData.monthly_donations = 0;
                storedData.last_reset_month = now.getMonth();
                localStorage.setItem('bimeCounters', JSON.stringify(storedData));
            }
            return Promise.resolve(storedData);
        },
        incrementDownload: () => {
            return mockApi.getCounters().then(data => {
                data.downloads++;
                localStorage.setItem('bimeCounters', JSON.stringify(data));
                return data;
            });
        }
    };

    function updateCounterDisplays(data) {
        const totalDownloads = data.downloads.toLocaleString('de-DE');
        const monthlyDonations = `€${data.monthly_donations.toLocaleString('de-DE')}`;

        if (downloadCounterEl) {
            downloadCounterEl.textContent = `${totalDownloads} Downloads`;
        }
        if (donationCounterEl) {
            donationCounterEl.textContent = `${monthlyDonations} Donati questo mese`;
        }
        if (donationDisplayEl) {
            donationDisplayEl.innerHTML = `Donazioni questo mese: <strong>${monthlyDonations}</strong>`;
        }
    }

    mockApi.getCounters()
        .then(updateCounterDisplays)
        .catch(err => console.error("Errore nel caricamento dei contatori:", err));

    
    // --- LOGICA SOCIAL GATE (Pagina Download) ---
    if (followLinkedinBtn) {
        // Codici di verifica
        const LINKEDIN_CODE = '13579';
        const YOUTUBE_CODE = '24680';

        const socialState = {
            linkedin: false,
            youtube: false
        };

        const checkCompletion = () => {
            // Se entrambi i codici sono stati inseriti correttamente, sblocca il download
            if (socialState.linkedin && socialState.youtube) {
                downloadSection.classList.remove('hidden');
                downloadLink.classList.remove('disabled');
                downloadLink.removeAttribute('aria-disabled');
            }
        };

        const updateUI = () => {
            // Stato iniziale del pulsante di download
            downloadLink.classList.add('disabled');
            downloadLink.setAttribute('aria-disabled', 'true');

            // Aggiorna stato LinkedIn
            if (socialState.linkedin) {
                linkedinStatusEl.textContent = '✓ Verificato';
                linkedinStatusEl.classList.add('completed');
            } else {
                linkedinStatusEl.textContent = '';
                linkedinStatusEl.classList.remove('completed');
            }

            // Aggiorna stato YouTube
            if (socialState.youtube) {
                youtubeStatusEl.textContent = '✓ Verificato';
                youtubeStatusEl.classList.add('completed');
            } else {
                youtubeStatusEl.textContent = '';
                youtubeStatusEl.classList.remove('completed');
            }

            checkCompletion();
        };

        const verifyCode = (platform, code) => {
            const correctCode = platform === 'linkedin' ? LINKEDIN_CODE : YOUTUBE_CODE;
            return code.trim() === correctCode;
        };

        // Eventi per i pulsanti social (aprono le pagine)
        followLinkedinBtn.addEventListener('click', () => {
            window.open('https://linkedin.com/company/bimenough', '_blank');
        });

        followYoutubeBtn.addEventListener('click', () => {
            window.open('https://youtube.com/@bimenough', '_blank');
        });

        // Eventi per la verifica dei codici
        linkedinCodeInput.addEventListener('input', (event) => {
            const code = event.target.value;
            if (verifyCode('linkedin', code)) {
                socialState.linkedin = true;
                updateUI();
            } else if (socialState.linkedin && code !== LINKEDIN_CODE) {
                socialState.linkedin = false;
                updateUI();
            }
        });

        youtubeCodeInput.addEventListener('input', (event) => {
            const code = event.target.value;
            if (verifyCode('youtube', code)) {
                socialState.youtube = true;
                updateUI();
            } else if (socialState.youtube && code !== YOUTUBE_CODE) {
                socialState.youtube = false;
                updateUI();
            }
        });

        downloadLink.addEventListener('click', (event) => {
            // Previene il download se il pulsante è disabilitato
            if (downloadLink.classList.contains('disabled')) {
                event.preventDefault();
                return;
            }
            mockApi.incrementDownload().then(updateCounterDisplays);
        });

        // Inizializza lo stato della UI al caricamento
        updateUI();
    }
});