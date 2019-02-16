window.onload = function () {

    // OPEN SIZE GUIDE IN NEW WINDOW    
    var openSizeGuide = document.getElementById("size-guide");


    function openGuide() {
        window.open("index.html", "newwindow", "width=800, height=400");
    }

    openSizeGuide.addEventListener("click", function () {
        openGuide();
    });


    // VARIABLES
    var closePopup = document.getElementById("close");
    var popup = document.getElementById("popup");
    var wrapper = document.getElementById("wrapper");
    var care = document.getElementById("care");

    var closePupupDelivery = document.getElementById("close-delivery");
    var popupDelivery = document.getElementById("popup-delivery");
    var delivery = document.getElementById("delivery");


    //CARE
    function open() {
        popup.classList.remove("hide");
        wrapper.classList.add("opacity");
        wrapper.addEventListener("click", function () {
            close();
        });
    }

    function close() {
        wrapper.removeEventListener("click", function () {
            close();
        });
        popup.classList.add("hide");
        wrapper.classList.remove("opacity");
    }

    care.addEventListener("click", function (e) {
        e.stopPropagation();
        open();
    });

    closePopup.addEventListener("click", function () {
        close();
    });

    document.onkeydown = function (e) {
        e = e || window.event;
        if (e.keyCode == 27) {
            close();
        }
    };

    // DELIVERY
    function openDelivery() {
        popupDelivery.classList.remove("hide");
        wrapper.classList.add("opacity");
        wrapper.addEventListener("click", function () {
            closeDelivery();
        });
    }

    function closeDelivery() {
        wrapper.removeEventListener("click", function () {
            closeDelivery();
        });
        popupDelivery.classList.add("hide");
        wrapper.classList.remove("opacity");
    }

 


    document.onkeydown = function (e) {
        e = e || window.event;
        if (e.keyCode == 27) {
            closeDelivery();
        }
    };

    // DROPDOWN CHOOSE SIZE
    var chooseSize = document.getElementById("dropbtn");

    chooseSize.addEventListener("click", function () {
        document.getElementById("myDropdown").classList.toggle("show");

        if (chooseSize.innerHTML == "Choose your size") {
           
            // SIZE GUIDE IN PRODUCT LIST
            var openSizeGuideProduct = document.getElementById("size-guide-product");
            openSizeGuideProduct.addEventListener("click", function () {
                openGuide();
            });


        } else {
            chooseSize.innerHTML = "Choose your size";
        }
    });


    // SOCIAL ICONS - SHOW AND HIDE

    var share = document.querySelector(".share");
    var socialIcons = document.querySelector(".social-icons");

    share.addEventListener("click", function () {
        socialIcons.classList.toggle("show-all");
    });



    // NEWSLETTER INPUT - HIDE AND SHOW VALUE

    var input = document.getElementById("input-newsletter");

    input.addEventListener("click", function () {
        if (this.value == "Enter your email here") {
            this.value = "";
        }
    });

    input.addEventListener("blur", function () {
        if (this.value == "") {
            this.value = "Enter your email here";
        }
    });


    // MENU ANIMATION

    var hamburger = document.querySelector(".menu");
    var logo = document.querySelector(".logo-section");
    var sideNavigation = document.getElementsByTagName("aside");

    hamburger.addEventListener("mouseover", function () {
        logo.classList.add("moving-logo");
        hamburger.classList.add("opacity-hide");
        sideNavigation[0].classList.add("show-all");

    });

    sideNavigation[0].addEventListener("mouseleave", function () {
        logo.classList.remove("moving-logo");
        hamburger.classList.remove("opacity-hide");
        sideNavigation[0].classList.remove("show-all");
    });



    // LIGHTBOX

    var images = document.getElementsByClassName("img-lightbox");
    var productImages = document.getElementsByClassName("product-pictures");
    var body = document.body;

    var rightArrow = document.querySelector(".arrow-right");
    var leftArrow = document.querySelector(".arrow-left");

    function toTheLeft() {
        // Každá šípka bude potrebovať event handler na click
        // Po kliknutí musí
        //    ✅ Zistiť, ktorý obrázok je momentálne otvorený v lightboxe. To našťastie vieme, pretože má class "lightbox"
        var openedImage = document.querySelector(".lightbox");
        //    ✅ Zistiť poradové číslo tohto obrázku
        //    ✅ Vybrať číslo o jedno vyššie, resp. nižšie
        var openedImageAttr = parseInt(openedImage.dataset.number) - 1;
        if (openedImageAttr < 0) {
            openedImageAttr = images.length - 1;
        }
        //    ✅ Pomocou tohto čísla cez selektor vybrať správny obrázok, ktorý má nasledovať po kliknutí
        var previousImage = document.querySelector('img[data-number="' + openedImageAttr + '"]');

        //    ✅ Otvoriť nový obrázok v lightboxe (pridať classu)
        previousImage.classList.add("lightbox");
        //    ✅ Zatvoriť súčasný lightbox (odobrať class lightbox)
        openedImage.classList.remove("lightbox");
    }

    function toTheRight() {
        var openedImage = document.querySelector(".lightbox");
        var openedImageAttr = parseInt(openedImage.dataset.number) + 1;
        if (openedImageAttr >= images.length) {
            openedImageAttr = 0;
        }
        var nextImage = document.querySelector('img[data-number="' + openedImageAttr + '"]');
        nextImage.classList.add("lightbox");
        openedImage.classList.remove("lightbox");
    }

    leftArrow.addEventListener("click", toTheLeft);
    rightArrow.addEventListener("click", toTheRight);



    for (var i = 0; i < images.length; i++) {
        // SET ATTRIBUTE DATA-NUMBER TO IMAGES WITH CLASS IMG-LIGHTBOX
        images[i].setAttribute('data-number', i);
        // CALL SCROLLING
        this.addEventListener("mousemove", movingMouse);

        images[i].addEventListener("click", function () {
            this.classList.toggle("lightbox");

            if (this.classList.contains("lightbox")) {
                body.classList.add("hidden");

                // SHOW ARROWS
                rightArrow.classList.remove("arrow-visibility");
                leftArrow.classList.remove("arrow-visibility");

                var productImages = document.querySelectorAll(".img-lightbox");
            } else {
                body.classList.remove("hidden");
                // HIDE ARROWS
                rightArrow.classList.add("arrow-visibility");
                leftArrow.classList.add("arrow-visibility");
            }
        });
    }

    // SCROLLING
    function movingMouse(e) {
        var openedImage = document.querySelector(".lightbox");
        // MOVE PICTURE - THE HIGHER THE CURSOR POSITION, THE LOWER THE IMAGE TOP POSITION
        openedImage.style.top = (e.clientY * -1.4) + "px";
    }


    // END OF ONLOAD
}
