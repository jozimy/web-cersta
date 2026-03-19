// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Set default date to today, time to next hour
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const now = new Date();
dateInput.value = now.toISOString().split('T')[0];
const nextHour = new Date(now.getTime() + 60 * 60 * 1000);
timeInput.value = nextHour.toTimeString().slice(0, 5);

// Booking form
document.getElementById('bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const pickup = document.getElementById('pickup').value;
  const dropoff = document.getElementById('dropoff').value;
  const date = dateInput.value;
  const time = timeInput.value;

  if (!pickup || !dropoff) {
    alert('Please enter both pick-up and drop-off locations.');
    return;
  }

  const subject = encodeURIComponent('Ride Booking Request');
  const body = encodeURIComponent(`Hello, I'd like to book a ride:\n\nFrom: ${pickup}\nTo: ${dropoff}\nDate: ${date}\nTime: ${time}`);
  window.location.href = `mailto:cersta@cersta.com?subject=${subject}&body=${body}`;
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  alert('Thank you for your message! We will get back to you shortly.');
  e.target.reset();
});
