import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Payments Mastery',
  tagline: 'A structured learning path for senior engineers',
  favicon: 'img/favicon-32.png',

  // Custom domain configuration
  url: 'https://paymentsmastery.com',
  baseUrl: '/',
  organizationName: 'luzan',
  projectName: 'payment-space',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // SEO: Enhanced metadata
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'payment processing, fintech, payment facilitator, PayFac, merchant onboarding, payment gateway, PCI compliance, payment systems, senior engineer, learning guide',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Payments Mastery',
      },
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Enable Mermaid support
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve docs at root
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/luzan/payment-space/tree/main/',
          sidebarCollapsible: true,
          sidebarCollapsed: true,
          // SEO: Enable git-based last update information
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
        // SEO: Enable sitemap generation
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig: {
    // SEO: Enhanced metadata for social sharing
    metadata: [
      {name: 'keywords', content: 'payment processing, fintech, PayFac, senior engineer, learning guide, payment systems'},
      {name: 'og:type', content: 'website'},
      {name: 'og:site_name', content: 'Payments Mastery'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    // SEO: Open Graph image (add og-image.png to static/img/)
    image: 'img/og-image.png',
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
    navbar: {
      title: 'Payments Mastery',
      logo: {
        alt: 'Payments Mastery Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
          activeBaseRegex: '^/$',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Learning Path',
        },
        {
          href: 'https://github.com/luzan/payment-space',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Payment Learning Guide. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
