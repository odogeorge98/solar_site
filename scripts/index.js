
// Scroll animation function
function animateOnScroll() {
    const benefitItems = document.querySelectorAll('.benefit-item');
    const windowHeight = window.innerHeight;

    benefitItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        
        // Check if the item is in the viewport
        if (itemTop < windowHeight - 100) {
            item.classList.add('active'); // Add the active class for animation
        } else {
            item.classList.remove('active'); // Remove the class if out of view
        }
    });
}

// Add event listener for scroll
window.addEventListener('scroll', animateOnScroll);

// Trigger animation on load
document.addEventListener('DOMContentLoaded', animateOnScroll);






// Function to handle scroll animation
function handleScroll() {
    const solarPanels = document.querySelector('.solar-panel-container');
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > solarPanels.offsetTop) {
        solarPanels.classList.add('animate-visible');
    }
}

window.addEventListener('scroll', handleScroll);
