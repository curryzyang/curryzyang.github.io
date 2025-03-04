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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-invited-talks",
          title: "invited talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/invited%20talks/";
          },
        },{id: "nav-mentorship-amp-teaching",
          title: "mentorship &amp; teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-our-paper-entitled-impact-of-connected-automated-vehicle-platooning-on-mixed-lane-free-traffic-has-been-accepted-by-the-27th-international-conference-of-hong-kong-society-for-transportation-studies-hksts-in-the-poster-session",
          title: 'Our paper entitled “Impact of Connected Automated Vehicle Platooning On Mixed Lane-free Traffic”...',
          description: "",
          section: "News",},{id: "news-our-paper-entitled-robust-boundary-stabilization-of-stochastic-hyperbolic-pdes-has-been-accepted-by-2024-american-control-conference-acc-for-oral-presentation",
          title: 'Our paper entitled “Robust Boundary Stabilization of Stochastic Hyperbolic PDEs” has been accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-entitled-neural-operators-for-boundary-stabilization-of-stop-and-go-traffic-has-been-accepted-by-2024-learning-for-dynamics-and-control-conference-l4dc-in-the-poster-session",
          title: 'Our paper entitled “Neural Operators for Boundary Stabilization of Stop-and-go Traffic” has been...',
          description: "",
          section: "News",},{id: "news-our-paper-entitled-mean-square-exponential-stabilization-of-mixed-autonomy-traffic-pde-system-has-been-accepted-by-automatica-as-a-regular-paper",
          title: 'Our paper entitled “Mean-Square Exponential Stabilization of Mixed-Autonomy Traffic PDE System” has been...',
          description: "",
          section: "News",},{id: "news-our-paper-entitled-event-triggered-boundary-control-of-mixed-autonomy-traffic-has-been-accepted-by-2024-63rd-ieee-conference-on-decision-and-control-cdc-for-oral-presentation",
          title: 'Our paper entitled “Event-triggered Boundary Control of Mixed-autonomy Traffic” has been accepted by...',
          description: "",
          section: "News",},{id: "news-our-paper-entitled-mitigating-stop-and-go-traffic-congestion-with-operator-learning-has-been-accepted-by-transportation-research-part-c-emerging-technologies",
          title: 'Our paper entitled “Mitigating Stop-and-Go Traffic Congestion with Operator Learning” has been accepted...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%7A%68%61%6E%67%31%36%39@%63%6F%6E%6E%65%63%74.%68%6B%75%73%74-%67%7A.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yihuai-zhang-022ab81a7", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=w81fnD4AAAAJ&hl", "_blank");
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
