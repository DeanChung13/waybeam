document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.about-content, .story-content, .founder-content, .purpose-content, .vision-content');
    
    // Check if elements are in viewport
    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            // Add visible class when element is in viewport
            if (rect.top <= windowHeight * 0.8) {
                section.classList.add('visible');
            }
        });
    }
    
    // Run on initial load and on scroll
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
}); 