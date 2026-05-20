// Cert lightbox
function openCertModal(src, title, sub){
  document.getElementById('certModalImg').src = src;
  document.getElementById('certModalTitle').textContent = title;
  document.getElementById('certModalSub').textContent = sub;
  document.getElementById('certModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeCertModal(){
  document.getElementById('certModal').classList.remove('open');
  document.body.style.overflow='';
}

// Hamburger
const hamburger=document.getElementById('hamburger');
const navLinks=document.getElementById('navLinks');
hamburger.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

// Fade in on scroll
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.15});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

// CV modal
function openCV(){document.getElementById('cvModal').classList.add('open');document.body.style.overflow='hidden'}
function closeCV(){document.getElementById('cvModal').classList.remove('open');document.body.style.overflow=''}
document.getElementById('cvModal').addEventListener('click',e=>{if(e.target===document.getElementById('cvModal'))closeCV()});

// Nav active state
const sections=document.querySelectorAll('section[id]');
const links=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let current='';
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-100)current=s.id});
  links.forEach(l=>{l.style.color=l.getAttribute('href')==='#'+current?'var(--text)':'var(--muted)'});
});