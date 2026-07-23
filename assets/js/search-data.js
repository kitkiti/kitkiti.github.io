// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Research publications and preprints.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected research, web, systems, and machine-learning projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, research, teaching, professional experience, projects, skills, and honors.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching experience and course information.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-repositories",
              title: "repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-preprint-representation-aware-unlearning-via-activation-signatures-from-suppression-to-entity-signature-erasure-is-now-available-on-arxiv",
          title: 'Our preprint, “Representation-Aware Unlearning via Activation Signatures: From Suppression to Entity-Signature Erasure,” is...',
          description: "",
          section: "News",},{id: "news-team-hypercite-was-named-champion-at-the-bracu-cse471-project-showcase-read-the-showcase-newsletter",
          title: 'Team HyperCite was named Champion at the BRACU CSE471 Project Showcase. Read the...',
          description: "",
          section: "News",},{id: "news-i-joined-the-department-of-computer-science-and-engineering-at-brac-university-as-an-adjunct-lecturer",
          title: 'I joined the Department of Computer Science and Engineering at BRAC University as...',
          description: "",
          section: "News",},{id: "projects-hambamart",
          title: 'HambaMart',
          description: "Django-based livestock marketplace with multi-role transaction and inventory workflows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hambamart/";
            },},{id: "projects-hypercite",
          title: 'HyperCite',
          description: "AI research summarization and collaboration hub with verifiable, source-anchored citations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hypercite/";
            },},{id: "projects-mewply",
          title: 'Mewply',
          description: "MERN music-streaming platform with user, administration, and backend applications.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mewply/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%61%73%66%69%61%7A%61%6D%61%6E%61%64%72%69%74%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kitkiti", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tasfia-zaman-adrita", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
