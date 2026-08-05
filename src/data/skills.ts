import tailwindIcon from "../images/tailwind.png";
import graphqlIcon from "../images/graphql.png";
import typescriptIcon from "../images/typescript.svg";
import stencilIcon from "../images/stencil.svg";
import storybookIcon from "../images/storybook.svg";
import cypressIcon from "../images/cypress.svg";
import figmaIcon from "../images/figma.svg";

type Skill = {
  label: string;
  faClass?: string;
  image?: string;
};

export const SKILLS: Skill[] = [
  { label: "TypeScript", image: typescriptIcon },
  { label: "React", faClass: "fab fa-react" },
  { label: "JavaScript", faClass: "fab fa-js-square" },
  { label: "GitHub", faClass: "fab fa-github" },
  { label: "Cypress", image: cypressIcon },
  { label: "GraphQL", image: graphqlIcon },
  { label: "Stencil", image: stencilIcon },
  { label: "Storybook", image: storybookIcon },
  { label: "AWS", faClass: "fab fa-aws" },
  { label: "HTML", faClass: "fab fa-html5" },
  { label: "CSS", faClass: "fab fa-css3-alt" },
  { label: "Tailwind", image: tailwindIcon },
  { label: "SASS", faClass: "fab fa-sass" },
  { label: "Vue", faClass: "fab fa-vuejs" },
  { label: "Node.js", faClass: "fab fa-node" },
  { label: "Figma", image: figmaIcon },
];
