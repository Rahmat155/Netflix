importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBVrE2a5o_APc3z9DryjVg2JFBnPLLzW_o",
  authDomain: "netflix-monitoring.firebaseapp.com",
  projectId: "netflix-monitoring",
  storageBucket: "netflix-monitoring.firebasestorage.app",
  messagingSenderId: "14138899326",
  appId: "1:14138899326:web:c1377d6e32b1e66c11912f"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Pengingat Netflix";
  const options = {
    body: payload.notification?.body || "Masa aktif paket Netflix kamu perlu diperiksa.",
    icon: "/Netflix/icon-192.png",
    data: payload.data || {}
  };
  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow("/Netflix/"));
});
