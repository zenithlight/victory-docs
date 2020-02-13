/* eslint-disable filenames/match-regex */
/* eslint-disable quotes*/
const content = {
  hero: {
    background: require("../../../static/hero-background.svg"),
    badge: require("../../../static/hero-badge.svg"),
    cornerText: "ANOTHER OSS \n PROJECT BY",
    cornerIcon: require("../../../static/logos/logo-formidable-icon.svg"),
    description:
      "React.js components for modular charting and data visualization.",
    code: "npm install victory",
    link: {
      text: "DOCUMENTATION",
      location: "/docs"
    },
    linksArray: [
      {
        text: "ABOUT",
        location: "/about"
      },
      {
        text: "DOCS",
        location: "/docs"
      },
      {
        text: "GUIDES",
        location: "/guides"
      },
      {
        text: "GALLERY",
        location: "/gallery"
      },
      {
        text: "SUPPORT",
        location: "https://spectrum.chat/victory"
      },
      {
        text: "GITHUB",
        location: "https://github.com/FormidableLabs/victory"
      },
      {
        text: "FAQS",
        location: "https://github.com/FormidableLabs/victory"
      }
    ]
  },
  features: [
    {
      title: "Robust",
      description:
        "Area charts. Scatter plots. Voronoi polygons. Easy-to-use components for complex charting.",
      icon: require("../../../static/feature-robust.svg")
    },
    {
      title: "Flexible",
      description:
        "Fully contained, reusable data visualization elements are responsible for their own styles and behaviors.",
      icon: require("../../../static/feature-flexible.svg")
    },
    {
      title: "Native",
      description:
        "Extend the Victory experience on Android and iOS platforms with an identical API.",
      code: "npm install victory-native",
      icon: require("../../../static/feature-native.png")
    }
  ],
  getStarted: {
    description:
      "Victory is an opinionated, but fully overridable, ecosystem of composable React components. Check out the docs to see how you can get started building interactive data visualizations.",
    link: {
      text: "DOCUMENTATION",
      location: "/docs"
    }
  },
  oss: {
    ossArray: [
      {
        title: "Spectacle",
        description:
          "A React.js based library for creating sleek presentations using JSX syntax that gives you the ability to live demo your code.",
        logo: require("../../../static/logos/logo-spectacle.png"),
        link: "https://formidable.com/open-source/spectacle",
        hasOwnLogo: true
      },
      {
        title: "Development Dashboards",
        description:
          "Dashboards to organize and intuitively display your dev server and tooling output.",
        abbreviation: "Dd",
        color: "#8bd48b",
        number: "17",
        link: "https://formidable.com/open-source/development-dashboards/"
      },
      {
        title: "React Animations",
        description:
          "A collection of animations that can be used with many inline style libraries, such as Radium or Aphrodite.",
        abbreviation: "Ra",
        color: "#86b9e6",
        number: "03",
        link: "https://formidable.com/open-source/react-animations"
      },
      {
        title: "Enzyme Matchers",
        description:
          "Run common assertions on your React components using Enzyme in a Jest or Jasmine environment.",
        abbreviation: "Em",
        color: "#e48055",
        number: "09",
        link: "https://formidable.com/open-source/jest-enzyme/"
      }
    ],
    link: {
      text: "VIEW ALL",
      location: "https://formidable.com/open-source"
    }
  }
};

export default content;
