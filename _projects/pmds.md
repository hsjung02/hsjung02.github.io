---
layout: academic-project
permalink: /publications/pmds/
title: Learning Spatially Ambiguous Trajectories from Demonstrations via Phase-Modulated Dynamical Systems
description: Learning spatially ambiguous trajectories from demonstrations using phase-modulated dynamical systems.
img: assets/academic-project/images/pmds/pmds_thumbnail.png
importance: 98
category: publication
giscus_comments: false

paper_title: Learning Spatially Ambiguous Trajectories from Demonstrations via Phase-Modulated Dynamical Systems
paper_description: Learning spatially ambiguous trajectories from demonstrations using phase-modulated dynamical systems.
institution: Pohang University of Science and Technology (POSTECH)
venue: IEEE Robotics and Automation Letters (RA-L), 2026

authors:
  - name: Hyunseo Jung
    url: "https://hsjung02.github.io"
  - name: Jonghyeok Kim
    url: "https://sentojh.github.io"
  - name: Keehoon Kim
    url: "https://scholar.google.com/citations?user=P8CKlYQAAAAJ&hl=ko&oi=ao"

links:
  # Paper URL follows the existing RA-L acceptance announcement in _news/2026RAL.md.
  - label: Paper
    url: https://ieeexplore.ieee.org/document/11685323/
    icon: fas fa-file-alt

# Add the paper's abstract and PMDS-specific figures/videos when available.


abstract: >
  This paper presents a single-demonstration Learning from Demonstration (LfD) framework for imitating spatially ambiguous trajectories, including motions with self-intersections, reversals, and stopping behaviors. Existing approaches based on Dynamical Systems or Dynamic Movement Primitives typically either fail to reproduce such ambiguous trajectories or rely on fixed time parameterizations, making them sensitive to variations in execution speed and unsuitable for compliant human-robot interaction because task progress can become desynchronized from the executed motion. To address these limitations, we propose a phase-modulated dynamical system. The key idea is to introduce a phase-evolution law that synchronizes task progress with the executed motion, thereby making the system time-invariant. We show that the proposed system (i) exactly reproduces the demonstrated motion when initialized on the demonstrated trajectory, (ii) guarantees exponential convergence to the demonstrated trajectory from off-trajectory initial conditions, and (iii) remains robust to perturbations while preserving trajectory topology. Rigorous theoretical analysis establishes these properties, and experimental results demonstrate stable and compliant behavior under execution-speed variations and external interventions.


bibtex: |
  @ARTICLE{jung2026pmds,
    author={Jung, Hyunseo and Kim, Jonghyeok and Kim, Keehoon},
    journal={IEEE Robotics and Automation Letters},
    title={Learning Spatially Ambiguous Trajectories From Demonstrations Via Phase-Modulated Dynamical Systems},
    year={2026},
    volume={},
    number={},
    pages={1-8},
    keywords={Trajectory;Timing;Dynamical systems;Learning (artificial intelligence);Convergence;Modeling;Robots;Vectors;TV;Chromium;Learning from Demonstrations;Dynamical Systems;Path-following control},
    doi={10.1109/LRA.2026.3732892}}

---
