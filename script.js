// Wait until the DOM is fully loaded before adding event listeners
window.addEventListener('DOMContentLoaded', () => {
    /* -------------------- Event Handling -------------------- */
    // Button click event
    const clickBtn = document.getElementById('clickBtn');
    clickBtn.addEventListener('click', () => {
      alert('Button clicked!');
    });
  
    // Hover effect: change text color when hovering over the paragraph
    const hoverText = document.getElementById('hoverText');
    hoverText.addEventListener('mouseover', () => {
      hoverText.style.color = 'green';
    });
    hoverText.addEventListener('mouseout', () => {
      hoverText.style.color = '';
    });
  
    // Keypress detection: log the pressed key to the console
    const keyInput = document.getElementById('keyInput');
    keyInput.addEventListener('keypress', (event) => {
      console.log('Key pressed:', event.key);
    });
  
    // Bonus: Secret action for double-click and long press
    const secretArea = document.getElementById('secretArea');
    
    // Double-click detection
    secretArea.addEventListener('dblclick', () => {
      alert('Secret double-click action triggered!');
    });
  
    // Long press detection using a timer (set for 1 second)
    let pressTimer;
    secretArea.addEventListener('mousedown', () => {
      pressTimer = window.setTimeout(() => {
        alert('Secret long press action triggered!');
      }, 1000); // trigger after 1 second of holding the mouse down
    });
    secretArea.addEventListener('mouseup', () => clearTimeout(pressTimer));
    secretArea.addEventListener('mouseleave', () => clearTimeout(pressTimer));
  
    /* ------------------ Interactive Elements ------------------ */
    // Button that changes text and color when clicked
    const changeBtn = document.getElementById('changeBtn');
    changeBtn.addEventListener('click', () => {
      changeBtn.textContent = 'I have changed!';
      changeBtn.style.backgroundColor = '#28a745'; // Green color to show the change
    });
  
    // Accordion functionality: toggle content visibility on header click
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        // Toggle display: if already expanded, collapse it; otherwise expand it
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
    });
  
    /* ------------------ Form Validation ------------------ */
    const form = document.getElementById('userForm');
    const feedback = document.getElementById('feedback');
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission to validate first
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      let message = '';
      let valid = true;
  
      // Check for required username field
      if (!username) {
        message += 'Username is required. ';
        valid = false;
      }
  
      // Basic email format validation using regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        message += 'Email is invalid. ';
        valid = false;
      }
  
      // Check if password meets minimum length requirement
      if (password.length < 8) {
        message += 'Password must be at least 8 characters. ';
        valid = false;
      }
  
      feedback.textContent = valid ? 'Form submitted successfully!' : message;
    });
  
    // Bonus: Real-time feedback on the username field while typing
    const usernameInput = document.getElementById('username');
    usernameInput.addEventListener('input', () => {
      if (usernameInput.value.length > 0 && usernameInput.value.length < 3) {
        feedback.textContent = 'Username must be at least 3 characters.';
      } else {
        feedback.textContent = '';
      }
    });
  });
  