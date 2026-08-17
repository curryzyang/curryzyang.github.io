// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-invited-talks",
          title: "Invited Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/invited%20talks/";
          },
        },{id: "nav-mentorship-amp-teaching",
          title: "Mentorship &amp; Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-awards",
          title: "Awards",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
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
          title: 'Our paper entitled “Event-Triggered Boundary Control of Mixed-Autonomy Traffic” has been accepted by...',
          description: "",
          section: "News",},{id: "news-our-paper-entitled-mitigating-stop-and-go-traffic-congestion-with-operator-learning-has-been-accepted-by-transportation-research-part-c-emerging-technologies",
          title: 'Our paper entitled “Mitigating Stop-and-Go Traffic Congestion with Operator Learning” has been accepted...',
          description: "",
          section: "News",},{id: "news-i-visited-prof-karl-henrik-johansson-s-research-group-from-26th-30th-may-at-kth-and-gave-a-talk-on-mitigating-traffic-congestion-with-operator-learning-at-netcon-seminar-of-kth-royal-institute-of-technology",
          title: 'I visited Prof. Karl Henrik Johansson’s research group from 26th-30th May at KTH,...',
          description: "",
          section: "News",},{id: "news-i-give-a-talk-on-learning-for-dynamics-and-control-of-mobility-systems-iii-learning-based-traffic-control-at-summer-school-of-cpde-2025",
          title: 'I give a talk on “Learning for Dynamics and Control of Mobility Systems...',
          description: "",
          section: "News",},{id: "news-i-presented-our-paper-entitled-neural-operators-for-adaptive-control-of-traffic-flow-models-at-5th-ifac-workshop-on-control-of-systems-governed-by-partial-differential-equations-cpde-2025",
          title: 'I presented our paper entitled “Neural Operators for Adaptive Control of Traffic Flow...',
          description: "",
          section: "News",},{id: "news-i-presented-our-paper-entitled-neural-operator-control-for-traffic-flow-models-with-stochastic-demand-at-5th-ifac-workshop-on-control-of-systems-governed-by-partial-differential-equations-cpde-2025",
          title: 'I presented our paper entitled “Neural-Operator Control for Traffic Flow Models with Stochastic...',
          description: "",
          section: "News",},{id: "news-our-paper-entitled-neural-operators-for-adaptive-control-of-freeway-traffic-has-been-accepted-by-automatica-as-a-regular-paper",
          title: 'Our paper entitled “Neural Operators for Adaptive Control of Freeway Traffic” has been...',
          description: "",
          section: "News",},{id: "news-our-paper-entitled-event-triggered-regulation-of-mixed-autonomy-traffic-under-varying-traffic-conditions-has-been-accepted-by-ieee-transactions-on-intelligent-transportation-systems-as-a-regular-paper",
          title: 'Our paper entitled “Event-Triggered Regulation of Mixed-Autonomy Traffic Under Varying Traffic Conditions” has...',
          description: "",
          section: "News",},{id: "news-our-paper-entitled-operator-learning-for-robust-stabilization-of-linear-markov-jumping-hyperbolic-pdes-has-been-accepted-by-automatica",
          title: 'Our paper entitled “Operator learning for robust stabilization of linear Markov-jumping hyperbolic PDEs”...',
          description: "",
          section: "News",},{id: "news-i-have-successfully-passed-my-doctoral-dissertation-defense-and-am-now-officially-a-phd",
          title: 'I have successfully passed my doctoral dissertation defense and am now officially a...',
          description: "",
          section: "News",},{id: "news-our-paper-mean-square-exponential-stabilization-of-mixed-autonomy-traffic-pde-system-has-been-selected-as-editor-s-choice-of-automatica",
          title: 'Our paper “Mean-square exponential stabilization of mixed-autonomy traffic PDE system” has been selected...',
          description: "",
          section: "News",},{id: "news-our-paper-cooperative-switched-formation-control-of-autonomous-vehicles-an-event-triggered-approach-to-input-saturation-and-time-delay-challenges-has-been-posted-on-arxiv",
          title: 'Our paper “Cooperative Switched Formation Control of Autonomous Vehicles: An Event-triggered Approach to...',
          description: "",
          section: "News",},{id: "news-our-paper-event-triggered-gain-scheduling-of-2-x-2-linear-hyperbolic-pdes-via-neural-operators-full-version-has-been-posted-on-arxiv",
          title: 'Our paper “Event-Triggered Gain Scheduling of 2 x 2 Linear Hyperbolic PDEs via...',
          description: "",
          section: "News",},{id: "news-our-paper-robust-stabilization-of-linear-markov-jumping-hyperbolic-pdes-with-boundary-input-delay-has-been-posted-on-arxiv",
          title: 'Our paper “Robust Stabilization of Linear Markov-Jumping Hyperbolic PDEs with Boundary Input Delay”...',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-the-intr-outstanding-graduate-award-phd-in-rcognition-of-outstanding-academic-performance-remarkable-research-contributions-and-positive-engagement-in-the-academic-community-during-the-study-at-the-hong-kong-university-of-science-and-technology-guangzhou",
          title: 'I have been awarded the INTR Outstanding Graduate Award(PhD) in rcognition of outstanding...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%69%68%75%61%69.%7A%68%61%6E%67@%63%69%74%79%75.%65%64%75.%68%6B", "_blank");
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
