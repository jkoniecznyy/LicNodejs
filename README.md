## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Tutorials](#YouTubeTutorials)

## General info
The goal of this project is to create a web application for customer service of the housing cooperative.

The project is made as my bachelor's application. For now, it's all hosted on localhost, because I'm focused on 
learning how to code in Node and Vue. 

In the future the project will probably be deployed on heroku.

## Technologies
* Node 14.15
* Express 4.17
* Mongo 4.4
* Vue 2.6

## Setup
To run this project on localhost you should have Node, Mongo and Vue already installed on your computer.
Then you can install it locally using npm.

To use https you need to generate your own cert.pem and key.pem to put them in './config/certificates/'!

```
$ cd ../LicNodejs/
$ npm install

// Dev mode (I'm using 2 terminals
$ node run dev

$$ cd /client/
$$ node run dev

//Production
$ cd /client/
$ node run build
$ cd ..
$ node run prod

//if your done
$ node run stop-prod 
```

## YouTubeTutorials
Here are some YouTube tutorials that helped me create this app along with the official docs and programming blog posts.
* [Twórca Stron - Channel focused on creating websites (PL)](https://www.youtube.com/channel/UCaycmZ0kLzlh3fVJZlUvwxw/featured)
* [DevEd - Channel focused on creating websites (ENG)](https://www.youtube.com/c/DevEd/featured)
* [WebDevSimplified - Channel focused on creating websites (ENG)](https://www.youtube.com/c/WebDevSimplified/featured)
* [Academind - Channel focused on creating websites (ENG)](https://www.youtube.com/c/Academind/featured)
* [Anson the Developer - Express tutorial (ENG)](https://www.youtube.com/watch?v=T2KjBiwYyBI&list=PL_cUvD4qzbkxZZyyuXa1xkWFhRB_NoQwl)
* [Traversy Media - Connecting Vue with backend (ENG)](https://www.youtube.com/watch?v=j55fHUJqtyw&list=PLillGF-RfqbYSx-Ab1xWVanGKtowTsnNm&index=1)


* [Blog - You should never ever run directly against Node.js in production. Maybe](https://www.freecodecamp.org/news/you-should-never-ever-run-directly-against-node-js-in-production-maybe-7fdfaed51ec6/)
* [Blog - How To Pass Data Between Components In Vue.js](https://www.smashingmagazine.com/2020/01/data-components-vue-js/)
* [Blog - WTF is Vuex? A Beginner's Guide To Vuex 4](https://vuejsdevelopers.com/2017/05/15/vue-js-what-is-vuex/)