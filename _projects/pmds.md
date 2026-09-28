---
layout: academic-project
permalink: /publications/pmds/
title: Learning Spatially Ambiguous Trajectories from Demonstrations via Phase-Modulated Dynamical Systems
description: Learning spatially ambiguous trajectories from demonstrations using phase-modulated dynamical systems.
img: assets/academic-project/images/pmds/pmds_thumbnail.png
importance: 98
category: publication
giscus_comments: false
math: true

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
  - label: Paper
    url: https://ieeexplore.ieee.org/document/11685323/
    icon: fas fa-file-alt

# teaser_image: /assets/academic-project/images/pmds/pmds_thumbnail.png
# teaser_alt: A Franka Panda manipulating a rope around a cylinder
# teaser_width: 80%
# teaser_caption: Task progress synchronized with executed motion, from a single demonstration.

abstract: >
  This paper presents a single-demonstration Learning from Demonstration (LfD) framework for imitating spatially ambiguous trajectories, including motions with self-intersections, reversals, and stopping behaviors. Existing approaches based on Dynamical Systems or Dynamic Movement Primitives typically either fail to reproduce such ambiguous trajectories or rely on fixed time parameterizations, making them sensitive to variations in execution speed and unsuitable for compliant human-robot interaction because task progress can become desynchronized from the executed motion. To address these limitations, we propose a phase-modulated dynamical system. The key idea is to introduce a phase-evolution law that synchronizes task progress with the executed motion, thereby making the system time-invariant. We show that the proposed system (i) exactly reproduces the demonstrated motion when initialized on the demonstrated trajectory, (ii) guarantees exponential convergence to the demonstrated trajectory from off-trajectory initial conditions, and (iii) remains robust to perturbations while preserving trajectory topology. Rigorous theoretical analysis establishes these properties, and experimental results demonstrate stable and compliant behavior under execution-speed variations and external interventions.

# Content and reported results follow PMDS_v3, Sections III-IV and Appendix E.
# Blocks render in order; add text, figures, and videos without writing HTML.
sections:
  - title: Introduction
    id: introduction
    blocks:
      - content: |
          Dynamical System (DS) is being a standard choice for Learning from Demonstrations (LfD).
          It is reactive, time-invariant, and offers stability by construction which makes itself suitable for human-robot collaboration.

          However, since the velocity field depend only on the current position, it has one critical limitation: it cannot represent *spatial ambiguity*.
      - grid_columns: 2
        figures:
          - image: /assets/academic-project/images/pmds/fig_1a.png
            alt: Self-intersecting trajectory with two possible branches at the crossing
            caption: "(a) One position, different motion directions."
          - image: /assets/academic-project/images/pmds/fig_1b.png
            alt: Phase selects the branch when position alone gives multiple possible velocities
            caption: "(b) Phase selects the intended branch."
      - content: |
          To solve this, we propose the ***Phase-Modulated Dynamical System (PMDS)***.

  - title: Proposed Method
    id: method
    light: true
    blocks:
      - content: |
          Given a demonstration $X_d:[0,T]\to SE(3)$, PMDS computes the desired body twist $\text{gvf}(t)$ from the task pose $X(t)$ and phase $s(t)$:

          - **Mimicking vector field $\text{mvf}(t)$:** follows the demonstrated body twist $\mathcal{V}_d(s(t))$, expressed in the robot's current frame.
          - **Contracting vector field $\text{cvf}(t)$:** attracts the pose toward the demonstration, orthogonally to $\text{mvf}(t)$ in the weighted inner product.

          $$
          \text{gvf}(t) = \text{mvf}(t) + k\,\text{cvf}(t), \qquad k>0.
          $$

          The gain $k$ controls attraction strength without directly advancing phase.
      - grid_columns: 1
        image_aspect_ratio: auto
        figures:
          - image: /assets/academic-project/images/pmds/fig_visual_explanation.png
            width: 660px
            alt: Graphical interpretation of PMDS showing the mimicking field, contracting field, and phase modulation
            caption: "Mimicking follows the tangent; contraction reduces transverse error."
      - content: |
          ### Phase follows executed motion

          Phase evolves from the **realized** body twist $\mathcal{V}(t)$, using $\langle x,y\rangle_W=x^T W y$ with $W\succ0$:

          $$
          \dot{s}(t) =
          \begin{cases}
          \dfrac{\langle \text{mvf}(t),\mathcal{V}(t)\rangle_W}{\langle \text{mvf}(t),\text{mvf}(t)\rangle_W}, & \text{mvf}(t)\ne 0,\\[4pt]
          1, & \text{mvf}(t)=0.
          \end{cases}
          $$

          For $\text{mvf}(t)\ne 0$, faster forward motion advances phase faster, holding freezes it, and reverse motion moves it backward. At a **demonstrated stop** ($\text{mvf}(t)=0$), phase advances at unit rate to complete the recorded dwell. The law has no explicit wall-clock dependence.

  - title: Theoretical Properties
    id: properties
    blocks:
      - content: |
          Under the paper's continuous-time modeling and regularity assumptions:

          - **Exact replay** with ideal velocity execution and on-trajectory initialization.
          - **Exponential convergence** from off-trajectory states with closest-point phase initialization.
          - **Separated disturbance effects:** tangential disturbances affect phase; transverse disturbances affect path error.

  - title: Experiments and Results
    id: experiments
    light: true
    blocks:
      - grid_columns: 3
        videos:
          - video: /assets/academic-project/videos/pmds/threeturn-intervention.mp4
            poster: /assets/academic-project/videos/pmds/threeturn-intervention.jpg
            title: THREETURN
            alt: Robot winding a rope around a cylinder while a person intervenes
            caption: "Rope winding with human intervention."
          - video: /assets/academic-project/videos/pmds/stopgo-intervention.mp4
            poster: /assets/academic-project/videos/pmds/stopgo-intervention.jpg
            title: STOPGO
            alt: Robot retaining a demonstrated pause during physical intervention
            caption: "Preserving the demonstrated pause."
          - video: /assets/academic-project/videos/pmds/return-intervention.mp4
            poster: /assets/academic-project/videos/pmds/return-intervention.jpg
            title: RETURN
            alt: Robot performing an outward-and-return motion with physical intervention
            caption: "Reversing through the same positions."
      - grid_columns: 1
        image_aspect_ratio: auto
        figures:
          - image: /assets/academic-project/images/pmds/demo_trajectories_2x2_pmds.png
            width: 480px
            alt: Four demonstrated trajectories named SPIRAL, THREETURN, STOPGO, and RETURN, colored by phase
            caption: "Four SE(3) demonstrations, projected onto the x-y plane and colored by phase."
      - content: |
          | Benchmark | Motion to reproduce |
          | :--- | :--- |
          | **SPIRAL** | A smooth spiral without spatial ambiguity. |
          | **THREETURN** | Three turns with self-intersections, then an exit. |
          | **STOPGO** | A three-second dwell, then resumed motion. |
          | **RETURN** | Outward and return motions through the same positions. |

          ### Four complementary tests

          1. **Replay (T1):** reproduce the demonstration from its start.
          2. **Recovery (T2):** converge from three random off-trajectory poses.
          3. **Perturbation (T3):** execute twice the desired twist or its negative for three seconds.
          4. **Time shift (T4):** delay execution by five seconds.

          PMDS ($k=1,3$) is compared with [BCSDM](https://doi.org/10.1109/TRO.2025.3647763), [MPDS](https://doi.org/10.1109/LRA.2025.3595073), [SF-GVF](https://doi.org/10.1109/TRO.2020.3043690), an SE(3) [DMP](https://doi.org/10.1109/ICRA.2014.6907291), and [GDMP](https://arxiv.org/abs/2401.08238).

      - content: |
          ### Quantitative results
          {: #results}

          **PMDS preserves task behavior in both perturbation conditions on every benchmark, at both tested gains.** Each cell reports successful outcomes out of the **two tested conditions** (Fig. 4 of the [paper](https://ieeexplore.ieee.org/document/11685323/)).

          | Method | SPIRAL | THREETURN | STOPGO | RETURN |
          | :--- | :---: | :---: | :---: | :---: |
          | [BCSDM](https://doi.org/10.1109/TRO.2025.3647763) | 2/2 | 1/2 | 0/2 | 1/2 |
          | [MPDS](https://doi.org/10.1109/LRA.2025.3595073) | 1/2 | 1/2 | 0/2 | 1/2 |
          | [SF-GVF](https://doi.org/10.1109/TRO.2020.3043690) | 1/2 | 1/2 | 2/2 | 1/2 |
          | [DMP](https://doi.org/10.1109/ICRA.2014.6907291) | 1/2 | 0/2 | 2/2 | 2/2 |
          | [GDMP](https://arxiv.org/abs/2401.08238) | 1/2 | 1/2 | 2/2 | 1/2 |
          | **PMDS, k = 1** | **2/2** | **2/2** | **2/2** | **2/2** |
          | **PMDS, k = 3** | **2/2** | **2/2** | **2/2** | **2/2** |

          - **Replay:** PMDS captures both path geometry and ambiguous behaviors, including the STOPGO dwell that geometry-only metrics can miss.
          - **Recovery:** higher $k$ improves recovery in STOPGO and RETURN, but not every accuracy metric. In RETURN, $k=1$ gives lower tracking error and Fréchet distance than $k=3$.
          - **Time invariance:** PMDS shows near-zero sensitivity to the five-second execution delay.

bibtex: |
  @ARTICLE{11685323,
    author={Jung, Hyunseo and Kim, Jonghyeok and Kim, Keehoon},
    journal={IEEE Robotics and Automation Letters},
    title={Learning Spatially Ambiguous Trajectories From Demonstrations via Phase-Modulated Dynamical Systems},
    year={2026},
    volume={11},
    number={11},
    pages={12663-12670},
    keywords={Trajectory;Timing;Dynamical systems;Learning (artificial intelligence);Convergence;Modeling;Robots;Vectors;TV;Chromium;Learning from demonstrations;dynamical systems;path-following control},
    doi={10.1109/LRA.2026.3732892}}

---
