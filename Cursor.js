const cursors = [];
const body = document.body;

// Membuat elemen kursor 3
function initializeCursors() {
    const cursorSmall = document.createElement('div');
    const cursorMedium = document.createElement('div');
    const cursorLarge = document.createElement('div');

    cursorSmall.classList.add('cursor', 'cursor-small');
    cursorMedium.classList.add('cursor', 'cursor-medium');
    cursorLarge.classList.add('cursor', 'cursor-large');

    body.appendChild(cursorSmall);
    body.appendChild(cursorMedium);
    body.appendChild(cursorLarge);

    cursors.push(cursorSmall, cursorMedium);
}

// Fungsi buat bikin partikel
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    const deltaX = (Math.random() - 0.5) * 100;
    const deltaY = (Math.random() - 0.5) * 100;
    particle.style.setProperty('--x', `${deltaX}px`);
    particle.style.setProperty('--y', `${deltaY}px`);

    // Generate warna acak
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    particle.style.backgroundColor = KeyframeEffect;

    body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 1000);
}

// Event kursor
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursors.forEach((cursor) => {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    });

    createParticle(x, y);
});

// Inisialisasi kursor
initializeCursors();
