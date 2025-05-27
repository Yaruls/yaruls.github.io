document.addEventListener('DOMContentLoaded', function() {

    // Smooth Scrolling for Navbar Links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                // Consider offset if you have a fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Optional: Close mobile navbar if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarToggler.getAttribute('aria-expanded') === 'true') {
                    navbarToggler.click(); // Simulate click to close
                }
            }
        });
    });

    // Typing Effect
    const typingElement = document.getElementById('typing-effect');
    if (typingElement) {
        const roles = ["a Full Stack Developer", "a Python Enthusiast", "a Tech Learner", "an Innovator"]; // Add your roles
        let roleIndex = 0;
        let charIndex = 0;
        let currentRole = '';
        let isDeleting = false;

        function type() {
            currentRole = roles[roleIndex];
            if (isDeleting) {
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 150;

            if (!isDeleting && charIndex === currentRole.length) {
                typeSpeed = 2000; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500; // Pause before starting new word
            }
            setTimeout(type, typeSpeed);
        }
        type(); // Start the typing effect
    }

    // Optional: Add 'active' class to nav links on scroll (more advanced)
    // You'd need to monitor scroll position and compare with section offsets.
    // Libraries like ScrollSpy from Bootstrap can help, or you can write custom logic.

});
