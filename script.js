// menu hamburguesa, con bootstrap sera un click :(
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

function closeNav() {
  navToggle.classList.remove('open');
  navLinks.classList.remove('open');
}

// modal
const modal = document.getElementById("doc-modal");
const frame = document.getElementById("doc-frame");
const closeBtn = document.querySelector(".close-btn");

function openDoc(path) {
  frame.src = path;
  modal.style.display = "flex";
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };