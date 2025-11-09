import CountriesCards from "./CountriesCards";
import { nanoid } from "nanoid";

const countriesObj = [
  {
    country: "Mexico",
    src: "/public/mexico.png",
    desc: "+130 million speakers",
  },
  {
    country: "Colombia",
    src: "/public/colombia.png",
    desc: "+50 million speakers",
  },
  {
    country: "Spain",
    src: "/public/spain.png",
    desc: "+47 million speakers",
  },
  {
    country: "Argentina",
    src: "/public/argentina.png",
    desc: "+45 million speakers",
  },
];
const Countries = () => {
  return (
    <section id="countries">
      <div className="container">
        <h2 className="title-countries">Truly Experience Foreign Countries</h2>
        <p className="countries-desc">
          Travel around the world and meet millions of spanish speaking perople
        </p>
        <div className="countries-wrapper">
          {countriesObj.map((item) => {
            return (
              <CountriesCards key={nanoid()} items={item}></CountriesCards>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Countries;
