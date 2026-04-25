const CACHE_NAME = 'bioid-v5';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js',
  'models/tiny_face_detector_model-weights_manifest.json',
  'models/tiny_face_detector_model-shard1',
  'models/face_landmark_68_model-weights_manifest.json',
  'models/face_landmark_68_model-shard1',
  'models/face_recognition_model-weights_manifest.json',
  'models/face_recognition_model-shard1'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
