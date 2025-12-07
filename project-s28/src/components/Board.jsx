import { useContext, useEffect, useState } from "react";
import FormContext from "../context/FormContext";

const Board = () => {
  const { search } = useContext(FormContext);
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(search.searchType);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  return (
    <div>
      <h1>Debouncing ...</h1>
      <h2>Real Time Value : {search.searchType}</h2>
      <h2>
        Debounced Value:
        {debounced}
      </h2>
    </div>
  );
};
export default Board;
