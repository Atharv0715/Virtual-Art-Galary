// script.js
let artworks = [
  { img: "https://tse2.mm.bing.net/th/id/OIP.UMuJZIl262uGieYbqMLZUwHaF1?cb=thvnextc1&rs=1&pid=ImgDetMain&o=7&rm=3", title: "Starry Night", desc: "Vincent van Gogh, 1889" },
  { img: "https://tse4.mm.bing.net/th/id/OIP.ePWCYbNQ7snDEOqisCTY1gHaLH?cb=thfvnext&w=1000&h=1500&rs=1&pid=ImgDetMain&o=7&rm=3", title: "Edvard munch", desc: "The scream" },
  { img: "https://media.sketchfab.com/models/ab3e99facbdb4d9d8661d3f07815638e/thumbnails/2d916b3cd3c4462dafd72e8b144b6553/3b1ee1f98ef246f3855680594767ffbe.jpeg", title: "The Persistence of Memory", desc: "Salvador Dalí, 1931" }
];

let index = 0;

function displayArtwork() {
  document.getElementById("artImage").src = artworks[index].img;
  document.getElementById("artTitle").innerText = artworks[index].title;
  document.getElementById("artDesc").innerText = artworks[index].desc;
}

function nextArtwork() {
  index = (index + 1) % artworks.length;
  displayArtwork();
}

function prevArtwork() {
  index = (index - 1 + artworks.length) % artworks.length;
  displayArtwork();
}

function zoomArtwork() {
  let artImg = document.getElementById("artImage");
  artImg.style.transform = artImg.style.transform === "scale(1.5)" ? "scale(1)" : "scale(1.5)";
}

// Load first artwork
window.onload = displayArtwork;
