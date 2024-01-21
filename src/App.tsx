import Form from "./components/form";
import { FormProvider } from "./components/form/formContext";

function App() {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  );
}

export default App;
