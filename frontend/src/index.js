import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => (
  <div>
    <h1>Welcome to DevDuels</h1>
    <p>Your competitive code battle platform!</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
