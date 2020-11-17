const inputContainer = document.getElementById('input-container');
const countdwonForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

// Set the date input min with today's date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);