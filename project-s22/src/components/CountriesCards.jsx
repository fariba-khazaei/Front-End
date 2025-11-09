const CountriesCards = ({ items }) => {
  return (
    <div className={`countries-div ${items.country.toLowerCase()}`}>
      <img
        className="countries-img"
        src={items.src}
        alt={items.country.toLowerCase()}
      />
      <h3 className="name-countries">{items.country}</h3>
      <p className="num-speakers">{items.desc}</p>
    </div>
  );
};

export default CountriesCards;
