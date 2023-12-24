if (location.hostname !== 'localhost') {
  navigator.serviceWorker.register('/sw.js');
}
