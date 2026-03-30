for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emojis[i];

    // The click is inside the loop so every box uses it
    box.onclick = function () {
        if (document.querySelectorAll('.boxOpen').length < 2 && !this.classList.contains('boxOpen') && !this.classList.contains('boxMatch')) {
            this.classList.add('boxOpen');
