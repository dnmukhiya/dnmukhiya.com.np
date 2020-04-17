module.exports = {
  title: "D.N. Mukhiya",
  tagline: "I'm English Teacher and Trainer, TOT and ELT Textbook writer.",
  url: "https://dnmukhiya.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "dnmukhiya", // Usually your GitHub org/user name.
  projectName: "dnmukhiya.com.np", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "D.N. Mukhiya",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png"
      },
      links: [
        {
          to: "docs/doc1",
          activeBasePath: "docs",
          label: "Publications",
          position: "left"
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://www.facebook.com/dn.mukhiya",
          label: "Facebook",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Publications",
          items: [
            {
              label: "Compulsory English Grammar",
              to: "docs/doc1"
            },
            {
              label: "Maxim of English Grammar",
              to: "docs/doc2"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Facebook page",
              href: "https://www.facebook.com/groups/145416872261596/"
            },
            {
              label: "Website",
              href: "https://dnmukhiya.com.np"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/dnmukhiya"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/dnmukhiya"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} D.N. Mukhiya, Nepal.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
