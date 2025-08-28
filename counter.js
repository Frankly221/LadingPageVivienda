    // Counter animation function
    function animateCounter(element, start, end, duration) {
      let current = start;
      let increment = (end - start) / (duration / 16); // 60fps
      
      function updateCounter() {
        current += increment;
        if (current >= end) {
          element.textContent = end.toLocaleString();
        } else {
          element.textContent = Math.floor(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        }
      }
      updateCounter();
    }

    // Initialize counters when they become visible
    function initCounters() {
      const counters = document.querySelectorAll('.counter');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const endValue = parseInt(target.textContent.replace(/[^0-9]/g, ''));
            target.textContent = '0';
            animateCounter(target, 0, endValue, 2000);
            observer.unobserve(target);
          }
        });
      }, {
        threshold: 0.5
      });

      counters.forEach(counter => {
        observer.observe(counter);
      });
    }

    document.addEventListener('DOMContentLoaded', initCounters);