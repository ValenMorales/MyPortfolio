/* ── Scroll reveal ───────────────────────────────────────────────
   Añade la clase .visible cuando un elemento entra al viewport.
   Los elementos arrancan con opacity:0 + translateY(40px) via CSS
   y transicionan suavemente al hacerse visibles.
──────────────────────────────────────────────────────────────── */
(function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.section, .my-projects, .contact-section, ' +
    '.timeline-item, .education-item, .project-card, ' +
    '.about-card, .skills-group, .contact-info, .contact-form-wrap'
  );

  if (!targets.length || !('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  targets.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    observer.observe(el);
  });
})();

const items = document.querySelectorAll('.slider .list .item');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const thumbnails = document.querySelectorAll('.thumbnail .item');

if (items.length && next && prev && thumbnails.length) {
    let countItem = items.length;
    let itemActive = 0;
    let refreshInterval;

    next.onclick = function () {
        itemActive = itemActive + 1;
        if (itemActive >= countItem) {
            itemActive = 0;
        }
        showSlider();
    };

    prev.onclick = function () {
        itemActive = itemActive - 1;
        if (itemActive < 0) {
            itemActive = countItem - 1;
        }
        showSlider();
    };

    refreshInterval = setInterval(() => {
        next.click();
    }, 10000);

    function showSlider() {
        const itemActiveOld = document.querySelector('.slider .list .item.active');
        const thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
        if (!itemActiveOld || !thumbnailActiveOld) {
            return;
        }
        itemActiveOld.classList.remove('active');
        thumbnailActiveOld.classList.remove('active');

        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');

        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
            next.click();
        }, 10000);
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            itemActive = index;
            showSlider();
        });
    });
}

function abrirPDF() {
    window.location.href = 'ruta/del/archivo.pdf';
}

function redirigir() {
    window.location.href = "html/projects.html";
  }

  
  function rest_food(){
    window.location.href = "https://github.com/ValenMorales/RestFood";
  }
  function sharability(){
    window.location.href = "https://github.com/ValenMorales/practice";
  }

  function codebeaters()
    {
        window.location.href = "https://github.com/JustTwoDevs";
    }

    function chatapp()
    {	
        window.location.href = "https://github.com/ValenMorales/chat-app";
    }

    function datastructures(){
        window.location.href = "https://github.com/ValenMorales/final-proyect";
    }
