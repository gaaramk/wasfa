export class Ui {
  constructor() {}

  displayData(arr) {
    let arrBox = "";
    for (let i = 0; i < arr.length; i++) {
      arrBox += `
        <div class="col-md-3 item" data-strCategory='${arr[i].idMeal}'>
            <figure class="position-relative">
              <img src="${arr[i].strMealThumb}" alt="" class="img-fluid" />
              <div
                class="layer position-absolute top-0 bottom-0 end-0 start-0 text-black text-center d-flex flex-column justify-content-center"
              >
                <h2>${arr[i].strMeal}</h2>
              </div>
            </figure>
          </div>
           `;
    }
    document.querySelector("#boxs").innerHTML = arrBox;
  }

  displayDataArea(arr) {
    let arrBox = "";
    for (let i = 0; i < arr.length; i++) {
      arrBox += `
        <div class="col-md-3 item" data-strCategory='${arr[i].strArea}'>
            <figure class="position-relative">
              <i class="fa-solid fa-house-laptop fs-1"></i>
                <h2>${arr[i].strArea}</h2>
            </figure>
          </div>
           `;
    }
    document.querySelector("#boxs").innerHTML = arrBox;
  }

  displayDataIngred(arr) {
    let arrBox = "";
    for (let i = 0; i < 20; i++) {
      arrBox += `
        <div class="col-md-4 item" data-strCategory='${arr[i].strIngredient}'>
                <div class="rounded-2 text-center cursor-pointer ">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${arr[i].strIngredient}</h3>
                        <p class="text">${arr[i].strDescription}</p>
                </div>
        </div>
           `
    }
    document.querySelector("#boxs").innerHTML = arrBox;
  }

  displayDataCategory(arr) {
    let arrBox = "";
    for (let i = 0; i < arr.length; i++) {
      arrBox += `
        <div class="col-md-4 item" data-strCategory='${arr[i].strCategory}'>
            <figure class="position-relative" >
              <img src="${arr[i].strCategoryThumb}" alt="" class="img-fluid" />
              <div
                class="layer position-absolute top-0 bottom-0 end-0 start-0 text-black text-center d-flex flex-column justify-content-center"
              >
                <h2>${arr[i].strCategory}</h2>
                <p>
                    ${arr[i].strCategoryDescription
                      .split(" ")
                      .slice(0, 20)
                      .join(" ")}
                </p>
              </div>
            </figure>
          </div>
           `;
    }

    document.querySelector("#boxs").innerHTML = arrBox;
  }

  filterCategory(arr) {
    let arrBox = "";
    for (let i = 0; i < arr.length; i++) {
      arrBox += `
        <div class="col-md-4 item" data-idMeal='${arr[i].idMeal}' >
            <figure class="position-relative">
              <img src="${arr[i].strMealThumb}" alt="" class="img-fluid" />
              <div
                class="layer position-absolute top-0 bottom-0 end-0 start-0 text-black text-center d-flex flex-column justify-content-center"
              >
                <h2>${arr[i].strMeal}</h2>
              </div>
            </figure>
          </div>
           `;
    }
    document.querySelector("#boxs").innerHTML = arrBox;
  }











      displayDetails(data){
          const detailsBox = `
              <div class="col-md-4">
                <div class="inner container">
                  <figure>
                    <img src="${data[0].strMealThumb}" alt="" class="img-fluid"/>
                  </figure>
                  <figcaption>
                    <h2>${data[0].strMeal}</h2>
                  </figcaption>
                </div>
              </div>

              <div class="col-md-8">
                <div class="inner">
                  <h2>Instructions</h2>

                  <p >
                  ${data[0].strInstructions}
                  </p>

                  <h3>Area : ${data[0].strArea}</h3>
                  <h3>Category : ${data[0].strCategory}</h3>
                  <h3>
                    Recipes : <ul class="d-flex flex-wrap">
                      <li class="border bg-info rounded-pill mx-2 px-5 py-2 fs-6 fw-light">${data[0].strIngredient1}</li>
                      <li class="border bg-info rounded-pill mx-2 px-5 py-2 fs-6 fw-light">${data[0].strIngredient2}</li>
                      <li class="border bg-info rounded-pill mx-2 px-5 py-2 fs-6 fw-light">${data[0].strIngredient3}</li>
                      <li class="border bg-info rounded-pill mx-2 px-5 py-2 fs-6 fw-light">${data[0].strIngredient4}</li>
                      <li class="border bg-info rounded-pill mx-2 px-5 py-2 fs-6 fw-light">${data[0].strIngredient5}</li>
                      <li class="border bg-info rounded-pill mx-2 px-5 py-2 fs-6 fw-light">${data[0].strIngredient6}</li>
                      <li class="border bg-info rounded-pill mx-2 px-5 py-2 fs-6 fw-light">${data[0].strIngredient7}</li>
                      <li class="border bg-info rounded-pill mx-2 px-5 py-2 fs-6 fw-light">${data[0].strIngredient8}</li>
                    </ul> 

                  </h3>

                  <h3>
                    Tags : <ul class="d-flex flex-wrap">
                      <li class="border bg-danger rounded-pill mx-2 px-5 py-2 fs-6 fw-light">
                          <a href="${data[0].strYoutube}" target="_blank">Youtube</a>
                      </li>
                      <li class="border bg-success rounded-pill mx-2 px-5 py-2 fs-6 fw-light">
                          <a href="#${data[0].strSource}" target="_blank">Source</a>
                      </li>
                    </ul> 

                  </h3>
                </div>
              </div>
               `;
        document.getElementById("detailsInfo").innerHTML = detailsBox;
      }




      displaySearchData(arr){
        let arrBox = "";
        for (let i = 0; i < arr.length; i++) {
          arrBox += `
            <div class="col-md-4 item" data-idMeal='${arr[i].idMeal}' >
                <figure class="position-relative">
                  <img src="${arr[i].strMealThumb}" alt="" class="img-fluid" />
                  <div
                    class="layer position-absolute top-0 bottom-0 end-0 start-0 text-black text-center d-flex flex-column justify-content-center"
                  >
                    <h2>${arr[i].strMeal}</h2>
                  </div>
                </figure>
              </div>
               `;
        }
        document.querySelector("#searchInfo").innerHTML = arrBox;
      }






}


