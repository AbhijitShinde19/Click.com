const imgToZoom = document.getElementById("img-to-zoom");

imgToZoom.addEventListener("click", function () {
    const fullScreenImg = document.createElement("div");
    fullScreenImg.classList.add("full-screen-img");
    document.body.appendChild(fullScreenImg);

    fullScreenImg.addEventListener("click", function () {
        fullScreenImg.classList.remove("show-full-screen-img");
        setTimeout(function () {
            fullScreenImg.remove();
        }, 500);
    });

    fullScreenImg.classList.add("show-full-screen-img");
});
