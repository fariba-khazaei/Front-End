import { useContext } from "react";
import FormContext from "../context/FormContext";

const Form = () => {
  const { dispatch } = useContext(FormContext);
  console.log("FORM");
  return (
    <div>
      <label className="text-lg p-2 font-bold block ml-2 mt-2" htmlFor="search">
        Type Here For Search:
      </label>
      <input
        onChange={(e) => dispatch({ type: "update", value: e.target.value })}
        placeholder="Type here for search..."
        className="border border-gray-500 shadow p-1 m-2 w-1/4"
        id="search"
        type="text"
      />
    </div>
  );
};
export default Form;
