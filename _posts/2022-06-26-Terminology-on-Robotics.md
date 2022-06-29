---
layout: post #Do not change.
category: [ME, Robotics] #One, more categories or no at all.
title:  "Terminology on Robotics"
date:   2022-06-26 02:05:42 +0200
author: hsjung02 #Author's nick.
#nextPart: _posts/2021-06-17-Bernoulli-Equation.md #Next part.
#prevPart: _posts/2021-06-17-Bernoulli-Equation.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "로보틱스 분야에서 중요한 용어들과 개념들을 정리한 포스팅이다."

use_math: true
---

로보틱스 분야에서 중요한 용어들과 개념들을 정리한 포스팅이다.


<details>
<summary>Robot 로봇</summary>
<div markdown="1">
로봇은 복잡한 일련의 작업을 자동으로 수행하는 기계를 의미한다.
</div>
</details>

<details>
<summary>Actuator 구동기</summary>
<div markdown="1">
액추에이터는 외부에서 에너지를 공급받아 시스템을 구동하는 장치를 가리킨다.

Electric(전기), Hydraulic(유압), Pneumatic(공압) 액추에이터를 주로 사용한다.

전기 액추에이터는 흔히 말하는 모터를 가리킨다. 전기 액추에이터의 장점은 매우 정밀하게 제어할 수 있고 안정적인 구동력을 제공한다는 것이다. 단점으로는 고장이 잦고 복잡한 구조로 인해 유지보수가 힘들다는 점이다. 그리고 큰 힘을 전달하지 못한다.

유압 액추에이터는 액체와 펌프를 사용하는 방식이다. 고출력을 낼 수 있다는 장점이 있지만 비용이 많이 들고 부피가 크며 화재의 위험이 높다(이것은 아마 기름 같은 밀도가 높은 유체를 사용하다 보니 그런 것 같다). 또한 액체 특성상 온도 변화에 민감하다.

공압 액추에이터는 압축 공기를 사용해 힘을 전달하는 방식이다. 단순 제어 용도로 쓰이며, 유압 액추에이터에 비해 온도 변화에 민감하지 않다. 하지만 유압 액추에이터에 비해 낮은 출력을 갖고 있다.
</div>
</details>

<details>
<summary>Manipulator 매니퓰레이터</summary>
<div markdown="1">

매니퓰레이터는 사람의 팔을 모방한 동작을 수행하는 기계적 장치이다.

</div>
</details>

<details>
<summary>End Effector 엔드 이펙터</summary>
<div markdown="1">

로봇팔이 특정한 기능을 수행할 수 있게 로봇팔의 끝에 장착한 부품이다. 로봇팔이 주변 요소와 상호작용할 수 있게 한다.

그리퍼, 드릴, 건 등이 모두 엔드 이펙터이다.

</div>
</details>

<details>
<summary>Degree Of Freedom(DOF) 자유도</summary>
<div markdown="1">

자유도는 로봇의 위치와 자세를 결정하기 위해 필요한 독립변수의 개수이다.

독립변수이므로 우리가 제어하는 대상을 의미한다.

일반적으로 로봇팔은 최소 6축 자유도를 가져야 사람의 행동을 모방할 수 있다고 한다.

자유도와 관련해서는 [이 파일](/assets/file/posts/Terminology-on-Robotics/dof.ppt)을 참고.

</div>
</details>

<details>
<summary>!Trajectory Planning 경로 계획</summary>
<div markdown="1">

</div>
</details>

<details>
<summary>!Kinematics 기구학</summary>
<div markdown="1">

</div>
</details>

<details>
<summary>!Inverse Kinematics 역기구학</summary>
<div markdown="1">

</div>
</details>

<details>
<summary>!Dynamics 동역학</summary>
<div markdown="1">

</div>
</details>

<details>
<summary>!Inverse Dynamics 역동역학</summary>
<div markdown="1">

</div>
</details>