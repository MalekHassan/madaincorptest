'use strict';

// selection

const catHealth = document.getElementById('catHealth');
const dogHealth = document.getElementById('dogHealth');
const attack1 = document.getElementById('attack1');
const attack2 = document.getElementById('attack2');

let catHealthWidth = catHealth.offsetWidth;
let dogHealthWidth = dogHealth.offsetWidth;

// functions

function attackOne() {
  let percent = parseInt(catHealth.offsetWidth - 20);
  if (percent <= 0) {
    catHealth.style.width = 0;
  }
  catHealth.innerHTML =
    parseInt(((catHealth.offsetWidth - 20) / catHealthWidth) * 100) + ' %';
  catHealth.style.width = percent + 'px';
  if (catHealth.offsetWidth === 0) {
    alert('dogs wins');
    location.reload();
  }
}

function attackTwo() {
  let percent = parseInt(catHealth.offsetWidth - 50);
  if (percent <= 0) {
    catHealth.style.width = 0;
  }
  catHealth.innerHTML =
    parseInt(((catHealth.offsetWidth - 50) / catHealthWidth) * 100) + ' %';
  catHealth.style.width = percent + 'px';
  if (catHealth.offsetWidth === 0) {
    alert('dogs wins');
    location.reload();
  }
}
let catAttacks = setInterval(attack, 2000);
function stopAttack() {
  clearInterval(catAttacks);
}
function attack() {
  let hittingArray = [20, 50];
  let hit = hittingArray[Math.floor(Math.random() * 2)];
  let percent = parseInt(dogHealth.offsetWidth - hit);
  if (percent <= 0) {
    dogHealth.style.width = 0;
  }
  dogHealth.innerHTML =
    parseInt(((dogHealth.offsetWidth - hit) / dogHealthWidth) * 100) + ' %';
  dogHealth.style.width = percent + 'px';
  if (dogHealth.offsetWidth === 0) {
    alert('Cat wins');
    location.reload();
    stopAttack();
  }
}

// events

attack1.addEventListener('click', attackOne);
attack2.addEventListener('click', attackTwo);
