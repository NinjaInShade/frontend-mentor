const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');

const textElement = document.getElementById('text');
const nameElement = document.getElementById('name');
const roleElement = document.getElementById('role');
const imageElement = document.getElementById('img');

let arrayIndex = 0;

let sliderData = [
  {
    text: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    name: 'Tanya Sinclair',
    role: 'UX Engineer',
    img: './assets/image-tanya.jpg',
    imgAlt:
      'Tanya Sinclair. Photo of her posing to her side with her face looking at the camera. Has dark brown, curly hair.',
  },
  {
    text: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    name: 'John Tarkpor',
    role: 'Junior Front-end Developer',
    img: './assets/image-john.jpg',
    imgAlt:
      'John Tarkpor. Photo of him posing with his arms crossed, with a big smile on his face looking happy. Has black hair.',
  },
];

function updateContent() {
  // Forces the fadeIn animation we have declared in CSS
  document.body.classList.remove('animate');

  //   For some reason this is needed (web development is weird)??
  void document.body.offsetWidth;

  document.body.classList.add('animate');

  textElement.innerText = sliderData[arrayIndex].text;
  nameElement.innerText = sliderData[arrayIndex].name;
  roleElement.innerText = sliderData[arrayIndex].role;
  imageElement.src = sliderData[arrayIndex].img;
  imageElement.alt = sliderData[arrayIndex].imgAlt;
}

function displayPrevious() {
  if (arrayIndex - 1 === -1) {
    arrayIndex = sliderData.length - 1;
  } else {
    arrayIndex -= 1;
  }

  return updateContent();
}

function displayNext() {
  if (arrayIndex + 1 === sliderData.length) {
    arrayIndex = 0;
  } else {
    arrayIndex += 1;
  }

  return updateContent();
}

// Enable use of slider with keyboard right and left arrows
document.body.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    previousBtn.focus();
    return displayPrevious();
  }

  if (event.key === 'ArrowRight') {
    nextBtn.focus();
    return displayNext();
  }

  return;
});

previousBtn.addEventListener('click', displayPrevious);

nextBtn.addEventListener('click', displayNext);
