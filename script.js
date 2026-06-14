const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));



// Get all elements
const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const rewindButton = player.querySelector('.rewind');
const forwardButton = player.querySelector('.forward');
const volumeInput = player.querySelector('.volume');
const playbackSpeedInput = player.querySelector('.playbackSpeed');
const volumeValue = player.querySelector('.volume-value');
const speedValue = player.querySelector('.speed-value');

// Play/Pause toggle
function togglePlayPause() {
    const isPlaying = video.paused;
    if (isPlaying) {
        video.play();
        toggle.textContent = '❚ ❚';
    } else {
        video.pause();
        toggle.textContent = '►';
    }
}

toggle.addEventListener('click', togglePlayPause);

// Video play/pause on space key
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        togglePlayPause();
    }
});

// Update progress bar as video plays
video.addEventListener('timeupdate', () => {
    const progressPercent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${progressPercent}%`;
});

// Click on progress bar to seek
progress.addEventListener('click', (e) => {
    const rect = progress.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    video.currentTime = percent * video.duration;
});

// Volume control
volumeInput.addEventListener('input', (e) => {
    const volume = e.target.value;
    video.volume = volume / 100;
    volumeValue.textContent = `${volume}%`;
});

// Playback speed control
playbackSpeedInput.addEventListener('input', (e) => {
    const speed = parseFloat(e.target.value);
    video.playbackRate = speed;
    speedValue.textContent = `${speed}x`;
});

// Rewind 10 seconds
rewindButton.addEventListener('click', () => {
    video.currentTime = Math.max(0, video.currentTime - 10);
});

// Forward 25 seconds
forwardButton.addEventListener('click', () => {
    video.currentTime = Math.min(video.duration, video.currentTime + 25);
});

// Update button text when video ends or starts
video.addEventListener('play', () => {
    toggle.textContent = '❚ ❚';
});

video.addEventListener('pause', () => {
    toggle.textContent = '►';
});

// Initialize volume
video.volume = 0.5;





