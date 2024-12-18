# danieljblumenfeld.com

My personal site-slash-excuse to play with unfamiliar technologies. Currently, that means Eleventy, Bootstrap, and HTML/CSS/JS: I'm in the midst of a security kick, so static site generation appeals far more than administering a LAMP or ASP.NET instance.

## Site Contents
 - Blog: whatever I feel like sharing with the world. (with categories, RSS)
 - Notes To Self: simple how-tos and reminders. (with categories, RSS)
 - CV: really more of a personal narrative than something to be submitted for consideration.
 - Legacy content: things like the [CtC FAQ](https://www.danieljblumenfeld.com/ctcfaq/) that I provided in prior incarnations of this site.
 - Recipes (soon)

## Tech Info

- Run `npm start' to kick off the Eleventy build and serve the site at [http://localhost:8080](http://localhost:8080). 
- Updates to the files will result in a rebuild and refresh of the page in the browser.
- *Note: occasionally, Eleventy loses its mind and fails to rebuild for reasons other than bad code on your part...in that case, just kill the priocess via `Ctrl-C` and restart via `npm start`*

### Auto build
Using [Github Action on commit to main](https://github.com/DanBlumenfeld/DanBlumenfeld.github.io/blob/main/.github/workflows/static.yml), runs `npm install` and `npm run build`, then deploys the `_site` folder to the `github-pages` environment

### Eleventy Resources
- [11ty.dev](https://www.11ty.dev/)
- Jaydan Urwin's ["Eleventy Crash Course" video series](https://www.youtube.com/watch?v=uzM5lETc6Sg&list=PLtLXFsdHI8JTwScHvB924dY3PNwNJjjuW) 
- I started development of this site with [this guide](https://cfjedimaster.github.io/eleventy-blog-guide/guide.html) from [Raymond Camden](https://www.raymondcamden.com/)

### Other resources
- [Jamstack.org](https://jamstack.org/) and their [Github site](https://github.com/jamstack/jamstack.org)
- [Zombie Ipsum](http://www.zombieipsum.com/#): my favorite source of quick filler text

# TODO
 - Work out cleaner/better UI and styling
 - Work out consistent styling/formatting for attributions
 - Work out searching
 - Work out anonymous logging of 404s to an external provider
 - Look into full support for the Atom 1.0 feed standard...summaries, update versus create date, contributors, etc.
 - Decide on and adhere to a syntax standard: Markdown for all blog and NTS posts? Nunjucks for feeds? HTML for standalone pages?
 - Consider adding a third category of posts...tutorials. Or just a specific blog category with its own dedicated endpoint?
 - Clean up the CtC FAQ
 - Implement recipes


## Initial Setup (preserved for posterity until I write up a formal tutorial)
`npm init -y` to create package.json

`npm i -D @11ty/eleventy` to install Eleventy

Created `/src/` folder

Created `/src/index.html`

Created `/.eleventy.js`

Installed `Nunjucks` and `Nunjucks Snippets` extensions in VSCode

## Blog
Started with [this guide](https://cfjedimaster.github.io/eleventy-blog-guide/guide.html), but used /blog as the root.

## NTS (Notes to Self)
Unordered collection of short and sweet how-tos, etc. Basically identical to the blog, but using /nts as the root.

## RSS Feeds for Blog and NTS
As described in [this guide](https://cfjedimaster.github.io/eleventy-blog-guide/guide.html)


