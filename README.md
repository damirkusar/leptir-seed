# Leptir - the seed for professional AngularJS apps

Leptir means in croatian language Butterfly.

`AngularJS, Gulp, Browserify, Angular-UI, Angular-Translate, Bootstrap, SCSS, Karma & Jasmine & ftp deployment out of the box.`

I create often websites for different purposes or just to test something, I run always into the same problems, either I have to develop everything from scratch or the seeds available are not serving my needs how I want to have a project structured and how I want to use it. So I thought, why not create a seed which serves my needs and points to a direction to be used for professional AngularJS applications and can also be used by others.
I hope it will serve your needs too.

This seed is structured in independent modules to keep it maintainable & clear, has Gulp as the build system, Browserify for the dependencies, NodeJs for the node packages, Angular-UI for routing, Angular-Translate for internationalization support, Bootstrap for faster UI dev, SCSS for better CSS handling, Karma + Jasmine for the unit tests and ftp deployment.
This seed is fully featured and easy to use for your next professional web application.

Each module has examples of angular services, directives, controllers and config such as routes & menu including unit tests.



## Getting Started

To get started, just clone the repository and install the node & bower dependencies.



### Prerequisites

To clone the repository, you will need git. You can download and install git from [http://git-scm.com/](http://git-scm.com/).

To be able to install the node packages, you will need to install node.js and its package manager (npm).
You can download and install node.js from [http://nodejs.org/](http://nodejs.org/).



### Clone Repository

Clone the repository using [git][git]:

```
git clone https://github.com/damirkusar/leptir-angular-seed.git
cd leptir-angular-seed
```

If you just want to clone the repository without the commit history then you can do:

```bash
git clone --depth=1 https://github.com/damirkusar/leptir-angular-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit of historical data.



### Install Dependencies

We have the node package manager and bower dependencies in this project.

* `npm` is the [node package manager][npm].
* `bower` is a [client-side code package manager][bower].

First, we will install the node packages via
```bash
npm install
```

now let's install gulp and karma-cli globally
```bash
npm install -g gulp
npm install -g karma-cli
```

also install bower globally if not yet installed
```bash
npm install -g bower
```

then the bower packages via
```bash
bower install
```

You will see that you have now two new folders in your project.

* `node_modules` - contains the npm packages
* `public/bower_components` - contains the client-side packages

*Note that the `bower_components` folder would normally be installed in the root folder but
I changed this location through the `.bowerrc` file.  Putting it in the public folder makes
it easier to serve the files by a webserver.*



### Run the Application

I have preconfigured the project with a express web server and gulp including live reload of the files.
You can start the sever during development simply with

```bash
gulp
```

Now browse to the app at `http://localhost:5000`.



### Run the Application in Production

If you want to run your project on a common web server, you will need to build the project.
You can also make changes in the gulpfile if you need to.

To create a dist folder with your files, simply do

```bash
gulp build
```

This will create a new folder dist. The content of this folder can be published on a public web server.
Now, your app can be accessed through the internet as well.



### Deploy the Application

You can also automate the deployment to a server via ftp. No need to copy the files manually to a server.
For that, please change the settings deplos task settings in the gulpfile.js.

Mandatory settings to change:
- host
- user
- password

then also change the destination folders
- conn.newer
- conn.dest

with conn.newer we are uploading just files which are newer than the already deployed and with conn.dest we are uploading the files.

First we need to build our project if not done yet.

```bash
gulp build
```

This will create a new folder dist.

Then, if your settings are changed and correct, you can deploy the app with

```bash
gulp deploy
```



## Testing

This project uses [Karma Test Runner][karma] and [Jasmine][jasmine] for their Unit tests.



### Running Unit Tests

Unit tests are preconfigured. The configuration is done in Karma configuration file `karma.conf.js`.

* the unit tests are in the test folder on the same level as the modules are and js code is equally structured.
You can name your tests as you want, because all files are considered to be tests under the tests folder.
But it makes sense to name it as `xxx.test.js`.*

To run the tests, you can open up a new terminal window located in the root of your project and run the unit tests with:

```bash
karma start
```

This will start the Karma test runner to execute the unit tests. Not just that, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.

This is the recommended strategy. If your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

If you want to run it just once, simply start your tests with this command

```bash
karma start --single-run
```



## Updating Packages

You can update the node packages by running:

```bash
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the bower packages by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.



## Adding new Module

Until I do not have a yeoman generator for this seed, this is a bit a manual process.

- [ ] Copy the demo folder in modules and tests and give it a name
- [ ] Rename the scss and js files. All these files have a demo.xxx.js, so change demo to your module name.
- [ ] In index.js, directly in the root of the module, register the correct module name and adapt the file names.
    - [ ] By the way, if you add a new js class, you need to add that to that file too
- [ ] In projects root, add the module to app.js
- [ ] In projects root, add the scss's of the module to app.scss
    - [ ] By the way, if you add a new scss class, you need to add that to that file too
- [ ] Adapt the namings in the config, controllers, directives and services files as well
- [ ] Adapt the unit tests
- [ ] Configure your routes in config/xxx.route.js
- [ ] Configure your menus in config/xxx.menu.js



## Translate your App

This seed is prepared to translate your application in as many languages as you want. German (de-CH) and englisch (en-US) are included to see how you can add more languages.

The language files are located under public -> modules -> core -> resources. There you will find currently two files (locale-de_CH.json & locale-en_US.json). Under this folder you can add as many files as you want.

The setup done for this is in the core modules config folder. There you will find the core.locales.js file, where is setup the location where the files are stored and which language is the default. You can see that it is "en-US", this is regarding the file without the prefix "-locale" and the suffix ".json".

For a demo purpose, i created a new menu under config -> core.menu.js and told in the "subMenuItemUiState" parameter to which language i want to switch. The nav.html under core -> views and the nav.controller are prepared to handle that correctly.

now, you have different ways how you want to translate your text in your html's. These are the two ways which i used as an example:

```
<h4>{{ 'coreHeadline' | translate }}</h4>
<h4 translate="coreHeadline"></h4>
```

Be aware, that coreHeadline must be in the locale files, otherwise just coreHeadline will be shown instead of the text you want to have in.



## Yeoman Generator

I created for this seed also a yeoman-generator. Please take a look at: https://github.com/damirkusar/leptir-generator


## Feedback & Improvements

If you miss something or you think i should change or add some feature, please let me know.



## Donation

If you like this seed and you think it is worht to donate something, please feel free to do that via the following link:

[Donate via Paypal][donate]



## Contact

For more information & contact form please check out http://kusar.ch or http://damirkusar.ch



## License
The MIT License (MIT)

Copyright (c) 2015 Damir Kusar: damir@kusar.ch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.





[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[donate]: https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=damir%40kusar%2ech&lc=US&item_name=Damir%20Kusar&currency_code=USD&bn=PP-DonationsBF%3abtn_donate_LG%2egif%3aNonHosted
[kusar]: http://kusar.ch/
[damirkusar]: http://damirkusar.ch/
