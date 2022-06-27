---
layout: post #Do not change.
category: [ME,Fluid Mechanics] #One, more categories or no at all.
title:  "Reynolds Transport Theorem"
date:   2022-06-23 02:05:42 +0200
author: hsjung02 #Author's nick.
#nextPart: _posts/2021-06-17-Bernoulli-Equation.md #Next part.
#prevPart: _posts/2021-06-17-Bernoulli-Equation.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "Jekyll example post." #Open Graph description.
fb_app_id: example
use_math: true
---

유체역학에서 주로 사용하는 지배방정식들은 Reynolds Transport Theorem을 통해 요약할 수 있다.

Reynolds Transport Theorem의 key concept은 System 관점과 Control Volume 관점에서의 분석을 연관짓는 것이다.

먼저, Reynolds Transport Theorem을 살펴보면 다음과 같다.

**$B=mb$가 성립하는 크기 성질 $B$와 세기 성질 $b$에 대해
$\frac{DB_{sys}}{Dt}=\frac{\partial}{\partial t}\int_{\text{CV}}\rho b \, dVol\, + \,\int_{\text{CS}}\rho b \, \mathrm{\mathbf{V \cdot \hat{n}}} \, d A$가 성립한다.**

여기서 $\frac{D}{Dt}$ notation은 Material Derivative를 의미한다. Material Derivative는 $\frac{D}{Dt}=\frac{\partial}{\partial t}+\mathbf{V \cdot \nabla}$로 정의되는 연산자이다. 앞의 항을 local derivative, 뒤의 항을 convective derivative라고 한다.

RTT에서 $b$가 될 수 있는 양으로는 $b=1,\, b=\mathbf{V}, \,b=\mathbf{V^{2}/2},\, b=r \times v$가 있으며 각 $b$에 해당하는 $B$는 $B=m \,(질량), \, B=mV \,(운동량), \, B=mV^{2}/2\,(운동에너지),\,B=mr \times v\,(각운동량)$이다.

$b=1$일 때 질량 보존, $b=\mathbf{V}$일 때 운동량 보존, $b=\mathbf{V^{2}/2}$일 때 운동에너지 보존 식을 얻을 수 있다. 

RTT의 증명은 어렵지 않지만 귀찮으므로 굳이 알 필요는 없다.
<details>
<summary>증명</summary>
<div markdown="1">

먼저 Control Volume은 초기 상태의 system과 일치하게 설정한다.

유체의 속도벡터 $V$와 Control Surface에서의 법선벡터 $\hat{n}$(이때 법선벡터의 방향은 나가는 방향)가 이루는 각을 $\theta$라고 하면,

미소 시간 $\delta t$동안 유체의 부피 변화 $\delta Vol =\delta l_n \delta A = \delta l cos \theta \delta A$이고,

$B=mb$이므로 $\delta B = \delta(mb) = b \rho \delta Vol \,=b \rho (V cos \theta \delta t)\delta A$이다.

이를 활용하면 $B$의 outflow rate $\delta \dot{B}_{\text{out}}$을 다음과 같이 나타낼 수 있다.

$\delta \overset{\cdot}B_{\text{out}} = \underset{\delta t \to 0}\lim\frac{\rho b \delta Vol}{\delta t} = \underset{\delta t \to 0}\lim\frac{\rho b V cos \theta \delta t \delta A}{\delta t} = \rho b V cos \theta \delta A$

양변 적분하면, $\overset{\cdot}B_{\text{out}} = \int_{CS_{\text{out}}} d\overset{\cdot}B_{\text{out}} = \int_{CS_{\text{out}}}\rho b V cos \theta dA = \int_{CS_{\text{out}}}\rho b \, \mathrm{\mathbf{V \cdot \hat{n}}}\, d A$가 성립하고

같은 방법으로 $\overset{\cdot}B_{\text{in}}= -\int_{CS_{\text{in}}}\rho b \, \mathrm{\mathbf{V \cdot \hat{n}}}\, d A$ 또한 성립한다.

Control surface의 net flux는 efflux와 influx의 차로 구할 수 있다.
$\overset{\cdot}B_{\text{out}}-\overset{\cdot}B_{\text{in}} = \int_{CS_{\text{out}}}\rho b \, \mathrm{\mathbf{V \cdot \hat{n}}}\, d A - \left( -\int_{CS_{\text{in}}}\rho b \, \mathrm{\mathbf{V \cdot \hat{n}}}\, d A \right) = \int_{CS}\rho b \, \mathrm{\mathbf{V \cdot \hat{n}}}\, d A$

이를 이용해서 $\frac{DB_{\text{sys}}}{Dt}$를 전개하면,
$\frac{DB_{\text{sys}}}{Dt} = \frac{\partial B_{\text{sys}}}{\partial t}+\overset{\cdot}B_{\text{out}}-\overset{\cdot}B_{\text{in}} =\frac{\partial B_{\text{CV}}}{\partial t}+\int_{CS}\rho b \, \mathrm{\mathbf{V \cdot \hat{n}}}\, d A=\frac{\partial}{\partial t}\int_{\text{CV}}\rho b \, dVol+\int_{CS}\rho b \, \mathrm{\mathbf{V \cdot \hat{n}}}$를 얻을 수 있다.

====증명 끝====

</div>
</details>

RTT는 여러 지배방정식을 함축한다.

먼저 $B$에 질량을 대입하면, 연속방정식을 얻을 수 있다.
<details>
<summary>Mass Equation</summary>
<div markdown="1">

질량 보존 법칙에 의해 $\frac{DM_{\text{sys}}}{Dt}=0$이므로 $\frac{\partial}{\partial t}\int_{\text{CV}}\rho \, dVol\, + \,\int_{\text{CS}}\rho \, \mathrm{\mathbf{V \cdot \hat{n}}} \, d A=0$인데, steady flow를 가정하면 local derivative가 0이므로 뒤의 항만 남는다.

그런데 잘 알다시피 $int_{\text{CS}}\rho \, \mathrm{\mathbf{V \cdot \hat{n}}} \, d A=\sum\overset{\cdot}m_\text{out}-\sum\overset{\cdot}m_\text{in}$이고 이것이 0이 된다.

따라서 $\sum\overset{\cdot}m_\text{out}=\sum\overset{\cdot}m_\text{in}$, 즉 mass flow rate가 일정한 연속방정식을 얻을 수 있다.

=============
</div>
</details>

$B$에 운동량을 대입하면 momentum equation을 얻을 수 있다.

<details>
<summary>Momentum Equation</summary>
<div markdown="1">
$\sum F_\text{sys}=\frac{\partial}{\partial t}\int_{\text{CV}}V \rho \, dVol\, + \,\int_{\text{CS}}V \rho \, \mathrm{\mathbf{V \cdot \hat{n}}}$

=============
</div>
</details>


$B$에 각운동량을 대입하면 angular momentum equation을 얻을 수 있다.

<details>
<summary>Angular Momentum Equation</summary>
<div markdown="1">

$\sum (\mathrm{r \times F})\_{\text{sys}}=\frac{\partial}{\partial t}\int_{\text{CV}}\mathrm{r \times V} \rho \, dVol\, + \,\int_{\text{CS}}\mathrm{r \times V} \rho \, \mathrm{\mathbf{V \cdot \hat{n}}}$

=============
</div>
</details>


$B$에 운동에너지를 대입하면 energy equation을 얻을 수 있다.

<details>
<summary>Energy Equation</summary>
<div markdown="1">

$\left(\overset{\cdot}Q_\text{net, in}+\overset{\cdot}W_\text{net, in}\right)\_\text{CV} = \frac{\partial}{\partial t}\int_{\text{CV}}e \rho \, dVol\, + \,\int_{\text{CS}}e \rho \, \mathrm{\mathbf{V \cdot \hat{n}}}$

이때 $e$는 단위질량당 에너지로서, $e=\check{u}+\frac{\mathrm{V^2}}{2}+gz$로 나타낼 수 있다.

=============
</div>
</details>


RTT로부터 유도되는 여러 공식을 사용할 때는 주어진 조건을 잘 살펴야 한다. 왜냐하면 지금은 fixed, non-deforming CV가 가정되어 있기 때문이다.

만약 CV가 속도를 갖고 움직이거나 / CV 자체가 변형되는 경우 식을 달리 써야한다.

먼저 deforming control volume의 예를 살펴보자.

그림에서 보는 것처럼 주사기의 피스톤을 밀면 수액이 바늘을 통해 방출되고, 유격 때문인지 뒤로도 조금 샌다고 한다. 이때 새는 양은 바늘로 나가는 양의 1/10배이다. 피스톤을 빠르게 밀면 같은 시간 동안 수액이 더 많이 방출되고, 느리게 밀면 적게 방출될 것이라는 것을 직관적으로 알 수 있다. 그렇다면 원하는 속도로 수액을 주입하기 위해서는 피스톤을 얼마의 속력으로 밀어야 할까?

![deformingCV](/assets/img/posts/Reynolds-Transport-Theorem/deformingCV.png)

<details>
<summary>풀이</summary>
<div markdown="1">

Mass Equation을 사용해보자.

이 문제에서 system은 주사기와 수액 전체를 포함하고, CV는 주사기 내부(바늘까지 포함)로 설정할 것이다.

$\frac{DM_{\text{sys}}}{Dt}=\frac{\partial}{\partial t}\int_{\text{CV}}\rho \, dVol\, + \,\int_{\text{CS}}\rho \, \mathrm{\mathbf{V \cdot \hat{n}}} \, d A=0$이다.

$\int_\text{CV}\rho d Vol = \rho \left(lA+Vol_\text{needle}\right)$임을 알 수 있다. 이때 $l$은 주사기 내부 공간의 길이를 의미하고, 피스톤이 움직임에 따라 $l$이 변하게 된다. 이것의 시간에 대한 변화율을 구해보면, $Vol_\text{needle}$은 일정하므로 $\frac{\partial}{\partial t}\int_\text{CV}\rho d Vol = \rho A \frac{\partial l}{\partial t}$이다. 피스톤을 미는 속력을 $V$라 하면, $\frac{\partial l}{\partial t} = -V$이다.(부호에 주의: $l$은 점점 줄어든다)

$\int_{\text{CS}}\rho \, \mathrm{\mathbf{V \cdot \hat{n}}} \, d A$는 Control Surface를 통과하는 수액의 양(질량)을 의미하므로 이는 바늘을 통해 나가는 양$(Q)$과 뒤로 새는 양$(Q_\text{leak})$의 합으로 나타낼 수 있다. 그런데 문제 조건에서 $(Q_\text{leak}) = 0.1Q$이므로 $\int_{\text{CS}}\rho \, \mathrm{\mathbf{V \cdot \hat{n}}} \, d A = \rho \times 1.1Q$이다.

따라서 $\frac{DM_{\text{sys}}}{Dt}=\frac{\partial}{\partial t}\int_{\text{CV}}\rho \, dVol\, + \,\int_{\text{CS}}\rho \, \mathrm{\mathbf{V \cdot \hat{n}}} \, d A=-\rho A V + 1.1\rho Q=0, \,\, V=\frac{1.1Q}{A}$이다.


=============

</div>
</details>


다음으로 moving control volume의 예를 살펴보자.

드넓은 평원에서 농사를 지을 때 작물에 물을 공급하기 위해 스프링클러를 사용하는데, 균일한 급수를 위해 그림과 같은 스프링클러를 회전할 수 있게 설치하였다.

![movingCV](/assets/img/posts/Reynolds-Transport-Theorem/movingCV.png)

스프링클러의 회전축에 저항토크가 얼마나 발생하느냐에 따라 스프링클러는 다른 운동 양상을 보인다.

a) 스프링클러가 정지 상태를 유지하기 위해 필요한 토크는 얼마인가?

<details>
<summary>풀이</summary>
<div markdown="1">

Control Volume은 스프링클러가 쓸고 지나가는 체적으로 설정하고, Angular momentum eqn. 을 사용하자.

$\sum (\mathrm{r \times F})\_{\text{sys}}=\frac{\partial}{\partial t}\int_{\text{CV}}\mathrm{r \times V} \rho \, dVol\, + \,\int_{\text{CS}}\mathrm{r \times V} \rho \, \mathrm{\mathbf{V \cdot \hat{n}}}$

작용하는 토크가 회전축에 의한 저항토크밖에 없으므로

$\sum (\mathrm{r \times F})\_{\text{sys}}=T_\text{shaft}$이고,

계속 정지 상태이므로 각운동량의 local derivative는 0이다.

$\left(\frac{\partial}{\partial t}\int_{\text{CV}}\mathrm{r \times V} \rho \, dVol=0\right)$

Control Surface를 통과하는 각운동량(이 말이 직관적이지 못한데, Control Surface를 통과하는 물이 갖는 각운동량 정도로 이해하면 된다)은 mass flow rate와 스프링클러 반지름과 tangent speed를 곱해서 구할 수 있다.

$\int_{\text{CS}}\mathrm{r \times V} \rho \, \mathrm{\mathbf{V \cdot \hat{n}}}=-r\overset{\cdot}mV$

여기서 $\overset{\cdot}m$와 $V$는 연속방정식을 통해 구할 수 있는데, efflux와 influx의 mass flow rate가 같으므로 $\overset{\cdot}m=\rho Q$이고 그림에서 exit이 두개이므로 $\overset{\cdot}m=2\rho A V$이다. 따라서 $V=\frac{Q}{2A}$이다.

대입하면, $T_\text{shaft}=-r\overset{\cdot}mV=-r \times \rho Q \times \frac{Q}{2A} = - \frac{r \rho Q^2}{2A}$이다.

=============
</div>
</details>

b) 스프링클러가 각속도 $\omega$로 운동하기 위해 필요한 토크는 얼마인가?

<details>
<summary>풀이</summary>
<div markdown="1">

이 상황은 정지해있지는 않지만 constant speed로 움직이는 steady state이므로 a번과 유사하게 풀 수 있다.

a번 풀이에서 tangent speed $V$를 상대속도를 이용해 새롭게 구해 대입해주면 된다.

스프링클러의 노즐이 움직이는 속도가 $U=r\omega$이고, 물이 노즐에 대해 $\frac{Q}{2A}$의 상대속도로 방출되므로, b번에서는 $V=\frac{Q}{2A}-r\omega$로 쓸 수 있다.

$ \therefore T_\text{shaft}=-r\overset{\cdot}mV=-r \times \rho Q \times \left(\frac{Q}{2A}-r\omega \right) = - \frac{r \rho Q \left(Q-2Ar\omega\right)}{2A}$

=============
</div>
</details>

c) 토크가 작용하지 않을 때 스프링클러의 회전각속도는 얼마인가?

<details>
<summary>풀이</summary>
<div markdown="1">

토크가 작용하지 않을 때 스프링클러는 steady하게 운동할 것이므로 b번 풀이를 응용할 수 있다.

$T_\text{shaft}=0$이므로 $Q-2Ar\omega=0$이다.

$\therefore \omega=\frac{Q}{2Ar}$

=============
</div>
</details>

이렇게 RTT를 이용해 문제를 해결할 때는 상황별로 공식을 모두 외우려 하지 말고, 조건에 따라 기본 공식을 적절히 응용하는 것이 더 쉽다.