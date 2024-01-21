export type SelectOption = {
  label: string;
  value: number;
  options?: Omit<SelectOption, "options">[];
};

export type FormField = {
  label?: string;
  name: string;
  required: boolean;
} & (
  | {
      type: "text";
    }
  | {
      type: "textarea";
      limit?: number;
    }
  | {
      type: "radio";
      direction?: "vertical" | "horizontal";
      options: { label: string; value: number }[];
    }
  | {
      type: "select";
      options: SelectOption[];
      filter?: (inputValue: string, option?: SelectOption) => boolean;
    }
  | {
      type: "checkbox";
      content: string;
    }
  | {
      type: "url";
      prefix?: string;
    }
  | {
      type: "checkbox";
      content?: string;
    }
);
