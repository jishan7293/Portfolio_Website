// Typewriter effect
const text = document.querySelector('.typing');
const texts = [" .NET Developer", " Web Designer", " Full Stack Learner"];
let count = 0, index = 0, currentText = "", letter = "";

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  text.textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 100);
  }
})();

// Scroll to top button
window.onscroll = function() {
  document.getElementById("topBtn").style.display = (window.scrollY > 300) ? "block" : "none";
};

document.getElementById("topBtn").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Dark mode toggle
document.getElementById("themeToggle").onclick = function() {
  document.body.classList.toggle("dark-mode");
};
