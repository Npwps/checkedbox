let body = document.querySelector('body');
let dark = document.querySelector('#dark');
let pink = document.querySelector('#pink');
let wifiCheckbox = document.querySelector('input[name="wifi"]');
let bluetoothCheckbox = document.querySelector('input[name="bluetooth"]');
let airplaneCheckbox = document.querySelector('input[name="airplane"]');
let locationCheckbox = document.querySelector('input[name="location"]');
let darkCheckbox = document.querySelector('#dark');
let pinkCheckbox = document.querySelector('#pink');

dark.onclick = function() {
  if (dark.checked == true) {
    body.classList.add('darkMode');
  } else {
    body.classList.remove('darkMode');
  }
};

pink.onclick = function() {
  if (pink.checked == true) {
    body.classList.add('pinkmode');
  } else {
    body.classList.remove('pinkmode');
  }
};

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.welcome-popup').classList.add('show');
});

document.querySelector('.welcome-popup button').addEventListener('click', function() {
  document.querySelector('.welcome-popup').style.display = 'none';
});


function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("clock").innerText = time;
  document.getElementById("clock").textContent = time;
  setTimeout(showTime, 1000);
}

showTime();

const video = document.getElementById('video-background');
video.play();
video.loop = true;
video.muted = true;
video.autoplay = true;
video.volume = 0.5;

