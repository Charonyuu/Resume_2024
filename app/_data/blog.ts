export type BlogCardType = {
  title: string;
  description: string;
  postId: string;
  image: string;
  tags: string[];
};

export const BlogCards: BlogCardType[] = [
  {
    title: "JavaScript",
    description: "There is some information about JavaScript.",
    postId: "4cb943f3e2c04978861a2db5c82c7ee3",
    image: "/blog/javascript.png",
    tags: ["JavaScript"],
  },
  {
    title: "Ngrok",
    description: "How to use Ngrok to expose a local server to the internet.",
    postId: "ed869f1d8f9f4a5fbe71589e6265ab9c",
    image: "/blog/ngrok.jpg",
    tags: ["Ngrok"],
  },
  {
    title: "TypeScript",
    description:
      "TypeScript is a superset of JavaScript that adds type annotations and other features to help developers write more reliable code.",
    postId: "10ebef9deafb48dabbc5077fa0bac90f",
    image: "/blog/typescript.png",
    tags: ["TypeScript"],
  },
  {
    title: "Docker",
    description:
      "Docker is a platform for developing, shipping, and running applications.",
    postId: "ad7fdf5ed0bf4c888190b37fce679937",
    image: "/blog/docker.png",
    tags: ["Docker"],
  },
  {
    title: "React",
    description: "React is a JavaScript library for building user interfaces.",
    postId: "67b7b83b663b4eab9ce99ca10e60bf70",
    image: "/blog/react.png",
    tags: ["React"],
  },
  {
    title: "Algorithms and Data Structures",
    description:
      "My Algorithms and data structures Note in Notion.Abort Simple Sorting Algorithm, Searching Algorithm, and Data Structures.",
    postId: "fd50cd96920443ec921b4800d8abd41a",
    image: "/blog/algorithms.png",
    tags: ["Algorithms"],
  },
];
