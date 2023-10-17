document.addEventListener("DOMContentLoaded", function () {
    const headerMobileButton = document.querySelector(".header__mobile-button");
    const mobileMenu = document.querySelector(".header__list-menu.container")
    const iconBurger = document.querySelector(".header__mobile-button-icon.burger");
    const iconClose = document.querySelector(".header__mobile-button-icon.close");
    const body = document.body;

    headerMobileButton.addEventListener("click", function () {
        if (iconClose.classList.contains("invisible")) { // Бургер показан
            mobileMenu.classList.remove("invisible");
            iconBurger.classList.add("invisible");
            iconClose.classList.remove("invisible");
            body.style.overflowY = "hidden";                 
        } else { // Бургер скрыт
            iconBurger.classList.remove("invisible");
            iconClose.classList.add("invisible");
            mobileMenu.classList.add("invisible");
            body.style.overflowY = "auto";
        }
    })
});