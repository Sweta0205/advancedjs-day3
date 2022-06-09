window.onload = async function getResponse() {
    const response = await fetch('https://striveschool-api.herokuapp.com/books',
        {
            method: 'GET',

        }
    )
    const APIresult = await response.json()

    const products = APIresult
    let row = document.querySelector(".row")
    for (let i = 0; i < products.length; i++) {
        const singleProduct = products[i]

        row.innerHTML += `
              <div class='col'> 
                  <div class="card" style="width: 18rem;">
                      <img src="${singleProduct.img}" class="card-img-top" alt="image not found}">
                      <div class="card-body">
                      <p class="card-text"> ${singleProduct.asin} </p>

                    <h5 class="card-title">${singleProduct.title}</h5>
                          <p class="card-text"> ${singleProduct.price} </p>
                          <p class="card-text"> ${singleProduct.category} </p>
                          <button class="skip" type="button" id="skip">skip</button>
                          <button class="add" type="button" id="add">add to cart</button>


                      </div>
                  </div>
              </div>
              `
    }
}



async function getResponse1(query) {
    try {
        const response = await fetch('https://striveschool-api.herokuapp.com/books',
            {
                method: 'GET',

            }
        )
        const APIresult = await response.json()
        //finish fetch using async wait
        console.log(query)
        console.log(APIresult.length)

        const products = APIresult.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));

        console.log(products.length)
        let row = document.querySelector(".row")
        row.innerHTML = ""

        for (let i = 0; i < products.length; i++) {
            const singleProduct = products[i]
            row.innerHTML += `

              <div class='col'> 
                  <div class="card" style="width: 18rem;">
                      <img id="img"src="${singleProduct.img}" class="card-img-top" alt="image not found}">
                      <div class="card-body">
                      <p class="card-text"> ${singleProduct.asin} </p>

                    <h5 class="card-title">${singleProduct.title}</h5>
                          <p class="card-text"> ${singleProduct.price} </p>
                          <p class="card-text"> ${singleProduct.category} </p>
                          <button class="skip" type="button" onclick="Delete(event)" id="skip">skip</button>
                          <button class="add" type="button" onclick="addClickFunction(event)" id="add">add to cart</button>


                      </div>
                  </div>
              </div>
              `
        }
    }
    catch (error) {
        console.error(error);
    }
}
const addClickFunction = (event) => {
    console.log("print" + event)
    let clickedBookTitle = event.target.closest(".card").querySelector("h5").innerHTML
    let clickedBookImg = event.target.closest(".card").querySelector("img").src

    console.log(clickedBookTitle)
    console.log(clickedBookImg)

    const card1 = event.target.parentElement
    card1.classList.toggle("clicked-card")

    let row = document.querySelector(".cart")

    row.innerHTML += `

              <div class='col'> 
                  <div class="card" style="width: 18rem;">
                      <img id="img"src="${clickedBookImg}" class="card-img-top" alt="image not found}">
                      <div class="card-body">
                     
                    <h5 class="card-title">${clickedBookTitle}</h5>
                          
    
                      </div>
                  </div>
              </div>
              `


}

const Delete = (event) => {
    let clickedCard = event.target.closest(".card").remove();


}


const input = document.querySelector(".input-group input.form-control")
const searchImages = (userEvent) => {
    console.log(userEvent);
    if (userEvent.key === "Enter") {
        getResponse1(userEvent.target.value)
    }
}
input.addEventListener("keyup", searchImages)









/*
async function getResponse() {
    const response = await fetch('https://striveschool-api.herokuapp.com/books',
        {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
                'x-rapidapi-key': 'your_api_key'
            }
        }
    ).then((response) => response.json())
        .then((APIresult) => {
            const products = APIresult

            let row = document.querySelector(".row")
            products.map(singleProduct =>
                row.innerHTML += `
              <div class='col'> 
                  <div class="card" style="width: 18rem;">
                      <img src="${singleProduct.img}" class="card-img-top" alt="image not found}">
                      <div class="card-body">
                      <p class="card-text"> ${singleProduct.asin} </p>

                    <h5 class="card-title">${singleProduct.title}</h5>
                          <p class="card-text"> ${singleProduct.price} </p>
                          <p class="card-text"> ${singleProduct.category} </p>

                          <button class="skip" type="button" onclick="Delete()" id="skip">skip</button>
                          <button class="add" type="button" onclick="GetData()" id="add">add to cart</button>
                      </div>
                  </div>
              </div>
              `)
        })

        .catch((err) => console.log(err))
}
    */

