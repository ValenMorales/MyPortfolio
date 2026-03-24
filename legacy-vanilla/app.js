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
