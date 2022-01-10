module.exports = {
  title: "Crypto Hunter Blog",
  tagline: 'From Zero to Hero on Crypto Journey Investment',
  url: 'https://crypto/xstarseed.com',
  baseUrl: '/',
  favicon: 'img/favicon-btc-1.png',
  organizationName: 'edwardtran97', // Usually your GitHub org/user name.
  projectName: 'crypto', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CRYPTO BLOG',
      logo: {
        alt: 'Crypto Blog logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Dữ liệu',
          position: 'left',
        },
        { 
          to: 'blog', 
          label: 'Bài viết', 
          position: 'left' 
        },
        {
          href: 'https://github.com/edwardtran97/crypto',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Chuyên mục',
          items: [
            {
              label: 'Bài học đầu tư',
              to: 'docs/doc1',
            },

            {
              label: 'Kiến thức',
              to: 'docs/js-overview',
            },

            {
              label: 'Phân tích dữ liệu',
              to: 'docs/git-blog',
            },
          ],
        },
        {
          title: 'Liên hệ',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/edwardtran0902',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/edwardtran0902',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/edwardtran97/',
            },
          ],
        },
        {
          title: 'Cộng đồng đầu tư',
          items: [
            {
              label: "Bao's Invest",
              href: 'https://t.me/BAO_Invest',
            },
            {
              label: 'Thuan Capital',
              href: 'https://t.me/ThuanCapital',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Edward Tran. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
