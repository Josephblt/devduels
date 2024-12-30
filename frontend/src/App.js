import React, { useEffect, useState } from 'react';
import { fetchWelcomeMessage } from './api';

const App = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const getMessage = async () => {
      try {
        const data = await fetchWelcomeMessage();
        console.log('API Response:', data);
        setMessage(data.message);
      } catch (err) {
        console.error('API Error:', err.message);
        setError('Failed to fetch message from the backend.');
      }
    };

    getMessage();
  }, []);

  return (
    <div>
      <h1>Welcome to DevDuels</h1>
      {error ? <p style={{ color: 'red' }}>{error}</p> : <p>{message || 'Loading...'}</p>}
    </div>
  );
};

export default App;
