---
title: HowTo Build a Blog 
description: Build a blog w/ Nuxt, Nuxt Content and Tailwind CSS
timeToRead: 10
---
### Building a blog can be challenging

During the early stages of developing my own blog [Code Cases](https://code-cases.netlify.app/), a notable question was: 

> Should I even build my own?

In fact, I considered going down the [Medium](https://medium.com/) route because of convenience:
* *Audience is baked in*
* *No design or dev time*
* *Automatic SEO*
* *Much less research*

However, my desire to learn and make something of my own trumped the convenience of Medium and other platforms alike. (Not to mention [RSS Feeds](https://en.wikipedia.org/wiki/RSS)).

> And honestly, why not build your own exeprience?

On that note, in this HowTo we will lay down the necesssary infrastructure for a blog including:
* a Content Mangement System (CMS)
* Static Hosting, Deploy to [Netlify](https://www.netlify.com/)
* Displaying Markdown Content

## Requirements

* Node JS (Latest Stable Version) [Install Node w/ NVM](https://heynode.com/tutorial/install-nodejs-locally-nvm/)
* Yarn Package Manager
  ```shell
    # install yarn
    npm install --global yarn

    # verify installation
    yarn --version
  ```
## Installation

```shell
# Launch Nuxt's project config guide
yarn create nuxt-app <project-name>

# Navigate to project directory
cd <project-name>

# Test if the dev server works
# open localhost:3000
yarn dev
```

Follow the Nuxt guide guide given your expertise, however the following settings are **required** in this tutorial:

* **Nuxt.js Modules:** Content - Git Based Headless CMS
* **Rendering Mode:** Universal (SSR / SSG)
* **Deployment Target:** Static (Static/Jamstack hosting)

What your config should look like:
<article-image src="howto-build-blog/init-project-options.png" alt="Nuxt App Configuration" > </article-image>

## Configuration
1. Clean out the boilerplate
    - ```shell
      rm -rf components/*.vue
      ```
    - Open pages/index.vue and clear everything in the script and template tags:
      ```vue
      <!-- Your index.js should look like this -->
      <template>
        <div> 
          <h1> Hello World!
        </div>
      </template>

      <script>
      </script>
      ```
    - Run your dev server, and check for a Hello World.
2. Configure Nuxt Content
3. Display Content
4. Configure Tailwind CSS

## Next Steps