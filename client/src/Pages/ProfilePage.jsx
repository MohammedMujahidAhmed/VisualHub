import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import axios from 'axios';

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
        await axios.post('/logout');
        setUser(null);
        window.location.href = '/login'
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center mb-4">Hello, {user.name} 😍</h1>
        <h1 className="text-4xl text-center mb-4">You've been a great user.</h1>

        {/* <div className="history-section">
          <h2 className="text-2xl font-bold mb-2">Chat History:</h2>
          {user.history && user.history.length > 0 ? (
            <ul>
              {user.history.map((entry, index) => (
                <li key={index}>
                  <p>
                    <strong>{entry.message}</strong> -{' '}
                    <a href={entry.link} target="_blank" rel="noopener noreferrer">
                      View Details
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No chat history yet.</p>
          )}
        </div> */}
        <button className="primary max-w-md mx-auto" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
