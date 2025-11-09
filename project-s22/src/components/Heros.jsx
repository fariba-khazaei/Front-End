import GetStarted from "./GetStarted";
import manBanner from "../assets/images/person.png";
const Heros = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-title">
              Learn Spanish Online from Native Teachers
            </h1>
            <p className="banner-desc">
              Grow your confidence in Spanish conversation, grammar and reading
              with live, online classes, professional teachers and a schedule
              that suits you.
            </p>
            <GetStarted classNames=""></GetStarted>
          </div>
          <img className="banner-img" src={manBanner} alt="Man" />
        </div>
      </div>
    </section>
  );
};

export default Heros;
