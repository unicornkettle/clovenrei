const images = [
  "images/art1.png",
  "images/art2.png",
  "images/art3.png"
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;

  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
  });

  gallery.appendChild(img);
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
