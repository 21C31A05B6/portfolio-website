// main.js
document.getElementById('year').innerText = new Date().getFullYear();

// Responsive menu
const menuBtn = document.getElementById('menuToggle');
menuBtn && menuBtn.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Contact form submit (demo)
function handleSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){
    alert('Please fill all fields.');
    return false;
  }
  // Simple demo: open mail client
  const subject = encodeURIComponent('Portfolio contact from ' + name);
  const body = encodeURIComponent(message + '\n\n' + name + '\n' + email);
  window.location.href = `mailto:pogulaprashanthyadav143@gmail.com?subject=${subject}&body=${body}`;
  return false;
}
