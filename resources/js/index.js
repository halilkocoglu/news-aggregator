const newsListDom = document.querySelector("#new-list");

const select = document.getElementById("country-select");

select.addEventListener("change", (event) => {
  const country = event.target.value;
  newsListDom.innerHTML = "";

  fetchDataByCountry(country);
});

const fetchDataByCountry = async (country) => {
  await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=314d6a77c6064b91a77439eb6a034ef8`
  )
    .then((res) => res.json())
    .then((res) => res.articles)
    .then((res) =>
      res.forEach((item) => {
        console.log(item);
        let liDOM = document.createElement("li.list-group-item");
        liDOM.innerHTML = `
        <div class="card p-2 d-flex text-start mb-4" >
          <div class="card-body">
            <h5 class="card-title">
              <a href=${item.url} class="text-primary text-decoration-none" target="_blank">${item.author}</a>
            </h5>
            <p class="card-text">${item.title}</p>
            <a href=${item.url} class="btn btn-primary" target="_blank">Read More...</a>
          </div>
        </div>
        `;
        newsListDom.appendChild(liDOM);
      })
    );
};

fetchDataByCountry(select.value);
