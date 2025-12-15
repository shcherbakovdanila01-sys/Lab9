// Получаем все кнопки с классом .drum
let drumButtons = document.querySelectorAll('.drum');

// Используем цикл for для добавления обработчика событий "при нажатии" для каждой кнопки
for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener('click', function() {
    let buttonKey = this.querySelector('img').alt;  // Получаем alt из img (w, a, etc.)
    makeSound(buttonKey);
    buttonAnimation(buttonKey);
  });
}

function makeSound(key) {
  switch (key) {
    case 'w':
      new Audio('sounds/crash.mp3').play();
      break;
    case 'a':
      new Audio('sounds/kick-bass.mp3').play();
      break;
    case 's':
      new Audio('sounds/snare.mp3').play();
      break;
    case 'd':
      new Audio('sounds/tom-1.mp3').play();
      break;
    case 'j':
      new Audio('sounds/tom-2.mp3').play();
      break;
    case 'k':
      new Audio('sounds/tom-3.mp3').play();
      break;
    case 'l':
      new Audio('sounds/tom-4.mp3').play();
      break;
    default:
      console.log('Неизвестная клавиша: ' + key);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function() {
    activeButton.classList.remove('pressed');
  }, 100);
}


document.addEventListener('keydown', function(event) {
  let key = event.key.toLowerCase();  
  if (['w', 'a', 's', 'd', 'j', 'k', 'l'].includes(key)) {
    makeSound(key);
    buttonAnimation(key);
  }
});
