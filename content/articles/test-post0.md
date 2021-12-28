---
title: How to Build a Blog w/ Nuxt.js & Nuxt Content
description: a test post to ensure data extraction works
timeToRead: 5
---
### Building a blog can be challenging

During the early stages of developing my own blog [Code Cases](https://code-cases.netlify.app/), a notable question was: 

> Should I even build my own?

In fact, I considered going down the [Medium](https://medium.com/) route because of convenience:
* *Audience is baked in*
* *No design or dev time*
* *Automatic SEO*
* *Much less research*

However, my desire to learn trumped the ease of baked in functionality and audience from another platform. 

Also, in terms of functionality I can ultimately learn how to implement it and consequently blog about!

So...quite literally:

> Why not build your own experience?

In this HowTo we will:

1. Lay down the necesssary infrastructure for a blog
    * *CMS*
    * *Static Hosting*
    * *Display Markdown Posts*
    * *Style our Markdown posts using Tailwind CSS*
2. Deploy 1 to [Netlify](https://www.netlify.com/) so your audience can start reading your content as soon as you are done.

## Requirements

* Node JS (Latest Stable Version) [Install Node w/ NVM](https://heynode.com/tutorial/install-nodejs-locally-nvm/)
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

* **CSS Framework:** Tailwind CSS
* **Nuxt.js Modules:** Content - Git Based Headless CMS
* **Rendering Mode:** Universal (SSR / SSG)
* **Deployment Target:** Static (Static/Jamstack hosting)

What your config should look like:
<article-image src="howto-build-blog/init-project-options.png" alt="Nuxt App Configuration" > </article-image>

Now, navigate to our project directory, install project dependencies and run the dev server.

```shell
# install dependencies
yarn

# navigate to project directory
cd <project-name>

# start your dev server
yarn dev
```

Encountered an error? *Google is your best friend!*

## Configuration

