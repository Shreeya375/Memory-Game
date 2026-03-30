box.onclick = function () {
    // Prevent clicking more than 2 cards or clicking the same card twice
    if (document.querySelectorAll('.boxOpen').length < 2) {
        this.classList.add('boxOpen');
    }
