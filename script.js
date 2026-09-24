document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollEffects();
  initFAQ();
  initContactForm();
  initVideoCards();
});

// NAVIGATION LOGIC
function initNavigation() {
  const header = document.querySelector('.header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  // Sticky Header on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Active Link Highlighting based on pathname
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
  
  const navItems = document.querySelectorAll('.nav-links .nav-item');
  navItems.forEach(item => {
    const link = item.querySelector('a');
    if (link) {
      const linkPathName = link.getAttribute('href');
      if (linkPathName === pageName || (pageName === 'index.html' && linkPathName === '/')) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    }
  });
}

// SCROLL ANIMATIONS (REVEAL ON SCROLL)
function initScrollEffects() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('active'));
  }
}

// FAQ COLLAPSIBLE LOGIC
function initFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // Close all open FAQs
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const answer = item.querySelector('.faq-answer');
        if (answer) answer.style.maxHeight = null;
      });
      
      // If the clicked FAQ wasn't active, open it
      if (!isActive) {
        faqItem.classList.add('active');
        const answer = faqItem.querySelector('.faq-answer');
        if (answer) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      }
    });
  });
}

// VIDEO INSIGHTS CARDS
function initVideoCards() {
  document.querySelectorAll('.video-frame').forEach(frame => {
    const video = frame.querySelector('.video-embed');
    const playBtn = frame.querySelector('.video-play-btn');
    if (!video || !playBtn) return;

    playBtn.addEventListener('click', () => {
      video.controls = true;
      video.play();
    });

    video.addEventListener('play', () => frame.classList.add('is-playing'));
    video.addEventListener('pause', () => frame.classList.remove('is-playing'));
    video.addEventListener('ended', () => frame.classList.remove('is-playing'));
  });
}

// CONTACT FORM SUBMISSION
function initContactForm() {
  const contactForm = document.getElementById('contact-form-widget');
  const container = document.getElementById('contact-form-container');
  
  if (contactForm && container) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value;
      
      // Animate transition to success card
      container.style.opacity = 0;
      container.style.transition = 'opacity 0.3s ease';
      
      setTimeout(() => {
        container.innerHTML = `
          <div class="booking-success-animation" style="padding: 2rem 0;">
            <div class="success-icon-circle">✓</div>
            <h3 style="margin-bottom: 1rem;">Message Sent!</h3>
            <p style="margin-bottom: 1rem;">Thank you, <strong>${name}</strong>. Your message has been safely received by our clinical intake team.</p>
            <p style="margin-bottom: 1.5rem;">Vanessa or a team coordinator will reach out to you within 24 business hours at the contact method specified.</p>
            <button onclick="window.location.reload()" class="btn btn-primary" style="margin-top: 1.5rem; width: 100%; border-radius: var(--border-radius-sm);">Send Another Message</button>
          </div>
        `;
        container.style.opacity = 1;
      }, 300);
    });
  }
}
