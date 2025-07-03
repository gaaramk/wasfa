import { Ui } from "./ui.module.js";
// import { Details } from "./details.module.js";

let x;

export class Home {
  constructor() {
    this.ui = new Ui();
    // this.detailsSection = new Details()

    this.details = document.getElementById("details");
    this.homeSec = document.getElementById("home");
    this.searchSec = document.getElementById("searchSection");
    this.getData();

    document
      .querySelector(".navbar-nav .search")
      .addEventListener("click", () => {
        this.searchSec.classList.remove("d-none");
        this.homeSec.classList.add("d-none");
        this.details.classList.add("d-none");
      });

    document
      .querySelector(".navbar-nav .categ")
      .addEventListener("click", () => {
        this.homeSec.classList.remove("d-none");
        this.details.classList.add("d-none");
        this.getCategData();
      });

    document
      .querySelector(".navbar-nav .arraies")
      .addEventListener("click", () => {
        this.homeSec.classList.remove("d-none");
        this.details.classList.add("d-none");
        this.getArrayData();
      });

    document
      .querySelector(".navbar-nav .ingred")
      .addEventListener("click", () => {
        this.homeSec.classList.remove("d-none");
        this.details.classList.add("d-none");
        this.getingredData();
      });

    document.querySelector(".byName").addEventListener("input", (e) => {
      this.getSearchByName(e.data);
    });
    document.querySelector(".byChar").addEventListener("input", (e) => {
      this.getSearchByChar(e.data);
    });


    document.getElementById("close").addEventListener("click", () => {
      $('.side').toggle(1000)


    });
  }

  // ********************************************************************
  async getData() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    const data = await res.json();
    const categoryData = data.meals;
    this.ui.displayData(categoryData);

    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        this.details.classList.remove("d-none");
        this.homeSec.classList.add("d-none");
        const cat = item.getAttribute("data-strCategory");
        console.log(cat);
        this.getSpiceDetailes(cat);
      });
    });
  }




  async getCategData() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    const data = await res.json();
    const categoryData = data.categories;
    this.ui.displayDataCategory(categoryData);

    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        const cat = item.getAttribute("data-strCategory");
        this.getCategoryDetailsData(cat);
      });
    });
  }

  async getArrayData() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    const data = await res.json();
    const categoryData = data.meals;
    this.ui.displayDataArea(categoryData);

    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        const cat = item.getAttribute("data-strCategory");
        this.getArrayDetailsData(cat);
      });
    });
  }

  async getingredData() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    const data = await res.json();
    const categoryData = data.meals;
    this.ui.displayDataIngred(categoryData);

    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        const cat = item.getAttribute("data-strCategory");
        this.getIngredDetailsData(cat);
      });
    });
  }

  async getCategoryDetailsData(strCategory) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
    );
    const data = await res.json();
    const categoryData = data.meals;
    this.ui.filterCategory(categoryData);

    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        const cat = item.getAttribute("data-idMeal");
        this.homeSec.classList.add("d-none");
        this.searchSec.classList.add("d-none");
        this.details.classList.remove("d-none");
        this.getSpiceDetailes(cat);
      });
    });
  }

  async getArrayDetailsData(arr) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${arr}`
    );
    const data = await res.json();
    const categoryData = data.meals;
    this.ui.filterCategory(categoryData);

    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        const cat = item.getAttribute("data-idMeal");
        this.homeSec.classList.add("d-none");
        this.searchSec.classList.add("d-none");
        this.details.classList.remove("d-none");
        this.getSpiceDetailes(cat);
      });
    });
  }

  async getIngredDetailsData(arr) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${arr}`
    );
    const data = await res.json();
    const categoryData = data.meals;
    this.ui.filterCategory(categoryData);

    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        const cat = item.getAttribute("data-idMeal");
        this.homeSec.classList.add("d-none");
        this.searchSec.classList.add("d-none");
        this.details.classList.remove("d-none");
        this.getSpiceDetailes(cat);
      });
    });
  }

  async getSpiceDetailes(idMeal) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const data = await res.json();
    const categoryData = data.meals;
    this.ui.displayDetails(categoryData);
  }

  async getSearchByName(name) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await res.json();
    const categoryData = data.meals;
    this.ui.displaySearchData(categoryData);

    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        const cat = item.getAttribute("data-idMeal");
        this.homeSec.classList.add("d-none");
        this.details.classList.remove("d-none");
        this.searchSec.classList.add("d-none");
        this.getSpiceDetailes(cat);
      });
    });
  }

  async getSearchByChar(name) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`
    );
    const data = await res.json();
    const categoryData = data.meals;
    this.ui.displaySearchData(categoryData);

    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        const cat = item.getAttribute("data-idMeal");
        this.homeSec.classList.add("d-none");
        this.searchSec.classList.add("d-none");
        this.details.classList.remove("d-none");
        this.getSpiceDetailes(cat);
      });
    });
  }

}
