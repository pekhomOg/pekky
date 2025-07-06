const overlay = document.getElementById('click-overlay');
const card = document.querySelector('.card');
const video = document.getElementById('bgvid');

overlay.addEventListener('click', () => {
  overlay.classList.add('fade-out');

  // ✅ Just unmute — don’t reload or restart the video
  video.muted = false;

  card.classList.remove('hidden');
  card.classList.add('fade-in');
});
