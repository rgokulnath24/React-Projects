import React, { useState } from "react";
import "./App.css"; // Import from external CSS

export default function App() {
  const [loggedin, setlogin] = useState(false);

  function Welcome({ loggedin }) {
    if (loggedin) {
      return <h2>Welcome Admin!</h2>;
    } else {
      return <h2>Please log in to continue</h2>;
    }
  }

  const toggleLogin = () => {
    setlogin((prevState) => !prevState);
  };

  return (
    <div className="container">
      <div className="card">
        <Welcome loggedin={loggedin} />
        <button onClick={toggleLogin}>
          {loggedin ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}
