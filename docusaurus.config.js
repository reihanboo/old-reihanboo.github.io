// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const offlineSearch = require.resolve("@cmfcmf/docusaurus-search-local");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Reihan",
  tagline: "Everything, in time",
  url: "https://reihan.pages.dev/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/pokemon.gif",
  organizationName: "reihanboo", // Usually your GitHub org/user name.
  projectName: "reihanboo.github.io", // Usually your repo name.
  deploymentBranch: "main",
  plugins: ["@docusaurus/theme-live-codeblock", offlineSearch],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    // locales: ["en", "id"],
    // localeConfigs: {
    //   en: {
    //     htmlLang: "en-GB",
    //   },
    // },
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/reihanboo/reihanboo.github.io/blob/main/",
        },
        blog: {
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          // Please change this to your repo.
          editUrl:
            "https://github.com/reihanboo/reihanboo.github.io/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      announcementBar: {
        id: "support_us",
        content:
          '⭐️ If this site can help you, welcome to give a star to support the author  <a target="_blank" rel="noopener noreferrer" href="https://github.com/reihanboo">GitHub</a>',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      navbar: {
        title: "Reihan's Notebook",
        hideOnScroll: true,
        items: [
          {
            type: "search",
            position: "right",
          },
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Notebook",
          },
          {
            to: "blog",
            label: "Blog",
            position: "right",
          },
          {
            href: "https://github.com/reihanboo/reihanboo.github.io",
            label: "GitHub",
            position: "right",
          },
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "javascript",
        additionalLanguages: ["rust"],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "GME4V4T8GU",

        // Public API key: it is safe to commit it
        apiKey: "cb221492f1e5bb43bdc23a6e01775c8d",

        indexName: "reihannotebook",
      },
    }),
};

module.exports = config;
