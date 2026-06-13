const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));



const player = document.querySelector('.player__video');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const volume = player.querySelector('.volume');
const playbackSpeed = player.querySelector('.playbackSpeed');
const rewind = player.querySelector('.rewind');
const skip = player.querySelector('.skip');

// Play / Pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Progress Bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

// Seek on progress bar click
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Volume
function handleVolume() {
  video.volume = volume.value;
}

// Playback Speed
function handlePlaybackSpeed() {
  video.playbackRate = playbackSpeed.value;
}

// Rewind 10 seconds
function rewindVideo() {
  video.currentTime -= 10;
}

// Skip 25 seconds
function skipVideo() {
  video.currentTime += 25;
}

// Event Listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', handleProgress);

progress.addEventListener('click', scrub);

volume.addEventListener('input', handleVolume);
playbackSpeed.addEventListener('input', handlePlaybackSpeed);

rewind.addEventListener('click', rewindVideo);
skip.addEventListener('click', skipVideo);


