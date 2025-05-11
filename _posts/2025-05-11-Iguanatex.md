---
layout: post
title:  "Iguanatex 설치"
date:   2025-05-11 00:05:42 +0200
description: "Iguanatex 설치 방법 정리"
category: [Personal]
fb_app_id: example
lang: ko
use_math: true
giscus_comments: false
toc:
  sidebar: left
---

# 1. IguanaTex 다운로드

[IguanaTex_v1_58.ppam](/assets/files//Iguanatex/IguanaTex_v1_58.ppam)

[IguanaTex - A Free Latex Add-In for PowerPoint on Windows and Mac](https://www.jonathanleroux.org/software/iguanatex/)

에서 다운로드

# 2. PPT에서 IguanaTex 로드

파일 > 옵션 > 추가 기능 > 관리 메뉴에서 PowerPoint 추가 기능 선택 및 이동

<p align="center">
  <img src="/assets/img/posts/Iguanatex/image.png" width="50%">
</p>

새로 설치 누르고 아래 경로에 IguanaTex ppam 파일 붙여넣기

<p align="center">
  <img src="/assets/img/posts/Iguanatex/image%201.png" width="50%">
</p>

C:\Users\<UserName>\AppData\Roaming\Microsoft\AddIns

<p align="center">
  <img src="/assets/img/posts/Iguanatex/image%202.png" width="50%">
</p>

완료하면 상단 리본에 IguanaTex 메뉴가 생긴다.

# 3. 필요한 프로그램 추가 설치

<p align="center">
  <img src="/assets/img/posts/Iguanatex/image%203.png" width="50%">
</p>

Main settings에서 요구하는 프로그램들 설치.

맨 위에 temporary folder는 C:\temp로 설정되어 있는데 그러한 폴더가 없어서 오류가 뜰 수 있다. C 폴더에 temp 폴더 만들어서 해결함.

ImageMagick 최신 버전으로 깔면 convert.exe가 없다. 대신 magick.exe로 지정해주면 된다.

TexStudio는 없어도 됨.

한글 사용이 필요하다면 UTF-8 Input에 체크해주고 \usepackage{kotex} 후 사용.

\setmainhangulfont 사용하려면 latex engine을 luatex으로 변경 후 사용

# 4. 완료

<p align="center">
  <img src="/assets/img/posts/Iguanatex/image%204.png" width="50%">
</p>