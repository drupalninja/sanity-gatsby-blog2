export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "633c3ba7890c57205e575b03",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-2-studio-mm1r7cr7",
                  apiId: "02d247d6-5010-4083-92a3-ed93dc5f86ea",
                },
                {
                  buildHookId: "633c3ba8d722ae1c84e175c9",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-2-web-cqgyufp5",
                  apiId: "eedea50e-408b-403e-89eb-201a66bceb37",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/drupalninja/sanity-gatsby-blog2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-2-web-cqgyufp5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
