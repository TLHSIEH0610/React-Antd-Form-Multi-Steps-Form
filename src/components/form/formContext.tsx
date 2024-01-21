import { createContext, ReactNode, useContext, useState } from "react";
import { billingFields, ticketFields, optInFields } from "./fields";
import { FormField } from "./models";

interface ContextValue {
  page: number;
  fields: FormField[];
  setPage: (cb: (page: number) => number) => void;
}

const FormContext = createContext<ContextValue>({} as any);

const formFields: Record<number, FormField[]> = {
  0: billingFields,
  1: ticketFields,
  2: optInFields,
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(0);
  const fields = formFields[page];

  return (
    <FormContext.Provider value={{ page, fields, setPage }}>
      {children}
    </FormContext.Provider>
  );
};

const useFormContext = () => {
  return useContext(FormContext);
};

export default useFormContext;
