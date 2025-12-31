// Countdown Timer
function updateTimer() {
  const newYear = new Date("Jan 1, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const diff = newYear - now;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    `${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);

// Button interaction
function kiss() {
  alert("Happy New Year my ❤️");
}
// Birthday Countdown + Surprise Clue (July 4)
function updateBirthdayTimer() {
  const now = new Date();

  let birthday = new Date(
    now.getFullYear(),
    6, // July (0-based)
    4,
    0, 0, 0
  );

  // If birthday passed, count for next year
  if (now > birthday) {
    birthday.setFullYear(now.getFullYear() + 1);
  }

  const diff = birthday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  document.getElementById("bday-days").innerText = days;
  document.getElementById("bday-hours").innerText = hours;
  document.getElementById("bday-mins").innerText = mins;
  document.getElementById("bday-secs").innerText = secs;

  // 🎁 Surprise clue logic
  const clue = document.getElementById("surprise-clue");

  if (days <= 7) {
    clue.innerHTML = `
      💝 <strong>Clue:</strong><br>
      It’s something that smells like comfort,
      feels like love,
      and comes from me to you ❤️
    `;
  }
}

setInterval(updateBirthdayTimer, 1000);
// 🎶 Section-based music control
const countdownSection = document.querySelector(".countdown");
const memoriesSection = document.querySelector(".memories");

const countdownMusic = document.getElementById("countdown-music");
const memoriesMusic = document.getElementById("memories-music");

function handleMusic() {
  const countdownRect = countdownSection.getBoundingClientRect();
  const memoriesRect = memoriesSection.getBoundingClientRect();

  // Countdown music
  if (countdownRect.top < window.innerHeight / 2 &&
      countdownRect.bottom > window.innerHeight / 2) {
    countdownMusic.play();
  } else {
    countdownMusic.pause();
  }

  // Memories music
  if (memoriesRect.top < window.innerHeight / 2 &&
      memoriesRect.bottom > window.innerHeight / 2) {
    memoriesMusic.play();
  } else {
    memoriesMusic.pause();
  }
}

window.addEventListener("scroll", handleMusic);
// 💌 Scroll-triggered micro messages
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelector(".m1").classList.toggle("show", scrollY > 300);
  document.querySelector(".m2").classList.toggle("show", scrollY > 800);
  document.querySelector(".m3").classList.toggle("show", scrollY > 1400);
});
// 🌙 Auto night mode after sunset
const hour = new Date().getHours();
if (hour >= 19 || hour < 6) {
  document.body.classList.add("night");
}
// 🕯️ Midnight birthday reveal
if (days === 0 && hours === 0 && mins === 0) {
  document.getElementById("midnight-message").style.display = "block";
}
