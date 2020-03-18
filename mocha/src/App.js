import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({});

  const onSubmit = (username, password) => {
    setIsAuthenticated(true);
    setIsModalOpen(false);
    setCredentials({ username, password });
  };

  return (
    <div className="App">
      {isAuthenticated &&
        <p>
          Hello <span className="username">{credentials.username}</span>.
        </p>
      }
      <button
        className="sign-in-button"
        onClick={() => setIsModalOpen(true)} // disable this
        style={{ display: !isAuthenticated ? "block" : "none" }}
      >
        SIGN IN
      </button>
      {isModalOpen && <Modal
        isModalOpen={isModalOpen}
        setIsAuthenticated={setIsAuthenticated}
        setIsModalOpen={setIsModalOpen}
        onSubmit={onSubmit}
      />}
    </div>
  );
}

const Modal = ({
  onSubmit
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(username, password)
      }}
      className="modal"
    >
      <input
        className="modal-input"
        placeholder="USERNAME"
        type="text"
        onChange={e => setUsername(e.target.value)}
        value={username}
      />
      <input
        className="modal-input"
        placeholder="PASSWORD"
        type="password"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <button
        className="modal-button"
        type="submit"
      >
        SUBMIT
      </button>
    </form>
  )
};

export default App;
