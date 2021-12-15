---
title: How to Build a Blog w/ Nuxt.js & Nuxt Content
description: a test post to ensure data extraction works
timeToRead: 5
---
### Have you ever wanted to build a custom, lightweight and easy to manage blog? 

> There are hundreds of ways to build one and not all of them are well integrated with one another.

In my research I found that a markdown based blog, built primarily with Nuxt.js and Nuxt Content was the most straightforward way to start content creating without too much of a learning curve.

## Requirements

* Node version
* Yarn Package Manager
* Vue.js
* Nuxt.js
* Nuxt Content
* Tailwind CSS


## Installation


Run the following command to initialize your project:

```shell
yarn create nuxt-app <project-name>
```

It will launch Nuxt's config guide within your terminal. Follow the guide given your expertise, however there are specific settings required for this tutorial:

* UI framework: Tailwind CSS
* Nuxt.js Modules: Content - Git Based Headless CMS
* Rendering Mode: Universal (SSR / SSG)
* Deployment Target: Static (Static/Jamstack hosting)

What your config should look like:
<article-image src="init-project-options.png" > </article-image>


```shell
# install dependencies
yarn

# navigate to project directory
cd <project-name>

# start your dev server
yarn dev
```

## Configuration
