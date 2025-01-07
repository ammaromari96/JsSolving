document.getElementById('fname').addEventListener('input', checkFname);
    document.getElementById('lname').addEventListener('input', checkLname);
    document.getElementById('bdate').addEventListener('input', checkBdate);
    document.getElementById('email').addEventListener('input', checkEmail);
    document.getElementById('confirmEmail').addEventListener('input', checkConfirmEmail);
    document.getElementById('password').addEventListener('input', checkPassword);
    document.getElementById('confirmPassword').addEventListener('input', checkConfirmPassword);

    function checkFname() {
      const fname = document.getElementById('fname').value;
      const error = document.getElementById('fnameError');
      if (/^[a-zA-Z]+$/.test(fname)) {
        error.textContent = '';
      } else {
        error.textContent = 'Numbers are not allowed';
      }
    }

    function checkLname() {
      const lname = document.getElementById('lname').value;
      const error = document.getElementById('lnameError');
      if (/^[a-zA-Z]+$/.test(lname)) {
        error.textContent = '';
      } else {
        error.textContent = 'Numbers are not allowed';
      }
    }

    function checkBdate() {
      const bdate = document.getElementById('bdate').value;
      const error = document.getElementById('bdateError');
      if (/^\d{2}\/\d{2}\/\d{4}$/.test(bdate)) {
        error.textContent = '';
      } else {
        error.textContent = 'The format should be dd/mm/yyyy';
      }
    }

    function checkEmail() {
      const email = document.getElementById('email').value;
      const error = document.getElementById('emailError');
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.textContent = '';
      } else {
        error.textContent = 'The email is not valid';
      }
    }

    function checkConfirmEmail() {
      const email = document.getElementById('email').value;
      const confirmEmail = document.getElementById('confirmEmail').value;
      const error = document.getElementById('confirmEmailError');
      if (email === confirmEmail) {
        error.textContent = '';
      } else {
        error.textContent = 'Emails do not match';
      }
    }

    function checkPassword() {
      const password = document.getElementById('password').value;
      const error = document.getElementById('passwordError');
      if (password.length >= 6) {
        error.textContent = '';
      } else {
        error.textContent = 'Password must be at least 6 characters';
      }
    }

    function checkConfirmPassword() {
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const error = document.getElementById('confirmPasswordError');
      if (password === confirmPassword) {
        error.textContent = '';
      } else {
        error.textContent = 'Passwords do not match';
      }
    }