---
layout: post #Do not change.
category: [ME,Fluid Mechanics] #One, more categories or no at all.
title:  "Flow over Immersed body"
date:   2022-07-12 10:05:42 +0200
author: hsjung02 #Author's nick.
#nextPart: _posts/2021-06-19-Stream-function-and-Velocity-potential.md #Next part.
#prevPart: _posts/2021-06-17-Bernoulli-Equation.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "" #Open Graph description.
fb_app_id: example
use_math: true
---

Flow가 부피를 가진 물체를 만나게 되면 거동에 영향을 받는데, boundary layer는 영향을 받는 부분과 받지 않는 부분의 경계이다.

Viscosity에 의해 body의 표면에서는 유속이 0이 되고, 원래 flow velocity가 $U$였다면 boundary layer 밖에서는 $U$이다.

Boundary layer  내에서는 속력이 $0 \rightarrow U$로 점점 증가한다. Boundary layer 내에서는 속도구배(velocity gradient)에 의해 유체 입자가 변형을 받거나 회전하는 등등의 현상이 일어난다.

따라서 boundary layer가 어떻게 형성되어 있는지 알아내는 것이 중요하다.

중요 개념은 Boundary Layer thickness와 Displacement thickness이다.

Boundary Layer thickness(BL thickness) $\delta$는 $u=0.99U$가 되는 지점을 의미한다.

Displacement thickness $\delta^{\*}$는 boundary layer의 inviscid flow로의 환산 thickness를 의미한다. Boundary layer 내의 영역을 $\delta^{\*}$만큼의 bulk flow로 대체해도 boundary layer 외부의 flow에는 변화가 없다.

$\delta^{\*}=\int_{0}^{\inf}\left(1-\frac{u}{U}dy\right)$로 구할 수 있다.

따라서 우리는 $u(y)$, 즉 velocity profile을 알아야 BL thickness와 displacement thickness를 구할 수 있다.

To be continued