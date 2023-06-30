import React, { useDeferredValue, useState } from 'react';
import './App.css';

function App() {
  const [userValue, setUserValue] = useState('');
  const [userText, setUserText] = useState(false)
  const [botInput, setBotInput] = useState('');

  const storageOfWord = {
    'გამარჯობა': 'გამარჯობა, რით შემიძლია დაგეხმაროთ?',
    'hello': 'hi',
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (userValue in storageOfWord) {
        setBotInput(storageOfWord[userValue]);
      }
      setUserText(true);
      setUserValue('')
    }
  };
  

  return (
    <div className="container">
      <div className="chat-box">
        <div className="chat-window">
          <div className="bot-window">
            {botInput && <div className="chat-boxes">{botInput}</div>}
          </div>
          <div className="user-window">
            {userText && <div className="chat-boxes">{userValue}</div>}
          </div>
        </div>

        <input
          placeholder="შეიყვანეთ თქვენი ტექსტი"
          type="text"
          className="input-field"
          value={userValue}
          onChange={(e) => setUserValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default App;
