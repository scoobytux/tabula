import { getElem, renderHTML } from "./helpers/helper.js";
import Service from "./services/service.js";

new WOW().init();
const service = new Service();

/*
 * Header handler
 *
 ********************************************************/
const header = document.querySelector("header");

window.onscroll = function () {
  if (window.innerWidth >= 1200) {
    if (window.pageYOffset > 200) {
      header.style.backgroundColor = "#fff";
      header.classList.add("sticky");
      header.style.boxShadow = "0 1rem 2rem rgba(0, 0, 0, 0.1";
      getElem("header-phone-contact").style.margin = "1rem 0";
      getElem("header-logo").style.display = "none";
      return;
    }

    header.style.backgroundColor = "transparent";
    header.classList.remove("sticky");
    header.style.boxShadow = "none";
    getElem("header-phone-contact").style.margin = "0";
    getElem("header-logo").style.display = "inline";
    return;
  }

  header.style.backgroundColor = "#fff";
  if (window.pageYOffset > 200) {
    header.classList.add("sticky");
    header.style.boxShadow = "0 1rem 2rem rgba(0, 0, 0, 0.1";
    return;
  }

  header.classList.remove("sticky");
  header.style.boxShadow = "none";
  return;
};

window.onresize = function () {
  if (window.pageYOffset === 0) {
    if (window.innerWidth >= 1200) {
      header.style.backgroundColor = "transparent";
      getElem("header-logo").style.display = "inline";
      return;
    }

    header.style.backgroundColor = "#fff";
    getElem("header-logo").style.display = "none";
  }
};

/*
 * Display experts section's content
 *
 ********************************************************/
const displayExperts = () =>
  service
    .fetchData()
    .then(response => {
      const users = response.data;
      renderHTML(users);
    })
    .catch(err => console.log(err));
displayExperts();
