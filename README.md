[![License](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](LICENSE)


#Default Javascript VueJS and Elixir project

The js-boilerplate is a fresh instance of stand alone javascript application based on VueJS and build with [laravel elixir](https://laravel.com/docs/5.2/elixir)


##Table of contents
1. [Require](#require)
1. [Installation](#installation)
    1. [Create project](#1-create-project)
    1. [Environment and configuration](#2-environment-and-configuration)
        1. [Vhost](#vhost)

    1. [Technologies](#3-technologies)
    1. [Build app](#4-build-app)


##Require
To use this project you have to install:

1. NodeJs version v5.7.1
2. Npm 3.6.0
3. gulp in global (npm install gulp -g) 3.9.1

    
##Installation


###1.Create project
When you want create a new empty project with composer use this command:

```ssh
git clone https://github.com/Distilleries/js-boilerplate.git
npm install
gulp
```

###2.Environment and configuration

####Vhost

Configuration your virtual host with `/public` folder in site root.

###3.Technologies

* Browserify
* Vueify
* Babel

###4.Build app

You can use `gulp watch` in local to develop you app. 
If you want build your app in production (uglify) use `gulp --production`.

You can change the configuration in `build.config.js` and enable the proxy to have a live reload.


If you want inc your version and tag your git repo you can use :

* `gulp patch` X.X.X+1
* `gulp feature` X.X+1.0
* `gulp patch` X+1.0.0
