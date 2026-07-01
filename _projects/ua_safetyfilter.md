---
layout: academic-project
permalink: /publications/ua_safetyfilter/
title: Safety Filter for Underactuated Robotic Arms with Velocity Inputs
description: Task-space CBF-QP safety filtering with explicit Jacobian-range feasibility for velocity-driven underactuated robotic arms.
img: assets/academic-project/images/ua_safetyfilter/problem_statement_overview.png
importance: 99
category: publication
giscus_comments: false

paper_title: Safety Filter for Underactuated Robotic Arms with Velocity Inputs
paper_description: Task-space CBF-QP safety filtering with explicit Jacobian-range feasibility for velocity-driven underactuated robotic arms.
institution: Pohang University of Science and Technology (POSTECH)
venue: IROS 2026
# equal_contribution_note: "* Indicates equal contribution"

authors:
  - name: Hyunseo Jung
    url: "https://hsjung02.github.io"
    equal: false
  - name: Keehoon Kim
    url: "https://scholar.google.com/citations?user=P8CKlYQAAAAJ&hl=ko&oi=ao"
    equal: false

links:
  - label: Paper
    url: /assets/academic-project/pdfs/ua_safetyfilter/PMDS-CBF.pdf
    icon: fas fa-file-pdf
  - label: Video
    url: /assets/academic-project/videos/ua_safetyfilter/IROS2026_video_with_affiliation.mp4
    icon: fas fa-video
  # - label: Code
  #   url: https://github.com/your/repo
  #   icon: fab fa-github
  # - label: arXiv
  #   url: https://arxiv.org
  #   icon: ai ai-arxiv

# teaser_image: /assets/academic-project/images/ua_safetyfilter/problem_statement_overview.png
# teaser_caption: A task-space safety filter can lose its CBF guarantee when an infeasible optimized command is projected through the robot Jacobian; the proposed filter enforces realizability inside the QP.
# teaser_width: 30%

abstract: >
  This paper presents a task space safety filter for velocity-driven underactuated robotic manipulators.
  Existing control barrier function-based safety filters are mainly developed for fully actuated or kinematically redundant robots, for which any local task space velocity is realizable away from singularities.
  For underactuated manipulators, however, the feasible task space velocities are restricted to the Jacobian range even at regular configurations, so a command that satisfies a CBF constraint at the optimization stage can lose its safety guarantee after pseudoinverse execution.
  To address this issue, we explicitly enforce motion feasibility in the safety filter by constraining the filtered velocity to the Jacobian range through an equivalent left-nullspace condition.
  The resulting formulation unifies obstacle avoidance, general inequality and equality motion constraints, and optional joint velocity limits in a single convex quadratic program.
  We further discuss feasibility of the QP, and effect of CBF parameters on the QP performance.
  Experiments on underactuated robotic arm scenarios validate the proposed approach.

figure_sections:
  - title: Method
    layout: grid
    grid_columns: 2
    image_height: 350px
    image_fit: contain
    figures:
      - image: /assets/academic-project/images/ua_safetyfilter/problem_statement_overview.png
        alt: Underactuated task-space safety filter problem statement
        title: Motivation
        caption: A filtered task-space velocity that is not in the Jacobian range may become unsafe after pseudoinverse execution.
      - image: /assets/academic-project/images/ua_safetyfilter/projection_mismatch_example.png
        alt: Projection mismatch between optimized and executed task-space velocities
        title: Feasibility Constraint
        caption: The proposed QP constrains the filtered velocity to the Jacobian range through the left nullspace, so the optimized command matches the executed task motion.
      # - image: /assets/academic-project/images/ua_safetyfilter/summary_bars.png
      #   alt: Quantitative comparison of CBF violation and tracking metrics
      #   title: Quantitative Results
      #   caption: In the wall-constrained S2 and augmented-task S3 scenarios, the baseline shows 25.37 percent and 24.70 percent CBF violation rates, while the proposed filter reaches 0 percent.
      # - image: /assets/academic-project/images/ua_safetyfilter/s3_e.png
      #   alt: Tracking error in the augmented task scenario
      #   title: Tracking Behavior
      #   caption: For the 9-D augmented task, enforcing realizability reduces RMS tracking error from 0.3569 to 0.0856 while maintaining safety.
  - title: Experiments
    layout: grid
    grid_columns: 3
    image_height: 300px
    image_fit: contain
    figures:
      - image: /assets/academic-project/images/ua_safetyfilter/s1_pic.png
        alt: Test 1
        title: Test 1
        caption: Locked 2 joints --> 5 actuation DoF in 6D (underactuated)
      - image: /assets/academic-project/images/ua_safetyfilter/s2_pic.png
        alt: Test 2
        title: Test 2
        caption: Locked 2 joints + Virtual wall constraint
      - image: /assets/academic-project/images/ua_safetyfilter/s3_pic.png
        alt: Test 3
        title: Test 3
        caption: No locks, but Link 4's position is augmented to state --> 7 actuation DoF in 9D (underactuated)
  - title: Results
    layout: grid
    grid_columns: 3
    image_height: 300px
    image_fit: contain
    figures:
      - image: /assets/academic-project/images/ua_safetyfilter/s1_e.png
        alt: Test 1, tracking error
        title: Test 1, tracking error
        caption: Without constraints, proposed method does not change safety filter.
      - image: /assets/academic-project/images/ua_safetyfilter/s2_e.png
        alt: Test 2, tracking error
        title: Test 2, tracking error
        caption: Without proposed constraint, high tracking eror is observed.
      - image: /assets/academic-project/images/ua_safetyfilter/s2_h.png
        alt: Test 2, constraint violation
        title: Test 2, constraint violation
        caption: Without proposed constraint, violation occurs.
      - image: /assets/academic-project/images/ua_safetyfilter/s3_e.png
        alt: Test 3, tracking error
        title: Test 3, tracking error
        caption: Without proposed constraint, high tracking eror is observed.
      - image: /assets/academic-project/images/ua_safetyfilter/s3_h.png
        alt: Test 3, constraint violation
        title: Test 3, constraint violation
        caption: Without proposed constraint, violation occurs.
      - image: /assets/academic-project/images/ua_safetyfilter/summary_bars.png
        alt: Summary
        title: Summary
        caption: Proposed constraint improves tracking error and constraint violation.


video_sections:
  - title: Safety
    grid_columns: 2
    per_slide: 2
    videos:
      - src: /assets/academic-project/videos/ua_safetyfilter/safety_unsafe.mp4
        title: Unsafe
      - src: /assets/academic-project/videos/ua_safetyfilter/safety_safe.mp4
        title: Safe (proposed)
  - title: Tracking Performance
    grid_columns: 2
    per_slide: 2
    videos:
      - src: /assets/academic-project/videos/ua_safetyfilter/tracking_poor.mp4
        title: Poor
      - src: /assets/academic-project/videos/ua_safetyfilter/tracking_good.mp4
        title: Good (proposed)

# poster_title: Poster
# poster_pdf: /assets/academic-project/pdfs/ua_safetyfilter/PMDS-CBF.pdf

# bibtex: |
#   @inproceedings{jung2026safetyfilter,
#     title={Safety Filter for Underactuated Robotic Arms with Velocity Inputs},
#     author={Jung, Hyunseo and Kim, Keehoon},
#     booktitle={IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
#     year={2026}
#   }
---
