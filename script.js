// Typing text for animation
const typingTextElement = document.querySelector('.typing-text');
const typingTexts = [
  "I am a Web Developer.",
  "I build stunning websites.",
  "I love creating interactive designs."
];
let typingIndex = 0;
let textIndex = 0;

function type() {
  if (textIndex < typingTexts[typingIndex].length) {
    typingTextElement.textContent += typingTexts[typingIndex].charAt(textIndex);
    textIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (textIndex > 0) {
    typingTextElement.textContent = typingTexts[typingIndex].substring(0, textIndex - 1);
    textIndex--;
    setTimeout(erase, 50);
  } else {
    typingIndex = (typingIndex + 1) % typingTexts.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});
