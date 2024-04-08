export type CareerType = {
  icon?: string;
  title: string;
  company: string;
  date: string;
  description: string[];
};

export const career: CareerType[] = [
  {
    icon: "company/metacrm.png",
    title: "Frontend Engineer",
    company: "MetaCRM",
    date: "Feb 2024 ~ Present",
    description: [
      "Responsible for developing and maintaining the company's web3 CRM system.",
      "Developed and maintained the company's CRM system using React, Redux, and related tools.",
      "Make Storybook components for the company's design system.",
    ],
  },
  {
    icon: "company/fanxi.png",
    title: "Full Stack Engineer",
    company: "FANXI",
    date: "Feb 2023 ~ Jan 2024",
    description: [
      "In charge of the company's product web design and feature development.",
      "Refactored and optimized company projects while communicating and collaborating with company colleagues to ensure the product met the desired user experience.",
      "Engaged in frontend development using React, Next.js, and related tools.",
      "Applied Styled Components and Tailwind CSS for web design.",
      "Utilized the Redux state management library in conjunction with react-query to manage global states and reduce server load.",
      "Implemented WebRTC technology to achieve real-time communication and video conferencing features between web pages.",
      "Employed the WebSocket communication protocol to establish bidirectional communication channels for real-time updates and interactive functionalities.",
      "Applied Web3 technology to interact with blockchain, connecting smart contracts to develop required features.",
      "Used Dexie.js to temporarily store message data in IndexedDB.",
      "Used Git for version control and collaboration.",
      "Employed tools such as LightHouse, react Profiler, and coverage to optimize projects.",
    ],
  },
  {
    icon: "company/cacdi.png",
    title: "Frontend Engineer",
    company: "CacDi",
    date: "Mar 2022 ~ Nov 2022",
    description: [
      "Responsible for developing website features, rectifying errors, and discussing API integrations with backend engineers to ensure timely delivery of projects while maintaining high-quality standards.",
      "Collaborated closely with designers using Figma and employed SCSS for web design, aiming to achieve exceptional user experience and visual design.",
      "Independently developed projects using React and Next.js.",
      "Assisted team members in resolving issues and addressing daily technical challenges.",
      "Understood and applied frontend internationalization (i18n) techniques to cater to multilingual website requirements.",
      "Implemented drawing games on the web, using Canvas technology to develop a highly interactive gaming experience, while employing JavaScript to manage game logic and animation effects.",
      "Utilized GitLab for version control and team collaboration, and used Asana for project management and team coordination.",
    ],
  },
];
