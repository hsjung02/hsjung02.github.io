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

미소 질량의 부피를 $\delta \bar{V}\left(=\delta s \delta n \delta y\right)$라 하고 질량을 $\delta m \left(=\rho \delta \bar{V} \right)$라 하면,

steady flow를 가정하고 유선 방향으로 운동방정식을 세우면

$\sum \delta F_{s}$ $=\delta m a_{s}$ $=\delta m V \frac{\partial V}{\partial s}$ $=\rho \delta \bar{V} V \frac{\partial V}{\partial s}$인데, (by chain rule)

미소 질량에 작용하는 힘은 중력에 의한 무게와 압력에 의한 힘이다.

무게의 유선 방향 성분은

$\delta W_{s}$ $=-\delta W \sin{\theta}$ $=-\gamma \delta \bar{V} \sin{\theta}$이다.

압력에 의한 힘의 유선 방향 성분은

$\delta F_{ps} $ $=\left(p-\delta p_{s}\right)\delta n \delta y - \left(p+\delta p_{s}\right)\delta n \delta y $ $=-2\delta p_{s}\delta n \delta y $ $= -\frac{\partial p}{\partial s}\delta s \delta n \delta y $ $=-\frac{\partial p}{\partial s}\delta \bar{V}$이다.(여기서 $\delta p_{s}=\frac{\partial p}{\partial s} \frac{\delta s}{2}$가정을 사용했는데, 이는 테일러 전개를 통해 얻을 수 있다)

따라서 $\rho \delta \bar{V} V \frac{\partial V}{\partial s} $ $=\sum \delta F_{s} $ $=\delta W_{s} + \delta F_{ps} $ $=\left(-\gamma \sin{\theta} -\frac{\delta p}{\delta s}\right)\delta \bar{V}$이므로 양변을 $\delta \bar{V}$로 나누면

$-\gamma \sin{\theta} - \frac{\partial p}{\partial s}=\rho V\frac{\partial V}{\partial s}$인데

유선을 따라서는 다음 네 가정이 성립한다.

$\sin{\theta}=\frac{dz}{ds} \\\ dn=0 \\\ V\frac{dV}{ds}=\frac{1}{2}\frac{d(V^{2})}{ds} \\\ \frac{\partial p}{\partial s}=\frac{dp}{ds}$

따라서 $-\gamma \sin{\theta} - \frac{\partial p}{\partial s}=\rho V\frac{\partial V}{\partial s} $ $\rightarrow -\gamma \frac{dz}{ds}-\frac{dp}{ds}=\frac{1}{2}\rho \frac{d\left(V^{2}\right)}{ds}$, $dp+\frac{1}{2}\rho d\left(V^{2}\right)+\gamma dz =0$이다.

incompressible flow(i.e., $\rho$=constant)를 가정하면 양변을 적분할 수 있다.

$\therefore p+\frac{1}{2}\rho V^{2} +\gamma z$=constant along streamline

=========증명 끝=========

</div>
</details>

<details>
<summary>증명 2 (across streamline)</summary>
<div markdown="1">

1과는 달리 유선의 법선 방향으로 운동방정식을 세운다.

$\sum \delta F_{n}$ $=\frac{\delta m V^{2}}{R}$ $=\frac{\rho \delta \bar{V} V^{2}}{R}$이고

무게의 이 방향 성분은 $\delta W_{s}$ $=-\delta W \cos{\theta}$ $=-\gamma \delta \bar{V} \cos{\theta}$이다.

압력에 의한 힘은

$\delta F_{pn} $ $=\left(p-\delta p_{n}\right)\delta s \delta y - \left(p+\delta p_{n}\right)\delta s \delta y $ $=-2\delta p_{n}\delta s \delta y $ $= -\frac{\partial p}{\partial n}\delta s \delta n \delta y $ $=-\frac{\partial p}{\partial n}\delta \bar{V}$이다.(여기서 $\delta p_{n}=\frac{\partial p}{\partial n} \frac{\delta n}{2}$가정을 사용했는데, 이는 테일러 전개를 통해 얻을 수 있다)

따라서 $\rho \delta \bar{V} \frac{V^2}{R} $ $=\sum \delta F_{n} $ $=\delta W_{n} + \delta F_{pn} $ $=\left(-\gamma \cos{\theta} -\frac{\delta p}{\delta n}\right)\delta \bar{V}$이므로 양변을 $\delta \bar{V}$로 나누고 $\cos{\theta}=\frac{dz}{dn}$을 대입하면

$dp + \frac{\rho V^2}{R} + \gamma dz = 0$을 얻을 수 있다.

incompressible flow(i.e., $\rho$=constant)를 가정하면 양변을 적분할 수 있다.

$\therefore p+\rho \int \frac{V^2}{R}dn + \gamma z$=constant across streamline\

=========증명 끝=========

</div>
</details>

보통 베르누이 방정식이라고 하면 1번 식을 가리킨다. 나도 2번 식은 용례를 잘 찾지 못했다.

조건에 따라 다양한 바리에이션을 만들 수 있다.

예를 들어, 중력가속도가 상수가 아니라 고도에 따라 변한다고 가정해보자.

<details>
<summary>Varying gravitational acceleration</summary>
<div markdown="1">

$g=g_{0}-cz$이라면

$p+\frac{1}{2}\rho V^{2} +\gamma z=0$에서 $\gamma=\rho g$를 대입하면

$p+\frac{1}{2}\rho V^{2} +\rho (g_{0}-cz) z=0$,

적분하면

$p_{2}-p_{1}+\frac{1}{2}\rho\left(V_{2}^{2}-V_{1}^{2}\right)+\rho g_{0}(z_{2}-z_{1})-\frac{1}{2}\rho c \left(z_{2}^{2}-z_{1}^{2}\right)=0$이므로

$p+\frac{1}{2}\rho V^{2} +\rho g_{0}z -\frac{1}{2}\rho c z^{2}$=constant along streamline

===========================

</div>
</details>

베르누이 방정식은 세 종류의 압력pressure으로 구성되어 있다.

첫째, Static pressure $p$이다. Staic fluid의 [thermodynamic pressure](https://www.sciencedirect.com/topics/mathematics/thermodynamic-pressure)이다.

둘째, Dynamic pressure $\frac{1}{2}\rho V^2$이다. 속도를 가진 flow가 stagnation(v=0)으로 이동하려는 성질 때문에 발생하는 압력이다.

셋째, Hydrostatic pressure $\gamma z$이다. 유체의 무게에 의해 중력가속도 방향으로 발생하는 압력이다. Pressure eqn. $-\nabla p - \gamma \hat{\mathbf{k}}=\rho \mathbf{a}$에 hydrostatic condition(a=0)을 대입해 얻어지는 그 hydrostatic pressure이다.

베르누이 방정식을 일-에너지 정리로 해석할 수 있다. $p$는 압력이 유체에 한 일, $\gamma z$는 중력이 유체에 한 일, $\frac{1}{2}\rho V^2$는 유체의 운동 에너지이다. 이들의 합이 일정하다는 것이 일-에너지 정리의 핵심이자 베르누이 방정식에서 알 수 있는 사실이다.

베르누이 방정식의 양변을 비중 $\gamma$로 나누면 head form을 얻을 수 있다.

$\displaystyle \frac{p}{\gamma}+\frac{V^2}{2g}+z=$ constant along streamline

여기서 $\frac{p}{\gamma}$를 Pressure head, $\frac{V^2}{2g}$를 Velocity head, $z$를 Potential head라 하고, 이 세 종류의 head의 합을 total head라 한다.

Pressure head를 통해 flow가 나타내는 압력을, Velocity head를 통해 flow의 유속을, Potential head를 통해 flow의 고도 변화를 알 수 있다.

서두에 베르누이 방정식은 가장 많이 '남용'된 방정식이라고 하였는데, 그 이유는 우리가 베르누이 방정식을 사용할 때 베르누이 방정식의 가정들을 확인하지 않고서 사용하는 경우가 많기 때문이다.

베르누이 방정식은 다음의 가정을 만족해야만 한다.
- Steady flow
- Incompressible flow
- Inviscid flow

이를 만족하지 않는 flow에 대해서는 베르누이 방정식이 성립하지 않는다.

하지만 현실 세계에 존재하는 대부분의 flow는 (다행히도) 비압축성을 가지고, 점성이 매우 낮다.

그래서 steady 조건만 확인한다면 베르누이 방정식으로도 충분히 합리적인 해를 구할 수 있다.

베르누이 방정식은 추가 조건을 활용하면 쓰임새가 더 커진다.

예를 들어, irrotational flow에서는 Bernoulli constant가 모든 유선에 대해 동일하기 때문에 flow의 모든 지점에서(굳이 같은 유선상에 있지 않더라도) 베르누이 방정식을 적용할 수 있다. 참고로 irrotational flow란 vorticity $\zeta = 2\omega = \nabla \times V =0$인 flow를 뜻한다.

연속방정식 등을 활용하여 속도 조건을 모두 구한 상태에서는 압력을 쉽게 구할 수 있고, 대기와 접해 있어 대기압 조건을 활용할 수 있다면 각 지점에서의 유속을 쉽게 구할 수 있다.