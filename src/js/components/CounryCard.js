import { NewsCard, CountryDetailedCard } from "../components/index.js";

export const CountryCard = (data) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("coutry-card", "border-white");

  cardDiv.innerHTML = `   
    <img class="img-fluid pb-4"  src="${data.flag}" alt="">
    <h5>${data.name}</h5>
    <h6>${data.capital}</h6> 
      `;

  const getCountryNews = async (country) =>
    (
      await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=1fb8352d96b04c8d802b4cf8c98fa1d0`
      )
    ).json();

  const showSpinner = (id) => {
    const spinner = document.querySelector(id);
    spinner.classList.remove("d-none");
    spinner.classList.add("d-flex");
  };

  const hideSpinner = (id) => {
    const spinner = document.querySelector(id);
    spinner.classList.remove("d-flex");
    spinner.classList.add("d-none");
  };

  const displayArticles = async () => {
    const { articles, totalResults } = await getCountryNews(data.alpha2Code);
    const newsContainer = document.querySelector("#news-container");
    
    if (totalResults != 0) {
      newsContainer.innerHTML = "";
      articles.forEach((article) => {
        const newsCard = NewsCard(article);
        newsContainer.appendChild(newsCard);
      });
    } else {
      newsContainer.innerHTML = "<h3>Sorry, No Arrticles for Today!</h3>";
    }
  };

  const onClick = async () => {
    try {
      showSpinner("#spinner");

      const pageTitle = document.querySelector("#page-title");
      pageTitle.textContent = `${data.name} News`;

      const countryDetailedCard = CountryDetailedCard(data);

      const countryDetailedCardContainer = document.querySelector(
        "#country-details-container"
      );

      try {
        await displayArticles();
      } catch (error) {
        alert(error);
      }

      countryDetailedCardContainer.innerHTML = countryDetailedCard.outerHTML;

      hideSpinner("#spinner");
    } catch (error) {
      alert(error);
    }
  };

  cardDiv.addEventListener("click", onClick);

  return cardDiv;
};
