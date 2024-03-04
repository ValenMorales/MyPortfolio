let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 10000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 10000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

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
