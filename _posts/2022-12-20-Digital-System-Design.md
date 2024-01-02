---
layout: posts #Do not change.
category: [Digital System Design] #One, more categories or no at all.
title:  "Digital System Design"
date:   2022-12-20 02:05:42 +0200
author: hsjung02 #Author's nick.
#nextPart: \me\fluid mechanics\2022\06\19\Bernoulli-Equation.html #Next part.
#prevPart: _posts/2021-06-17-Bernoulli-Equation.md #Previous part.
#og_image: assets/example.png #Open Graph preview image.
og_description: "논리 소자를 이용해 디지털 회로를 구성할 수 있다." #Open Graph description.
fb_app_id: example
lang: ko
use_math: true
---


# Boolean Algebra

## Combinational Logic

Combinational Logic이란 출력 신호가 현재 입력 신호에만 영향을 받는 디지털 시스템을 뜻한다.

CL은 진리표, 불 대수, 논리회로를 통해 나타낼 수 있다.

## Boolean Algebra

불 대수는 참/거짓을 나타내는 0과 1만을 사용하는 대수이다.

불 대수에서 사용하는 연산은 다음과 같다.

$$
1. \text{ Complement(Inversion): }X', \bar{X}, \\
2. \text{ OR operation: } X+Y ,X|Y \\
3. \text{ AND operation: } X\cdot Y, X\&Y, XY
$$

![Untitled](/assets/img/posts/Combinational-Logic/1.png)

연산 우선순위는 NOT → AND → OR 순이다.

다음은 불 대수에서 성립하는 여러 성질들이다.

드 모르간의 법칙은 NOT 연산자가 괄호 안의 논리식을 0↔1, AND↔OR 로 바꾼다는 것을 나타낸다. 드 모르간의 법칙은 주어진 논리식을 전개하거나 간소화할 때 사용할 수 있다.

Consensus Theorem은 불필요한 consensus term을 논리식에 더하는 과정을 의미한다. SOP에서는 XY+X’Z=XY+X’Z+YZ, POS에서는 (X+Y)(X’+Z)=(X+Y)(X’+Z)(Y+Z)로 나타낼 수 있다. Consensus term을 더함으로써 논리식을 간소화할 수 있다.

## Logic Gate

Logic Gate는 불 대수로 주어진 논리식을 입력-출력 관계(함수)로 나타내는 것을 의미한다. 흔히 사용하는 Logic Gate로는 AND, OR, NAND, XOR, NOR 등이 있다. 특히 NAND 게이트는 Universal gate로, 모든 논리식을 NAND 게이트만을 이용해 나타낼 수 있다. (NAND GATE: (AB)’=A’+B’) NAND 게이트는 AND나 OR 게이트보다 구현이 쉽고 간단하여 많이 사용한다.

Q. NAND 게이트로 Inverter를 만들 수 있을까?

A. NAND 게이트의 두 입력을 하나로 묶으면 출력은 입력의 부정이 된다.

Q. NAND 게이트로 AND 게이트를 만드는 방법은?

A. NAND 게이트의 출력에 Inverter를 연결하면 된다. (Inverter 역시도 NAND 게이트로 구현 가능)

## Two-Level Logic

주어진 논리식은 하나의 논리 회로로 유일하게 나타나지 않는다. 즉, 하나의 논리식에 대해 서로 다른 논리 회로가 존재할 수 있다. 우리의 목표는 여러 논리 회로 중에서 가장 단순한 형태를 찾는 것이다.

Path level, Circuit level, variable, literal 등은 논리 회로의 복잡도 및 비효율성을 나타내기 위해 사용하는 개념이다. Path level이란 논리 회로에서 찾을 수 있는 Input-Output 경로상의 gate 개수를 의미한다. Circuit level이란 회로의 Path level의 최대값이다. Two-level logic은 Circuit level == 2이다.

Variable은 논리식에 등장하는 변수들을 의미한다. Variable의 개수를 셀 때는 A와 A’을 중복으로 세지 않고 하나로 카운트한다. Literal은 각 variable 혹은 complement가 표현식에 나타나는 것을 센 것이다.

## Canonical Form

주어진 논리식이 하나의 논리 회로로 유일하게 나타나지 않는 이유는, 이 논리식을 불 대수 연산을 통해 자유롭게 변형할 수 있기 때문이다. 하지만 같은 함수를 서로 다른 표현식을 통해 나타내는 것은 혼란을 야기하므로, 각 함수에 대한 유일한 표현 방법이 필요하다. 이를 Canonical form이라고 한다.

어떤 함수를 진리표로 표현할 때 그 진리표는 유일하다. Canonical form은 진리표로부터 minterm 혹은 maxterm을 구하고 이를 이용해 SOP 혹은 POS로 표현식을 쓰기 때문에 함수를 유일하게 표현할 수 있다.

Canonical form은 Canonical sum 혹은 Canonical product로 나타낼 수 있다.

Canonical sum은 논리식을 minterm의 합, 즉 Sum-Of-Product 형태로 나타내는 것이다. Minterm이란 각 variable을 정확히 한번씩만 사용하여 논리곱 형태로 나타낸 것을 의미한다. Variable이 n개라면 minterm은 2^n개 존재한다. 

Canonical product는 논리식을 maxterm의 합, 즉 Product-Of-Sum 형태로 나타내는 것이다. Maxterm이란 각 variable을 정확히 한번씩만 사용하여 논리합 형태로 나타낸 것을 의미한다. Variable이 n개라면 maxterm은 2^n개 존재한다. 

Canonical form은 진리표로부터 구할 수 있다. 

![Untitled](/assets/img/posts/Combinational-Logic/2.png)

Canonical sum을 구할 때는 논리값이 1인 minterm만 더해준다.

![Untitled](/assets/img/posts/Combinational-Logic/3.png)

Canonical product를 구할 때는 논리값이 0인 maxterm만 곱해준다.

또한, Canonical form으로 표현된 논리식은 Two-level logic으로 구현할 수 있다.

# Logic Minimization

## Uniting Theorem

POS 혹은 SOP로 나타난 logic expression을 uniting theorem을 통해 단순화할 수 있다.

Uniting theorem

- XY+XY’=X
- (X+Y)(X+Y’)=X

## Karnaugh Map

Karnaugh map은 uniting theorem을 적용할 수 있는 adjacency를 쉽게 찾기 위한 기법이다.

Karnaugh map에서 이웃한 minterm들은 각각 single bit 차이나는 것들이고, 이를 gray code라고 한다.

2-variable K-map은 다음과 같이 표현한다.

![Untitled](/assets/img/posts/Combinational-Logic/4.png)

3-variable K-map은 다음과 같이 표현한다.

![Untitled](/assets/img/posts/Combinational-Logic/5.png)

4-variable K-map은 다음과 같이 표현한다.

![Untitled](/assets/img/posts/Combinational-Logic/6.png)

5-variable K-map은 다음과 같이 표현한다.

![Untitled](/assets/img/posts/Combinational-Logic/7.png)

칸 안의 숫자는 minterm index이다.

## Simplification of Two-level logic using K-map

진리표로부터 K-map을 생성했다면, 이를 이용해 logic을 simplify할 수 있다.

Simplification을 위해서는 K-map의 1들을 최대한 큰 직사각형들로 묶는 것이 중요하다. 이때 1들을 Implicant라 하고, 직사각형들을 Prime Implicant라 한다. PI를 만들 때에는 반드시 PI 내부에 1만 존재해야 하고, PI의 면적은 2의 거듭제곱이어야 한다.

PI를 만드는 이유는 adjacent minterm들에 uniting theorem을 적용하기 위함이다. n-variable K-map에서 크기 2^m인 PI는 uniting theorem에 의해 (n-m) variable의 product로 표현할 수 있다. 이 PI를 표현하기 위해 사용하는 n-m개의 variable은 PI의 위치에 의해 결정되는데, 어떤 variable X에 대해 PI가 X 혹은 X’에 오롯이 걸쳐 있다면 X 혹은 X’을 product term에 사용하고 그렇지 않다면 사용하지 않는다.

K-map에서 만들 수 있는 모든 PI를 만들었다면, Essential PI를 찾아야 한다. K-map의 Implicant 중 단 하나의 PI에만 속해있는 I가 있다면 그 PI는 EPI로, simplified logic expression에 무조건 포함되어야 한다.

EPI를 모두 선택한 이후에 아직 선택되지 않은 I들이 있다면, 최소한의 PI로 그 I들을 커버할 수 있는 경우를 찾는다.

최종적으로 선택된 PI들을 이용해 Sum-Of-Product 형태로 표현한다.

## Automating Two-level simplification

K-map을 이용한 Two-level simplification 자동화 기법으로는 Quine-McCluskey Method가 있는데, 이는 그리디 알고리즘을 통해 exact solution을 찾는 방법이다.

1. 모든 PI를 찾는다.
2. 합칠 수 있는 PI를 모두 합친다.
3. 더 이상 합칠 수 있는 PI가 없을 때까지 2를 반복한다.
4. 2~3의 결과 합쳐지지 않은 PI들과 PI Chart를 이용해 EPI를 찾는다.(5에서 계속)
5. PI Chart에서 하나의 PI에만 속하는 minterm을 찾는다.
6. 5에서 찾은 EPI에 포함되는 minterm은 모두 지운다.
7. 반복하여 EPI를 찾는다.
8. EPI가 더 이상 없다면 남은 PI들 중 모든 minterm을 포함하는 경우 중 PI의 개수가 최소인 경우를 찾는다.
9. 논리식을 완성한다.

![Untitled](/assets/img/posts/Combinational-Logic/8.png)

![Untitled](/assets/img/posts/Combinational-Logic/9.png)

![Untitled](/assets/img/posts/Combinational-Logic/10.png)

![Untitled](/assets/img/posts/Combinational-Logic/11.png)

![Untitled](/assets/img/posts/Combinational-Logic/12.png)

![Untitled](/assets/img/posts/Combinational-Logic/13.png)

## MultiLevel Simplification

SOP와 POS는 각각 AND-OR, OR-AND를 통해 구현할 수 있는데(실제 구현 시에는 NAND 게이트를 사용하는 경우가 많다), 이를 two-level logic으로 구현하기 위해서는 마지막 OR gate의 input이 product term의 개수만큼 필요하다.

게이트의 입력이 많아지면 PPA가 모두 나빠지므로 이 경우 two-level logic을 고집하는 것보다 multilevel logic을 선택하는 것이 좋을 수 있다.

Two-level logic을 Multilevel logic으로 변형하기 위한 기법으로는 factoring, decomposition, extraction이 있다.

Factoring: SOP를 POS로 변경한다.

![Untitled](/assets/img/posts/Combinational-Logic/14.png)

Decomposition & Extraction: 여러 번 반복되는 subfunction을 하나의 literal로 치환

![Untitled](/assets/img/posts/Combinational-Logic/15.png)

![Untitled](/assets/img/posts/Combinational-Logic/16.png)

## Time Response in Combinational Networks

논리 게이트에서 입력의 변화가 생길 때 출력의 변화가 즉각적으로 발생하지 않고, 약간의 시간 차를 두고 발생한다. 이를 Gate delay라 한다. Gate delay는 일정하지 않은데, 이에 영향을 주는 요인으로는 P(process), V(Voltage), T(Temperature)가 있다.

Gate delay로 인해 아래와 같은 펄스가 생성되기도 한다.

![Untitled](/assets/img/posts/Combinational-Logic/17.png)

## Hazards and Glitches

Glitch란 디지털 시스템에서 의도하지 않은 펄스가 발생하는 현상을 의미한다.

Hazard란 glitch가 발생할 가능성이 잠재적으로 존재하는 시스템을 의미한다.

cf) 감기에 걸리면 기침이 날 수도, 안 날 수도 있다.

Hazard는 Static 1-hazard, Static 2-hazard, Dynamic hazard로 분류할 수 있다.

Static hazard는 입력 신호의 변화가 있어도 출력 신호가 바뀌지 않아야 하는 시스템에서 발생하고, Dynamic hazard는 입력 신호의 변화에 따라 출력 신호가 바뀌어야 하는 시스템에서 발생한다.

Static 1-hazard는 출력 신호가 1로 유지되어야 하는 회로에서 출력 신호가 잠시 0이 되었다가 다시 1로 돌아오는 현상이다.

Static 0-hazard는 출력 신호가 0으로 유지되어야 하는 회로에서 출력 신호가 잠시 1이 되었다가 다시 0으로 돌아오는 현상이다.

Dynamic hazard는 출력 신호가 0→1로 변경되는 과정에서 0→1→0→1을 거치거나, 1→0으로 변경되는 과정에서 1→0→1→0을 거치는 현상이다.

다음은 Static 1-hazard의 예시이다.

![Untitled](/assets/img/posts/Combinational-Logic/18.png)

다음은 Static 0-hazard의 예시이다.

![Untitled](/assets/img/posts/Combinational-Logic/19.png)

위의 경우는 redundant term을 곱함으로써 hazard-free circuit을 만들 수 있다.

![Untitled](/assets/img/posts/Combinational-Logic/20.png)

하지만 hazard-free circuit을 만드는 것은 복잡해서, 대부분 clock을 이용해 신호가 안정될때까지 기다린 후 샘플링하는 방식을 채택한다.

Dynamic hazard는 path level이 3 이상인 회로에서 발생한다.

![Untitled](/assets/img/posts/Combinational-Logic/21.png)

## Static hazard 찾는 방법

K-map에서 Implicant가 연결되지 않은 부분 찾기!!

### Static 1-hazard 찾는 방법

F(A, B, C, D) = XXXXA + YYYYA’ + ZZZZ 로 나타낸 다음 XXXX=1, YYYY=1, ZZZZ=0을 풀어서 해가 존재하면 A의 bit change에 의해 glitch가 발생한다.

A, B, C, D에 대해 반복한다.

### Static 1-hazard free circuit 만드는 방법

위에서 찾은 glitch가 존재하는 모든 경우에서 항상 1인 product term을 더해준다.

### Static 0-hazard 찾는 방법

F(A, B, C, D) = (XXXX+A)(YYYY+A’)ZZZZ 로 나타낸 다음 XXXX=0, YYYY=0, ZZZZ=1을 풀어서 해가 존재하면 A의 bit change에 의해 glitch가 발생한다.

A, B, C, D에 대해 반복한다.

### Static 0-hazard free circuit 만드는 방법

위에서 찾은 glitch가 존재하는 모든 경우에서 항상 0인 sum term을 곱해준다.

# CL Technologies and Adder

## MUX (Multiplexer)

Mux란 여러 신호를 하나로 합치는 장치이다. 여러 입력 신호 중 어떤 것을 출력할지는 selection signal에 의해 결정된다. Selection signal이 n-bit이라면 2^n:1 mux이다.

## Half Adder

Half adder란 carry 없이 두 숫자(1 bit)를 더하는 장치이다. Sum = A XOR B, Carry_out  = A AND B이다.

## Full Adder

Full adder란 carry를 포함하여 총 세 숫자(1 bit)를 더하는 장치이다. Sum = A XOR B XOR C, Carry_out = MAJ(A, B, C) = AB + BC + CA이다.

## Adder/Subtractor

### Multi-bit adder

Full adder의 carry_out을 다른 full adder의 carry_in에 연결하면 multi-bit adder를 구현할 수 있다.

![Untitled](/assets/img/posts/Combinational-Logic/22.png)

이때 overflow는 최상위 비트의 carry_out과 carry_in이 다를 때 발생한다.

![Untitled](/assets/img/posts/Combinational-Logic/23.png)

![Untitled](/assets/img/posts/Combinational-Logic/24.png)

Multi-bit adder에서 selection 신호를 통해 subtractor를 구현할 수 있다.

Selection 신호가 1이면 B가 입력으로 사용되고, 최하위 비트의 carry_in = 0이 되어 더하기 연산이 수행된다.

Selection 신호가 0이면 B’이 입력으로 사용되고, 최하위 비트의 carry_in = 1이 되어 twos complement에서 빼기 연산이 수행된다.

## Carry Lookahead Adder

위와 같이 Ripple carry adder로 구현된 multi-bit adder는 단순하지만 critical path가 길다는 단점이 있다. 이를 해결하기 위해 carry lookahead adder를 사용한다.

Carry lookahead adder는 기존 ripple carry adder에서 하위 비트에서 carry를 받아올 수 있을 때까지 기다려야 한다는 단점을 개선한 장치이다. CLA에서는 각 비트의 carry_in을 하위 비트 입력 및 최하위 carry_in으로 계산할 수 있다.

![Untitled](/assets/img/posts/Combinational-Logic/25.png)

두 입력 A와 B에 의해 Carry가 생성되는 경우(Carry Generate)와 입력으로 받은 Carry가 다른 입력 A, B와 관계없이 상위 비트로 전파되는 경우(Carry Propagate)를 모두 고려하여 Carry_out을 Co=Gi+CIPi로 쓸 수 있다.

그러면 C1=G0+P0C0, C2=G1+P1C1=G1+P1(G0+P0C0) …와 같이 쓸 수 있으므로 Ci를 Ai, Ai-1, …, Bi, Bi-1,…,C0에 대해 나타낼 수 있다.

![Untitled](/assets/img/posts/Combinational-Logic/26.png)

이 경우 Ripple carry adder보다 훨씬 빠르게 각 비트의 carry를 계산할 수 있으므로 각 비트의 연산을 병렬적으로 수행할 수 있다.

![Untitled](/assets/img/posts/Combinational-Logic/27.png)

4-bit adder를 여러 개 연결하면 fast 16-bit, 32-bit adder를 구현할 수 있다. 이때는 각 4-bit adder에서의 Group Propagate, Group Generate를 계산하여 LCU에 전달하는 방식으로 연산을 진행한다.

## Carry Select Adder

![Untitled](/assets/img/posts/Combinational-Logic/28.png)

Carry Select Adder는 한술 더 떠서, 하위 비트에서 넘어오는 carry가 0인 경우와 1인 경우 각각에 대해 모두 연산을 해 놓은 다음 넘어오는 carry에 따라 값을 반환함으로써 연산 속도를 높인 장치이다.

## Carry Save Addition

Multi input addition에서 multi-bit adder를 여럿 나열하여 덧셈 연산을 수행하는 것보다 3-input-2-output 구조의 CSA를 이용해 덧셈 연산을 수행하는 것이 더 효율적이다.

![Untitled](/assets/img/posts/Combinational-Logic/29.png)

![Untitled](/assets/img/posts/Combinational-Logic/30.png)

## BCD Adder

BCD adder는 2진수로 표현된 10진수(binary coded decimal)에 대해 덧셈을 수행하는 장치이다. 일반적인 4-bit adder와 동일하지만, 9를 초과하는 경우에는 0110(2)를 더해주어야 실제 값과 일치한다.

![Untitled](/assets/img/posts/Combinational-Logic/31.png)

## Arithmetic Logic Unit

어떻게 하면 다양한 연산을 수행하는 장치를 만들 수 있을까?

이때 말하는 연산은: 산술(Arithmetic) 연산과 논리(Logic) 연산을 모두 포함함

MUX 등으로 연산 신호와 입력 신호를 모두 전달받고, 원하는 연산을 모두 구현해놓으면 된다!


# What is a Sequential Circuit?

Sequential circuit이란 combinational logic과는 달리 출력이 현재의 입력뿐만 아니라 과거의 입력에도 영향을 받는 논리 회로를 의미한다.

당연하게도 모든 회로를 CL로 구현할 수는 없다. 같은 입력에 대해서도 과거의 입력이 무엇인지, 혹은 과거 입력에 따라 결정된 현재 상태가 무엇인지에 따라 출력이 달라져야 하는 경우가 존재하기 때문이다. 우리는 이 문제를 메모리를 활용한 Sequential Logic을 통해 해결하였다.

Sequential circuit의 중요 개념들은 모두 “메모리”를 어떻게 구현할지와 연관되어 있다.

# Memory Elements

## R-S Latch

R-S Latch는 다음의 기능을 수행하는 장치이다.

![Untitled](/assets/img/posts/Sequential-Circuit/1.png)

0으로 초기화, 1로 초기화, 현재값 유지, 현재값 반전의 기능을 모두 수행할 수 있다.

R-S Latch의 문제는 asynchoronous output을 출력한다는 것이다. 즉, asynchronous noise에 대처하지 못한다. 또한 다른 시스템과 연동하기 위해서는 input/output을 동기적으로 받고 내보내야 한다.

이를 해결하기 위해서는 clock에 의해 동작이 제어되는 synchoronous memory를 구현해야 한다. Flip-flop이 그것이다.

## Flip-Flop

D-type Flip Flop의 입출력은 다음과 같다.

입력: Clock signal, D

출력: Q

Flip Flop은 clock의 edge를 감지하여, edge에서의 D값을 저장하여 Q로 출력한다. Clock edge가 아닐 때 D가 변하여도 Q는 변하지 않는 특성을 가진다.

구현하는 방식에 따라 positive edge triggered, negative edge triggered로 구현할 수 있다.

D-type flip flop은 R-S Latch를 직렬 연결하여 구현할 수 있다.

![Untitled](/assets/img/posts/Sequential-Circuit/2.png)

## Registers

Flip-flop을 여러 개 연결하면 둘 이상의 비트를 저장하는 레지스터를 구현할 수 있다. 병렬/직렬에 따라 parallel, shift register로 구분한다.

# More about Clock signal

## Generating Clock signal

Inverter가 홀수개인 feedback circuit의 출력은 0-1-0-1이 주기적으로 반복되는 pulse이고, 이것을 clock signal로 활용할 수 있다.

## Timing Methodology

Clock을 사용한 synchronous system에서는 clock edge에서만 sequential element들이 상호작용하고, 그 다음 edge에 도달하기 전까지 sequential element에 저장된 값들이 변화하면서 안정되어야 한다. 이를 위해서는 Flip flop과 Flip flop 사이의 CL의 propagation delay $T_p$가 $T_h < T_p < T_{period}-T_{su}$여야 한다. 이때 $T_h$는 hold time으로서 clock edge 이후에 값이 유지되는 시간을 의미하고 $T_{su}$는 setup time으로서 clock edge 이전에 값이 유지되는 시간을 의미한다.

## Clock skew

Clock도 신호이기 때문에 전선을 따라 전파되는데 시간이 걸리고, 따라서 칩 상에 존재하는 각 요소에 도달하는 데 걸리는 시간이 각기 다를 수 있다. 이를 clock skew라 하는데, clock skew는 time constraint에 영향을 준다. $T_h+T_{skew} < T_p < T_{period}-T_{su}+T_{skew}$

# Finite State Machine

특정 기능을 수행하는 Combinational Logic을 만들 때에는 진리표와 K-map을 이용해 논리회로를 구성하고 단순화하였다.

Sequential Circuit을 이용해 특정 기능을 구현할 때는 Finite State Machine 형태로 구현할 수 있다.

FSM은 present state에서 state tranisition에 의해 next state로 전환되고, output을 반환한다. 이때 FSM이 가질 수 있는 state의 개수는 유한하다!

## Designing an FSM

FSM 설계는 다음의 과정으로 이루어진다.

1. Abstract Representation(state diagram / state table)
2. State Minimization
3. State assignment(state encoding)
4. Implement next state / output CL

### Abstract Representation

We can use Moore machine or Mealy machine to represent a FSM

![Untitled](/assets/img/posts/Sequential-Circuit/3.png)

![Untitled](/assets/img/posts/Sequential-Circuit/4.png)

### State Minimization

There are some techniques to minimize states.

1. Row-matching method

In a state table, two states with identical next states and outputs can be considered as equal.

Repeat reducting states.

1. Implication chart method

![Untitled](/assets/img/posts/Sequential-Circuit/5.png)

![Untitled](/assets/img/posts/Sequential-Circuit/6.png)

![Untitled](/assets/img/posts/Sequential-Circuit/7.png)

On the lower triangle, draw X on entries corresponding two states that have different outputs.

Remove entries corresponding two states with different next-states.

Remaining entries refer to identical two states.

For complex systems, use Row-matching method first and then apply Implication chart method.

### State Assignment

How to assign states? There exist an optimal solution to simplify states.

1. One-hot coding?
    
    Use n flip-flops for n states.
    
    0001, 0010, 0100, 1000 → only one “hot” bit
    
2. Minimum bit-change heuristic?
    
    Find a solution that causes minimum bit change on state map
    
3. Guidlines based on Next-State and Input/Output

![Untitled](/assets/img/posts/Sequential-Circuit/8.png)

Assign states based on the priority

### Implement

Use truth table and K-map to implement next state / output CL