import { createContext, ReactNode, useContext, useState } from "react";
import { billingFields, ticketFields, optInFields } from "./fields";
import { FormField } from "./models";

interface ContextValue {
  page: number;
  fields: FormField[];
  setPage: (cb: (page: number) => number) => void;
  title: string;
  hasNext: boolean;
  hasPrev: boolean;
}

const FormContext = createContext<ContextValue>({} as any);

const formMeta: Record<number, { fields: FormField[]; title: string }> = {
  0: { fields: ticketFields, title: "Select Ticket" },
  1: { fields: billingFields, title: "Billing Info" },
  2: { fields: optInFields, title: "Confirm Details" },
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(0);
  const fields = formMeta[page].fields;
  const title = formMeta[page].title;
  const hasNext = page !== Object.keys(formMeta).length - 1;
  const hasPrev = page !== 0;

  return (
    <FormContext.Provider
      value={{ page, fields, setPage, title, hasNext, hasPrev }}
    >
      {children}
    </FormContext.Provider>
  );
};

const useFormContext = () => {
  return useContext(FormContext);
};

export default useFormContext;
