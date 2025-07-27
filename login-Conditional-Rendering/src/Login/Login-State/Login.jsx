// App.js
import React, { useState } from 'react';

// WelcomeMessage Component
function WelcomeMessage({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome back, Gokul!</h2>;
  } else {
    return <h2>Please log in to continue.</h2>;
  }
}

// Main App Component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <WelcomeMessage isLoggedIn={isLoggedIn} />
      <button onClick={toggleLogin} style={{ marginTop: '20px', padding: '10px 20px' }}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default App;
