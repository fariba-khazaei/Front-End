import { useEffect, useState } from "react";
import { Faker, fa, base } from "@faker-js/faker";
const faker = new Faker({
  locale: [base, fa],
});
const text = faker.lorem.paragraph();

const TypeSpeed = () => {
  const [typeHere, setTypeHere] = useState("");
  const [resultText, setResultText] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [stopTime, setStopTime] = useState(new Date());
  const [perMin, setPerMin] = useState(0);
  const [equal, setEqual] = useState(false);

  const onTypeChange = (e) => {
    console.log("type");

    setTypeHere(e.target.value);
  };

  const onClickStop = () => {
    console.log("stop click");
    if (text === typeHere) {
      setResultText("متن تایپ شده صحیح است");
      setStopTime(new Date());
      setEqual(true);
    } else {
      setResultText("متن تایپ شده با متن اصلی یکسان نمی باشد");
      setEqual(false);
    }
  };

  const onClickStart = () => {
    console.log("start click");

    setStartTime(new Date());
  };

  useEffect(() => {
    console.log("permin call");

    setPerMin(
      Math.round(
        text.split(" ").length /
          (stopTime.getMinutes() -
            startTime.getMinutes() +
            (stopTime.getSeconds() - startTime.getSeconds()) / 60)
      )
    );
  }, [stopTime]);

  const onClickReset = () => {
    setTypeHere("");
    setResultText("");
    setPerMin(0);
    setEqual(false);
  };

  return (
    <div>
      <div className="fakeText">{text}</div>
      <textarea
        className="textAreaType"
        value={typeHere}
        onChange={onTypeChange}
        placeholder="متن را بنویسید"
      ></textarea>
      <div className="result">
        {equal ? (
          resultText
        ) : (
          <span style={{ color: "red" }}>{resultText}</span>
        )}{" "}
        {equal && `   سرعت تایپ شما  ${perMin} .کلمه در دقیقه است`}
        <div>
          {equal &&
            (perMin < 20
              ? `   شما مبتدی هستید`
              : perMin < 40
              ? `   سرعت شما متوسط است`
              : perMin < 60
              ? `  سرعت شما پیشرفته است`
              : `  سرعت شما ماهرانه است`)}
        </div>
      </div>
      <div>
        <button onClick={onClickStart}>شروع</button>
        <button onClick={onClickStop}>پایان</button>
        <button onClick={onClickReset}>از سر گیری</button>
      </div>
    </div>
  );
};

export default TypeSpeed;
