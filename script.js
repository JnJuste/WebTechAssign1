document.addEventListener("DOMContentLoaded", function () {
        // Get references to form elements
        const form = document.querySelector("form");
        const nameInput = document.querySelector('input[name="usrname"]');
        const emailInput = document.querySelector('input[type="email"]');
        const genderInputs = document.querySelectorAll('input[name="gender"]');
        const passwordInput = document.querySelector('input[type="password"]');
        const addressTextarea = document.querySelector('.textarea');
        const citySelect = document.querySelector('select[name="city"]');
        const zipCodeInput = document.querySelector('input[type="number"]');
        const phoneInput = document.querySelector('input[type="number"]');
        const departmentSelect = document.querySelector('select[name="department"]');
      
        // Add form submission event listener
        form.addEventListener("submit", function (event) {
          if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
          }
        });
      
        // Validation function
        function validateForm() {
          let isValid = true;
      
          // Check if name is empty
          if (nameInput.value.trim() === "") {
            isValid = false;
            alert("Please enter your name.");
          }
      
          // Check if email is empty and valid
          const email = emailInput.value.trim();
          if (email === "") {
            isValid = false;
            alert("Please enter your email.");
          } else if (!isValidEmail(email)) {
            isValid = false;
            alert("Please enter a valid email address.");
          }
      
          // Check if gender is selected
          let genderSelected = false;
          genderInputs.forEach((input) => {
            if (input.checked) {
              genderSelected = true;
            }
          });
          if (!genderSelected) {
            isValid = false;
            alert("Please select your gender.");
          }
      
          // Check if password is strong enough (you can define your own password criteria)
          if (passwordInput.value.trim().length < 8) {
            isValid = false;
            alert("Password must be at least 8 characters long.");
          }
      
          // Check if address is empty
          if (addressTextarea.value.trim() === "") {
            isValid = false;
            alert("Please enter your address.");
          }
      
          // Check if city is selected
          if (citySelect.value === "0") {
            isValid = false;
            alert("Please select your city.");
          }
      
          // Check if zip code is empty
          if (zipCodeInput.value.trim() === "") {
            isValid = false;
            alert("Please enter your zip code.");
          }
      
          // Check if phone number is empty
          if (phoneInput.value.trim() === "") {
            isValid = false;
            alert("Please enter your phone number.");
          }
      
          // Check if department is selected
          if (departmentSelect.value === "0") {
            isValid = false;
            alert("Please select your department.");
          }
      
          return isValid;
        }
      
        // Email validation function (simple check for @ and .)
        function isValidEmail(email) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        }
      });
      