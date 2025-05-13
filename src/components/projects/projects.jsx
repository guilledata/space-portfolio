const starsContainer = document.querySelector('.stars-container');
        // Clear any existing stars first
        starsContainer.innerHTML = '';
        
        // Create more stars for better visibility
        for(let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            // Add random sizes for stars
            star.style.width = `${Math.random() * 3}px`;
            star.style.height = star.style.width;
            starsContainer.appendChild(star);
        }