import { FormField } from "./models";

export const ticketFields: FormField[] = [
  {
    label: "Event",
    name: "event",
    required: true,
    type: "select",
    options: [
      { value: 0, label: "Wakakusa Yamayaki in Nara" },
      { value: 1, label: "Kobe Luminarie" },
      { value: 2, label: "Festival of Lights Osaka" },
      {
        value: 3,
        label:
          "Kyoto Candlelight Concert: Best of Joe Hisaishi (Studio Ghibli)",
      },
    ],
  },
  {
    label: "Ticket Type",
    name: "type",
    required: true,
    type: "select",
    options: [
      { value: 0, label: "Children" },
      { value: 1, label: "Student" },
      { value: 2, label: "Standard" },
    ],
  },
];

export const billingFields: FormField[] = [
  {
    label: "First / Given Name",
    name: "firstName",
    required: true,
    type: "text",
  },
  {
    label: "Last / Family Name",
    name: "lastName",
    required: true,
    type: "text",
  },
  {
    label: "Address",
    name: "address",
    required: true,
    type: "text",
  },
  {
    label: "Post Code",
    name: "postcode",
    required: true,
    type: "text",
  },
  {
    label: "State / Territory",
    name: "state",
    required: true,
    type: "select",
    options: [
      { value: 0, label: "Australian Capital Territory" },
      { value: 1, label: "New South Wales" },
      { value: 2, label: "Northern Territory" },
      { value: 3, label: "Queensland" },
      { value: 4, label: "South Australia" },
      { value: 5, label: "Tasmania" },
      { value: 6, label: "Victoria" },
      { value: 7, label: "Western Australia" },
    ],
  },
];

export const optInFields: FormField[] = [
  {
    // label: "Receive our newsletter",
    name: "optIn",
    required: false,
    type: "checkbox",
    content: "Receive our newsletter",
  },
];
