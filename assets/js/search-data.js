const ninja = document.querySelector('ninja-keys');

/* Search only publication project pages and projects visible on the projects page. */ninja.data = [{
      id: "project-/projects/dynamic_speed_bump/",
      title: "Dynamic Speed Bump",
      description: "Development of a dynamic speed bump for speed-selective penalty on cars",
      section: "Projects",
      searchPriority: 0,
      handler: () => {
        window.location.href = "/projects/dynamic_speed_bump/";
      },
    },{
      id: "project-/projects/blackbox/",
      title: "Blackbox video analyzing system",
      description: "Blackbox video analyzing system for determining fault rate on car accidents",
      section: "Projects",
      searchPriority: 0,
      handler: () => {
        window.location.href = "https://github.com/hsjung02/Blackbox-Video-Analyzing-System";
      },
    },{
      id: "project-/projects/the_genius/",
      title: "The Genius",
      description: "Funny games appeared on 'The Genius'",
      section: "Projects",
      searchPriority: 0,
      handler: () => {
        window.location.href = "https://github.com/hsjung02/TheGenius";
      },
    },{
      id: "project-/publications/pmds/",
      title: "Learning Spatially Ambiguous Trajectories from Demonstrations via Phase-Modulated Dynamical Systems",
      description: "Learning spatially ambiguous trajectories from demonstrations using phase-modulated dynamical systems.",
      section: "Publications",
      searchPriority: 1,
      handler: () => {
        window.location.href = "/publications/pmds/";
      },
    },{
      id: "project-/publications/ua_safetyfilter/",
      title: "Safety Filter for Underactuated Robotic Arms with Velocity Inputs",
      description: "Task-space CBF-QP safety filtering with explicit Jacobian-range feasibility for velocity-driven underactuated robotic arms.",
      section: "Publications",
      searchPriority: 1,
      handler: () => {
        window.location.href = "/publications/ua_safetyfilter/";
      },
    },].sort((a, b) => b.searchPriority - a.searchPriority);
