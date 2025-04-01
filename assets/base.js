// Simple JavaScript to make the navigation links smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links that point to sections
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Scroll smoothly to the target
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal til popup her 
    var modal = document.getElementById("myModal");

    var btn = document.getElementById("myBtn");

    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
      }

      span.onclick = function() {
        modal.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

    // Timer functionality
    function updateTimer() {
        const timerElement = document.getElementById("timer");
        const now = new Date();
        const cutoffHour = 15;

        if (now.getHours() >= cutoffHour) {
            timerElement.textContent = "Bestil inden kl. 15 på hverdage, og få din ordre sendt afsted samme dag";
        } else {
            const cutoffTime = new Date();
            cutoffTime.setHours(cutoffHour, 0, 0, 0);
            const timeRemaining = cutoffTime - now;

            const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
            const seconds = Math.floor((timeRemaining / 1000) % 60);

            timerElement.textContent = `Tid tilbage til levering samme dag: ${hours}t ${minutes}m ${seconds}s`;
        }
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);
    updateTimer();

    // Add active class to the current navigation item
    function highlightCurrentSection() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('nav ul li a');

        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    }

    // Call the function on scroll
    window.addEventListener('scroll', highlightCurrentSection);
});
