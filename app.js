'use strict';

// selection

const catHealth = document.getElementById('catHealth');
const dogHealth = document.getElementById('dogHealth');
const attack1 = document.getElementById('attack1');
const attack2 = document.getElementById('attack2');

// functions
function attackOne() {
  let percent = parseInt(catHealth.offsetWidth - 20);
  if (percent <= 0) {
    catHealth.style.width = 0;
  }
  catHealth.style.width = percent + 'px';
  if (catHealth.offsetWidth === 0) {
    alert('dogs wins');
  }
}

function attackTwo() {
  let percent = parseInt(catHealth.offsetWidth - 50);
  if (percent <= 0) {
    catHealth.style.width = 0;
  }
  catHealth.style.width = percent + 'px';
  if (catHealth.offsetWidth === 0) {
    alert('dogs wins');
    location.reload();
  }
}
setInterval(() => {
  let hittingArray = [20, 50];
  let percent = parseInt(
    dogHealth.offsetWidth - hittingArray[Math.floor(Math.random() * 2)]
  );
  if (percent <= 0) {
    dogHealth.style.width = 0;
  }
  dogHealth.style.width = percent + 'px';
  if (dogHealth.offsetWidth === 0) {
    alert('Cat wins');
    location.reload();
  }
}, 2000);

// events

attack1.addEventListener('click', attackOne);
attack2.addEventListener('click', attackTwo);
