import { Project } from "../types/project";
import console_ from "../images/console.png";
import signer from "../images/signer.png";
import ui from "../images/ui.png";
import documentViewer from "../images/document-viewer.png";
import reporting from "../images/reporting.png";
import support from "../images/support.png";
import bulk from "../images/bulk.png";
import reflection from "../images/netmatters-reflection2.png";
import axure from "../images/axure-prototype2.png";
import imageAssigner from "../images/image-assigner-task.PNG";
import bakery from "../images/bakers-dozen.PNG";
import weather from "../images/react-weather.PNG";
import vueFilms from "../images/vue-films-poster.PNG";
import reactHolidays from "../images/react-holidays.PNG";
import pinpoint from "../images/pinpoint.PNG";

export const PROJECTS: Project[] = [
  {
    id: 1,
    category: "professional",
    title: "Legalesign Console",
    image: console_,
    description:
      "The main Legalesign web application used by organisations to manage documents, templates, recipients and groups. I was part of the core team as a lead front-end developer. Built with React, TypeScript, Vite, TanStack Query, AWS Amplify, and GraphQL (AppSync). Features include real-time subscriptions, S3 file uploads, i18n (i18next), and a Cypress e2e test suite. Deployed to AWS Amplify with automated versioning via GitHub Actions — patch, minor, and major version bumps are determined by commit message convention and injected into the app at build time. Available at console.legalesign.com (requires Legalesign account).",
  },
  {
    id: 2,
    category: "professional",
    title: "Legalesign Signer",
    image: signer,
    npm: "https://www.npmjs.com/package/legalesign-signer",
    description:
      "A framework-agnostic electronic document signing component I built as lead developer. Architected as a three-layer system: a Stencil web component wrapper, a React 19 + TypeScript UI layer, and a framework-agnostic business logic layer using Zustand stores. Published to npm as both a web component (legalesign-signer) and a React package. Supports 17 languages via i18next, custom colour theming via CSS custom properties, and a rich event API (signingSuccess, signingFail, fieldChange). Also available via CDN with latest and pinned version support. I wrote a comprehensive Cypress e2e test suite covering all field types (signature, initials, date, checkbox, text, dropdown, file, email, number, regex), signing workflows (single signer, witness, approver, reject), auto-forward ordering, accessibility (WCAG), and responsive layouts (mobile and tablet). GitHub Actions automate build checks on every PR, run the full Cypress suite, handle npm publishing with automated version bumps, trigger Amplify preview deployments for PRs, and dispatch rebuild events to the testing app on merge.",
  },
  {
    id: 3,
    category: "professional",
    title: "Legalesign UI",
    image: ui,
    link: "https://ui.legalesign.io",
    npm: "https://www.npmjs.com/package/legalesign-ui",
    description:
      "A Stencil-based UI component library I built as lead developer, used across all Legalesign products. Published to npm as legalesign-ui (web component) and legalesign-ui-react (React wrapper), kept in sync at the same version. Built with Stencil and TypeScript, with Storybook for component development and documentation. GitHub Actions automate version bumping (patch/minor/major based on PR title), building both packages, publishing to npm via OIDC trusted publishing, and committing the version bump back to main.",
  },
  {
    id: 4,
    category: "professional",
    title: "Legalesign Document Viewer",
    image: documentViewer,
    npm: "https://www.npmjs.com/package/legalesign-document-viewer",
    description:
      "A Stencil web component for editing, previewing and composing document signing templates, embeddable in any framework via npm. I was part of a team of three developers. Supports editor, compose and preview modes, recipient configuration, field type filtering, custom toolbar slots, and a full event API (update, validate, selectFields). Includes i18n with 17 languages and an AWS Translate sync script to keep all translation files in sync. GitHub Actions handle npm publishing with automated version bumps, PR preview deployments to Amplify, and rebuild triggers to the testing app.",
  },
  {
    id: 5,
    category: "professional",
    title: "Legalesign Reporting",
    image: reporting,
    description:
      "An internal web app for document analytics and reporting, built with React, TypeScript, and Vite. I led development with a junior developer, using a shared microsite template I created to standardise how internal Legalesign web apps are scaffolded. Deployed to AWS Amplify. Available at reporting.legalesign.com (requires Legalesign account).",
  },
  {
    id: 6,
    category: "professional",
    title: "Legalesign Support",
    image: support,
    description:
      "An internal support tooling web app built with React, TypeScript, and Vite. I led development with a junior developer using the shared microsite template I created. Deployed to AWS Amplify. Available at support.legalesign.com (requires Legalesign account).",
  },
  {
    id: 7,
    category: "professional",
    title: "Legalesign Bulk Send",
    image: bulk,
    description:
      "A web app for sending documents to multiple recipients at once, built with React, TypeScript, and Vite. I was part of a team of three developers, built using the shared microsite template I created. Deployed to AWS Amplify. Available at console.legalesign.com (requires Legalesign account).",
  },
  {
    id: 8,
    category: "personal",
    title: "Netmatters Reflection",
    image: reflection,
    link: "https://reflection.angelov.uk/",
    github: "https://github.com/angelangelov88/reflection/tree/php-reflection",
    description:
      "My first project was to replicate the website of Netmatters. I started the project from scratch and had to add the HTML and CSS in order to make the website look identical to the actual one. I used my knowledge of HTML and CSS (including SASS) to implement the task. After this initial setup I had to update the website twice. I added JavaScript to make it interactive. In my JavaScript update I added functions such as hamburger menu, side navigation bar, hero image slider, sticky header and cookies. Once I completed my PHP studies I added PHP functionality to the website by adding a new contact page with a contact form and map API. The contact form is validated by client-side validation - HTML5, JavaScript and server-side validation - PHP. I also added a database connection for the submitted form. In the main page I created a database and connected it to the news cards. I pull the data from the database and show it to the user. I have added a SQL statement that allows random news to be pulled from the database and shown to the user.",
  },
  {
    id: 9,
    category: "personal",
    title: "Bakery Website",
    image: bakery,
    link: "https://bakers-dozen.angelov.uk/",
    github: "https://github.com/donk3ylee/trifecta-perfecta",
    description:
      "That was a project we had to do in a team. Three of us worked together to create a website for a local bakery. We had to create the website from scratch with an image as a guide for the design. We divided the index page in 3 parts and I was in charge of the header and footer. After that I created the About Us and Products pages. I used the knowledge I've gained throughout the course including but not limited to HTML, CSS, JavaScript. I was also in charge for the responsiveness of the website on different screen sizes as well as browser compatibility.",
  },
  {
    id: 10,
    category: "personal",
    title: "React Weather App",
    image: weather,
    link: "https://react-weather.angelov.uk/",
    github: "https://github.com/angelangelov88/react-weather-app",
    description:
      "This was my second React project. I created a weather app using openweathermap API. I used dotenv to make sure the API KEY is hidden and added the .env to my .gitignore file. I added a state hook for the query and the weather constants and set them to an empty string. After that I added a fetch request to the API to request the data. I also added a function to determine the date and render it to the screen. Last but not least I rendered the city, country, temperature, feels like temperature and the weather to the user's screen.",
  },
  {
    id: 11,
    category: "personal",
    title: "Vue Films App",
    image: vueFilms,
    link: "https://vue-films.angelov.uk/",
    github: "https://github.com/angelangelov88/Vue-Films-App",
    description:
      "This was my first Vue project. I created a films app using the Movie Database API. I used dotenv to make sure the API KEY is hidden and added the .env to my .gitignore file. I added a state hook for the query and the movies and set them to an empty string. After that I added a fetch request to the API to request the data.",
  },
  {
    id: 12,
    category: "personal",
    title: "React Holidays App",
    image: reactHolidays,
    link: "https://react-holidays.angelov.uk/",
    github: "https://github.com/angelangelov88/react-holidays",
    description:
      "This was my third React project. I created a holidays app using the Holiday API. I used dotenv to make sure the API KEY is hidden and added the .env to my .gitignore file. I added a state hook for the query and the holidays and set them to an empty string. After that I added a fetch request to the API to request the data.",
  },
  {
    id: 13,
    category: "personal",
    title: "JavaScript Image Assigner",
    image: imageAssigner,
    link: "https://js-image-assigner.angelov.uk/",
    github: "https://github.com/angelangelov88/JavaScript-Reflection-Task2",
    description:
      "This was my second JavaScript project. I created an image assigner using JavaScript. I used an array of images and a function to assign a random image to the user.",
  },
  {
    id: 14,
    category: "personal",
    title: "Axure Prototype",
    image: axure,
    link: "https://axure-project.angelov.uk/",
    github: "https://github.com/angelangelov88/axure",
    description:
      "This was my first Axure project. I created a prototype using Axure RP to design and demonstrate a website layout with interactive elements.",
  },
  {
    id: 15,
    category: "personal",
    title: "Website Landing Page",
    image: pinpoint,
    link: "https://angelangelov88.github.io/pinpoint-task/",
    github: "https://github.com/angelangelov88/pinpoint-task",
    description:
      "A responsive landing page built as a pixel-perfect implementation task, using HTML and CSS.",
  },
];

export const PROFESSIONAL_PROJECTS = PROJECTS.filter((p) => p.category === "professional");
export const PERSONAL_PROJECTS = PROJECTS.filter((p) => p.category === "personal");
