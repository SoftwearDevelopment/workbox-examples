importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js');

self.addEventListener('install', function() {
  console.log('Workbox precache');
  workboxSW.precache([]);
});
