module.exports = {
  title: "Crypto Hunter Blog",
  tagline: 'From Zero to Hero on Crypto Investment Journey',
  url: 'https://crypto.xstarseed.com',
  baseUrl: '/',
  favicon: 'img/favicon-btc-1.png',
  organizationName: 'edwardtran97', // Usually your GitHub org/user name.
  projectName: 'crypto', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CRYPTO HUNTER BLOG',
      logo: {
        alt: 'Crypto Blog logo',
        src: 'img/favicon-btc-1.png',
      },
      items: [
        {
          to: 'docs/nhat-ky-dau-tu-01122021',
          activeBasePath: 'docs',
          label: 'Tư liệu',
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
              label: 'Nhật ký đầu tư',
              to: 'docs/nhat-ky-dau-tu-01122021',
            },

            {
              label: 'Kiến thức',
              to: 'docs/nhat-ky-dau-tu-06122021',
            },

            {
              label: 'Phân tích dữ liệu',
              to: 'docs/nhat-ky-dau-tu-06122021',
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
      copyright: `Copyright © ${new Date().getFullYear()} Crypto Hunter Blog. Built with Docusaurus.`,
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
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Crypto Hunter Blog`,
          },

          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
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
