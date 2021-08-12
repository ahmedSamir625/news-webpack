import regeneratorRuntime from "regenerator-runtime";
import { CountryCard } from "./js/components";
import  "./styles.scss";

const getCountries = async () =>
  (await fetch("https://restcountries.eu/rest/v2/")).json();



const displayCounties = async () => {
  try {
    const countries = await getCountries();
    const slider = document.querySelector(".countries-slider");

    countries.forEach((country) => {
      const div = CountryCard(country);
      slider.appendChild(div);
    });

  } catch (error) {
    alert('Something went wrong!');
  }
};


displayCounties();