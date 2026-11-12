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
          description: "Selected research and technical work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-updates",
          title: "updates",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-misc",
              title: "misc",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/misc/";
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
          section: "News",},{id: "news-our-paper-representation-aware-unlearning-via-activation-signatures-from-suppression-to-entity-signature-attenuation-was-accepted-to-findings-of-emnlp-2026",
          title: 'Our paper, “Representation-Aware Unlearning via Activation Signatures: From Suppression to Entity-Signature Attenuation,” was...',
          description: "",
          section: "News",},{id: "news-our-paper-same-sink-different-plumbing-reproducing-and-refining-the-mechanism-of-attention-sinks-was-accepted-to-the-blackboxnlp-2026-reproducibility-special-track",
          title: 'Our paper, “Same Sink, Different Plumbing: Reproducing and Refining the Mechanism of Attention...',
          description: "",
          section: "News",},{id: "projects-dsdm-knowledge-editing-experiments",
          title: 'DSDM Knowledge-Editing Experiments',
          description: "Experimental infrastructure for DSDM-based replacement and knowledge editing, including ROME-aligned evaluation, consecutive editing, bounded sweeps, and reproducible experiment tooling.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dsdm-knowledge-editing/";
            },},{id: "projects-hypercite",
          title: 'HyperCite',
          description: "Research-assistance platform combining hybrid retrieval, cross-paper evidence diversification, and excerpt-anchored citations for verifiable literature-grounded answers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hypercite/";
            },},{id: "projects-ld-aware-genomic-prediction",
          title: 'LD-Aware Genomic Prediction',
          description: "EBMGP-style genomic prediction study evaluating LD-aware SNP representations, pooling strategies, and classical baselines across three species and eleven traits.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ld-aware-genomic-prediction/";
            },},{id: "projects-minivsfs",
          title: 'MiniVSFS',
          description: "C implementation of a simplified inode-based filesystem image builder and updater, covering superblocks, allocation bitmaps, inode tables, and directory entries.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/minivsfs/";
            },},{id: "projects-dual-mpu-posture-corrector",
          title: 'Dual-MPU Posture Corrector',
          description: "Embedded posture-monitoring prototype using dual IMUs, calibration and motion-state logic, haptic feedback, and Wi-Fi telemetry.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/posture-corrector/";
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
