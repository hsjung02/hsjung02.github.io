---
layout: post #Do not change.
category: [ME,Fluid Mechanics] #One, more categories or no at all.
title:  "Stream function and Velocity potential"
date:   2022-06-20 10:05:42 +0200
author: hsjung02 #Author's nick.
#nextPart: _posts/2021-06-20-Dimensional-Analysis.md #Next part.
#prevPart: _posts/2021-06-18-Navier-Stokes-Equation.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "Stream function과 Velocity potential을 활용하면 복잡한 flow를 쉽게 분석할 수 있다." #Open Graph description.
fb_app_id: example
use_math: true
---

Stream function과 Velocity potential을 활용하면 복잡한 flow를 쉽게 분석할 수 있다.

Steady, incompressible 2D flow에서 성립하는 Stream function의 정의는 다음과 같다:

$\,\,\,\, u=\frac{\partial \psi}{\partial y}$, $v=-\frac{\partial \psi}{\partial x}$를 만족하는 함수 $\psi$

Stream function $\psi$는 유선을 따라 일정하다. 그 증명은 [여기](https://en.wikipedia.org/wiki/Stream_function#Proof_that_a_constant_value_for_the_stream_function_corresponds_to_a_streamline)를 참고.

두 유선 1, 2에 대해 각각의 Stream function을 $\psi_1$, $\psi_2$라 하면, 두 유선 사이에 흐르는 flow의 양은 $\psi_{1}-\psi_{2}$이다.

Stream function을 통해 한 점에서의 $x,y$ 방향의 유속을 알면 이로부터 streamline equation을 구할 수 있다.

$d\psi =\frac{\partial \psi}{\partial x}dx+\frac{\partial \psi}{\partial y}dy =-v dx + udy$이고

streamline을 따라 $d\psi=0$이므로 $\frac{dy}{dx}=\frac{u}{v}$이다.

원통형 좌표계에서는 $v_{r}=\frac{1}{r}\frac{\partial \psi}{\partial \theta}$, $v_{\theta}=-\frac{\partial \psi}{\partial r}$을 만족하는 $\psi$를 stream function이라 한다.

irrotational flow에서 성립하는 Velocity potential의 정의는 다음과 같다:

$\,\,\,\, \mathbf{V}=\nabla\phi$를 만족하는 함수 $\phi$

원통형 좌표계에서는 $v_{r}=\frac{\partial \phi}{\partial r}$, $v_{\theta}=\frac{1}{r}\frac{\partial \phi}{\partial \theta}$를 만족해야 한다.

Stream function과 Velocity potential을 적절히 활용하면 복잡한 flow를 단순한 flow의 중첩으로 환원할 수 있다.

먼저 다음의 표를 보자.


|Description of flow|Stream function|Velocity potential|
|----------------------|------------|------------|
|Uniform flow|$\psi=Ur\sin\theta$|$\phi=Ur\cos\theta$|
|Source or Sink (m>0 for a source, m<0 for a sink)|$\psi=\frac{m}{2\pi}\theta$|$\phi=\frac{m}{2\pi}ln r$|
|Free vortex ($\Gamma>0$: counterclockwise, $\Gamma<0$: clockwise)|$\psi=-\frac{\Gamma}{2\pi}ln r$|$\phi=\frac{\Gamma}{2\pi}\theta$|
|Doublet|$\psi=-\frac{K\sin\theta}{r}$|$\phi=\frac{K\cos\theta}{r}$|

Stream function과 Velocity potential은 모두 중첩이 된다. 이게 무슨 말이냐면,

$\psi=Ur\sin\theta+\frac{m}{2\pi}\theta$인 flow가 있다면 이 flow는

uniform flow에 source/sink가 있는 것으로 해석할 수 있다.

$\psi=Ur\sin\theta-\frac{K\sin\theta}{r}$인 flow는

uniform flow에 doublet이 중첩된 것인데, 놀랍게도 이것은 원통(circular cylinder) 주변의 flow를 묘사할 수 있다. 원통 표면에서 $\psi=0$을 만족해야 하므로 원통 단면의 반지름을 $a$라 하면 $K=Ua^{2}$여야 한다.

따라서 $\psi=Ur\left(1-\frac{a^2}{r^2}\sin\theta\right)$는 원통 주변의 flow가 된다.

이러한 접근은 Velocity potential $\phi$에 대해서도 동일하게 적용할 수 있다.