document.addEventListener("DOMContentLoaded", function() {
    var galleryContainers = document.querySelectorAll('.gallery-wrap');

    galleryContainers.forEach(function(container) {
        var scrollContainer = container.querySelector(".gallery");
        var backBtn = container.querySelector(".backBtn");
        var nextBtn = container.querySelector(".nextBtn");

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        });

        nextBtn.addEventListener("click", () => {
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft += 900;
        });

        backBtn.addEventListener("click", () => {
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft -= 900;
        });
    });

    var propertyElements = document.querySelectorAll('.project');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function activarAparecer() {
        propertyElements.forEach(function(element) {
            if (isInViewport(element)) {
                element.classList.add('aparecer1', '2s', 'ease', '1', 'both');
            }
        });
    }

    activarAparecer();
    window.addEventListener('scroll', activarAparecer);
});
