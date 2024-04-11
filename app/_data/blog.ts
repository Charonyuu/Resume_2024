export type SingleCardType = {
  title: string;
  description: string;
  postId: string;
  image: string;
  tags: string[];
};

export type BlogType = {
  title: string;
  value: SingleCardType[];
  category: string;
};

const FrontendCard: SingleCardType[] = [
  {
    title: "JavaScript Notes",
    description: "There is some base knowledge and notes about JavaScript.",
    postId: "4cb943f3e2c04978861a2db5c82c7ee3",
    image: "/blog/javascript.png",
    tags: ["JavaScript"],
  },
  {
    title: "TypeScript Notes",
    description:
      "TypeScript is a superset of JavaScript that adds type annotations and other features to help developers write more reliable code.",
    postId: "10ebef9deafb48dabbc5077fa0bac90f",
    image: "/blog/typescript.png",
    tags: ["TypeScript"],
  },
  {
    title: "React Notes",
    description: "React is a JavaScript library for building user interfaces.",
    postId: "67b7b83b663b4eab9ce99ca10e60bf70",
    image: "/blog/react.png",
    tags: ["React"],
  },
  {
    title: "Ithome Blog About Hooks & Unit Test",
    description: "Shared Blog about React Hooks & Typescript & Unit Test",
    postId: "dc18c45ab13f41e9bd66dff5ce71bc8b",
    image: "/blog/ithome.png",
    tags: ["React", "TypeScript", "Unit Test"],
  },
];

const BackendCard: SingleCardType[] = [
  {
    title: "Ngrok",
    description: "How to use Ngrok to expose a local server to the internet.",
    postId: "ed869f1d8f9f4a5fbe71589e6265ab9c",
    image: "/blog/ngrok.jpg",
    tags: ["Ngrok"],
  },

  {
    title: "Docker",
    description:
      "How to use Docker to create, deploy, and run applications using containers.",
    postId: "ad7fdf5ed0bf4c888190b37fce679937",
    image: "/blog/docker.png",
    tags: ["Docker"],
  },
];

const AlgorithmCard: SingleCardType[] = [
  {
    title: "Algorithms and Data Structures",
    description:
      "My Algorithms and data structures Note in Notion.Abort Simple Sorting Algorithm, Searching Algorithm, and Data Structures.",
    postId: "fd50cd96920443ec921b4800d8abd41a",
    image: "/blog/algorithms.png",
    tags: ["Algorithms"],
  },
];

export const BlogCards: BlogType[] = [
  {
    title: "Frontend Development",
    value: FrontendCard,
    category: "Frontend",
  },
  {
    title: "Backend Development",
    value: BackendCard,
    category: "Backend",
  },
  {
    title: "Algorithm",
    value: AlgorithmCard,
    category: "Algorithm",
  },
];
