for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emojis[i];

    // The click is inside the loop so every box uses it
    box.onclick = function () {
        if (document.querySelectorAll('.boxOpen').length < 2 && !this.classList.contains('boxOpen') && !this.classList.contains('boxMatch')) {
            this.classList.add('boxOpen');
                
              if (document.querySelectorAll('.boxOpen').length === 2) {
                setTimeout(function () {
                    let openCards = document.querySelectorAll('.boxOpen');
                    if (openCards[0].innerHTML === openCards[1].innerHTML) {
                        openCards[0].classList.add('boxMatch');
                        openCards[1].classList.add('boxMatch');
                        openCards[0].classList.remove('boxOpen');
                        openCards[1].classList.remove('boxOpen');
                     if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                            alert("Win!");
                            }
                        } else {
                            openCards[0].classList.remove('boxOpen');
                            openCards[1].classList.remove('boxOpen');
                        }
                    }, 500);
   }
        }
    };
    gameContainer.appendChild(box);
}
