function startExperience() {
    // Putar lagu segera setelah klik pertama
    const music = document.getElementById('bgMusic');
    music.play().catch(e => console.log("Audio play failed: ", e));
    
    // Pindah ke halaman kedua
    nextPage(2);
}

function nextPage(pageNumber) {
    const sections = document.querySelectorAll('section');
    sections.forEach(s => s.classList.remove('active'));
    
    document.getElementById(`page${pageNumber}`).classList.add('active');
}

// Untuk tombol "No ty" yang kabur
const noBtn = document.getElementById('noBtn');
if(noBtn) {
    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    });
}