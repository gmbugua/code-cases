---
title: How to Build a Blog w/ Nuxt.js & Nuxt Content
description: a test post to ensure data extraction works
timeToRead: 5
---
### Building a blog can be a challenge

> **Should I even build my own?**
> **How do I build one?** 
> **What CMS do I need?** 

These are all questions I had during the early stages of developing my own blog: [Code Cases](). At first, I almost considered going the Medium route: 

* Audience is baked in
* No design or dev time
* Automatic SEO

The list goes on; But I am a dev. These are all features I can add to my own blog over time which adds to my portfolio, and gives me credability to create content based on those achievements. So...quite literally:

> **Why not build your own experience?**

And If I may: **this is the part where our two individual stories intersect.**

## Requirements

* Node Version - LTS (Latest Stable Version)
  > [Install Node using NVM](https://heynode.com/tutorial/install-nodejs-locally-nvm/)
* Yarn Package Manager
  ```shell 
    # install yarn
    npm install --global yarn

    # verify installation
    yarn --version
  ```
* Vue.js
* Nuxt.js
* Nuxt Content
* Tailwind CSS

## Installation


Run the following command to initialize your project:

```shell
# Launch Nuxt project config guide
yarn create nuxt-app <project-name>
```

Follow the guide given your expertise, however the following settings are **required** in this tutorial:

* **UI framework:** Tailwind CSS
* **Nuxt.js Modules:** Content - Git Based Headless CMS
* **Rendering Mode:** Universal (SSR / SSG)
* **Deployment Target:** Static (Static/Jamstack hosting)

What your config should look like:
<article-image src="howto-build-blog/init-project-options.png" > </article-image>


Now, let's navigate to our project directory and install dependencies

```shell
# install dependencies
yarn

# navigate to project directory
cd <project-name>

# start your dev server
yarn dev
```

## Configuration

Start off by clearing out 