(function () {
    const images = document.getElementsByClassName("imageBlock"); // the whole block
    const infoImage = document.getElementsByClassName("infoImage"); // the info box
    const hideAll = document.getElementById("hideAll");

    window.onload = function () {
        hideAll.style.display = "none";
    };

    const check = () => {
        for (var i = 0; i < images.length; i++) {
            console.log(images[i]);
            images[i].addEventListener("mouseenter", () => {
                for (var j = 0; j < infoImage.length; j++) {
                    console.log(infoImage[j]);
                    infoImage[j].style.width = 50 + "%";
                    infoImage[j].style.height = 30 + "%";
                }
            });
            images[i].addEventListener("mouseleave", () => {
                for (var j = 0; j < infoImage.length; j++) {
                    console.log(infoImage[j]);
                    infoImage[j].style.width = 0 + "%";
                    infoImage[j].style.height = 0 + "%";
                }
            });
        }
    };
    check();
})();
