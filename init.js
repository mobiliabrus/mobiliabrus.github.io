if (location.pathname.endsWith('/') === false) {
  location.href = location.pathname.concat('/');
}
if (location.hostname !== 'localhost') {
  navigator.serviceWorker.register('/sw.js');
}
