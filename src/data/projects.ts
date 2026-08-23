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
      "A framework-agnostic electronic document signing component I built as lead developer. Architected as a three-layer system: a Stencil web component wrapper, a React 19 + TypeScript UI layer, and a framework-agnostic business logic layer using Zustand stores. React users can install it as an npm package (legalesign-signer), while web component users load it directly from a CDN hosted on AWS. Supports 17 languages via i18next, custom colour theming via CSS custom properties, and a rich event API (signingSuccess, signingFail, fieldChange). I wrote a comprehensive Cypress e2e test suite covering all field types (signature, initials, date, checkbox, text, dropdown, file, email, number, regex), signing workflows (single signer, witness, approver, reject) and auto-forward ordering. GitHub Actions automate build checks on every PR, run the full Cypress suite, trigger Amplify preview deployments for PRs, and dispatch rebuild events to the testing app on merge. npm publishing is fully automated — on merge to main, the version is bumped (patch/minor/major based on PR title convention), the package is built and published to npm, and the version bump is committed back to the repo, all via GitHub Actions.",
  },
  {
    id: 3,
    category: "professional",
    title: "Legalesign UI",
    image: ui,
    link: "https://ui.legalesign.io",
    npm: "https://www.npmjs.com/package/legalesign-ui",
    description:
      "A Stencil-based UI component library I built as lead developer, used across all Legalesign products. Published to npm as legalesign-ui (web component) and legalesign-ui-react (React wrapper), kept in sync at the same version. Built with Stencil and TypeScript, with Storybook for component development and documentation. npm publishing is fully automated via GitHub Actions — on merge to main, both packages are versioned in sync (patch/minor/major based on PR title), built, and published to npm using OIDC trusted publishing (no npm token required), with the version bump committed back to main.",
  },
  {
    id: 4,
    category: "professional",
    title: "Legalesign Document Viewer",
    image: documentViewer,
    npm: "https://www.npmjs.com/package/legalesign-document-viewer",
    description:
      "A Stencil web component for editing, previewing and composing document signing templates, embeddable in any framework via npm. I was part of a team of three developers. Supports editor, compose and preview modes, recipient configuration, field type filtering, custom toolbar slots, and a full event API (update, validate, selectFields). Includes i18n with 17 languages and an AWS Translate sync script to keep all translation files in sync. npm publishing is fully automated via GitHub Actions using OIDC trusted publishing — on merge to prod, the version is bumped based on PR title, both the web component and React wrapper packages are built and published in sync, and the version bump is committed back to the repo. GitHub Actions also handle PR preview deployments to Amplify and rebuild triggers to the testing app.",
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
      "A web app for sending documents to multiple recipients at once, built with React, TypeScript, and Vite. I was part of a team of three developers, built using the shared microsite template I created. Deployed to AWS Amplify. Available at bulksend.legalesign.com (requires Legalesign account).",
  },
  {
    id: 8,
    category: "personal",
    title: "Netmatters Reflection",
    image: reflection,
    link: "https://reflection.angelov.uk/",
    github: "https://github.com/angelangelov88/reflection/tree/php-reflection",
    description:
      "A full replication of the Netmatters website built from scratch. Started with HTML and CSS (SASS), then extended with JavaScript to add interactive features including a hamburger menu, side navigation, hero image slider, sticky header, and cookie banner. Later added PHP functionality with a contact form using both client-side (HTML5, JavaScript) and server-side (PHP) validation, a MySQL database connection for form submissions, and dynamic news cards pulling randomised content from a database.",
  },
  {
    id: 9,
    category: "personal",
    title: "Bakery Website",
    image: bakery,
    link: "https://bakers-dozen.angelov.uk/",
    github: "https://github.com/donk3ylee/trifecta-perfecta",
    description:
      "A team project to build a website for a local bakery from scratch using a design mockup as reference. I was responsible for the header, footer, About Us page, and Products page, as well as cross-browser compatibility and responsiveness across all screen sizes. Built with HTML, CSS, and JavaScript. We ran daily standups to stay aligned and I handled debugging across browsers and devices.",
  },
  {
    id: 10,
    category: "personal",
    title: "React Weather App",
    image: weather,
    link: "https://weather.angelov.uk/",
    github: "https://github.com/angelangelov88/react-weather-app",
    description:
      "A mobile-first weather app built with React, consuming the OpenWeatherMap API. Displays city, country, temperature, feels-like temperature, and weather conditions. API key is protected via dotenv and excluded from version control. Built using React hooks for state management and async fetch for data retrieval.",
  },
  {
    id: 11,
    category: "personal",
    title: "Vue Films App",
    image: vueFilms,
    link: "https://films.angelov.uk/",
    github: "https://github.com/angelangelov88/Vue-Films-App",
    description:
      "A mobile-first films app built with Vue.js, consuming The Movie Database API. Displays movie posters, titles, and release dates. My first Vue project — built to learn Vue's reactivity system and component model. API key protected via dotenv.",
  },
  {
    id: 12,
    category: "personal",
    title: "React Holidays App",
    image: reactHolidays,
    link: "https://react-holidays.angelov.uk/",
    github: "https://github.com/angelangelov88/react-holidays",
    description:
      "A mobile-first public holidays app built with React, consuming the Holiday API. Lets users look up public holidays by country and year. Built using React hooks and async fetch, with the API key protected via dotenv.",
  },
  {
    id: 13,
    category: "personal",
    title: "JavaScript Image Assigner",
    image: imageAssigner,
    link: "https://js-image-assigner.angelov.uk/",
    github: "https://github.com/angelangelov88/JavaScript-Reflection-Task2",
    description:
      "A JavaScript app that randomly assigns images from a predefined array and displays them to the user. Built to practise DOM manipulation, array handling, and event-driven JavaScript without any frameworks.",
  },
  {
    id: 14,
    category: "personal",
    title: "Axure Prototype",
    image: axure,
    link: "https://axure-project.angelov.uk/",
    github: "https://github.com/angelangelov88/axure",
    description:
      "An interactive prototype built with Axure RP to design and demonstrate a website layout. Focused on UX flows, component states, and interactive wireframing before any code was written.",
  },
  {
    id: 15,
    category: "personal",
    title: "Website Landing Page",
    image: pinpoint,
    link: "https://angelangelov88.github.io/pinpoint-task/",
    github: "https://github.com/angelangelov88/pinpoint-task",
    description:
      "A pixel-perfect responsive landing page built from a design spec using HTML and CSS. Focused on accurate layout implementation, spacing, and typography matching across screen sizes.",
  },
];

export const PROFESSIONAL_PROJECTS = PROJECTS.filter((p) => p.category === "professional");
export const PERSONAL_PROJECTS = PROJECTS.filter((p) => p.category === "personal");
