// Import necessary dependencies
import React from 'react';

// Function to handle login
function handleLogin() {
  // TO DO: implement login functionality
}

// Render login form
function renderLoginForm() {
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input type="text" name="username" />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default renderLoginForm;