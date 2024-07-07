export interface IService {
  img: string;
  title: string;
  description: string;
  lists: { items: any[] }[];
  to: string;
}

const CService: IService[] = [
  {
    img: "https://img.icons8.com/?size=64&id=43605&format=png",
    title: "Data Analytics",
    description:
      "Transform raw data into valuable insights. Our data analytics services include ",
    lists: [{ items: ["Descriptive Analytics", "Predictive", "Prescriptive"] }],
    to: "#",
  },
  {
    img: "https://img.icons8.com/?size=80&id=GxV1bClrDdAj&format=png",
    title: "Business Intelligence",
    description:
      "Empower your decision-making with robust business intelligence solutions:",
    lists: [
      {
        items: [
          "Dashboards and Reporting",
          "Data Visualization",
          "KPI Tracking",
        ],
      },
    ],
    to: "#",
  },
  {
    img: "https://img.icons8.com/?size=128&id=52580&format=png",
    title: "Data Strategy",
    description:
      "Develop a data strategy that aligns with your business goals:",
    lists: [
      { items: ["Data Governance", "Data Architecture", "Data Management"] },
    ],
    to: "#",
  },
  {
    img: "https://img.icons8.com/?size=80&id=lexHUCIovqfh&format=png",
    title: "Data Science",
    description:
      "Leverage advanced data science techniques to solve complex business problems:",
    lists: [
      { items: ["Machine Learning", "Al Solutions", "Statistical Analysis"] },
    ],
    to: "#",
  },
  {
    img: "https://img.icons8.com/?size=64&id=48154&format=png",
    title: "Data Engineering",
    description: "Ensure your data infrastructure is reliable andscalable:",
    lists: [
      { items: ["Data Warehousing", "VETL Processes", "Cloud Data Solution"] },
    ],
    to: "#",
  },
];

export default CService;
