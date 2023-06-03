import React from 'react';
import addNotification from 'react-push-notification';
import bb from './images/bb.jpg';
function App() {
  const clickToNotify = () => {
    addNotification({
      title: 'Deneme Mesajı',
      message: 'Bulut Bilişimciler',
      duration: 4000,
      icon: bb,
      native: true,
      onClick: () => window.location = "https://bulutbilisimciler.com/",

    });
  }
  return (

    <div>
      <button onClick={clickToNotify} style={{margin: '100px'}}>
        Bildirim İçin Dokun
      </button>
    </div>
  );
}

export default App;
