# danieljblumenfeld.com

## Goals
 - Static site
 - Searchable
 - RSS feed(s)
 - Publish to web on commit

## Eleventy Resources
[11ty.dev](https://www.11ty.dev/)

Jaydan Urwin "Elenty Crash Course" video series 
- [Episode 1: New project, Layouts, Nunjucks](https://www.youtube.com/watch?v=uzM5lETc6Sg)

## Other resources
[Zombie Ipsum](http://www.zombieipsum.com/#)

## Setup
`npm init -y` to create package.json

`npm i -D @11ty/eleventy` to install Eleventy

Created `/src/` folder

Created `/src/index.html`

Created `/.eleventy.js`

Installed `Nunjucks` and `Nunjucks Snippets` extensions

## Initial crap
Copied over my old CtCFAQ, my CV, and threw a quick-n-dirty Bootstrap implementation on it.

## Blog
Started with [this guide](https://cfjedimaster.github.io/eleventy-blog-guide/guide.html)

## NTS (Notes to Self)
Unordered collection of short and sweet how-tos, etc.

## Auto build
Using Github Action on commit to main, runs `npm install` and `npm run build`, then deploys the `_site` folder to the `github-pages` environment

## Added RSS Feeds for Blog and Notes To Self


