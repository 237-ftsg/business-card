const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-btn");

// Open lightbox
galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    // Remove "-thumbnail" to get full image
    const thumbnailImageSrc = item.getAttribute("src")
    console.log(thumbnailImageSrc);
    const fullImage = thumbnailImageSrc.replace("-thumbnail", "");
    
    lightboxImage.setAttribute("src", fullImage)
    lightbox.style.display = "flex";

  });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
})

lightbox.addEventListener("click", (e) => {
    if (e.target !==lightboxImage) {
        lightbox.style.display = "none"
    }
})
