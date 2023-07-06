const attackButton = document.getElementById('attackButton');
const attackBar = document.getElementById('attackBar');
const killCountElement = document.getElementById('killCount');

let attackProgress = 0;
let killCount = 0;

attackButton.addEventListener('click', () => {
    if (attackProgress !== 0 )
    {
        return; // Prevent multiple attacks before completion
    }

    attackProgress = 0;
    attackBar.style.width = '0%';

    const interval = setInterval(() =>{
        if (attackProgress >= 100){
            clearInterval(interval);
            killCount++;
            killCountElement.textContent = 'Kill Count: ${killCount}';
            return;
        }

        progress++;
        loadingBar.style.width = '${progress}%';
    }, 100);
});
