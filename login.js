document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements
    const loginButton = document.querySelector(".btnLogin-popup");
    const closeButton = document.querySelector(".icon-close");
    const loginModal = document.querySelector(".wrapper");
    const form = document.querySelector(".form-box.login form");
  
    // Function to show the login pop-up
    function showLoginModal() {
      loginModal.style.display = "block";
    }
  
    // Function to close the login pop-up
    function closeLoginModal() {
      loginModal.style.display = "none";
    }
  
    // Event listener to show the login pop-up when the login button is clicked
    loginButton.addEventListener("click", showLoginModal);
  
    // Event listener to close the login pop-up when the close button is clicked
    closeButton.addEventListener("click", closeLoginModal);
  
    // Event listener to close the login pop-up when the user clicks outside of it
    window.addEventListener("click", function (event) {
      if (event.target === loginModal) {
        closeLoginModal();
      }
    });
  
    // Prevent the click event inside the login form from closing the pop-up
    form.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  
    // You can add additional functionality and form validation here as needed
  
  });
  