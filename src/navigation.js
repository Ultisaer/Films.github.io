import { doom } from "./doom.js";

const navigation = () => {
  const hash = location.hash;

  if (hash.startsWith('#allFilms')) {
    allFilms();
  } else if (hash.startsWith('#filmDetails')) {
    // filmDetails();
  } else if (hash.startsWith('#searchFilms')) {
    searchFilms();
  } else if (hash.startsWith('#filmPreview')){
    filmPreview()
  } else {
    home();
  }
};

const allFilms = () => {
  window.scrollTo(0, 0);
  doom.home.classList.add('inactive')
  doom.filmBanner.classList.add('inactive')
  doom.navbarCategories.classList.add('inactive')
  doom.filmDetails.classList.add('inactive')
  doom.searchFilms.classList.add('inactive')
  doom.allFilms.classList.remove('inactive')
  doom.navBar.classList.remove('inactive')
}

const filmDetails = () => {
  window.scrollTo(0, 0);
  doom.home.classList.add('inactive')
  doom.filmBanner.classList.add('inactive')
  doom.navbarCategories.classList.add('inactive')
  doom.allFilms.classList.add('inactive')
  doom.searchFilms.classList.add('inactive')
  doom.filmDetails.classList.remove('inactive')
  doom.navBar.classList.add('inactive')
}

const searchFilms = () => {
  window.scrollTo(0, 0);
  doom.home.classList.add('inactive')
  doom.filmBanner.classList.add('inactive')
  doom.navbarCategories.classList.add('inactive')
  doom.allFilms.classList.add('inactive')
  doom.searchFilms.classList.remove('inactive')
  doom.filmDetails.classList.add('inactive')
  doom.navBar.classList.add('inactive')
}

const home = () => {
  window.scrollTo(0, 0);
  doom.home.classList.remove('inactive')
  doom.filmBanner.classList.remove('inactive')
  doom.navbarCategories.classList.remove('inactive')
  doom.searchFilms.classList.add('inactive')
  doom.allFilms.classList.add('inactive')
  doom.navBar.classList.remove('inactive')
  doom.filmDetails.classList.add('inactive')
}

const filmPreview = () => {
  window.scrollTo(0, 0);
  popover.showPopover();
}

export { navigation }

