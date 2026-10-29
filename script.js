// // ============================================
// // LANGUAGE TOGGLE FUNCTIONALITY
// // ============================================

// let currentLang = 'en';

// const langBtn = document.getElementById('langBtn');
// langBtn.addEventListener('click', toggleLanguage);

// function toggleLanguage() {
//     currentLang = currentLang === 'en' ? 'mr' : 'en';
//     updateLanguage();
//     updateButtonText();
//     saveLanguagePreference();
// }

// function updateLanguage() {
//     const elements = document.querySelectorAll('[data-en][data-mr]');
    
//     elements.forEach(element => {
//         if (currentLang === 'mr') {
//             element.textContent = element.getAttribute('data-mr');
//         } else {
//             element.textContent = element.getAttribute('data-en');
//         }
//     });

//     // Update form placeholders
//     updatePlaceholders();
// }

// function updatePlaceholders() {
//     const inputs = document.querySelectorAll('[data-en-placeholder][data-mr-placeholder]');
    
//     inputs.forEach(input => {
//         if (currentLang === 'mr') {
//             input.placeholder = input.getAttribute('data-mr-placeholder');
//         } else {
//             input.placeholder = input.getAttribute('data-en-placeholder');
//         }
//     });
// }

// function updateButtonText() {
//     langBtn.textContent = currentLang === 'en' ? 'मराठी' : 'English';
// }

// function saveLanguagePreference() {
//     localStorage.setItem('preferredLanguage', currentLang);
// }

// function loadLanguagePreference() {
//     const saved = localStorage.getItem('preferredLanguage');
//     if (saved) {
//         currentLang = saved;
//         updateLanguage();
//         updateButtonText();
//     }
// }

// // Load language preference on page load
// document.addEventListener('DOMContentLoaded', loadLanguagePreference);

// // ============================================
// // SMOOTH SCROLL BEHAVIOR
// // ============================================

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// // ============================================
// // SERVICE CARD INTERACTIONS
// // ============================================

// const learnBtns = document.querySelectorAll('.learn-btn');

// learnBtns.forEach(btn => {
//     btn.addEventListener('click', function(e) {
//         const card = this.closest('.service-card');
//         const serviceName = card.querySelector('h3').textContent;
        
//         // Show alert with service name
//         showNotification(`You selected: ${serviceName}`, 'info');
        
//         // Optional: Add animation
//         this.style.transform = 'scale(0.95)';
//         setTimeout(() => {
//             this.style.transform = 'scale(1)';
//         }, 200);
//     });
// });

// // ============================================
// // CONTACT FORM HANDLING
// // ============================================

// const contactForm = document.getElementById('contactForm');
// const formMessage = document.getElementById('form-message');

// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Get form values
//         const formData = new FormData(this);
//         const name = this.querySelector('input[type="text"]').value;
//         const email = this.querySelector('input[type="email"]').value;
//         const message = this.querySelector('textarea').value;
        
//         // Basic validation
//         if (name.trim() && email.trim() && message.trim()) {
//             // Show success message
//             showFormMessage('Thank you! Your message has been sent successfully.', 'success');
            
//             // Clear form
//             this.reset();
            
//             // Log form data (In real scenario, send to server)
//             console.log('Form Data:', { name, email, message });
            
//             // Hide message after 5 seconds
//             setTimeout(() => {
//                 formMessage.style.display = 'none';
//             }, 5000);
//         } else {
//             showFormMessage('Please fill in all fields.', 'error');
//         }
//     });
// }

// function showFormMessage(message, type) {
//     formMessage.textContent = message;
//     formMessage.className = `form-message ${type}`;
//     formMessage.style.display = 'block';
// }

// // ============================================
// // NOTIFICATION SYSTEM
// // ============================================

// function showNotification(message, type = 'info') {
//     // Create notification element
//     const notification = document.createElement('div');
//     notification.className = `notification ${type}`;
//     notification.textContent = message;
//     notification.style.cssText = `
//         position: fixed;
//         top: 100px;
//         right: 20px;
//         background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
//         color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
//         padding: 1rem 1.5rem;
//         border-radius: 8px;
//         box-shadow: 0 4px 15px rgba(0,0,0,0.2);
//         z-index: 999;
//         animation: slideIn 0.3s ease;
//         border-left: 4px solid ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
//     `;
    
//     document.body.appendChild(notification);
    
//     // Remove after 3 seconds
//     setTimeout(() => {
//         notification.style.animation = 'slideOut 0.3s ease';
//         setTimeout(() => notification.remove(), 300);
//     }, 3000);
// }

// // Add animations to stylesheet
// if (!document.getElementById('notifications-style')) {
//     const style = document.createElement('style');
//     style.id = 'notifications-style';
//     style.textContent = `
//         @keyframes slideIn {
//             from {
//                 transform: translateX(400px);
//                 opacity: 0;
//             }
//             to {
//                 transform: translateX(0);
//                 opacity: 1;
//             }
//         }
        
//         @keyframes slideOut {
//             from {
//                 transform: translateX(0);
//                 opacity: 1;
//             }
//             to {
//                 transform: translateX(400px);
//                 opacity: 0;
//             }
//         }
//     `;
//     document.head.appendChild(style);
// }

// // ============================================
// // DIRECTION BUTTON FUNCTIONALITY
// // ============================================

// function openDirections() {
//     // Replace with your actual location coordinates
//     // Example: Pimpri, Maharashtra
//     const latitude = 18.6319;
//     const longitude = 73.8197;
    
//     const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
//     window.open(mapsUrl, '_blank');
    
//     showNotification('Opening Google Maps...', 'success');
// }

// // ============================================
// // DYNAMIC CONTENT UPDATES
// // ============================================

// // Update contact information (can be changed easily)
// function updateContactInfo() {
//     const phoneNumber = document.getElementById('phone-number');
//     const emailAddress = document.getElementById('email-address');
//     const addressText = document.getElementById('address-text');
    
//     // You can update these values dynamically
//     // phoneNumber.textContent = '+91 XXXXX XXXXX';
//     // emailAddress.textContent = 'info@quickservices.com';
//     // addressText.textContent = 'Pimpri, Maharashtra, India';
// }

// updateContactInfo();

// // ============================================
// // SCROLL ANIMATION FOR ELEMENTS
// // ============================================

// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -100px 0px'
// };

// const observer = new IntersectionObserver(function(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
//             observer.unobserve(entry.target);
//         }
//     });
// }, observerOptions);

// // Add animation styles
// const animationStyle = document.createElement('style');
// animationStyle.textContent = `
//     @keyframes fadeInUp {
//         from {
//             opacity: 0;
//             transform: translateY(30px);
//         }
//         to {
//             opacity: 1;
//             transform: translateY(0);
//         }
//     }
// `;
// document.head.appendChild(animationStyle);

// // Observe all service cards and gallery items
// document.querySelectorAll('.service-card, .gallery-item, .contact-item').forEach(element => {
//     observer.observe(element);
// });

// // ============================================
// // GALLERY MODAL (OPTIONAL)
// // ============================================

// function initGallery() {
//     const galleryItems = document.querySelectorAll('.gallery-item');
    
//     galleryItems.forEach(item => {
//         item.addEventListener('click', function() {
//             const img = this.querySelector('img');
//             const imgSrc = img.getAttribute('src');
            
//             showGalleryModal(imgSrc);
//         });
//     });
// }

// function showGalleryModal(imageSrc) {
//     // Create modal
//     const modal = document.createElement('div');
//     modal.className = 'gallery-modal';
//     modal.innerHTML = `
//         <div class="modal-content">
//             <span class="close-modal">&times;</span>
//             <img src="${imageSrc}" alt="Gallery Image" style="max-width: 90%; max-height: 80vh; border-radius: 8px;">
//         </div>
//     `;
    
//     // Style modal
//     modal.style.cssText = `
//         display: flex;
//         position: fixed;
//         z-index: 2000;
//         left: 0;
//         top: 0;
//         width: 100%;
//         height: 100%;
//         background-color: rgba(0,0,0,0.9);
//         align-items: center;
//         justify-content: center;
//         animation: fadeIn 0.3s ease;
//     `;
    
//     document.body.appendChild(modal);
    
//     // Close modal functionality
//     const closeBtn = modal.querySelector('.close-modal');
//     closeBtn.style.cssText = `
//         position: absolute;
//         top: 20px;
//         right: 30px;
//         color: white;
//         font-size: 2rem;
//         cursor: pointer;
//         font-weight: bold;
//     `;
    
//     closeBtn.addEventListener('click', () => modal.remove());
//     modal.addEventListener('click', (e) => {
//         if (e.target === modal) modal.remove();
//     });
// }

// // Initialize gallery when DOM is loaded
// document.addEventListener('DOMContentLoaded', initGallery);

// // ============================================
// // ACTIVE NAV LINK HIGHLIGHT
// // ============================================

// window.addEventListener('scroll', () => {
//     let current = '';
    
//     document.querySelectorAll('section').forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
        
//         if (pageYOffset >= sectionTop - 200) {
//             current = section.getAttribute('id');
//         }
//     });
    
//     document.querySelectorAll('.nav-menu a').forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href').slice(1) === current) {
//             link.style.borderBottomColor = 'var(--primary-color)';
//         } else {
//             link.style.borderBottomColor = 'transparent';
//         }
//     });
// });

// // ============================================
// // COUNTER ANIMATION FOR STATS
// // ============================================

// function animateCounter() {
//     const statItems = document.querySelectorAll('.stat-item h4');
    
//     const counterObserver = new IntersectionObserver(function(entries) {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const element = entry.target;
//                 const finalValue = parseInt(element.textContent);
//                 let currentValue = 0;
                
//                 const increment = Math.ceil(finalValue / 50);
//                 const interval = setInterval(() => {
//                     currentValue += increment;
//                     if (currentValue >= finalValue) {
//                         element.textContent = finalValue + '+';
//                         clearInterval(interval);
//                     } else {
//                         element.textContent = currentValue + '+';
//                     }
//                 }, 30);
                
//                 counterObserver.unobserve(element);
//             }
//         });
//     }, observerOptions);
    
//     statItems.forEach(item => counterObserver.observe(item));
// }

// document.addEventListener('DOMContentLoaded', animateCounter);

// // ============================================
// // UTILITY FUNCTIONS
// // ============================================

// // Get current language
// function getCurrentLanguage() {
//     return currentLang;
// }

// // Print page functionality
// function printPage() {
//     window.print();
// }

// // Share functionality
// function shareService(serviceName) {
//     const text = `Check out ${serviceName} at Quick Services Internet Cafe!`;
//     const url = window.location.href;
    
//     if (navigator.share) {
//         navigator.share({
//             title: 'Quick Services Internet Cafe',
//             text: text,
//             url: url
//         });
//     } else {
//         showNotification('Sharing not supported on your browser', 'info');
//     }
// }

// // ============================================
// // ACCESSIBILITY IMPROVEMENTS
// // ============================================

// // Add keyboard navigation support
// document.addEventListener('keydown', (e) => {
//     // Escape key closes modals
//     if (e.key === 'Escape') {
//         const modal = document.querySelector('.gallery-modal');
//         if (modal) modal.remove();
//     }
    
//     // Ctrl/Cmd + L to focus on language button
//     if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
//         e.preventDefault();
//         langBtn.focus();
//     }
// });

// // ============================================
// // INITIALIZATION
// // ============================================

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Quick Services Website Loaded Successfully!');
    
//     // Initialize all components
//     updateLanguage();
//     updatePlaceholders();
    
//     // Add smooth scroll behavior
//     document.documentElement.style.scrollBehavior = 'smooth';
// });



// ============================================
// ENHANCED DIRECTIONS FUNCTION WITH GEOLOCATION
// ============================================

function openDirections() {
    // Cafe Location Coordinates
    const cafeLatitude = 18.6319;
    const cafeLongitude = 73.8197;
    const cafeName = "Quick Services Internet Cafe";

    // Check if browser supports Geolocation API
    if (navigator.geolocation) {
        showNotification('Getting your location...', 'info');
        
        // Get user's current location
        navigator.geolocation.getCurrentPosition(
            function(position) {
                // Success callback - User location obtained
                const userLatitude = position.coords.latitude;
                const userLongitude = position.coords.longitude;
                const userAccuracy = position.coords.accuracy;

                console.log('User Location:', {
                    latitude: userLatitude,
                    longitude: userLongitude,
                    accuracy: userAccuracy
                });

                // Build Google Maps directions URL with user's current location
                const mapsUrl = `https://www.google.com/maps/dir/${userLatitude},${userLongitude}/${cafeLatitude},${cafeLongitude}`;
                
                // Open Google Maps with directions
                window.open(mapsUrl, '_blank');
                
                showNotification('Opening directions to ' + cafeName + '...', 'success');
            },
            function(error) {
                // Error callback - If location access is denied
                handleLocationError(error, cafeLatitude, cafeLongitude);
            },
            {
                // Options for geolocation
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    } else {
        // Browser doesn't support Geolocation API
        showNotification('Geolocation is not supported. Opening default location...', 'warning');
        openDefaultDirections(cafeLatitude, cafeLongitude);
    }
}

// ============================================
// HANDLE GEOLOCATION ERRORS
// ============================================

function handleLocationError(error, cafeLatitude, cafeLongitude) {
    let errorMessage = '';

    switch(error.code) {
        case error.PERMISSION_DENIED:
            errorMessage = "Location access denied. Please enable location permissions in your browser settings.";
            showNotification(errorMessage, 'error');
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable. Opening default location...";
            showNotification(errorMessage, 'warning');
            break;
        case error.TIMEOUT:
            errorMessage = "Location request timed out. Opening default location...";
            showNotification(errorMessage, 'warning');
            break;
        default:
            errorMessage = "An error occurred while retrieving location. Opening default location...";
            showNotification(errorMessage, 'warning');
    }

    // Fallback to default directions
    openDefaultDirections(cafeLatitude, cafeLongitude);
}

// ============================================
// DEFAULT DIRECTIONS (Without Current Location)
// ============================================

function openDefaultDirections(cafeLatitude, cafeLongitude) {
    const mapsUrl = `https://www.google.com/maps/search/${cafeLatitude},${cafeLongitude}`;
    window.open(mapsUrl, '_blank');
    showNotification('Opening Quick Services location in Google Maps...', 'success');
}

// ============================================
// ADVANCED: GET DETAILED ADDRESS FROM COORDINATES
// ============================================

function openDirectionsWithAddress() {
    const cafeLatitude =  20.7154315467445;
    const cafeLongitude = 75.16509157630277;
    // const cafeAddress = "Pimpri, Maharashtra, India"; // Update with your actual address
//   Latitude:  20.7154315467445
// Longitude: 75.16509157630277
    if (navigator.geolocation) {
        showNotification('Getting your location...', 'info');
        
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const userLatitude = position.coords.latitude;
                const userLongitude = position.coords.longitude;

                // Method 1: Using coordinates in URL
                const mapsUrl = `https://www.google.com/maps/dir/${userLatitude},${userLongitude}/${cafeLatitude},${cafeLongitude}`;
                
                // Method 2: Using address (alternative)
                // const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLatitude},${userLongitude}&destination=${cafeAddress}`;
                
                window.open(mapsUrl, '_blank');
                showNotification('Opening directions from your location...', 'success');
            },
            function(error) {
                handleLocationError(error, cafeLatitude, cafeLongitude);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    } else {
        showNotification('Geolocation not supported. Please update your browser.', 'error');
        openDefaultDirections(cafeLatitude, cafeLongitude);
    }
}

// ============================================
// DISPLAY CURRENT LOCATION ON PAGE (Optional)
// ============================================

function displayCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const accuracy = position.coords.accuracy;

                // Create or update location display element
                const locationDisplay = document.getElementById('current-location-display');
                
                if (locationDisplay) {
                    locationDisplay.innerHTML = `
                        <div style="background: #d1ecf1; color: #0c5460; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <strong>Your Current Location:</strong><br>
                            Latitude: ${latitude.toFixed(4)}°<br>
                            Longitude: ${longitude.toFixed(4)}°<br>
                            Accuracy: ±${accuracy.toFixed(0)} meters
                        </div>
                    `;
                }

                console.log('Current Location:', {
                    latitude: latitude,
                    longitude: longitude,
                    accuracy: accuracy
                });
            },
            function(error) {
                console.log('Error getting location:', error.message);
                showNotification('Could not retrieve your location', 'error');
            }
        );
    }
}

// ============================================
// CALCULATE DISTANCE BETWEEN TWO LOCATIONS
// ============================================

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    
    return distance.toFixed(2);
}

// ============================================
// GET DISTANCE FROM USER TO CAFE
// ============================================

function getDistanceToCafe() {
    const cafeLatitude = 18.6319;
    const cafeLongitude = 73.8197;

    if (navigator.geolocation) {
        showNotification('Calculating distance...', 'info');
        
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const userLatitude = position.coords.latitude;
                const userLongitude = position.coords.longitude;
                
                const distance = calculateDistance(
                    userLatitude,
                    userLongitude,
                    cafeLatitude,
                    cafeLongitude
                );

                showNotification(`You are ${distance} km away from Quick Services`, 'success');
                console.log('Distance to Cafe:', distance + ' km');
            },
            function(error) {
                showNotification('Could not calculate distance', 'error');
            }
        );
    } else {
        showNotification('Geolocation not supported', 'error');
    }
}

// ============================================
// LANGUAGE TOGGLE FUNCTIONALITY
// ============================================

let currentLang = 'en';

const langBtn = document.getElementById('langBtn');
if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'mr' : 'en';
    updateLanguage();
    updateButtonText();
    saveLanguagePreference();
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-mr]');
    
    elements.forEach(element => {
        if (currentLang === 'mr') {
            element.textContent = element.getAttribute('data-mr');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });

    // Update form placeholders
    updatePlaceholders();
}

function updatePlaceholders() {
    const inputs = document.querySelectorAll('[data-en-placeholder][data-mr-placeholder]');
    
    inputs.forEach(input => {
        if (currentLang === 'mr') {
            input.placeholder = input.getAttribute('data-mr-placeholder');
        } else {
            input.placeholder = input.getAttribute('data-en-placeholder');
        }
    });
}

function updateButtonText() {
    if (langBtn) {
        langBtn.textContent = currentLang === 'en' ? 'मराठी' : 'English';
    }
}

function saveLanguagePreference() {
    localStorage.setItem('preferredLanguage', currentLang);
}

function loadLanguagePreference() {
    const saved = localStorage.getItem('preferredLanguage');
    if (saved) {
        currentLang = saved;
        updateLanguage();
        updateButtonText();
    }
}

// Load language preference on page load
document.addEventListener('DOMContentLoaded', loadLanguagePreference);

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

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

// ============================================
// SERVICE CARD INTERACTIONS
// ============================================

const learnBtns = document.querySelectorAll('.learn-btn');

learnBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const card = this.closest('.service-card');
        const serviceName = card.querySelector('h3').textContent;
        
        // Show alert with service name
        showNotification(`You selected: ${serviceName}`, 'info');
        
        // Optional: Add animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Basic validation
        if (name.trim() && email.trim() && message.trim()) {
            // Show success message
            showFormMessage('Thank you! Your message has been sent successfully.', 'success');
            
            // Clear form
            this.reset();
            
            // Log form data (In real scenario, send to server)
            console.log('Form Data:', { name, email, message });
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        } else {
            showFormMessage('Please fill in all fields.', 'error');
        }
    });
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
        color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 999;
        animation: slideIn 0.3s ease;
        border-left: 4px solid ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animations to stylesheet if not exists
if (!document.getElementById('notifications-style')) {
    const style = document.createElement('style');
    style.id = 'notifications-style';
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// SCROLL ANIMATION FOR ELEMENTS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation styles
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(animationStyle);

// Observe all service cards and gallery items
document.querySelectorAll('.service-card, .gallery-item, .contact-item').forEach(element => {
    observer.observe(element);
});

// ============================================
// GALLERY MODAL
// ============================================

function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imgSrc = img.getAttribute('src');
            
            showGalleryModal(imgSrc);
        });
    });
}

function showGalleryModal(imageSrc) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img src="${imageSrc}" alt="Gallery Image" style="max-width: 90%; max-height: 80vh; border-radius: 8px;">
        </div>
    `;
    
    // Style modal
    modal.style.cssText = `
        display: flex;
        position: fixed;
        z-index: 2000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.9);
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 30px;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        font-weight: bold;
    `;
    
    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', initGallery);

// ============================================
// ACTIVE NAV LINK HIGHLIGHT
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.borderBottomColor = 'var(--primary-color)';
        } else {
            link.style.borderBottomColor = 'transparent';
        }
    });
});

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================

function animateCounter() {
    const statItems = document.querySelectorAll('.stat-item h4');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const finalValue = parseInt(element.textContent);
                let currentValue = 0;
                
                const increment = Math.ceil(finalValue / 50);
                const interval = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        element.textContent = finalValue + '+';
                        clearInterval(interval);
                    } else {
                        element.textContent = currentValue + '+';
                    }
                }, 30);
                
                counterObserver.unobserve(element);
            }
        });
    }, observerOptions);
    
    statItems.forEach(item => counterObserver.observe(item));
}

document.addEventListener('DOMContentLoaded', animateCounter);

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Get current language
function getCurrentLanguage() {
    return currentLang;
}

// Print page functionality
function printPage() {
    window.print();
}

// Share functionality
function shareService(serviceName) {
    const text = `Check out ${serviceName} at Quick Services Internet Cafe!`;
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'Quick Services Internet Cafe',
            text: text,
            url: url
        });
    } else {
        showNotification('Sharing not supported on your browser', 'info');
    }
}

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Escape key closes modals
    if (e.key === 'Escape') {
        const modal = document.querySelector('.gallery-modal');
        if (modal) modal.remove();
    }
    
    // Ctrl/Cmd + L to focus on language button
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        if (langBtn) langBtn.focus();
    }
});

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Quick Services Website Loaded Successfully!');
    
    // Initialize all components
    updateLanguage();
    updatePlaceholders();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});