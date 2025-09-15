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
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-aria-mk1",
          title: 'Aria MK1',
          description: "A portable wind turbine for hikers and remote personnel.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aria_mk1/";
            },},{id: "projects-automotiq-ai",
          title: 'Automotiq.ai',
          description: "Real-time fleet vehicle maintenance with AI.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/automotiq-ai/";
            },},{id: "projects-cosmopilot",
          title: 'Cosmopilot',
          description: "An extraterrestrial navigation app that uses satellite topographical data to generate safe paths.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cosmopilot/";
            },},{id: "projects-d-o-droid",
          title: 'D-O Droid',
          description: "A companion bot inspired by the popular Star Wars droid.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/do-droid/";
            },},{id: "projects-gestr",
          title: 'Gestr',
          description: "A smart glove for speech impairments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gestr/";
            },},{id: "projects-glo-rev-1",
          title: 'Glo Rev 1',
          description: "A quad-channel adressable RGB LED controller.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/glo-r1/";
            },},{id: "projects-glo-rev-2",
          title: 'Glo Rev 2',
          description: "A series of Internet-connected, RGB &amp; ARGB LED controllers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/glo-r2/";
            },},{id: "projects-kitt",
          title: 'KITT',
          description: "A (highly overengineered) line follower.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kitt/";
            },},{id: "projects-lazr",
          title: 'LAZR',
          description: "A gesture-based TV remote.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lazr/";
            },},{id: "projects-omnipet",
          title: 'OmniPet',
          description: "An automated pet feeder.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/omnipet/";
            },},{id: "projects-saltscale",
          title: 'SaltScale',
          description: "A water softener brine tank sensor using off-the-shelf parts.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/saltscale/";
            },},{id: "projects-sol",
          title: 'Sol',
          description: "A concept automatic solar tracker.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sol/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%61%76%65%6B%61%72.%6F%6D@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/anaveo", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/omanavekar", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/om-anavekar", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/omanavekar", "_blank");
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
