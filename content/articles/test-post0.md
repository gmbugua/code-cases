---
title: How to Build a Blog w/ Nuxt.js & Nuxt Content
description: a test post to ensure data extraction works
timeToRead: 5
---
### Building a blog can be challenging

During the early stages of developing my own blog [Code Cases](https://code-cases.netlify.app/), a notable question was: 

> Should I even build my own?

In fact, I considered going down the [Medium](https://medium.com/) route because of convenience:
* **Audience is baked in**
* **No design or dev time**
* **Automatic SEO**
* **Much less research**

However, my desire to learn how to build my own blog trumped the ease of baked in functionality and audience from other platforms. 

Also, those were all features I could ultimately learn how to implement and consequently: blog about!

So...quite literally:

> Why not build your own experience?

In this HowTo we will:

1. Lay down the necesssary infrastructure for a blog
  * CMS
  * Static Hosting
  * Displaying our Posts
  * Styling our Markdown using Tailwind CSS
2. Deploy 1 to [Netlify](https://www.netlify.com/) so your audience can start reading your content as soon as you are done.

## Requirements

* Node JS vLTS (Latest Stable Version)
  [Install Node w/ NVM](https://heynode.com/tutorial/install-nodejs-locally-nvm/)
* Yarn Package Manager
  ```shell 
    # install yarn
    npm install --global yarn

    # verify installation
    yarn --version
  ```
* Vue 3 and Nuxt JS (v2.15.x)
* Nuxt Content (v1.15.x)
* Tailwind CSS 

## Installation
Run the following command to initialize your project:

```shell
# Launch Nuxt project config guide
yarn create nuxt-app <project-name>
```

Follow the guide given your expertise, however the following settings are **required** in this tutorial:

* **CSS framework:** Tailwind CSS
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