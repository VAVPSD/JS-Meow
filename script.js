const openEyes = 'img/catFace.png';
const closedEyes = 'img/catFaceCloseEyes.png';
const openPaw = 'img/paw.png';
const closedPaw = 'img/pawClose.png';

const catImage = document.getElementById('cat');
const catPawImage = document.getElementById('paw');
const jsButton = document.getElementById('js');

jsButton.addEventListener('click', () => {
  playSound();
  jsButton.classList.add('shake');
  jsButton.classList.add('disabled');

  setTimeout(() => {
    jsButton.classList.remove('shake');
    jsButton.classList.remove('disabled');
  }, 7000);
});

function playSound() {
  const audio = new Audio('audio/Purr.mp3');
  audio.volume = 1;
  audio.play();
}

function toggleCatImage() {
  catImage.src = closedEyes;
  setTimeout(() => {
    catImage.src = openEyes; 
  }, 300);
}

setInterval(toggleCatImage, 5000);

function toggleCatPawImage() {
  catPawImage.src = closedPaw;
  setTimeout(() => {
    catPawImage.src = openPaw; 
  }, 400);
}

setInterval(toggleCatPawImage, 4000);

