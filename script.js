const asyncCards = async () => {
  try {
    let res = await fetch("https://striveschool-api.herokuapp.com/books");
    if (res.ok) {
      let data = await res.json();

      let cardList = document.getElementById("cardList");

      data.forEach((el) => {
        cardList.innerHTML =
          cardList.innerHTML +
          `
        <div class="col d-flex justify-content-center">
        <div class="card removeCards mt-5" style="width: 18rem;">
        <img src="${el.img}" class="card-img-top images" alt="...">
        <div class="card-body d-flex flex-column justify-content-between">
        <div class="cardTitle">
        <h5 class="card-title">${el.title}</h5>
        </div>
        <p class="card-text">${el.price} €</p>
        <div class="d-flex align-items-end">
        <button onclick="removeSelectedCard()" class="btn btn-primary bottone">SKIP</button>
        </div>
        </div>
        </div>
        </div>
        `;
      });
    }
  } catch (error) {
    console.log(error);
  }
};

asyncCards();

const removeSelectedCard = () => {
  // Work in progress
};
