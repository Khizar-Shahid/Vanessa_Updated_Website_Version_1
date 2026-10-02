document.addEventListener('DOMContentLoaded', () => {
  initBookingWizard();
});

// ==========================================
// Google Calendar "Book with me" links — one per service.
// Each page has scheduling, insurance questions, and Stripe payment
// already configured on Vanessa's Workspace calendar.
// ==========================================
const GOOGLE_BOOKING_LINKS = {
  individual: 'https://calendar.app.google/bGgkp1LH3Jqmta2K8',
  couples: 'https://calendar.app.google/hv6B67tHQDybFEw17',
  parenting: 'https://calendar.app.google/MkSD8vZmRjieBb5q6'
};

function initBookingWizard() {
  const state = { step: 1, calKey: null };

  const panels = document.querySelectorAll('.booking-step-panel');
  const progressSteps = document.querySelectorAll('.progress-step');
  const backBtn = document.getElementById('back-step-btn');
  const nextBtn = document.getElementById('next-step-btn');
  const btnBar = document.getElementById('booking-btn-bar');
  const serviceCards = document.querySelectorAll('.service-option-card');
  const calPanelHeading = document.getElementById('cal-panel-heading');

  // Button bar isn't needed once Google's own UI takes over on step 2
  btnBar.style.display = 'none';

  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      serviceCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      const calKey = card.getAttribute('data-cal');
      const serviceName = card.getAttribute('data-service');
      state.calKey = calKey;

      calPanelHeading.textContent = `Book: ${serviceName}`;
      showCalEmbed(calKey);
      goToStep(2);
    });
  });

  backBtn.addEventListener('click', () => {
    if (state.step > 1) goToStep(1);
  });

  function goToStep(newStep) {
    const currentPanel = document.querySelector(`.booking-step-panel[data-panel="${state.step}"]`);
    currentPanel.classList.remove('active');

    state.step = newStep;

    const newPanel = document.querySelector(`.booking-step-panel[data-panel="${newStep}"]`);
    newPanel.classList.add('active');

    progressSteps.forEach(stepEl => {
      const stepNum = parseInt(stepEl.getAttribute('data-step'));
      if (stepNum < state.step) {
        stepEl.className = 'progress-step completed';
      } else if (stepNum === state.step) {
        stepEl.className = 'progress-step active';
      } else {
        stepEl.className = 'progress-step';
      }
    });

    backBtn.style.visibility = state.step === 1 ? 'hidden' : 'visible';
  }
}

function showCalEmbed(calKey) {
  document.querySelectorAll('.cal-embed-container').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(`cal-embed-${calKey}`);
  if (!target) return;

  const bookingUrl = GOOGLE_BOOKING_LINKS[calKey];

  // Google's booking pages send X-Frame-Options: SAMEORIGIN, so they can't be
  // embedded inline — open in a new tab instead and show a fallback link/button.
  if (!target.querySelector('.booking-redirect-card')) {
    target.innerHTML = `
      <div class="booking-redirect-card">
        <p>You're being taken to a secure booking page to pick a time, share insurance info, and pay for your session.</p>
        <a href="${bookingUrl}" target="_blank" rel="noopener" class="btn btn-primary">Continue to Book &amp; Pay</a>
      </div>
    `;
  }

  target.classList.add('active');
  window.open(bookingUrl, '_blank', 'noopener');
}
