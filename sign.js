function toggleForm() {
    const formTitle = document.getElementById('form-title');
    const authForm = document.getElementById('auth-form');
    const toggleLink = document.getElementById('toggle-link');
  
    if (formTitle.innerText === 'Sign In') {
      formTitle.innerText = 'Sign Up';
      toggleLink.innerText = 'Already have an account? Sign In';
      
      // Change form fields for Sign Up
      authForm.innerHTML = `
        <div class="input-field">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="input-field">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required>
        </div>
        <div class="input-field">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" required>
        </div>
        <div class="input-field">
          <button type="submit" class="btn">Sign Up</button>
        </div>
      `;
    } else {
      formTitle.innerText = 'Sign In';
      toggleLink.innerText = 'Don\'t have an account? Sign Up';
      
      // Change form fields for Sign In
      authForm.innerHTML = `
        <div class="input-field">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="input-field">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required>
        </div>
        <div class="input-field">
          <button type="submit" class="btn">Sign In</button>
        </div>
      `;
    }
  }
  