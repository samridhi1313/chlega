import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { messaging } from './firebase';  // Ensure firebase is set up properly
import { getToken } from 'firebase/messaging';

function App() {
  const [permissionRequested, setPermissionRequested] = useState(false);

  // Request Notification Permission
  async function requestPermission() {
    if (!('Notification' in window)) {
      alert("Browser does not support notifications.");
      return;
    }

    const permission = await Notification.requestPermission();
    setPermissionRequested(true);

    if (permission === "granted") {
      console.log("Permission granted, requesting token...");
      
      try {
        // Get the token from FCM
        const token = await getToken(messaging, {
          vapidKey: "BL0Rezm3on5dQKi5uDvfaELkh4NJ6dVvQFbsCI4HFtSBRSyX3wg_PauesF7TXi4ySL9Skk5FYzaJQH-i6uCiyXI",  // Ensure this is correct
        });

        if (token) {
          console.log("FCM Token:", token); // Logs the token
          alert("Token generated! ✅ Check the console.");
        } else {
          console.log("No token received. Make sure notifications are allowed.");
          alert("No token received. Make sure notifications are allowed.");
        }
      } catch (err) {
        console.error("Error retrieving token:", err);
        alert("Error retrieving token. Check the console for details.");
      }
    } else if (permission === "denied") {
      alert("You denied the notification permission ❌");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Click the button to enable notifications:</p>
        <button onClick={requestPermission} disabled={permissionRequested}>
          Enable Notifications
        </button>
      </header>
    </div>
  );
}

export default App;
