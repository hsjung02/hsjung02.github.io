---
layout: post
title:  "Machine Learning Basic"
date:   2023-06-21 02:05:42 +0200
description: "다양한 머신러닝 기법에 대하여"
category: [Notes]
tags: [Artificial Intelligence]
fb_app_id: example
lang: ko
use_math: true
giscus_comments: false
toc:
  sidebar: left
---

# Linear algebra

## Matrix and Linear transformation

Matrix는 사실 linear transformation이다.

## Projection

Projection은 $$P^2=P$$를 만족하는 linear transformation을 의미한다. Vector $$Y$$로의 projection은 $$P=\frac{YY^T}{Y^TY}$$로 나타낼 수 있다.

$$
pf\rangle W=w\hat{Y}=w\frac{Y}{||Y||} \\w=||X||\cos\theta=||X||\frac{X\cdot Y}{||X||||Y||}=\frac{X\cdot Y}{||Y||}\\ W=w\hat{Y}=\frac{X\cdot Y}{||Y||}\frac{Y}{||Y||}=\frac{X^TY}{Y^TY}Y=\frac{\langle X,Y \rangle}{\langle Y,Y \rangle}Y=Y\frac{Y^TX}{Y^TY}=\frac{YY^T}{Y^TY}X=PX
$$

## Least norm solution

Under-determined linear system
$$AX=B$$
가 주어졌을 때,
$$||X||^2$$
을 최소화하는 
$$X^*=(A^TA)^{-1}A^TB$$
로 구할 수 있다.

$$
pf\rangle A\perp(AX^*-B)\\A^T(AX^*-B)=0\\A^TAX^*=A^TB\\X^*=(A^TA)^{-1}A^TB
$$

Proof using Lagrange multipliers

$$
pf\rangle L(x,\lambda)=x^Tx+\lambda^T(Ax-y)\\\nabla_xL=2x+A^T\lambda=0, \nabla_\lambda L=Ax-y=0\\x=-\frac{A^T\lambda}{2}, \lambda=-2(AA^T)^{-1}y\\x=A^T(AA^T)^{-1}y
$$

# Optimization

## Optimization

Optimization에는 3가지 요소가 존재한다.

1. Objective function
2. Decision variable
3. Constraints

Constraints를 만족하면서 objective function을 최대화/최소화하는 decision variable을 찾는 과정이 최적화이다.

## Convex problem & Convex optimization

### Convex problem

Convex function: $$\forall x, y\in \mathbb{R}^n \ and \  \theta\in[0,1], f(\theta x+(1-\theta)y)\le\theta f(x)+(1-\theta)f(y)$$

Convex set: $$\forall x, y \in C \ and \ \theta\in[0,1], \theta x+ (1-\theta)y\in C$$

In convex problems, all local minimums are global minimums.

### Convex optimization

Any location where $$f'(x)=0$$ is a flat point in the function, and a global minimum for convex problems.

This argument also holds for multivariate function, and in this case we evaluate gradient of f, $$\nabla f$$ instead of derivative.

Then, how can we find the gradient of f? There are two solutions. Analytical solution and iterative solution.

## Matrix derivatives

$$
\nabla (Ax) = A^T\\ \nabla(x^TA)=A \\ \nabla(x^Tx)=2x \\ \nabla(x^TAx)=Ax+A^Tx
$$

Examples

- Affine function $$g(x)=a^Tx+b$$: $$\nabla g(x)=a, \nabla^2 g(x)=0$$
- Quadratic function $$g(x)=x^TPx+q^tX+r, P=P^T$$: $$\nabla g(x)=2Px+q, \nabla^2 g(x)=2P$$
- L2 norm $$g(x)=||Ax-b||^2=x^TA^TAx-2b^TAx+b^Tb$$: 
$$\nabla g(x)=2A^TAx-2A^Tb, \nabla^2 g(x)=2A^TA$$

## Iterative method

In iterative method(or gradient descent), we iteratively update x as $$x \leftarrow x-\alpha\nabla_x f(x)$$. Here, $$\alpha$$ is step size. By iteratively updating x with negative gradient direction, we can reach to minimum.

How to set step size? Step size should not be too small, but not too big as well. $$\alpha$$ should satisfy: $$f(x_{i+1})-f(x_i)=\nabla f(x_i)\times(-\alpha_i \nabla f(x_i))$$

# Regression

## Regression?

Finding the best function to describe given data (x, y) points.

Regression is an optimization problem.

$$\min_\theta \sum_{i=1}^m(\hat{y}_i-y_i)^2 \\ s.t. \ \hat{y}_i=\theta x_i$$

## Linear regression

In linear regression, we find
$$\theta_0, \theta_1$$
where
$$\hat{y}_i=\theta_0+\theta_1 x $$
and
$$\sum (\hat{y}_i-y_i)^2$$
is minimized.

There are two methods: linear algebra and gradient descent.

### Solve using linear algebra

$$\theta=(A^TA)^{-1}A^Ty$$ where
$$A=\begin{pmatrix}1 & x_1 \\\ 1 & x_2 \\\ \vdots & \vdots \\\ 1 & x_n\end{pmatrix}$$


### Solve using gradient descent

$$f=(A\theta-y)^T(A\theta-y)=\theta^TA^TA\theta-\theta^TA^Ty-y^TA\theta+y^Ty$$

$$\nabla f=A^TA\theta+A^TA\theta-A^Ty-A^Ty=2(A^TA\theta-A^Ty)$$

$$\theta \leftarrow \theta-\alpha\nabla f$$

### Multivariate linear regression

Formulation as follows:

$$\hat{y}_i=\theta_0+\theta_1x_1+\theta_2x_2$$

$$\Phi=\begin{pmatrix}1  & x_{1,1} & x_{1,2}\\\ 1 & x_{2,1} & x_{2,2} \\\ \vdots & \vdots & \vdots \\\ 1 & x_{m,1} & x_{m,2}\end{pmatrix}$$

$$\theta^*=(\Phi^T\Phi)^{-1}\Phi^Ty$$

## Nonlinear regression

We can set nonlinear model. This is called nonlinear regression. However, nonlinear regression can be solved just the same as linear regression.

There are two methods to solve nonlinear regression. Method 1 is to construct explicit feature vectors. Method 2 is to construct implicit feature vectors.

### Explicit feature vectors - Polynomial features

Sup. model is $$y=\theta_0 + \theta_1x + \theta_2 x^2$$. It looks like nonlinear, but it is a linear regression problem. We can set $$\Phi=\begin{pmatrix}1  & x_1 & x_1^2\\\ 1 & x_2 & x_2^2 \\\ \vdots & \vdots & \vdots \\\ 1 & x_m & x_m^2\end{pmatrix}$$ and $$\hat{y}=\Phi\theta$$. We can solve by $$\theta^*=(\Phi^T\Phi)^{-1}\Phi^Ty$$

### Explicit feature vectors - RBF features

RBF stands for Radial Basis Function. Define as:
$$b_i(x)=\exp(-\frac{||x-\mu_i||^2}{2\sigma^2})$$ 
and 
$$\hat{y}=\theta_0+\theta_1b_1(x)+\cdots+\theta_nb_n(x)$$.

### Implicit feature vectors - Kernel trick

Classification에서 자세히 다루겠다!

### Avoid overfitting

We can try three methods to avoid overfitting.

First is to use less expensive features. For example, we can use lower degree polynomial, or we can use fewer RBF basis, or we can use larger RBF bandwidth.

Second is to keep the magnitude of the parameter small. In many cases, overfitting is associated to large parameter value. This is implemented by adding
$$||\theta||$$ 
to constraint or to objective function. In this case, 
$$J=||\theta X-Y||^2+\lambda||\theta||^2$$ 
and solution 
$$\theta^*=(X^TX+\lambda I)^{-1}X^Ty$$.

Third is to use L1 norm. Using L1 norm can be effective when outliers exist. since is more robust and insensitive to outliers. Using L1 norm is called LASSO(Least Absolute Shrinkage and Selection Operator). Using L2 norm is called ridge.

## k-Nearest Neighbor regression

k-Nearest Neighbor (kNN) is a supervised and non-parametric method used for regression and classification. In kNN regression, when new point $$x_{new}$$ is given, we make prediction
$$y=avg(y|x\in N(x_{new}))$$ 
where 
$$N(x_{new})$$ 
is kNN of 
$$x_{new}$$.

# Classification

## Classification

In classification problem, output y is a discrete value. A classification model determines which class a new input should fall into.

## Perceptron

### Concept

When linearly separable datas are given, we can use a perceptron. Perceptron describes a hyperplane which separates data into two classes. Hyperplane is defined by an outward pointing normal vector, $$\omega$$, which is orthogonal to any vector on the hyperplane.

### Distance related to perceptron

Consider a line
$$g(x)=\omega_0+\omega^Tx=0$$
. We can evaluate distance from a line for any vector $$x$$. For any vector 
$$x$$
, 
$$x=x_\perp+r\frac{\omega}{||\omega||}$$
. Here 
$$r=d+h$$
where 
$$d=-\frac{\omega_0}{||\omega||}$$ 
is the distance from the origin to the line and 
$$h$$ 
is the distance from the line to vector 
$$x$$
. Then 
$$g(x)=\omega_0+\omega^Tx=\omega_0+r||\omega||=h||\omega||$$ 
and 
$$h=\frac{g(x)}{||\omega||}$$.

### Perceptron Algorithm

As shown above, $$\omega$$ is really important in perceptron. Then, how can we find $$\omega$$ that well separates given data? We can apply the “Perceptron Algorithm”.

<aside>
💡 1. Randomly assign $$\omega$$

2. One iteration of the PLA(Perceptron Learning Algorithm) $$\omega \leftarrow\omega +yx$$ where $$(x, y)$$ is a misclassified training point

3. At iteration $$i=1,2,3,\cdots,$$ pick a misclassified point from dataset

4. Run a PLA iteration on it

</aside>

## Non-Separable problem

In real world, there are noise or outliers that makes a linearly non-separable case. In this case, we can apply three methods for classification. Those are using slack variables, SVM, and kernels.

## Relax constraints using slack variables

This method is used when there are some outliers. In this case, we allow outliers to be misclassified. However, we want to minimize the misclassified cases. Formulations are as follows:

$$
\min \sum_{i=1}^Nu_i+\sum_{i=1}^Mv_i\\ s.t. \begin{cases}\omega^Tx^{(i)}\ge1-u_i & (i=1,2,\cdots,N)\\\omega^Tx^{(N+i)}\le-(1-v_i) & (i=1,2,\cdots,M)\\u\ge0\\v\ge0\end{cases}
$$

## Support Vector Machine

We can improve above method using linear programming. The idea is that large margin(distance) leads to good generalization on the test data. In SVM, margin is defined as 
$$\mathrm{margin}=\frac{2}{||\omega||}$$
(refer to the distance part). Maximizing margin means minimizing 
$$||\omega||$$
, which is the closest samples from the decision line. We try to maximize minimum distance. Formulations are as follows:

$$
\min ||\omega||+\gamma(u+v) \\s.t. \ \begin{cases}X_1\omega\ge1-u\\X_0\omega\le-(1-v)\\u\ge0\\v\ge0\end{cases}
$$

## Kernels

If we do not want to allow misclassfications, or datas are non-linearly separable, we can use kernels. Kernel is a mapping of data to higher dimensions. For example, $$x=\begin{pmatrix}x_1 \\ x_2\end{pmatrix}$$ can be expressed as $$z=\phi(x)=\begin{pmatrix}1 \\ x_1^2\\ x_1x_2\\ x_2^2\end{pmatrix}$$.

## Logistic regression

In logistic regression, we consider distances from decision boundary to all data points. In SVM, we considered distances from decision boundary to two closest data points. Objective function to minimize is the multiplication of all distances. Here we use the technique of using sigmoid function for mapping, so the objective function becomes 
$$L(\omega)=\prod_{i=1}^nP(y^{(i)}|x^{(i);}\omega)=\prod_{i=1}^n(h_\omega(x^{(i)}))^{y^{(i)}}(1-h_\omega(x^{(i)}))^{1-y^{(i)}}$$
. Using log likelihood, 
$$l(\omega)=\log L(\omega)=\sum_{i=1}^ny^{(i)}\log h_\omega(x^{(i)})+(1-y^{(i)})\log(1-h_\omega(x^{(i)}))$$ and $$\hat{\omega}=\argmax_\omega l(\omega)$$

## k-Nearest Neighbor classification

k-Nearest Neighbor (kNN) is a supervised and non-parametric method used for regression and classification. In kNN classification, when new point 
$$x_{new}$$ 
is given, we make prediction 
$$y=maxlen(y|x\in N(x_{new}))$$ 
where 
$$N(x_{new})$$ 
is kNN of 
$$x_{new}$$
.

# K-Means: Clustering algorithm

In clustering problem, it is important to catch similarities between samples. We need to make high within-cluster similarity and low inter-cluster similarity.

K-Means is an itertive algorithm for clustering. K-Means algorithm is as follows:

<aside>
❔ init: randomly initialize cluster centeres

do:
 1. Cluster assignment
   for every points, find the nearest cluster center and assign the point to that cluster
 2. Move centers
   move center to the mean of all points in the cluster for each clusters.

</aside>

When using K-Means algorithm, we need to decide how many clusters we will use. For this, we need to gradually increase the number of clusters and find the elbow points.

There are some limitations of k-means. First, it works well only for rounded shaped, equal size clusters. It works bad for non-convex clusters or clusters with different densities.

# Dimension reduction

## Principal Component Analysis

In PCA, we remove redundant features using highly correlated data. Let’s first talk about correlation.

### Correlation and Covariance matrix

Variance tells how much the data is spread and covariance tells how two variables are spread. Easily speaking, covariance matrix 

$$
\sum=\begin{pmatrix}E(X_1-\mu_1)(X_1-\mu_1) & E(X_1-\mu_1)(X_2-\mu_2) & \cdots & E(X_1-\mu_1)(X_n-\mu_n) \\\
\vdots & \ddots & \ddots & \vdots \\\
E(X_n-\mu_n)(X_1-\mu_1) & E(X_n-\mu_n)(X_2-\mu_2) & \cdots & E(X_n-\mu_n)(X_n-\mu_n)\end{pmatrix}
$$

The goal of PCA is to find the direction that maximizes the variance and it can be done by doing eigenalanysis of covariance.

$$
\begin{align*}
(\mathrm{variance \ of \ projected \ data}) &= \frac{1}{m}\sum_{i=1}^m(u^Tx_i)^2\\
&=\frac{1}{m}\sum_{i=1}^m(x_i^Tu)^2\\
&=\frac{1}{m}\sum_{i=1}^mu^Tx_ix_i^Tu\\
&=u^T(\frac{1}{m}\sum_{i=1}^mx_ix_i^T)u\\
&=u^TSu
\end{align*}
$$

$$
\max_u u^TSu\\
s.t.\ u^Tu=1\\
\to  u^TSu=u^T\lambda u=\lambda\\
\therefore \max\lambda
$$

PCA can be done by SVD of data matrix X: $$S=\frac{1}{m}X^TX=(\frac{X}{\sqrt{m}})^T(\frac{X}{\sqrt{m}})=A^TA=(U\sum V^T)^T(U\sum V^T)=V\Lambda V^T$$. To find $$V$$, just do SVD of $$X$$.

## Fisher Discriminant Analysis

FDA is dimension reduction for labeled data. The goal is to maximize separation between classes while minimizing variance in each class.

$$
\max_\omega\frac{(\mu_0^T\omega-\mu_1^T\omega)^2}{n_0\omega^TS_0\omega+n_1\omega^TS_1\omega}=\max_\omega\frac{(m^T\omega)^2}{\omega^T(n_0S_0+n_1S_1)\omega}
$$

Let $$n_0S_0+n_1S_1=\sum=R^TR$$ and $$u=R\omega$$.

$$
J(u)=\frac{(m^TR^{-1}u)^2}{\omega^TR^TR\omega}=\frac{((R^{-T}m)^Tu)^2}{u^Tu}=((R^{-T}m)^T\frac{u}{||u||})^2$$ is maximum when $$u\parallel R^{-T}m, \therefore u=\alpha R^{-T}m \to \omega=\alpha R^{-1}R^{-T}m=\alpha(n_0S_0+n_1S_1)^{-1}(\mu_0-\mu_1)
$$