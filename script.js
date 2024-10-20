
const enterBtn = document.getElementById("enter-btn");
const container = document.getElementById("container");
const welcomeContainer = document.getElementById("welcome-container");
const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const finalContainer = document.getElementById("final-container");

// Ketika tombol masuk diklik
enterBtn.addEventListener("click", function() {
    welcomeContainer.style.display = "none"; // Sembunyikan welcome container
    container.style.display = "flex"; // Tampilkan konten utama
});

// Tombol tidak yang pindah-pindah
noBtn.addEventListener("mouseover", function() {
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// Ketika tombol Iya diklik
yesBtn.addEventListener("click", function() {
    container.style.display = "none"; // Sembunyikan konten utama
    finalContainer.style.display = "flex"; // Tampilkan pesan akhir
});

// Ketika tombol Tidak diklik
noBtn.addEventListener("click", function() {
    finalContainer.style.display = "flex"; // Tampilkan pesan akhir
    finalContainer.querySelector('.response-message')
});
