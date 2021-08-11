export const CountryDetailedCard = ({
  flag,
  capital,
  name,
  currencies,
  languages,
  population,
  subregion,
  borders,
  timezones,
}) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("row", "p-3", "mt-5", "border-white");
  cardDiv.id = "country-details";

  cardDiv.innerHTML = `   
    <div class="col-4">
    <img
      class="img-fluid"
      src="${flag}"
      alt="flag"
    />
  
  </div>
  <div class="col-8">
    <h5 class="pb-3">${name}</h5>
    <ul>
      <li>Capital: ${capital}</li>
      <li>Currency: ${currencies[0].name} ${currencies[0].symbol}</li>
      <li>Language: ${languages[0].name}</li>
      <li>Population: ${population}</li>
      <li>Subregion: ${subregion}</li>
      <li>Timezone: ${timezones[0]}</li>
      <li class="mt-2">Neigbhors: ${borders.map((border) => `${border}, `)}</li>
    </ul>
  
  </div>
        `;

  return cardDiv;
};
