---
layout: post #Do not change.
category: [ME,Fluid Mechanics] #One, more categories or no at all.
title:  "Bernoulli Equation"
date:   2022-06-23 10:05:42 +0200
author: hsjung02 #Author's nick.
#nextPart: _posts/2021-06-18-Navier-Stokes-Equation.md #Next part.
#prevPart: _posts/2021-06-16-Reynolds-transport-theorem.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "베르누이 방정식은 유체역학에서 가장 많이 사용되고, 동시에 가장 많이 남용되는 법칙이다." #Open Graph description.
fb_app_id: example
lang: ko
use_math: true
---

베르누이 방정식은 유체역학에서 가장 많이 사용되고, 동시에 가장 많이 남용되는 법칙이다.

유체의 속도가 증가하면 압력이 감소하고, 속도가 감소하면 압력이 증가한다는 것이 베르누이 원리이고 이를 수식화한 것이 베르누이 방정식이다.

베르누이 방정식은 다음과 같다.

$\displaystyle p+\frac{1}{2}\rho V^{2}+\gamma z =$ constant along streamline

$\displaystyle p + \rho \int \frac{V^2}{R}dn + \gamma z =$ constant across streamline

베르누이 방정식의 유도는 미소 질량에 대한 운동방정식으로부터 출발한다.

<details>
<summary>증명 1 (along streamline)</summary>
<div markdown="1">

</div>
</details>

<details>
<summary>증명 2 (across streamline)</summary>
<div markdown="1">

</div>
</details>

보통 베르누이 방정식이라고 하면 1번 식을 가리킨다. 나도 2번 식은 용례를 잘 찾지 못했다.

조건에 따라 다양한 바리에이션을 만들 수 있다.

예를 들어, 중력가속도가 상수가 아니라 고도에 따라 변한다고 가정해보자.

~~~~~~~~~~~~

베르누이 방정식은 세 종류의 압력pressure으로 구성되어 있다.

첫째, Static pressure $p$이다. Staic fluid의 [thermodynamic pressure](https://www.sciencedirect.com/topics/mathematics/thermodynamic-pressure)이다.

둘째, Dynamic pressure $\frac{1}{2}\rho V^2$이다. 속도를 가진 flow가 stagnation(v=0)으로 이동하려는 성질 때문에 발생하는 압력이다.

셋째, Hydrostatic pressure $\gamma z$이다. 유체의 무게에 의해 중력가속도 방향으로 발생하는 압력이다. Pressure eqn. $-\nabla p - \gamma \hat{\mathbf{k}}=\rho \mathbf{a}$에 hydrostatic condition(a=0)을 대입해 얻어지는 그 hydrostatic pressure이다.

베르누이 방정식을 일-에너지 정리로 해석할 수 있다. $p$는 압력이 유체에 한 일, $\gamma z$는 중력이 유체에 한 일, $\frac{1}{2}\rho V^2$는 유체의 운동 에너지이다. 이들의 합이 일정하다는 것이 일-에너지 정리의 핵심이자 베르누이 방정식에서 알 수 있는 사실이다.

베르누이 방정식의 양변을 비중 $\gamma$로 나누면 head form을 얻을 수 있다.

$\displaystyle \frac{p}{\gamma}+\frac{V^2}{2g}+z=$ constant along streamline

여기서 $\frac{p}{\gamma}$를 Pressure head, $\frac{V^2}{2g}$를 Velocity head, $z$를 Potential head라 하고, 이 세 종류의 head의 합을 total head라 한다.

Pressure head를 통해 flow가 나타내는 압력을, Velocity head를 통해 flow의 유속을, Potential head를 통해 flow의 고도 변화를 알 수 있다.

Restrictions

Applications
- Pitot-static tube
- Flowmeter (combined with continuity equation)
- Problem solving :D