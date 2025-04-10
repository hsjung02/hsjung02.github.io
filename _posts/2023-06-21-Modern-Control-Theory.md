---
layout: post
title:  "Modern Control Theory"
date:   2023-06-21 02:05:42 +0200
description: "현대제어에서는 state-space model을 구성하고 시스템을 분석한다."
category: [Notes]
tags: [Control theory]
fb_app_id: example
lang: ko
use_math: true
giscus_comments: false
toc:
  sidebar: left
---

# Linear algebra review

## Rank of a matrix

The ranks of a matrix A is the maximal number of linearly independent cloumns of A. It is denoted by rank(A).

### Properties of rank

- Interchange of two rows (or columns) does not alter the value of the rank. Addition of a multiple of a row (or column) to another row (or column) does not alter the value of the rank
- Multiplication of a row (or column) by a nonzezro constant c does not alter the value of the rank
- $$ rank(A)=rank(A^T) $$
- When A is an n*m matrix, $$ rank(A)\le min(n,m) $$
- $$ rank(AB) \le min(rank(A), rank(B)) $$

## Determinant

A determinant is a scalar and is defined for a square matrix.

The determinant of a n*n matrix A is denoted by |A|.

|A| is defined as:

$$ |A| = \sum_{j=1}^n (-1)^{i+j}a_{ij}M_{ij} $$

### Properties of determinant

- Interchange of two rows (or columns) multiplies the value of the determinant by -1
- Addition of a multiple of a row (or column) to another row (or column) does not alter the value of the determinant
- Multiplication of a row (or column) by a constant c multiplies the value of the determinant by c
- When A and B are n*n matrices, |AB| = |A||B|
- When A is an n*n matrix, $$ rank(A)=n $$ iff |A| $$ \not=0 $$

## Inverse matrix

The inverse of an n*n matrix A is denoted by $$ A^{-1} $$ and is an n *n matrix such that $$ AA^{-1}=A^{-1}A=I $$

If A has an inverse, the inverse is unique

If A has an inverse, then A is called a nonsingular matrix

The inverse of a nonsingular matrix A can be given by 
$$ A^{-1}=\frac{1}{|A|}adj(A)=\frac{1}{|A|}C^T(A) $$

### Propreties of an inverse matrix

- The inverse of an n*n matrix A existss iff $$ |A|\not=0 $$
- If A and B are nonsingular, $$ (AB)^{-1}=B^{-1}A^{-1} $$
- If A is a nonsingular matrix and $$ \alpha $$ is a scalar, $$ (\alpha A)^{-1}=A^{-1}/\alpha $$
- If A is a nonsingular matrix, $$ \text{det} (A^{-1})=1/\text{det}(A) $$

## Eigenvalues and Eigenvectors

For a given n*n matrix A, if there existss a scalar $$ \lambda $$ and a nonzero vector $$ v $$ s.t. $$ Av = \lambda v $$ then $$ v $$ is called an eigenvector of A corresponding to the eigenvalue $$ \lambda $$

### Properties of eigenvalues

- The eigenvalues of a square matrix A are the roots of the characteristic equation $$ \mathrm{det}(sI-A)=0 $$
- When A is an n*n matrix and has the eigenvalues $$ \lambda_1, \cdots, \lambda_n $$, $$ |A|=\lambda_1\lambda_2\cdots\lambda_n $$

## Summary of determinant, inverse matrix and eigenvalue

The followings are equivalent:

(a) $$ A $$ is nonsingular

(b) $$ |A|\not=0 $$

(c) $$ rank(A)=n $$

(d) 0 is not an eigenvalue of $$ A $$

## Quadratic form

A quadratic form is a sum of n^2 terms.

$$ x^TAx = \sum_{i=1}^n\sum_{j=1}^n a_{ij}x_ix_j $$

### Positive definite matrix

A symmetric matrix A is said to be positive definite if $$ x^TAx>0 \ (\forall x\not=0) $$

A symmetric matrix A is said to be semi-positive definite if $$ x^TAx\ge0 \ (\forall x\not=0) $$

A is a positive definite matrix iff all eigenvalues of A positive

A is a semi-positive definite matrix iff all eigenvalues of A nonnegative

Q is a positive definite matrix iff there existss a nonsingular matrix $$ H $$ s.t. $$ Q=H^TH $$

### Singular values

Singular values of $$ A $$ is defined as square root of eigenvalues of $$ A^TA $$

Eigenvalues of $$ A^TA $$ are ensured to be positive real values since $$ A^TA $$ is a positive definite matrix

## Cayley-Hamilton theorem

For an n*n matrix A whose characteristic equation is given by $$ a(s)=s^n+a_1s^{n-1}+a_2s^{n-2}+\cdots+a_{n-1}s+a_n=0 $$ the following holds: $$ a(A)=A^n+a_1A^{n-1}+a_2A^{n-2}+\cdots+a_{n-1}A+a_nI=0 $$

## Diagonalizable matrix & Jordan canonical form

A square matrix is called diagonalizable if the matrix is similar to a diagnoal matrix.

$$ \Lambda=P^{-1}AP $$

An n*n matrix A is diagonalizable iff A has n linearly independent eigenvectors.

If a square matrix A has distinct eigenvalues, A is diagonalizable

If a matrix is not diagonalizable, we can pseudo-diagonalize the matrix using Jordan canonical form.

$$ J=P^{-1}AP $$ and $$ J $$ consists of many Jordan blocks.

DEF> Geometric and Algebraic multiplicities

Geometric multiplicity: $$ rank(A-\lambda_iI)=n-\kappa_i $$

Algebraic multiplicity: $$ \mathrm{det}(sI-A)=\prod_{i=1}^l(s-\lambda_i)^{n_i}, n_i=n_{i1}+\cdots+n_{i\kappa_i} $$

For an eigenvalue $$ \lambda_i $$, there are $$ \kappa_i $$ Jordan blocks which have $$ \lambda_i $$ as diagonal elements and each Jordan block has size of $$ n_{ip}\times n_{ip} $$

# State-Space representation

## State-Space representation

State-Space representation은 input-output relation을 나타내기 위해 하나의 state equation과 하나의 output equation을 이용하는 방법이다.

$$
\begin{cases}\frac{dx(t)}{dt}=A(t)x(t)+B(t)u(t) \\ y(t)=C(t)x(t)+D(t)u(t)\end{cases}
$$

state equation이 없으면 ⇒ memoryless system

A, B, C, D가 time-variant ⇒ LTV system

A, B, C, D가 constant ⇒ LTI system

State-Space represenation을 이용하면 signal을 time domain에서 다룰 수 있다. nonzero initial condition을 다룰 수 있고, system의 transient response를 다룰 수 있다.

## Transfer function and State-Space representation

We can convert between transfer function and State-space representation

### Transfer function to State-Space represenation

Method 1: Controllable canonical form

Given $$ G(s)=\frac{Y(s)}{U(s)}\frac{b_{n-1}s^{n-1}+\cdots+b_1s+b_0}{s^n+a_{n-1}s^{n-1}+\cdots+a_1s+a_0}+d $$, let $$ X(s)=\frac{1}{s^n+a_{n-1}s^{n-1}+\cdots+a_1s+a_0}U(s) $$ then $$ Y(s)=(b_{n-1}s^{n-1}+\cdots+b_1s+b_0)X(s)+dU(s) $$.

We get $$ y=b_0x + b_1\frac{dx}{dt}+\cdots+b_{n-1}\frac{d^{n-1}x}{dt^{n-1}}+du $$ (output equation) and $$ \frac{d^nx}{dt^n}=-a_0x-a_1\frac{dx}{dt}-\cdots-a_{n-1}\frac{d^{n-1}x}{dt^{n-1}}+u $$(state equation)

Method 2: Observable canonical form

Given $$ G(s)=\frac{Y(s)}{U(s)}\frac{b_{n-1}s^{n-1}+\cdots+b_1s+b_0}{s^n+a_{n-1}s^{n-1}+\cdots+a_1s+a_0}+d $$, consider $$ G_0(s)=G(s)-d $$

$$ Y(s)=G_0(s)U(s)\rightarrow s^nY(s)+\cdots+a_sY(s)=b_{n-1}s^{n-1}U(s)+\cdots+b_0U(s)\rightarrow a_0y-b_0u+\frac{d}{dt}(a_1y-b_1u+\frac{d}{dt}(\cdots+\frac{d}{dt})a_{n-1}y-b_{n-1}u+\frac{dy}{dt})=0 $$

By recursively defining $$x_i$$ so that $$ a_{i-1}y-b_{i-1}u+\frac{dx_i}{dt}=x_{i-1} $$, we get 

$$
\frac{d}{dt}\begin{pmatrix} x_1\\ \vdots \\ x_n\end{pmatrix}=\begin{pmatrix} 0 & 0 & \cdots & 0 &-a_0 \\1 & 0 & \cdots & 0 & -a_1 \\ 0 & \ddots & \ddots & \vdots & \vdots \\ \vdots & \ddots & \ddots & 0 & -a_{n-2} \\ 0 & \cdots & 0 & 1 & -a_{n-1}\end{pmatrix}\begin{pmatrix}x_1 \\ \vdots \\ x_n \end{pmatrix} + \begin{pmatrix}b_0 \\ \vdots \\ b_{n-1}\end{pmatrix}u, \\ y=\begin{pmatrix}0 & \cdots & 0 & 1\end{pmatrix}+du
$$

Between controllable canonical form and observable canonical form, following holds:

$$
\begin{cases} \frac{dx(t)}{dt}=A_cx(t)+B_cu(t)\\ y(t)=C_cx(t)+D_cu(t)\end{cases}
$$

$$
\begin{cases}\frac{dx(t)}{dt}=A_ox(t)+B_ou(t)\\ y(t)=C_ox(t)+D_ou(t)\end{cases}
$$

$$ A_c^T=A_o, B_c^T=C_o, C_c^T=B_o, D_c^T=D_o $$

### State-Space representation to Transfer function

$$
\begin{cases}\frac{dx}{dt}=Ax+Bu\\y=Cx+Du\end{cases}\rightarrow \begin{cases}sX=AX+BU\\Y=CX+DU\end{cases}\rightarrow G(s)=\frac{Y(s)}{U(s)}=C(sI-A)^{-1}B+D
$$

## Block diagram on State-Space representation

Two systems are given.

$$
G_1:\begin{cases}\frac{dx_1}{dt}=A_1x_1+B_1u_1\\y_1=C_1x_1+D_1u_1\end{cases}, G_2:\begin{cases}\frac{dx_2}{dt}=A_2x_2+B_2u_2\\y_2=C_2x_2+D_2u_2\end{cases}
$$

### Cascade

$$ u=u_1, y_1=u_2, y=y_2 $$ lead to: 

$$
G:\begin{cases}\frac{dx}{dt}=\begin{pmatrix}A_1 & 0\\B_2C_1 & A_2\end{pmatrix}x+\begin{pmatrix}B_1\\B_2D_1\end{pmatrix}u\\y=\begin{pmatrix}D_2C_1&C_2\end{pmatrix}x+D_2D_1u\end{cases}
$$

### Parallel

$$ u=u_1=u_2, y=y_1+y_2 $$ lead to: 

$$
G:\begin{cases}\frac{dx}{dt}=\begin{pmatrix}A_1 & 0 \\ 0 & A_2\end{pmatrix}x+\begin{pmatrix}B_1 \\ B_2\end{pmatrix}u\\y=\begin{pmatrix}C_1&C_2\end{pmatrix}x+(D_1+D_2)u\end{cases}
$$

### Negative feedback

$$ u=u_1=y_2, y=y_1=u_2 $$ lead to: 

$$
G:\begin{cases}\frac{dx}{dt}=\begin{pmatrix}A_1-B_1ED_2C_1 & -B_1EC_2\\ B_2(I-D_1ED_2)C_1 & A_2-B_2D_1EC_2\end{pmatrix}x + \begin{pmatrix}B_1E\\B_2D_1E\end{pmatrix}u \\y=\begin{pmatrix}(I-D_1ED_2)C_1 & -D_1EC_2\end{pmatrix}x+D_1Eu\end{cases}
$$

# LTI system

## Causality, Time-invariance, Linearity

### Causality

An operator $$ \mathbf{T} $$ is said to be $$causal$$ if $$ (\mathbf{T}f)_\tau=(\mathbf{T}f_\tau)_\tau, \forall\tau\ge0 $$ for an arbitrary $$ f $$, where 

$$
f_\tau(t)=\begin{cases}f(t) & 0\le t\le\tau \\ 0 & \tau<t\end{cases}
$$

### Time-invariance

An operator $$ \mathbf{T} $$ is said to be $$time-invariant$$ if $$ \mathbf{T}S_\tau=S_\tau\mathbf{T}, \forall\tau\in\mathbb{R} $$ where $$ S_\tau $$ is a shift operator defined as $$ S_\tau(f(t))\colon= f(t-\tau) $$

### Linearity

Let $$ y_1 $$ and $$ y_2 $$ be the outputs of a state-space system corresponding to the inputs $$ u_1 $$ and $$u_2$$, respectively. The system is $$linear$$ if $$\alpha y_1+\beta y_2$$ is the output corresponding to the input $$\alpha u_1 + \beta u_2$$

## Similarity transformation b/w state-space systems

There are various equivalent state-space equations for a given transfer function. They can be transformed from & to each other through similarity transformation $$\tilde{x}\colon= Tx$$

With similarity transformation $$T$$, $$\tilde{A}=TAT^{-1}, \tilde{B}=TB, \tilde{C}=CT^{-1}, \tilde{D}=D$$

## Solution to state-space representation

$$
\begin{cases}
\dot{x}=Ax+Bu\\
y=Cx+Du
\end{cases} \rightarrow
\begin{cases}
x(t)=e^{At}(x(0)+\int_0^te^{-A\tau}Bu(\tau)d\tau)\\
y(t)=Cx(t)+Du(t)
\end{cases}
$$

# Stability analysis of state-space system

Given a space-state system, we can define two kinds of stability: Lyapunov stability and input-output stability.

## Lyapunov stability

In Lyapunov sense, we consider the effect of A matrix(or of initial condition) on stability. There can be four cases:

1. The system is marginally stable if x(t) is uniformly bounded for all x(0).
2. The system is asymptotically stable if x(t) converges to 0 for all x(0).
3. The system is exponentially stable if there existss 
$$c,\lambda>0$$ 
such that 
$$||x(t)||\le ce^{-\lambda t}||x(0)||$$ 
for all x(0).
4. The systme is unstable if it is not marginally stable.

## Lyapunov stability theorem

The following conditions are all equivalent for an LTI system.

1. The system is asymptotically stable.
2. The system is exponentially stable.
3. All the eigenvalues of A has strictly negative real parts.
4. For every symmetric positive definite matrix $$Q$$, there existss a unique positive definite solution $$P$$ to the Lyapunov equation $$A^TP+PA=-Q$$.

$$pf>$$

1→3: 

$$
\begin{align*}
x(t)=e^{At}x(0)\\
x(\infty)=e^{A\infty}x(0)=0\\
\rightarrow e^{A\infty}=Pe^{J\infty}P^{-1}=0\\
e^{J\infty}=0\\
\mathrm{all}\ Re\{\lambda\}<0
\end{align*}
$$

2→3: 2→1→3

3→2: 



$$

\begin{align*}
||e^{Jt}|| &\le|e^{\lambda_nt}|+|te^{\lambda_nt}|+\cdots|\frac{t^{n-1}}{(n-1)!}e^{\lambda_nt}|\\
&\le|e^{\lambda_nt}|+|te^{\lambda_nt}|+\cdots|t^{n-1}e^{\lambda_nt}|\\
&\le|e^{\lambda_nt}|(1+|t|+|t^2|+\cdots+|t^{n-1}|)\\
&\le|e^{\lambda_nt}|\cdot n(1+t^{n-1})\\
&=e^{-2\lambda t}\cdot n(1+t^{n-1})\\
&\le c\cdot e^{-\lambda t}\\
\end{align*}\\
\rightarrow ||x(t)||\le||P||\cdot ||P^{-1}||\cdot C e^{-\lambda t}||x(0)||
$$

3→1: 3→2→1

2→4: Set 
$$P=\int_0^\infty e^{A^Tt}Qe^{At}dt$$. 
$$P$$ 
is well defined since 
$$||e^{A^Tt}Qe^{At}||$$ 
exponentially decays. Then we first show that 
$$P$$ 
is the solution to 
$$A^TP+PA=-Q$$. 
$$A^TP+PA=\int_0^\infty(A^Te^{A^Tt}Qe^{At}+e^{A^Tt}Qe^{At}A)dt=\int_0^\infty(e^{A^Tt}Qe^{At})'dt=\lim_{t\rightarrow\infty}e^{A^Tt}Qe^{At}-Q=-Q$$. 
Then we show the uniqueness of the solution 
$$P$$. 
Let 
$$\bar{P}$$ 
be another solution. Since 
$$A^T(P-\bar{P})+(P-\bar{P})A=0$$, 
we get 
$$\frac{d}{dt}(e^{A^Tt}(P-\bar{P})e^{At})=A^Te^{A^Tt}(P-\bar{P})e^{At}+e^{A^Tt}(P-\bar{P})e^{At}A=0$$ 
and therefore 
$$e^{A^Tt}(P-\bar{P})e^{At}=c=0$$. 
Therefore $$P=\bar{P}$$.

4→2: Let 
$$v(t)=x^TPx$$. 
Then 
$$\lambda\min(P)||x||^2\le v(t)\le \lambda\max(P)||x||^2$$ 
($$\lambda\min(P)>0$$ 
since $$P$$ is positive definite). 
$$\dot{v}=\dot{x}^TPx+x^TP\dot{x}=(Ax)^TPx+x^TP(Ax)=x^T(A^TP+PA)x=-x^TQx\le -\lambda\min(Q)||x||^2\le -\frac{\lambda\min(Q)}{\lambda\max(P)}v=-\lambda v$$. 
Therefore 
$$v\le e^{-\lambda t}v(0)$$. 
$$\lambda\min(P)||x||^2\le v(t)\le e^{-\lambda t}v(0) \le e^{-\lambda t}\lambda \max (P)||x(0)||^2$$, 
$$||x||^2\le\frac{\lambda\max(P)}{\lambda\min(P)}e^{-\lambda t}||x(0)||^2$$. 
Exponentially stable by definition.

## Input-output stability

BIBO stable if exists $$c$$ such that 
$$\sup_{0\le t <\infty}||y(t)||\le c \sup_{0\le t <\infty}||u(t)||$$.

The system is BIBO stable <=>

$$ \int_0^\infty |g_{ij}(t)|dt<\infty, Ce^{At}B=g $$

$$pf>$$

i) →: Suppose 
$$\int_0^\infty |g_{ij}(t)|dt=\infty$$ 
for some i, j. Let 
$$\tilde{g}_{ij}(T, t)=Ce^{A(t-\tau)}B$$. 
With input 

$$
u_T(\tau)=\begin{cases}+e_j && \tilde{g}_{ij}(T,\tau)\ge0 \\ -e_j && \tilde{g}_{ij}(T,\tau)<0\end{cases}
$$

$$y(T)=\int_0^T\tilde{g}_{ij}(T,\tau)u_T(\tau)d\tau+Du_T(T)$$, 
$$y_i(T)=\int_0^T|g_i(\tau)|d\tau\pm d_i$$ 
is unbounded, therefore not BIBO stable.

ii) ←: Let 

$$\tilde{g}_{ij}(T, t)=Ce^{A(t-\tau)}B$$. 

$$
\begin{align*}
||y(t)||&\le\int_0^t||\tilde{g}(t,\tau)||||u(\tau)||d\tau+||D||||u(t)||\\
&\le(\int_0^t||\tilde{g}(t,\tau)||d\tau+||D||)\sup_{0\le t <\infty}||u(t)||\\
&\le(\int_0^t\sum||\tilde{g}_{ij}(t,\tau)||d\tau+||D||)\sup_{0\le t <\infty}||u(t)||\\
&\le(\int_0^\infty\sum||g_{ij}(\tau)||d\tau+||D||)\sup_{0\le t <\infty}||u(t)||
\end{align*}
$$

## BIBO stable if Exponentially stable

$$
\begin{align*}
|g_{ij}(t)|&=|C_ie^{At}B_j|\\
&\le||C_i||||e^{At}B_j||\\
&=||C_i||||e^{At}x(0)||\\
&=||C_i||||x(t)||\\
&\le Ce^{-\lambda t}||x(0)||,\\

\int_0^\infty |g_{ij}(t)|dt &\le \int_0^\infty C e^{-\lambda t}||x(0)||dt \\
&< \infty
\end{align*}
$$

Therefore we just need to consider the Lyapunov stability.

# Controllability

The pair (A,B) is controllable if there existss u(t) that moves x(t) from x(0) to any x(s).

The following conditions are equivalent:

1. The pair (A,B) is controllable.
2. Controllability matrix $$U_c=(B \ AB \ \cdots A^{n-1}B)$$ has rank n.
3. Controllability gramian $$W_s \int_0^se^{At}BB^Te^{A^Tt}dt$$ is nonsingular for any s.

$$pf>$$

1→2: 

By Cayley-Hamilton theorem, 

$$
e^{At}=q_1(t)I+q_2(t)A+q_3(t)A^2+\cdots+q_n(t)A^{n-1}
$$

$$
x(s)=e^{As}(x(0)+\int_0^se^{-A\tau}Bu(\tau)d\tau),\\
\rightarrow e^{-As}x(s)-x(0)=\int_0^se^{-A\tau}Bu(\tau)d\tau\\
=\int_0^s\sum_{i=1}^n q_i(-\tau)A^{i-1}Bu(\tau)d\tau\\
=\sum_{i=1}^n A^{i-1}Bh_i \\
=U_c\begin{pmatrix}h_1 \\ \vdots \\ h_n\end{pmatrix}
$$

$$U_c$$ should be rank n because $$e^{-As}x(s)-x(0)$$ can be any $$x\in\mathbb{R}^n$$.

2→3: Suppose $$W_s$$ is singular for some $$s$$. ⇒ $$\exists x\not=0 \ s.t. W_sx=0$$

$$
W_sx=0 \rightarrow x^TW_sx=\int_0^sx^Te^{At}BB^Te^{A^Tt}xdt=0, B^Te^{A^Tt}x=0 (0\le t \le s)\\
\rightarrow B^Tx=0, B^TA^Tx=0, \cdots B^T(A^T)^{n-1}x=0\\
\rightarrow \begin{pmatrix}B^T \\ B^TA^T \\ \vdots \\ B^T(A^T)^{n-1}\end{pmatrix}x=U_c^Tx=0\\
\therefore rank(U_c)<n\\
$$

proved by contradiction

3→1: given $$s, x(s)=x_1, x(0)=x_0$$,

$$
u(t)=B^Te^{A^T(s-t)}W_s^{-1}(-e^{-As}x_0+x_1)\\
\begin{align*}
x(s)&=e^{As}(x(0)+\int_0^s e^{-A\tau}Bu(\tau)d\tau)\\
&=e^{As}x_0+\int_0^se^{A(s-\tau)}BB^Te^{A^T(s-\tau)}W_s^{-1}(-e^{-As}x_0+x_1)d\tau\\
&=e^{As}x_0+\int_0^se^{A(s-\tau)}BB^Te^{A^T(s-\tau)}d\tau W_s^{-1}(-e^{-As}x_0+x_1)\\
&=e^{As}x_0+W_sW_s^{-1}(-e^{-As}x_0+x_1)\\
&=e^{As}x_0-e^{-As}x_0+x_1\\
&=x_1
\end{align*}
$$

therefore controllable.

## Controllable decomposition

If $$rank(U_c)=r<n$$, the system is uncontrollable. Then existss a similarity transform $$T \ s.t. \ \tilde{A}=TAT^{-1}=\begin{pmatrix} \tilde{A_{11}} & \tilde{A_{12}} \\ 0 & \tilde{A_{22}}\end{pmatrix}, \tilde{B}=TB=\begin{pmatrix}\tilde{B_1} \\ 0\end{pmatrix}$$ and $$(\tilde{A_{11}}, \tilde{B_1})$$ is controllable.

Construct $$Q=(v_1 \ \cdots \ v_r \ v_{r+1} \ \cdots \ v_n)$$ where $$v_1, v_2, \cdots, v_r$$ are linearly independent columns of $$U_c$$ and $$v_{r+1}, \cdots, v_n$$ are vectors that make $$Q$$ nonsingular. Then, $$T=Q^{-1}$$.

$$
AQ=AT^{-1}=A(v_1 \ \cdots v_r \ v_{r+1} \ \cdots \ v_n)=(Av_1 \ \cdots Av_{r} \ Av_{r+1} \ \cdots \ Av_n)
$$

Here $$Av_1, Av_2, \cdots, Av_r$$ can be expressed as linear combination of $$v_1, v_2, \cdots, v_r$$ since columns of $$AU_c$$ are linear combinations of $$v_1, v_2, \cdots, v_r$$. Then 

$$
AT^{-1}=(v_1 \ \cdots \ v_r \ v_{r+1} \ \cdots \ v_n)\begin{pmatrix}\tilde{A_{11}} & \tilde{A_{12}} \\ 0 &\tilde{A_{22}}\end{pmatrix}=T^{-1}\begin{pmatrix}\tilde{A_{11}} & \tilde{A_{12}} \\ 0 &\tilde{A_{22}}\end{pmatrix}\\
B=(v_1 \ \cdots \ v_r)\tilde{B_1}=(v_1 \ \cdots \ v_r \ v_{r+1} \ \cdots \ v_n)\begin{pmatrix}\tilde{B_1}\\0\end{pmatrix}\\
\to \tilde{A}=TAT^{-1}, \tilde{B}=TB
$$

$$
\begin{align*}
TU_c&=T(B \ AB \ \cdots \ A^{n-1}B)\\
&=(TB \ TAT^{-1}TB \ \cdots \ (TAT^{-1})^{n-1}TB)\\
&=\begin{pmatrix}\tilde{B_1} & \tilde{A_{11}}\tilde{B_1} & \cdots & \tilde{A_{11}}^{n-1}\tilde{B_1} \\ 0 & 0 & \cdots & 0\end{pmatrix}
\end{align*}
$$

$$
\begin{align*}
rank(TU_c)&=rank\begin{pmatrix}\tilde{B_1} & \tilde{A_{11}}\tilde{B_1} & \cdots & \tilde{A_{11}}^{n-1}\tilde{B_1} \\ 0 & 0 & \cdots & 0\end{pmatrix}\\
&=rank\begin{pmatrix}\tilde{B_1} & \tilde{A_{11}}\tilde{B_1} & \cdots & \tilde{A_{11}}^{n-1}\tilde{B_1}\end{pmatrix}\\
&=rank(U_c)\\
&=r
\end{align*}
$$

therefore $$(\tilde{A_{11}}, \tilde{B_1})$$ is controllable.

## Stabilizability and PBH test

System is stabilizable if $$\tilde{A_{22}}$$ is stable.

PBH(Popov-Belevitch-Hautus) test gives equivalent condition on controllable and stabilizable.

1. Pair $$(A,B)$$ is controllable iff $$rank(A-\lambda I \ B)=n, \ \forall\lambda \in \mathbb{C}$$
2. Pair $$(A,B)$$ is stabilizable iff $$rank(A-\lambda I \ B)=n, \ \forall \lambda\in\mathbb{C}, Re\{\lambda\}\ge0$$

pf of 1 → : Suppose $$\exists\lambda \ s.t. \ rank(A-\lambda I \ B)<n$$.

$$\exists v\not=0 \ s.t. v^T(A-\lambda I \ B)=0$$

$$
v^TA=\lambda v^T, \ v^TB=0 \\
\to v^TA^l=\lambda^l v^T, v^TA^lB=\lambda^l v^TB=0\\
\to v^T(B \ AB \ \cdots \ A^{n-1}B)=0
$$

$$(A,B)$$ is not controllable.

pf of 1 ← : Suppose $$(A,B)$$ is not controllable.

Do controllable decomposition $$\tilde{A}=\begin{pmatrix}\tilde{A_{11}} & \tilde{A_{12}} \\ 0 & \tilde{A_{22}}\end{pmatrix}, \tilde{B}=\begin{pmatrix}\tilde{B_1}\\ 0\end{pmatrix}$$, let $$\lambda, v$$ be eigenvalue of $$\tilde{A_{22}}$$ and corresponding eigenvector, where $$Re\{\lambda\}\ge0$$. Then $$(\tilde{A}-\lambda I \ \tilde{B})\begin{pmatrix}0 \\ v\end{pmatrix}=\begin{pmatrix}\tilde{A_{11}}-\lambda I & \tilde{A} & \tilde{B_1} \\ 0 & \tilde{A_{22}}-\lambda I & 0\end{pmatrix}\begin{pmatrix}0 \\ v\end{pmatrix}=0$$ therefore $$rank(\tilde{A}-\lambda I \ \tilde B)<n$$. $$rank(A-\lambda I \ B)=rank(T^{-1}(A-\lambda I \ B)\begin{pmatrix}T & 0 \\ 0 & I\end{pmatrix})=rank(\tilde A - \lambda I \ \tilde B)<n$$

pf of 2 → : Suppose $$\exists \lambda \ s.t. \ Re\{\lambda\}\ge 0$$ and $$rank(A-\lambda I \ B)<n$$.

$$rank(A-\lambda I \ B)=rank(\tilde A -\lambda I \ \tilde B)<n \to \exists v=\begin{pmatrix}v_1 \\ v_2\end{pmatrix}\not=0 \ s.t. v^T(\tilde A -\lambda I \ \tilde B)=0$$

$$v_1^T\tilde A_{11}=\lambda v_1^T, v_1^T\tilde B_1=0, v_1^T\tilde A_{12}+v_2^T\tilde A_{22}=\lambda v_2^T$$

since $$(\tilde A_{11}, \tilde B_1)$$ is controllable, $$v_1=0$$ therefore $$v_2^T\tilde A_{22}=\lambda v_2^T$$

$$\lambda$$ is eigenvalue of $$\tilde A_{22} \to$$ system is not stabilizable.

pf of 2 ← : Suppose not stabilizable.

$$
rank(A-\lambda I \ B)=rank(\tilde A -\lambda I \ \tilde B) = rank\begin{pmatrix}\tilde A_{11}-\lambda I & \tilde A_{12} & \tilde B_1 \\ 0 & \tilde A_{22}-\lambda I & 0 \end{pmatrix}<n
$$

# Observability

The pair (C, A) is observable if we can uniquely determine initial state using y(t) and u(t).

The following conditions are equivalent.

1. The pair (C, A) is observable.
2. Observability matrix $$U_o=\begin{pmatrix}C \\\ CA \\\ \vdots \\\ C(A)^{n-1}\end{pmatrix}$$ has rank n
3. Observability gramian $$Y_s=\int_0^se^{A^Tt}C^TCe^{At}dt$$ is nonsinular

$$pf>$$

1→2: Suppose $$rank(U_o)<n \to \exists x_0\not=0 \ s.t. \ U_ox_0=0$$.

$$
Cx_0=0, CAx_0=0, \cdots, CA^{n-1}x_0=0 \to Ce^{At}x_0=0\\
\begin{align*}
y(t)&=Ce^{At}x_0+\int_0^tCe^{A(t-\tau)}Bu(\tau)d\tau+Du(t)\\
&=\int_0^tCe^{A(t-\tau)}Bu(\tau)d\tau+Du(t)
\end{align*}
$$

cannot determine $$x(0)\to$$not observable.

2→3: Suppose $$Y_s$$ is singular $$\to \exists v\not=0 \ s.t. \ Y_sv=0$$

$$v^TY_sv=0 \to Ce^{At}v=0, \ \therefore Cv=CAv=\cdots=CA^{n-1}v=0\to U_o v=0 \to rank(U_o)<n$$

3→1: 

$$
\begin{align*}
x_0&=Y_s^{-1}Y_sx_0\\
&=Y_s^{-1}\int_0^se^{A^Tt}C^TCe^{At}dsx_0\\
&=Y_s^{-1}\int_0^se^{A^Tt}C^T(y(t)-Ce^{At}\int_0^te^{-A\tau}Bu(\tau)d\tau)dt
\end{align*}
$$

therefore observable

## Observable decomposition

If $$rank(U_o)=r<n$$, the system is unobservable. Then existss a similarity transform $$T \ s.t. \ \tilde{A}=TAT^{-1}=\begin{pmatrix} \tilde A_{11} & 0 \\ \tilde A_{21} & \tilde A_{22} \end{pmatrix}, \tilde{C}=CT^{-1}=\begin{pmatrix}\tilde{C_1} & 0\end{pmatrix}$$ and $$(\tilde C_1, \tilde A_{11})$$ is observable.

Construct $$T=\begin{pmatrix}w_1 \\ \vdots \\ w_r \\ w_{r+1} \\ \vdots \\ w_n\end{pmatrix}$$ where $$w_1, \cdots, w_r$$ are linearly independent rows of $$U_o$$ and $$w_{r+1}, \cdots, w_n$$ are lineary independent vectors that make $$T$$ nonsingular.

In the same way as controllable decomposition, 

$$
TA=\begin{pmatrix}w_1 \\ \vdots \\ w_r \\ w_{r+1} \\ \vdots \\ w_n\end{pmatrix}A=\begin{pmatrix}w_1A \\ \vdots \\ w_rA \\ w_{r+1}A \\ \vdots \\ w_nA\end{pmatrix}=\begin{pmatrix}\tilde A_{11} & 0 \\ \tilde A_{21} & \tilde A_{22}\end{pmatrix}\begin{pmatrix}w_1 \\ \vdots \\ w_r \\ w_{r+1} \\ \vdots \\ w_n\end{pmatrix}=\begin{pmatrix}\tilde A_{11} & 0 \\ \tilde A_{21} & \tilde A_{22}\end{pmatrix}T\\
C=\tilde C_1 \begin{pmatrix}w_1 \\ \vdots \\ w_r\end{pmatrix}=(\tilde C_1 \ 0)\begin{pmatrix}w_1 \\ \vdots \\ w_r \\ w_{r+1} \\ \vdots \\ w_n\end{pmatrix}=(\tilde C_1 \ 0)T
$$

$$
U_oT^{-1}=\begin{pmatrix}C \\ CA \\ \vdots \\ CA^{n-1}\end{pmatrix}T^{-1}=\begin{pmatrix}CT^{-1} \\ CT^{-1}TAT^{-1} \\ \vdots \\ CT^{-1}(TAT^{-1})^{n-1}\end{pmatrix}=\begin{pmatrix}\tilde C_1 & 0 \\ \tilde C_1 \tilde A_{11} & 0 \\ \vdots & \vdots\\ \tilde C_1 \tilde A_{11}^{n-1} & 0\end{pmatrix}\\
rank(U_oT^{-1})=rank\begin{pmatrix}\tilde C_1 \\ \tilde C_1 \tilde A_{11}\\ \vdots \\ \tilde C_1 \tilde A_{11}^{n-1}\end{pmatrix}=r
$$

$$(\tilde C_1, \tilde A_{11})$$ is observable

## Detectability and PBH test

Detectable if $$\tilde A_{22}$$ is stable.

1. $$(C, A)$$ is observable iff $$rank\begin{pmatrix}A-\lambda I \\ C\end{pmatrix}=n, \forall \lambda\in\mathbb{C}$$
2. $$(C,A)$$ is detectable iff $$rank\begin{pmatrix}A-\lambda I \\ C\end{pmatrix}=n, \forall \lambda\in\mathbb{C}, Re\{\lambda\}\ge0$$

pf> Can be easily shown

# State feedback controller

Given state-space model $$\begin{cases}
\frac{dx}{dt}=Ax+Bu\\
y=Cx+Du
\end{cases}$$의 시스템 특성을 조절하기 위해서는, controllable canonical form으로 바꾼 후에 pole location을 하면 된다.

1. Similarity transform $$T\ s.t. \ A_c=TAT^{-1}$$
    
    $$U_c^{-1}=\begin{pmatrix}*\\\ q \end{pmatrix} \to T=\begin{pmatrix}q \\\ qA \\\ \vdots \\\ qA^{n-1}\end{pmatrix}$$ makes $$TAT^{-1}=A_c$$  and $$TB = B_c$$.
    
2. Pole location
    
    When we do state feedback (u=r+Fx), matrix A becomes $$A+BF$$. For canonical form, $$A_c+B_cF_c=\begin{pmatrix}0 & 1 & 0 & \cdots & 0 \\\ 0 & 0 & 1 & \cdots & 0 \\\ \vdots & \ddots & \ddots & \ddots & \vdots \\\ 0 & \cdots & \cdots & \cdots & 1 \\\ -\alpha_0+f_0 & -\alpha_1+f_1 & \cdots & \cdots & -\alpha_{n-1}+f_{n-1}\end{pmatrix}$$ where $$F_c=(f_0 \ f_1 \ \cdots \ f_{n-1})$$.
    
    Since 
    $$|sI-(A_c+B_cF_c)|=s^n+(\alpha_{n-1}-f_{n-1})s^{n-1}+\cdots+(\alpha_0-f_0)$$, 
    we can assign arbitrary eigenvalues of $$A_c+B_cF_c$$.
    
3. Return to original model
    
    When we find $$F_c$$, return to $$F=F_cT$$
    

Can assign eigenvalues of $$A+BF \ iff \ (A,B)$$ is controllable.

# State observer

Given state-space model $$\begin{cases}
\frac{dx}{dt}=Ax+Bu\\
y=Cx+Du
\end{cases}$$

State observer $$\begin{cases}
\frac{d\hat{x}}{dt}=A\hat{x}-K(y-\hat{y})+Bu\\
\hat{y}=C\hat{x}+Du
\end{cases}$$

Then, $$e=x-\hat{x}$$

$$
\begin{align*}
\dot{e}&=\dot{x}-\dot{\hat{x}}\\
&=Ax+Bu-(A\hat{x}+Bu-K(y-\hat{y}))\\
&=A(x-\hat{x})+K(y-\hat{y})\\
&=A(x-\hat{x})+KC(x-\hat{x})\\
&=(A+KC)(x-\hat{x})\\
&=(A+KC)e
\end{align*}\\
\to e(t)=e^{(A+KC)t}e(0)
$$

If $$(A+KC)$$ is exponentially stable, $$e(t)\to0$$ as $$t \to \infty$$ which means we can accruately estimate real state value $$x$$ for any initial guess.

We can arbitrary assign poles of $$A+KC \ iff \ (C,A)$$ is observable since $$\lambda(A+KC)=\lambda(A^T+C^TK^T)$$ and $$(C,A)$$  is observable iff $$(A^T, C^T)$$ is controllable.