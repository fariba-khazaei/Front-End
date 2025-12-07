import Board from "../components/Board";
import Form from "../components/Form";
import FormProvider from "../context/FormProvider";

const Debouncing = () => {
  return (
    <FormProvider>
      <Form />
      <Board />
    </FormProvider>
  );
};

export default Debouncing;
