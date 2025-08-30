// Toggle password visibility
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    let toggleIcon;
    
    if (inputId === 'password') {
      toggleIcon = document.querySelector('.toggle-password');
    } else if (inputId === 'confirmPassword') {
      toggleIcon = document.querySelector('.toggle-confirm-password');
    }
    
    if (passwordInput && toggleIcon) {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
      } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
      }
    }
  }
  
  // Form validation functions
  function validateUsername(username) {
    if (username.length < 3) {
      return { valid: false, message: 'Username must be at least 3 characters long' };
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return { valid: false, message: 'Username can only contain letters, numbers, and underscores' };
    }
    return { valid: true, message: 'Valid username' };
  }
  
  function validateSecurityKey(securityKey) {
    if (securityKey.length < 6) {
      return { valid: false, message: 'Security key must be at least 6 characters long' };
    }
    return { valid: true, message: 'Valid security key' };
  }
  
  function validatePassword(password) {
    if (password.length < 8) {
      return { valid: false, message: 'Password must be at least 8 characters long' };
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      return { valid: false, message: 'Password must contain uppercase, lowercase, and number' };
    }
    return { valid: true, message: 'Strong password' };
  }
  
  function validateConfirmPassword(password, confirmPassword) {
    if (password !== confirmPassword) {
      return { valid: false, message: 'Passwords do not match' };
    }
    return { valid: true, message: 'Passwords match' };
  }
  
  // Show validation message
  function showValidation(inputGroup, validation) {
    const input = inputGroup.querySelector('input');
    let messageElement = inputGroup.querySelector('.error-message, .success-message');
    
    // Remove existing message
    if (messageElement) {
      messageElement.remove();
    }
    
    // Remove existing classes
    inputGroup.classList.remove('error', 'success');
    
    // Create new message element
    messageElement = document.createElement('div');
    messageElement.textContent = validation.message;
    
    if (validation.valid) {
      inputGroup.classList.add('success');
      messageElement.className = 'success-message';
    } else {
      inputGroup.classList.add('error');
      messageElement.className = 'error-message';
    }
    
    messageElement.style.display = 'block';
    inputGroup.appendChild(messageElement);
  }
  
  // Real-time validation
  function setupRealTimeValidation() {
    const usernameInput = document.getElementById('username');
    const securityKeyInput = document.getElementById('securityKey');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    if (usernameInput) {
      usernameInput.addEventListener('blur', function() {
        const validation = validateUsername(this.value);
        showValidation(this.closest('.input-group'), validation);
      });
    }
    
    if (securityKeyInput) {
      securityKeyInput.addEventListener('blur', function() {
        const validation = validateSecurityKey(this.value);
        showValidation(this.closest('.input-group'), validation);
      });
    }
    
    if (passwordInput) {
      passwordInput.addEventListener('blur', function() {
        const validation = validatePassword(this.value);
        showValidation(this.closest('.input-group'), validation);
        
        // Also validate confirm password if it has a value
        const confirmPassword = confirmPasswordInput?.value;
        if (confirmPassword) {
          const confirmValidation = validateConfirmPassword(this.value, confirmPassword);
          showValidation(confirmPasswordInput.closest('.input-group'), confirmValidation);
        }
      });
    }
    
    if (confirmPasswordInput) {
      confirmPasswordInput.addEventListener('blur', function() {
        const password = passwordInput?.value;
        const validation = validateConfirmPassword(password, this.value);
        showValidation(this.closest('.input-group'), validation);
      });
    }
  }
  
  // Handle form submission
  function handleFormSubmission() {
    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
      signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
          username: document.getElementById('username').value.trim(),
          securityKey: document.getElementById('securityKey').value.trim(),
          password: document.getElementById('password').value,
          confirmPassword: document.getElementById('confirmPassword').value
        };
        
        // Validate all fields
        const validations = {
          username: validateUsername(formData.username),
          securityKey: validateSecurityKey(formData.securityKey),
          password: validatePassword(formData.password),
          confirmPassword: validateConfirmPassword(formData.password, formData.confirmPassword)
        };
        
        // Show validation messages
        Object.keys(validations).forEach(field => {
          const inputGroup = document.getElementById(field).closest('.input-group');
          showValidation(inputGroup, validations[field]);
        });
        
        // Check if all validations passed
        const allValid = Object.values(validations).every(v => v.valid);
        
        if (allValid) {
          // Show loading state
          const submitButton = document.querySelector('.register-btn');
          submitButton.classList.add('loading');
          submitButton.disabled = true;
          
          // Simulate account creation (replace with actual API call)
          setTimeout(() => {
            console.log('Creating admin account:', formData);
            
            // Remove loading state
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
            
            // Show success message
            alert('Admin account created successfully! Redirecting to login page...');
            
            // Redirect to login page
            window.location.href = 'adminLogin.html';
          }, 2000);
        } else {
          // Scroll to first error
          const firstError = document.querySelector('.input-group.error');
          if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstError.querySelector('input').focus();
          }
        }
      });
    }
  }
  
  // Sign in redirect function
  function signIn() {
    window.location.href = 'adminLogin.html';
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    setupRealTimeValidation();
    handleFormSubmission();
    
    // Add some visual feedback for form interactions
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.closest('.input-group').style.transform = 'scale(1.02)';
      });
      
      input.addEventListener('blur', function() {
        this.closest('.input-group').style.transform = 'scale(1)';
      });
    });
  });