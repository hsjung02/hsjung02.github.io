---
layout: post #Do not change.
category: [ME,Fluid Mechanics] #One, more categories or no at all.
title:  "Dimensional Analysis"
date:   2022-07-12 10:05:42 +0200
author: hsjung02 #Author's nick.
#nextPart: _posts/2021-06-19-Stream-function-and-Velocity-potential.md #Next part.
#prevPart: _posts/2021-06-17-Bernoulli-Equation.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "" #Open Graph description.
fb_app_id: example
use_math: true
---

Dimensional Analysis를 통해 여러 물리량 간의 관계 파악을 단순화할 수 있다.

유체의 흐름을 포함해서 실제로 관찰할 수 있는 다양한 현상들에는 수많은 변인들이 영향을 미치며, 각 변인들의 영향을 파악하기 위해서는

다른 모든 변인들을 통제한 상태로 각 변인들을 변화하며 실험을 해야 하는데 모든 변인들에 대해 이 과정을 거치는 것은 매우 비효율적이고 시간이 많이 든다.

이 과정을 획기적으로 단순화하는 방법이 바로 Dimensional Analysis이다.

Dimensional Analysis의 핵심 개념은, 변인들의 차원을 고려해 성립할 수 있는 유효한 관계식의 개수를 줄이는 것이다.

예를 들어 힘, 질량, 가속도의 관계를 파악하려고 할 때

$F, m, a$ 세 변수 사이에는 $F=ma$, $F=m/a$, $F=ma^{2}$, $F=m^{2}a$, $F=m\sqrt{a}$ 등 수많은 관계식이 성립할 수 있다.

이 중 무엇이 실제로 성립하는지는 실험적으로 검증해야 할 것이다.

하지만 Dimensional Analysis를 해보면 실제로 유효한 관계식을 추릴 수 있다.

MLT 단위계에서 살펴보자.

$F$의 dimension은 $M^{1}L^{1}T^{-2}$이고,
 $m$의 dimension은 $M^{1}L^{0}T^{0}$, $a$의 dimension은 $M^{0}L^{1}T^{-2}$이다.

그러면 $F=m^{x}a^{y}$가 성립한다고 할 때, 양변의 dimension을 고려해보자.

좌변은 $M^{1}L^{1}T^{-2}$이고, 우변은 $M^{x}L^{y}T^{-2y}$이므로 연립방정식을 풀면 $x=1$, $y=1$, 즉 $F=ma$만이 유효한 관계식임을 알 수 있다.

물론 계수 등등은 실험적으로 파악해야 할 것이다.

Dimensional Analysis를 위해 Rayleigh's method 혹은 Pi theorem 두 가지 방법을 사용할 수 있다.

Rayleigh's method는 위의 예시처럼 각 변인의 승수를 변수로 두고 연립방정식을 푸는 방법이다.

MLT 혹은 FLT 단위계를 사용한다면 3개의 연립방정식을 얻을 수 있으므로 (변인의 개수)-3개의 변수만 남는다.

남은 변수는 실험적으로 결정하면 된다.

또다른 방법은 Pi theorem이다.

Pi theorem도 Rayleigh's method와 원리적으로 다르지 않지만, 하다보면 Pi theorem이 조금 덜 귀찮다는 것을 느낄 수 있다.

Pi theorem의 핵심은 dimensionless group을 찾는 것이다. dimensionless group이란 여러 인자들을 모아 만든 무차원 항이다. $\frac{F}{ma}$는 dimensionless group이 될 수 있다.

먼저 변인들을 모두 나열한다. 총 n개의 변인들이 관여하는 상황에서 r개의 단위로 모든 변인의 차원을 나타낼 수 있다면,

dimensionless group을 n-r개 만든다. 각각을 $\Pi_{1}, \Pi_{2},\cdots,\Pi_{n-r}$이라 하면

$\Pi_{1}=\phi\left(\Pi_{2},\cdots,\Pi_{n-r}\right)$로 나타낼 수 있다!

예시를 통해 Pi theorem을 살펴보자.

파이프 내에 흐르는 단위길이당 유체의 압력 강하를 알고 싶고, 이에 영향을 미칠 수 있는 변인들이 파이프 단면 직경, 유체의 밀도, 점성, 속력이라고 하면

$\Delta p_{l}=f(D,\rho, \mu, V)$로 표현할 수 있다.

변인이 총 5개이고 MLT 단위계에서 3개의 단위로 모든 차원을 표현할 수 있으므로

우리는 5-3=2개의 dimensionless group을 만들어야 한다.

$\frac{D\Delta p}{\rho V^2}$와 $\frac{\rho V D}{\mu}$가 dimensionless이므로

$\frac{D\Delta p}{\rho V^2}=\phi\left(\frac{\rho V D}{\mu}\right)$이고 승수는 실험적으로 결정할 수 있다.

여기서 $\frac{\rho V D}{\mu}$는 Reynolds number라고 하는데, 층류와 난류를 구분하기 위해 사용하는 중요한 지표이다.

Reynolds number 외에도 자주 사용하는 dimensionless group들이 있으며, 이들은 유체의 특성을 나타내는 중요한 지표들이다.

일일이 설명하기는 귀찮으므로 표를 첨부한다.

![dimensionless_groups](/assets/img/posts/Dimensional-Analysis/dimensionless_groups.JPG)

Pi theorem에서 사용한 Pi들은 model을 통해 prototype을 설명하는 데에도 유용하게 사용할 수 있다.

매우 큰 잠수함을 설계할 때, 잠수함 제작 비용은 매우 높기 때문에 한 번만 제작할 수 있다.

따라서 설계의 이론적/실험적 검증이 완료된 후에 제작에 들어가야 하는데

잠수함이 없으면 당연히 실험적 검증을 할 수가 없다.

이때 사용하는 것이 바로 scale-down model이다. 잠수함 모형을 사용하는 것이다.

잠수함과 닮은 잠수함 모형을 사용해 잠수함에 적용되는 법칙들을 검증하고, 이를 실제 잠수함 제작에 적용하는 것이다.

잠수함과 잠수함 모형이 닮았기 때문에 각 Pi들의 값도 동일하다는 점을 이용하면 실험값을 통해 모르는 값을 알아내고, 그를 이용해 실제 프로토타입을 설계할 수 있다.