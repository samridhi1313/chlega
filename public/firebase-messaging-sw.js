/* public/firebase-messaging-sw.js */

// Import Firebase scripts via importScripts
importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js');

// Initialize Firebase inside service worker
firebase.initializeApp({
  apiKey: "AIzaSyBGYrODt5qKInPfZb7aaPVetgLpiWl_hqE",
  authDomain: "lesgo-627a9.firebaseapp.com",
  projectId: "lesgo-627a9",
  storageBucket: "lesgo-627a9.firebasestorage.app",
  messagingSenderId: "250877261552",
  appId: "1:250877261552:web:872e6ba588f2d2efe0b435",
  measurementId: "G-4G69ENKQ00"
});

// Get messaging instance
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);

  const notificationTitle = payload.notification?.title || 'Background Message Title';
  const notificationOptions = {
    body: payload.notification?.body || 'Background Message body',
    icon: '/firebase-logo.png' // optional icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
