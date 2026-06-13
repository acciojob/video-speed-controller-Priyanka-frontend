const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));



const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");
const video = document.querySelector(".player__video");

// speed limits
const min = 0.5;
const max = 4;

function handleMove(e) {
  const rect = speed.getBoundingClientRect();

  const y = e.pageY - rect.top - window.scrollY;

  const percent = y / rect.height;

  const playbackRate = percent * (max - min) + min;

  const finalRate = Math.min(max, Math.max(min, playbackRate));

  speedBar.style.height = `${percent * 100}%`;
  speedBar.textContent = finalRate.toFixed(2) + "×";

  video.playbackRate = finalRate;
}

speed.addEventListener("mousemove", handleMove);


