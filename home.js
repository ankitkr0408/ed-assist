document.addEventListener('DOMContentLoaded', function() {
    const swipeArea = document.querySelector('.main-carousel');
    const carousel = swipeArea.querySelector('.carousel');
    let startX, startY;

    swipeArea.addEventListener('mousedown', startDrag);
    swipeArea.addEventListener('mouseup', endDrag);
    swipeArea.addEventListener('touchstart', startDrag);
    swipeArea.addEventListener('touchend', endDrag);

    function startDrag(e) {
        if (e.type === 'touchstart') {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        } else {
            startX = e.clientX;
            startY = e.clientY;
        }
    }

    function endDrag(e) {
        let endX, endY;

        if (e.type === 'touchend') {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
        } else {
            endX = e.clientX;
            endY = e.clientY;
        }

        let diffX = startX - endX;
        let diffY = startY - endY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) {
                carousel.scrollLeft += 300;
            } else {
                carousel.scrollLeft -= 300;
            }
        }
    }
});
