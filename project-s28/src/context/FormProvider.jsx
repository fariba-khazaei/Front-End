import { useReducer } from "react";
import FormContext from "./FormContext";

const FormProvider = ({ children }) => {
  const defaultSearch = { searchType: "" };
  const searchReducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { searchType: action.value };

      default:
        break;
    }
  };
  const [search, dispatch] = useReducer(searchReducer, defaultSearch);

  return <FormContext value={{ search, dispatch }}>{children}</FormContext>;
};
export default FormProvider;
