import ListText from "./ListsText";
import { nanoid } from "nanoid";

const ListItems = [
  { classN: "sub-txt common-list", desc: "How are you? ¿Qué tal?" },
  {
    classN: "sub-txt common-list",
    desc: "This can also be used for “how is [something]?” For example, “how was your weekend?” ¿Qué tal tu fin de semana?",
  },
  { classN: "sub-txt common-list", desc: "Nice to meet you. Mucho gusto." },
  {
    classN: "sub-txt common-list",
    desc: "Where are you from? ¿De dónde eres?",
  },
  { classN: "sub-txt common-list", desc: "I’m from… Soy de…" },
  { classN: "sub-txt common-list", desc: "Have a good one! Que le vaya bien." },
  {
    classN: "sub-txt common-list",
    desc: "You can say this whenever you leave a shop or a restaurant.",
  },
  { classN: "sub-txt common-list", desc: "Excuse me. Disculpe." },
  {
    classN: "sub-txt common-list",
    desc: "This is for calling the attention of someone like a waiter.",
  },
];
const Common = () => {
  return (
    <section id="common">
      <div className="container">
        <h2 className="head-txt">Common Spanish phrases</h2>
        <p className="sub-txt">
          There are some common Spanish phrases that can help you go from zero
          to 60 in your speaking ability.
        </p>
        <ul>
          {ListItems.map((item) => {
            return <ListText key={nanoid()} items={item}></ListText>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Common;
