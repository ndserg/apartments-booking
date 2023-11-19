const VEWPORTS = {
  desktop: 1280,
};

let body = null;
let menuButton = null;
let menu = null;

const mediaQueryList = window.matchMedia(`(min-width: ${VEWPORTS.desktop}px)`);
const bodyLockedClass = 'locked';
const burgerButtonActiveClass = 'burger-button--active';
const menuOpenClass = 'header__nav--active';
const menuClosedClass = 'header__nav--closed';

let isSettedListener = false;

const removeActiveClasses = () => {
  menuButton.ariaExpanded = 'false';
  menuButton.classList.remove(burgerButtonActiveClass);
  menu.classList.remove(menuOpenClass);
  menu.classList.add(menuClosedClass);
  body.classList.remove(bodyLockedClass);
};

const setActiveClasses = () => {
  menuButton.ariaExpanded = 'true';
  menuButton.classList.add(burgerButtonActiveClass);
  menu.classList.add(menuOpenClass);
  menu.classList.remove(menuClosedClass);
  body.classList.add(bodyLockedClass);
};

const mouseUpHandler = (evt) => {
  if (evt.target.closest('a') || evt.target.closest('button')) {
    evt.preventDefault();

    removeActiveClasses();
  }
};

const menuButtonClickHandler = (evt) => {
  evt.preventDefault();
  menuButton.classList.toggle(burgerButtonActiveClass);
  body.classList.toggle(bodyLockedClass);

  if (menu.classList.contains(menuOpenClass)) {
    removeActiveClasses();
  } else {
    setActiveClasses();
  }
};

const removeMainNavListener = () => {
  menu.removeEventListener('mouseup', mouseUpHandler);
};

const addMainNavListener = () => {
  menu.addEventListener('mouseup', mouseUpHandler);
};

const addmenuButtonListener = () => {
  if (!isSettedListener) {
    menuButton.addEventListener('click', menuButtonClickHandler);
    addMainNavListener();
    isSettedListener = true;
  }
};

const removemenuButtonListener = () => {
  if (isSettedListener) {
    menuButton.removeEventListener('click', menuButtonClickHandler);
    removeMainNavListener();

    removeActiveClasses();
    isSettedListener = false;
  }
};

const screenSizeChangeHandler = (mql) => {
  if (mql.matches) {
    removemenuButtonListener();
  } else {
    addmenuButtonListener();
  }
};

const initMenuPopup = () => {
  body = document.querySelector('body');
  menuButton = body.querySelector('.burger-button');
  menu = body.querySelector('.header__nav');

  addmenuButtonListener();

  screenSizeChangeHandler(mediaQueryList);

  mediaQueryList.addEventListener('change', screenSizeChangeHandler);
};

export default initMenuPopup;
