// Invitación Marcos & Fernanda
// Para personalizar invitados: index.html?m=Fernanda%20Sandoval&n=2%20pases
// Para conectar Google Forms, pega aquí tu endpoint formResponse y cambia los nombres de campos entry.xxxxx.
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdwfCd5_NWP5UcTdzI-RKV62W1vpP-mOgf9yABiBk7iVG2JOg/formResponse";
const GOOGLE_FIELDS = {
  nombre: "entry.000000000",
  asistencia: "entry.000000001",
  asistentes: "entry.000000002",
  acompanantes: "entry.000000003",
  alergias: "entry.000000004",
  autobus: "entry.000000005",
  mensaje: "entry.000000006"
};
// IMPORTANTE: sustituir los entry.000000000 anteriores por los entry reales del formulario de Google.

const params = new URLSearchParams(location.search);
const guest = params.get('m');
const passes = params.get('n');
if (guest) document.getElementById('guestName').textContent = guest;
if (passes) document.getElementById('passes').textContent = `${passes} reservados`;

document.querySelectorAll('[data-scroll]').forEach(btn => btn.addEventListener('click', () => {
  startMusic();
  document.querySelector(btn.dataset.scroll)?.scrollIntoView({behavior:'smooth'});
}));

const audio = document.getElementById('music');
const musicBtn = document.getElementById('musicBtn');
// Intentar reproducir la música al abrir la invitación. Algunos móviles/navegadores pueden bloquearlo hasta el primer toque.
async function startMusic(){
  try {
    audio.volume = 0.78;
    await audio.play();
    musicBtn.classList.add('playing');
    musicBtn.textContent = 'Ⅱ';
  } catch(e) {
    musicBtn.classList.remove('playing');
    musicBtn.textContent = '♪';
  }
}
window.addEventListener('load', startMusic);
document.addEventListener('pointerdown', () => { if (audio.paused) startMusic(); }, {once:true});

musicBtn.addEventListener('click', async () => {
  try {
    if (audio.paused) { await audio.play(); musicBtn.classList.add('playing'); musicBtn.textContent = 'Ⅱ'; }
    else { audio.pause(); musicBtn.classList.remove('playing'); musicBtn.textContent = '♪'; }
  } catch(e) { console.log(e); }
});


// V7: al pulsar "Confirmar" o "Abrir invitación" también se intenta activar la música.
document.querySelectorAll('a[href="#rsvp"], button[type="submit"]').forEach(el => {
  el.addEventListener('click', () => startMusic());
});


const target = new Date('2026-10-02T16:30:00+02:00').getTime();
const countdown = document.getElementById('countdown');
function tick(){
  const diff = Math.max(target - Date.now(), 0);
  const d = Math.floor(diff/86400000);
  const h = Math.floor(diff/3600000)%24;
  const m = Math.floor(diff/60000)%60;
  const s = Math.floor(diff/1000)%60;
  countdown.innerHTML = [
    [d,'Días'],[h,'Horas'],[m,'Min'],[s,'Seg']
  ].map(([v,l])=>`<div><strong>${String(v).padStart(2,'0')}</strong><span>${l}</span></div>`).join('');
}
tick(); setInterval(tick,1000);

const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); });
},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));


// Vídeo de galería: empieza desde el principio al llegar al bloque.
const galleryVideo = document.getElementById('galleryVideo');
if (galleryVideo) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        galleryVideo.currentTime = 0;
        galleryVideo.play().catch(()=>{});
      } else {
        galleryVideo.pause();
      }
    });
  }, {threshold: 0.45});
  videoObserver.observe(galleryVideo);
}

const form = document.getElementById('rsvpForm');
const msg = document.getElementById('formMessage');
if (form && msg) {
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const raw = new FormData(form);
    const data = Object.fromEntries(raw.entries());
    data.alergias = raw.getAll('alergias').join(', ');
    if (!GOOGLE_FORM_ACTION) {
      const saved = JSON.parse(localStorage.getItem('rsvp_marcos_fernanda') || '[]');
      saved.push({...data, fecha:new Date().toISOString()});
      localStorage.setItem('rsvp_marcos_fernanda', JSON.stringify(saved));
      msg.textContent = 'Confirmación guardada en esta demo. Conecta Google Forms para recibirla en Sheets.';
      form.reset();
      return;
    }
    const fd = new FormData();
    Object.entries(GOOGLE_FIELDS).forEach(([key, entry]) => fd.append(entry, data[key] || ''));
    try {
      await fetch(GOOGLE_FORM_ACTION, {method:'POST', mode:'no-cors', body:fd});
      msg.textContent = 'Confirmación enviada. Muchas gracias.';
      form.reset();
    } catch(err) {
      msg.textContent = 'No se ha podido enviar. Inténtalo de nuevo.';
    }
  });
}


// V8: activar música al tocar botones principales de navegación/confirmación.
document.querySelectorAll('.primary, .secondary, a[href="#rsvp"], button[type="submit"]').forEach(el => {
  el.addEventListener('click', () => startMusic());
});
