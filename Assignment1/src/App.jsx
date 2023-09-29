import React from 'react';
import userData from './data';
import UserInfo from './components/UserInfo/UserInfo';
import './App.css'; // Import your App.css file

function App() {
  const data = userData[0].data;
  return (
    <div className="content-container">
      <UserInfo data={data} />
    </div>
  );
}

export default App;
