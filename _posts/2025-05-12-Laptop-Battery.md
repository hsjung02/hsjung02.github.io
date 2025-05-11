---
layout: post
title:  "노트북 배터리 효율 개선"
date:   2025-05-12 00:05:42 +0200
description: "노트북 배터리 효율 개선"
category: [Personal]
fb_app_id: example
lang: ko
use_math: true
giscus_comments: false
toc:
  sidebar: left
---

# 노트북 배터리 수리

대학 2학년 때 중고로 구입하여 4년 정도 써온 노트북

Lenovo IdeaPad Slim 5 15’’

최근 들어 배터리 타임도 엄청 줄어들고, 완충해놓고 꺼놨는데 방전되어 있는 현상도 많이 발생해서 수리를 결심.

(2025/05/03)

먼저 배터리 리포트 확인

CMD에 powercfg /batteryreport 이용해 배터리 리포트 확인

[battery-report.html](/assets/files/Laptop-battery/battery-report.html)

<p align="center">
  <img src="/assets/img/posts/Laptop-battery/image.png" width="50%">
</p>

배터리 용량은 초기 57,000 mWh → 현재 47,310 mWh로 약 83% 수준이고,

사이클은 588회. 

리포 배터리는 500회 정도가 수명이라고 하던데… 일단 이건 켜져 있을 때 배터리 타임에 관한 내용일 것 같고… 꺼져 있을 때에 배터리가 새는 문제를 해결하고 싶었다.

<p align="center">
  <img src="/assets/img/posts/Laptop-battery/image%201.png" width="50%">
</p>

자료를 보면, 일단 전날 밤 10시에는 노트북을 꺼놨는데 이때에 왜 active/connected standy가 뜨는지, 그리고 다음날 아침 8시에 켰을 때는 왜 배터리가 78%가 되어있는지… 가 의문이다.

먼저 active와 connected standby 상태가 무엇인지부터 알아보자.

| 상태 | 시스템 상태 | 전력 소모 | 주 용도 |
| --- | --- | --- | --- |
| **Active** | 완전 실행 상태 | ★★★★★ | 사용자 작업 중 |
| **Connected Standby** | 절전 상태 + 네트워크 유지 | ★★☆☆☆ | 절전 + 메일 수신, 백그라운드 유지 |
| **Suspended** | 깊은 절전 (S3 또는 S0ix deep idle) | ★☆☆☆☆ | 완전한 슬립, 장치 대부분 전원 꺼짐 |

두 가지 의문이 생긴다.

1. 노트북이 꺼져 있었는데 왜 active로 전환되었는가?
2. Suspended 상태에서 왜 배터리가 저렇게 많이 나가는가?

sleepstudy report 생성

powercfg /sleepstudy

[sleepstudy-report.html](/assets/files/Laptop-battery/sleepstudy-report.html)

<p align="center">
  <img src="/assets/img/posts/Laptop-battery/image%202.png" width="50%">
</p>
갑자기 active로 바뀌는데 entry reason에는 unknown으로 되어있다…

시간대를 생각해보면 노트북을 가방에 집어넣고 나가던 때인데, 충격을 감지해서 켜졌나? 싶긴 하다.

Suspended에서 배터리가 나가는 이유를 찾기 위해 energy report 만들기

powercfg /energy

[energy-report.html](/assets/files/Laptop-battery/energy-report.html)

<p align="center">
  <img src="/assets/img/posts/Laptop-battery/image%203.png" width="50%">
</p>
헉! 에러가 2개나…

<p align="center">
  <img src="/assets/img/posts/Laptop-battery/image%204.png" width="50%">
</p>
이건 오류라고 하기는 좀 그런 것 같고… 성능상의 문제?

<p align="center">
  <img src="/assets/img/posts/Laptop-battery/image%205.png" width="50%">
</p>
이건 문제가 될지도… 

<p align="center">
  <img src="/assets/img/posts/Laptop-battery/image%206.png" width="50%">
</p>
장치 관리자에서 사용 안함으로 바꾸고, 

<p align="center">
  <img src="/assets/img/posts/Laptop-battery/image%207.png" width="50%">
</p>
Wifi 드라이버도 업데이트 완료.

일단 더 사용해보고 해결되지 않으면 배터리 교체해보자!

(2025/05/08)

해결된듯함

[battery-report.html](/assets/files/Laptop-battery/battery-report%201.html)

<p align="center">
  <img src="/assets/img/posts/Laptop-battery/image%208.png" width="50%">
</p>