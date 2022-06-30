---
layout: post #Do not change.
category: [ME,Fluid Mechanics] #One, more categories or no at all.
title:  "Navier-Stokes Equation"
date:   2022-06-21 10:05:42 +0200
author: hsjung02 #Author's nick.
#nextPart: _posts/2021-06-19-Stream-function-and-Velocity-potential.md #Next part.
#prevPart: _posts/2021-06-17-Bernoulli-Equation.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "점성이 있는 Newtonian fluid의 거동은 나비에-스토크스 방정식을 통해 설명할 수 있다." #Open Graph description.
fb_app_id: example
use_math: true
---

점성을 가진 Newtonian fluid의 거동은 나비에-스토크스 방정식을 통해 설명할 수 있다.

지금까지 우리는 점성이 없는 inviscid flow를 주로 다루었는데, 유체들이 점성을 가지는 경우도 있다. 점성을 가진 유체는 Newtonian fluid와 non-Newtonian fluid로 구분할 수 있다. Newtonian fluid란 다음의 Newton's law of viscosity를 따르는 유체를 뜻한다.

$\tau = \mu\frac{du}{dy}$

나비에-스토크스 방정식은 이러한 경우에 사용할 수 있는 비선형 편미분방정식이다.

나비에-스토크스 방정식의 일반형은 다음과 같다.

$\rho \frac{D\mathbf{V}}{Dt} =$ $-\nabla p + \rho \mathbf{g} + \mu\nabla^{2}\mathbf{V} +\left(\frac{1}{3}\mu + \lambda\right)\nabla(\nabla\cdot\mathbf{V})$

유속 $u$가 일정하고 incompressible flow를 가정하면 $\nabla\cdot\mathbf{V}=0$이므로

흔히 알려져있는 $ \rho \frac{D\mathbf{V}}{Dt} = -\nabla p + \rho \mathbf{g} + \mu\nabla^{2}\mathbf{V}$를 얻을 수 있다.

<details>
<summary>증명</summary>
<div markdown="1">

(직교 좌표계에서)유체에 작용하는 shear stress와 normal stress를 고려하자.

Shear stress는 

$\,\,\,\, \tau_{xy}=\tau_{yx}=\mu\left(\frac{\partial u}{\partial y}+\frac{\partial v}{\partial x}\right)$

$\,\,\,\, \tau_{yz}=\tau_{zy}=\mu\left(\frac{\partial v}{\partial z}+\frac{\partial w}{\partial y}\right)$

$\,\,\,\, \tau_{zx}=\tau_{xz}=\mu\left(\frac{\partial w}{\partial x}+\frac{\partial u}{\partial z}\right)$

이고

Normal stress는

$\,\,\,\, \sigma_{xx}=-p+2\mu\frac{\partial u}{\partial x}$

$\,\,\,\, \sigma_{yy}=-p+2\mu\frac{\partial v}{\partial y}$

$\,\,\,\, \sigma_{zz}=-p+2\mu\frac{\partial w}{\partial z}$

로 나타낼 수 있다.

고체역학 시간에 배운 stress tensor를 생각하면 쉽게 얻을 수 있다. 자세한 내용은 [15-24페이지](/assets/file/posts/Navier-Stokes-Equation/viscous_flow_eqn.pdf) 참고

이제 x방향으로 운동방정식을 써보면

$\rho g_{x}+\frac{\partial \sigma_{xx}}{\partial x}+\frac{\partial \tau_{yx}}{\partial y}+\frac{\partial \tau_{zx}}{\partial z}=\rho \left( \frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y}+w\frac{\partial u}{\partial z} \right)$

이고, $\frac{\partial \sigma_{xx}}{\partial x}+\frac{\partial \tau_{yx}}{\partial y}+\frac{\partial \tau_{zx}}{\partial z}$에 $\sigma_{xx},\tau_{yx},\tau_{zx}$를 대입하면

$\frac{\partial \sigma_{xx}}{\partial x}+\frac{\partial \tau_{yx}}{\partial y}+\frac{\partial \tau_{zx}}{\partial z}$

$=\frac{\partial}{\partial x}\left(-p+2\mu\frac{\partial u}{\partial x}\right)+\frac{\partial}{\partial y}\left(\mu\left(\frac{\partial u}{\partial y}+\frac{\partial v}{\partial x}\right)\right)+\frac{\partial}{\partial z}\left(\mu\left(\frac{\partial u}{\partial z}+\frac{\partial w}{\partial x}\right)\right)$

$= \cdots$

$= -\frac{\partial p}{\partial x}+\mu\nabla^{2}u+\mu\frac{\partial}{\partial x}\left(\nabla\cdot\mathbf{V}\right)$

$= -\frac{\partial p}{\partial x}+\mu\nabla^{2}u$ (for incompressible flow)

이므로 다시 운동방정식에 대입하면

$\rho g_{x} -\frac{\partial p}{\partial x}+\mu\nabla^{2}u=\rho \left( \frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y}+w\frac{\partial u}{\partial z} \right)$를 얻을 수 있다.

y, z방향에 대해서도 같은 방법으로 접근하면

$\rho g_{y} -\frac{\partial p}{\partial y}+\mu\nabla^{2}v=\rho \left( \frac{\partial v}{\partial t} + u\frac{\partial v}{\partial x} + v\frac{\partial v}{\partial y}+w\frac{\partial v}{\partial z} \right)$

$\rho g_{z} -\frac{\partial p}{\partial z}+\mu\nabla^{2}w=\rho \left( \frac{\partial w}{\partial t} + u\frac{\partial w}{\partial x} + v\frac{\partial w}{\partial y}+w\frac{\partial w}{\partial z} \right)$

vector form으로 정리하면

$ \rho \frac{D\mathbf{V}}{Dt} = -\nabla p + \rho \mathbf{g} + \mu\nabla^{2}\mathbf{V}$

=========증명 끝========

</div>
</details>

N-S Equation의 좌변은 $(밀도 \times 가속도)$이므로 힘이고, 우변은 각각 압력, 무게, 점성에 의한 힘이다. 즉, 운동방정식이다.

N-S Equation은 직교 좌표계(혹은 원통형 좌표계)에서 4개의 변수($u,v,w,p$)를 갖는데 3개의 방정식을 제공하므로 부정방정식이 되지만, 연속방정식 등을 활용하면 해를 구할 수 있다.

참고로 점성과 열전도가 없는 경우의 N-S Equation은 [오일러 방정식](https://ko.wikipedia.org/wiki/%EC%98%A4%EC%9D%BC%EB%9F%AC_%EB%B0%A9%EC%A0%95%EC%8B%9D)이 된다.
