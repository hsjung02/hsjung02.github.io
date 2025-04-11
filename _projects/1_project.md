---
layout: page
title: Dynamic Speed Bump
description: Development of a dynamic speed bump for speed-selective penalty on cars
img: assets/img/12.jpg
importance: 1
category: '2023'
giscus_comments: false
toc:
  sidebar: left
---

# Overview

저속 차량에게는 패널티를 주지 않고 과속 차량에게만 패널티를 주는 dynamic speed bump의 설계

# Motivation

현재 널리 사용하는 bump형 과속방지턱은 저렴하고 설치가 쉽다는 장점이 있지만, 차량이 저속으로 주행할 때에도 충격이 가해지면서 불편함을 준다. 이러한 문제를 해결하고 싶었다.

# Problem Statement

Design of a speed bump that is only speed-dependent and robust

차량의 속도에 의해서만 동작이 결정되고, 튼튼한 과속방지턱의 설계 및 제작

# Literature Review

저속 주행 차량에게 가해지는 패널티를 줄이기 위한 시도는 이전에도 여럿 있었다. 그 중 성공적으로 보이는 세 가지에 주목했다.

1. Geometric optimal design
    
    Geometric optimal design은 과속방지턱의 단면 디자인별로 car speed에 따른 driver’s head acceleration을 계산하고, 저속에서 acceleration이 작은 디자인을 찾는 연구이다. 출처는 [E. Khorshid, M. Alfares, “Model refinement and experimental evaluation for optimal design of speed humps”, International Journal of Vehicle Systems Modelling and Testing, 2007](https://www.researchgate.net/publication/245527374_Model_refinement_and_experimental_evaluation_for_optimal_design_of_speed_humps)이다.
    
    ![Untitled](/assets/img/posts/Dynamic-Speed-Bump/Untitled.png)
    
    이 연구에 따르면 여러 design parameter에 따라 CC(Comfort Criterion)와 CS(Critical Speed)가 바뀌고, speed에 따른 acceleration을 mathemathical model로 plot할 수 있다. 이를 이용하면 저속 차량이 받는 acceleration을 줄일 수 있긴 하겠지만, 드라마틱한 효과도 없을 뿐더러 여전히 충격이 있다는 문제가 있다.
    
2. Pressure relief valve를 이용한 TransCalm system
    
    Pressure relief valve란 가해지는 압력에 따라 개폐가 결정되는 장치이다. TransCalm 시스템에서는 PRV와 air cylinder를 함께 사용하였다. 아래 그림과 같이 장비하면, 차량이 저속 주행할 때는 약한 압력이 걸리므로 밸브가 열린다. 밸브가 열리면 air cylinder의 변형이 자유롭기 때문에 방지턱이 soft해진다. 따라서 차량이 그 위를 지나갈 때 큰 충격을 받지 않게 된다. 반대로 차량이 고속 주행할 경우 높은 압력이 걸리므로 밸브가 닫힌다. 밸브가 닫히면 실린더의 변형이 불가능하므로(비압축성 유체를 가정하면) 차량이 위로 지나갈 때 턱의 형태를 유지하게 된다.
    
    ![Untitled](/assets/img/posts/Dynamic-Speed-Bump/Untitled%201.png){: width="100%" height="100%"}
    
    이것은 설치도 용이하고 성능도 꽤 좋아 보이는데, 내가 생각하기에는 속도를 측정하는 방식에 약간의 문제가 있어 보였다. 압력을 통해 속도를 간접적으로 측정하기 때문에 차량의 중량에 따라 일정한 속도 제한을 적용하지 못할 것 같았다. 다시 말해, 무거운 차는 천천히 달려도 강한 압력이 가해져서 충격을 받고 가벼운 차는 빨리 달려도 충격을 받지 않는 상황이 가능한 것이다.
    
3. 레이더 센서를 이용한 Actibump 시스템
    
    Actibump 시스템에서는 레이더 센서를 이용하여 차량의 속도를 측정한 후, 과속이면 아래 사진과 같이 구조물을 아래로 내려서 충격을 받게 하였다. 정속 주행 시에는 평지를 달릴 수 있다.
    
    ![Untitled](/assets/img/posts/Dynamic-Speed-Bump/Untitled%202.png){: width="100%" height="100%"}
    
    ![Untitled](/assets/img/posts/Dynamic-Speed-Bump/Untitled%203.png){: width="100%" height="100%"}
    
    이것을 처음 봤을 때, 그럴거면 그냥 과속단속 카메라를 달지 싶었다. 비용적으로 매우 비효율적이라는 생각이다. 그리고 전자부품이 많이 달려 있어서 고장나기도 쉬울 것 같았다.
    

선행연구조사를 통해 배운 점은 다음과 같다.

(1)번 geometric optimal design을 통해 저속 주행 차량에게는 패널티를 아예 주면 안된다는 목표를 달성하기 위해서는 static design으로는 무리가 있고, dynamic design을 채택해야 한다는 결론에 도달했다.

(2)번 TransCalm으로부터 과속방지턱의 동작이 오로지 차량의 속도에만 의존하는 시스템을 만들어야 한다는 것을 알았다. 차량의 중량 등에 영향을 받아서는 안된다.

(3)번 Actibump로부터 우리의 시스템이 active energy consumption을 하지 않으며, 전자부품을 사용하지 않았으면 좋겠다는 결론에 도달했다.

결론적으로, (1)전자부품을 사용하지 않고 (2)저속 차량이 지나갈 때는 평지처럼, 과속 차량이 지나갈 때는 턱의 형태를 유지하는 (3)dynamic 방지턱을 설계해야 했다.

# Methods

주어진 문제에 대한 직관적인 해결책은 Actibump처럼 구조물에 힌지를 달아서 위아래로 움직이는 방식이었고, 이것을 채택하였다.

사실, 처음부터 염두에 두고 있던 설계가 있었다. 

<div>
  {% include video.liquid path="https://www.youtube.com/embed/_CIA17Fo4Gg?si=zUR5l0psssI7v5JC&amp;start=22" class="img-fluid rounded z-depth-1" %}
</div>

### ELR을 이용한 초기 디자인

두 가지 선택지가 있었다: 방지턱을 위로 올릴까, 아래로 내릴까? 고민하다가 위로 올리기로 했다. 아래로 내리면 걸려서 넘어가기 힘들 수도 있고, 차 밑바닥이 손상될 수도 있을 것 같아서 그냥 올리기로 했다.

올리기로 했으면, (1) 평소에 평지이다가 과속하면 올릴지 아니면 (2) 평소에 올라와있다가 과속하면 그대로 두고 정속이면 내릴지를 고민해야 했다. 결론부터 말하면 (2)를 채택하기로 했다. 구현을 생각해봤을 때 방지턱의 움직임에 락을 걸 수 있다면 속도에 따라 락을 풀어주기만 하면 차가 턱을 밟고 지나갈 때 턱이 자연스럽게 내려갈 것이라 생각했기 때문이다.

그럼 락을 어떻게 걸어줘야 할까… 빠르면 락이 걸리고 느리면 락이 풀리는 장치가 필요했다. 그런걸 어떻게 만들지…? 생각해보면 우리 주변에서 쉽게 찾을 수 있다. 바로 “안전벨트”이다. 자동차 안전벨트는 사고 발생 시 운전자를 보호하기 위해 빠르게 당겨질 경우 움직임이 제한된다. 대신 천천히 잡아당기면 잘 나온다. 이것을 Emergency locking retractor라 하는데, 자세한 원리는 위의 영상에 설명되어 있다.

초기 설계는 아래 그림과 같이 차가 방지턱을 밟고 지나가면(1) 방지턱이 움직이고(2), 어떠한 메카니즘(ex. 랙과 피니언)을 통해(3) ELR에 움직임이 전달된다(4). 이 움직임이 빠르면 (4)의 움직임이 잠기기 때문에 (2)도 잠겨서 차가 ‘덜컹’하게 된다. 움직임이 느리면 (4)가 부드럽게 움직이고, 따라서 (2)도 부드럽게 움직이므로 차가 평지를 달릴 수 있게 된다.

<p align="center">
  <img src="/assets/img/posts/Dynamic-Speed-Bump/Untitled%204.png" width="80%">
</p>

### 설계를 바꿔야 했던 이유

차의 움직임과 방지턱의 움직임 사이의 관계를 분석해보니, 아래의 식과 같이 나타났다.

<p align="center">
  <img src="/assets/img/posts/Dynamic-Speed-Bump/Untitled%205.png" width="80%">
</p>

이걸 analytic하게 풀 자신도 없었고, 여기서 차의 질량에 dependent한 항을 없애서 차량의 속력에만 의존하는 시스템을 만들 자신도 없었다.

그래서 깔끔하게 포기했다!

### 새로운 설계

정리해보면, 해결해야 하는 문제가 크게 4개였다.

(1) 속도 측정 방법

(2) 방지턱 메카니즘 설계 - 속도에 따라 다르게 움직이는 방지턱을 어떻게 구현할 것인가?

(3) 방지턱 설계 - 방지턱 단면을 어떻게 설계할 것인가?

(4) 기어비 - 메카니즘에 들어가는 기어비를 어떻게 설정해야 하는가?

각 문제별로 정말 깔쌈한 답변들을 내놓았다.

(1) 속도 측정 방법

자동차의 속도를 정확히 측정하기 위해 미끄러짐 없는 구름을 가정하였다. 아래 사진과 같이 지하에 롤러를 설치한다. 차가 롤러 위를 지나가면서 바퀴와 롤러가 미끄러짐 없는 구름운동을 하면 롤러의 회전속도(정확히 말하자면, 접점의 속도)가 자동차의 속도와 같아진다. 이 방식으로 자동차의 속도를 ‘복사’할 수 있다.

<p align="center">
  <img src="/assets/img/posts/Dynamic-Speed-Bump/Untitled%206.png" width="80%">
</p>
(2) 방지턱 메카니즘 설계

ELR(안전벨트 모듈)을 사용할 계획이었고, (1)번에서 롤러를 이용해 자동차의 속도를 복사하기로 했기 때문에 롤러&ELR 서브모듈을 기어 체인에 연결한다고 생각하면 차가 빠르게 오면 기어 체인이 회전하지 않을 것이고 차가 천천히 오면 기어 체인이 회전할 것이다. 따라서 평상시에는 움직이지 않고 기어가 움직이면 아래로 내려가는 방지턱 메카니즘을 설계해야 했다.

정리하자면, 아래의 세 가지 functional requirement가 있다.

- 기어가 움직이지 않으면 vertical load를 버티면서 정지해 있을 것
- 기어가 움직이면 방지턱이 아래로 내려갈 것
- 방지턱의 가동범위가 제한될 것(너무 많이 내려가면 땅이 움푹 패여서 차가 덜컹거리므로)

<p align="center">
  <img src="/assets/img/posts/Dynamic-Speed-Bump/Untitled%207.png" width="80%">
</p>

세 가지 functional requirement를 해결한 설계가 바로 위의 설계이다.

첫 번째와 두 번째 requirement를 만족하기 위해 toggle position을 사용하였다. 파란색 원이 회전축이다. 회전축이 회전하지 않으면 toggle position에 의해 vertical load가 생겨도 메카니즘이 움직이지 않는다. 회전축이 회전하면 toggle position이 풀리면서 방지턱(bump)이 아래로 움직인다.

이때 메카니즘의 가동범위를 제한하지 않으면 방지턱이 너무 아래로 내려오면서 땅이 움푹 패이는 현상이 발생할 것이다. 그러면 차에게 충격이 가해질 수 있으므로 메카니즘의 가동범위를 제한하여야 했다. 이는 pin-in-slot joint를 이용해 해결하였다. Slot의 길이를 조정하면 메카니즘의 가동범위를 조정할 수 있다.

최종적으로 pin-in-slot joint를 장착한 five bar linkage가 완성되었다.

(3) 방지턱 설계

방지턱을 설계할 때에도 세 가지 functional requirement가 있었다.

- 지면과의 충돌 없이 자유롭게 움직일 수 있을 것
- 완전히 내려갔을 때 평지가 될 것
- 지면과 방지턱 사이에 틈이 없을 것

<p align="center">
  <img src="/assets/img/posts/Dynamic-Speed-Bump/Untitled%208.png" width="80%">
</p>


첫 번째 조건을 만족하기 위해서, 지면과의 접촉부를 원호로 설계하였다.

<p align="center">
  <img src="/assets/img/posts/Dynamic-Speed-Bump/Untitled%209.png" width="80%">
</p>

두 번째 조건을 만족하기 위해서, 위에서 그린 원호와 빗변을 공유하는 직각삼각형을 추가했다. 이렇게 하면 방지턱이 완전히 내려왔을 때 평지를 형성할 수 있다.

<p align="center">
  <img src="/assets/img/posts/Dynamic-Speed-Bump/Untitled%2010.png" width="80%">
</p>


세 번째 조건을 만족하기 위해서 지면과 방지턱 사이의 간극을 잘 메워야 했는데, 틈을 완전히 없애지는 못했지만 1mm 이내로 줄이는 데에 성공하였다.

## 제작

이제 설계대로 만들기만 하면 된다.

### 안전벨트 모듈

안전벨트 모듈을 직접 만들어보려고 했는데, 특허를 찾아보니 필요한 부품이 23개 정도 필요한 것 같다.

<p align="center">
  <img src="/assets/img/posts/Dynamic-Speed-Bump/Untitled%2011.png" width="80%">
</p>


깔끔하게 포기하고 포항 내에 위치한 폐차장에 방문하여 받아왔다. 폐차장을 세 군데 갔는데, 안전벨트 모듈이 워낙 깊이 박혀있는 부품이고 재활용도 하지 않아서 구비해놓은 곳이 없었다. 마지막에 간 폐차장에서는 학생이라고 하니까 뜯어놓을 테니 내일 와서 가져가라고 하셨다. 심지어 비용도 받지 않으셨다! 정말 감사했다.

두 개나 주셔서 하나는 분해해서 관찰해봤다.

<p align="center">
  <img src="/assets/img/posts/Dynamic-Speed-Bump/Untitled%2012.png" width="80%">
</p>


신기했던 점은 모듈이 똑바로 서 있을 때에만 안전벨트가 풀리도록 구슬을 달아 놓은 것이었다. 왜 그럴까 생각해봤는데, 예를 들어 차가 뒤집혀서 안전벨트가 운전자를 잡고 있는 상황에서 안전벨트가 풀리면 안 되니까 저렇게 만든 것 같다.

### 아크릴 판 가공, 조립

아크릴 판을 가공하여 직육면체 상자를 만들고, 그 사이에 축 등을 끼워넣어서 시스템을 제작하였다.

아래의 영상에 나오는대로 롤러가 천천히 돌아가면 방지턱이 아래로 내려가고, 빠르게 돌아가면 방지턱이 잠긴다.

<div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="/assets/img/posts/Dynamic-Speed-Bump/Test_trimmed.mp4" class="img-fluid rounded z-depth-1" controls=true %}
</div>

### 실패 원인 분석

매우 크리티컬한 문제가 있었는데, 그것은 바로 차가 롤러 위를 지나가도 롤러가 돌지 않는다는 것이었다. 돌지 않는 이유는 자동차 바퀴와 롤러가 point contact을 하기 때문이었다. Point contact을 하면 마찰력이 작용하는 시간이 0이기 때문에 바퀴가 굴러도 롤러가 구르지 않는다.

다만 현실 세계에서는 타이어가 변형되면서 line contact이 일어나 미끄러짐 없는 구름 가정이 유효하다.

하지만 우리가 만드는 것은 1톤짜리 자동차를 이용해 하는 실험이 아니라 고작 1kg도 안되는 rc카를 이용한 실험이어서… line contact 가정이 성립하지 않았다.

### 대책

자동차 바퀴를 대신할 바퀴를 롤러에 접하게 장착한 후, 모터를 이용해 바퀴를 돌려주었다. 이때 초음파 센서를 이용해 차량의 속도를 측정한 후 차량의 속도에 비례하여 모터의 속도를 조절했다.

처음 프로젝트를 시작할 때에 전자부품을 사용하지 않는다는 목표를 세웠기 때문에 이 방안이 마음에 들지 않았지만, 만약 이 시스템을 실제 사용 가능하게 크게 만든다면 초음파 센서는 필요 없기 때문에 납득하고 진행하였다.

# Demonstration

<div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="/assets/img/posts/Dynamic-Speed-Bump/Demo_new.mp4" class="img-fluid rounded z-depth-1" controls=true %}
</div>

마침.

<p align="center">
  <img src="/assets/img/posts/Dynamic-Speed-Bump/Untitled%2013.png" width="80%">
</p>
