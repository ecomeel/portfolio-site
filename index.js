const CLASSNAME_BLOCK_VISIBILITY = "active";
const CLASSNAME_CHANGE_SCROLL = "deactive-scroll";

const openBurgerBtnNode = document.getElementById("openBurgerBtn");
const closeBurgerBtnNode = document.getElementById("closeBurgerBtn");
const burgerPopupNode = document.getElementById("burgerPopup");

function changeBurgerVision() {
    burgerPopupNode.classList.toggle(CLASSNAME_BLOCK_VISIBILITY);
    document.body.classList.toggle(CLASSNAME_CHANGE_SCROLL);
}

function handleSelectedLinkClick(event) {
    const link = event.target;
    if (link.tagName == 'A') {
        changeBurgerVision()
    }
}

openBurgerBtnNode.addEventListener("click", () => changeBurgerVision());
closeBurgerBtnNode.addEventListener("click", () => changeBurgerVision());

burgerPopupNode.addEventListener('click', handleSelectedLinkClick);