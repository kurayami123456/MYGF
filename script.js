function revealSurprise() {
    // Tampilkan pesan tersembunyi
    document.getElementById('hiddenMessage').style.display = 'block';

    // Buat animasi love-love
    createHearts();
}

function createHearts() {
    const loveContainer = document.getElementById('loveContainer');

    // Buat 10 hati yang muncul secara acak di seluruh layar
    for (let i = 0; i < 20; i++) { // Tambah jumlah love jika ingin lebih banyak
        const love = document.createElement('div');
        love.classList.add('love');
        
        // Tetapkan posisi acak di layar
        love.style.left = Math.random() * 100 + "vw"; // Posisi horizontal acak
        love.style.top = Math.random() * 100 + "vh";  // Posisi vertikal acak
        
        // Durasi animasi acak
        love.style.animationDuration = Math.random() * 2 + 3 + "s"; 

        loveContainer.appendChild(love);

        // Hapus elemen love setelah animasinya selesai
        setTimeout(() => {
            love.remove();
        }, 5000);
    }
}
