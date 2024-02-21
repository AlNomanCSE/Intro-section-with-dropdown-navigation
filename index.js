const featuresList = document.querySelector(".featuresList");
const list1 = document.querySelector(".list1");
const companyList = document.querySelector(".companyList");
const list2 = document.querySelector(".list2");
const FeaturesList = document.querySelector(".FeaturesList");
const CompanyList = document.querySelector(".CompanyList");
const itemList1 = document.querySelector(".itemList1");
const itemList2 = document.querySelector(".itemList2");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navBarMobile = document.querySelector(".navBarMobile");

let menuOpen = false;

hamburgerMenu.addEventListener("click", () => {
  if (!menuOpen) {
    hamburgerMenu.querySelector("img").src = "./images/icon-close-menu.svg";
    navBarMobile.classList.add("show");
    menuOpen = true;
  } else {
    hamburgerMenu.querySelector("img").src = "./images/icon-menu.svg";
    navBarMobile.classList.remove("show");
    menuOpen = false;
  }
});

featuresList.addEventListener("click", () => {
  list1.classList.toggle("visible");
  list1.classList.contains("visible")
    ? (featuresList.querySelector("img").src = "./images/icon-arrow-up.svg")
    : (featuresList.querySelector("img").src = "./images/icon-arrow-down.svg");
});

companyList.addEventListener("click", () => {
  list2.classList.toggle("visible");
  list2.classList.contains("visible")
    ? (companyList.querySelector("img").src = "./images/icon-arrow-up.svg")
    : (companyList.querySelector("img").src = "./images/icon-arrow-down.svg");
});

FeaturesList.addEventListener("click", () => {
  itemList1.classList.toggle("display");
  itemList1.classList.contains("display")
    ? (FeaturesList.querySelector("img").src = "./images/icon-arrow-up.svg")
    : (FeaturesList.querySelector("img").src = "./images/icon-arrow-down.svg");
});
CompanyList.addEventListener("click", () => {
  itemList2.classList.toggle("display");
  itemList2.classList.contains("display")
    ? (CompanyList.querySelector("img").src = "./images/icon-arrow-up.svg")
    : (CompanyList.querySelector("img").src = "./images/icon-arrow-down.svg");
});
