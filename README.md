# Booklife

<div align="center">
  <img width="150px" src="src/assets/icon.png"/>
</div>
<div align="center">
  <p> <p>
  <img src="https://media.discordapp.net/attachments/767910421025521665/1215412907672735865/image.png?ex=65fca87a&is=65ea337a&hm=5c71c026545917d96e7ee5110e380b8932d5fc3bc645fefe4a77e8b4cc7af8a6&=&format=webp&quality=lossless&width=1027&height=559"/>
</div>

## Features

-  **Angular 14** — An open-source framework used to build web applications based on a single dynamic page.
-  **Node Js** — cross-platform software based on Google's V8 interpreter and that allows the execution of JavaScript code outside of a web browser. 

## Getting started

1. Clone this repo using `git clone git@github.com:AnaCBrandao/booklife.git`
2. Move yourself to the appropriate directory; `cd booklife`
3. Run `yarn` or `npm install` to install dependencies

## Getting started with the backend server

1. Repeat the steps above with the API repository in https://github.com/AnaCBrandao/books-api
2. Run `node ace generate:key` to generate the access key
3. Copy the key and paste it into the .env file, deleting ".example" from the name
4. Run `node ace run:migration` to create de db
5. Run `node ace serve` to start the API

## Finnaly 

1. Return to booklife repo
2. Run `ng serve` to start the Angular app
