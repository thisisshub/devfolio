module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `http://thisisshub.in`,
    // Your Name
    name: 'Shubhashish Dixit',
    // Main Site Title
    title: `Shubhashish Dixit | Python Developer`,
    // Description that goes under your name in main bio
    description: `A developer with knack for chess`,
    // Optional: Twitter account handle
    author: `@thisisshub`,
    // Optional: Github account URL
    github: `https://github.com/thisisshub`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/shubhashish-dixit-81629a186/`,
    // Content of the About Me section
    about: `A skilled python developer who is driven to work in a motivated environment to utilize my training to get the job done`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Rpmlint',
        description:
          'Rpmlint is a tool for checking common errors in rpm packages',
        link: 'https://github.com/thisisshub/rpmlint',
      },
      {
        name: 'DSA',
        description:
          'Implemented Data Structures and Algorithms in Python',
        link: 'https://github.com/thisisshub/DSA',
      },
      {
        name: 'Notes Website',
        description:
          'Developed a website that allows students to store, upload, download, filter (on the basis of branch and semester)',
        link: 'https://github.com/thisisshub/django_project',
      },
      {
        name: 'E-Certifcate Generator',
        description:
          'An E-Certificate Generator built using cv2 which makes a 1000+ template certificates under 10 secs with different attendee names',
        link: 'https://github.com/thisisshub/version-beta'
      },
      {
        name: 'Alexis OS',
        description:
          'An Operating System Alexis OS which uses generic Linux kernel 4.2.0 and Rescue CD ISO using Linux From Scratch 8.2',
        link: 'https://github.com/thisisshub/Alexis'
      },
    ],

    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Google Summer of Code',
        description: 'Student Developer, June 2020 - September 2020',
        link: 'https://gist.github.com/thisisshub/8610913957eeb17c14381923968bf4c8',
      },
      {
        name: 'Madhya Pradesh Electrical Board',
        description: 'Student Intern, June 2019 - July 2019',
        link: ''
      },
      {
        name: 'Freelancer',
        description: 'Full-Stack Developer, June 2018 - August 2019',
        link: ''
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, JavaScript, Node.js, React',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
  pathPrefix: "/devfolio",
};
