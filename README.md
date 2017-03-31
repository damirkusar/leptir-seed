# DEPRECATED - NOT UNDER DEVELOPMENT ANYMORE

## Leptir - the seed for professional AngularJS apps

Leptir means in croatian language Butterfly.

`AngularJS, Gulp, Browserify, Angular-UI, Angular-Translate, Bootstrap, SCSS, Karma & Jasmine & ftp deployment out of the box.`

This seed is using AngularJS components. This seed is fully featured and easy to use for your next professional web application.

It has examples of angular services, directives, controllers, config such as routes & menu and components including unit tests.



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
* `bower_components` - contains the client-side packages


### Run the Application

I have preconfigured the project with a express web server and gulp including live reload of the files.
You can start the sever during development simply with

```bash
gulp
```

Now browse to the app at `http://localhost:1337`.



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
For that, please change the deploy task settings in the gulpfile.js.

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

* the unit tests are in the test folder on the same level as the components are and js code is equally structured.
You can name your tests as you want, but you have to follow this guideline: `*.spec.js`.

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

- [ ] Create a folder for your components or service under the corresponding folder
- [ ] Create a index.js, directly in the root of the folder, register the correct module name and add the file names you have in this folder.
    - [ ] By the way, if you add a new js class, you need to add that to that file too
- [ ] In projects root, add the module to app.js
- [ ] If you add a new scss file, add the scss to app.scss in the projects root folder
    - [ ] By the way, if you add a new scss class, you need to add that to that file too
- [ ] Create / Adapt the unit tests
- [ ] Configure your routes in xxx.route.js
- [ ] Configure your menus in xxx.menu.js



## Translate your App

This seed is prepared to translate your application in as many languages as you want. German (de-CH) and englisch (en-US) are included to see how you can add more languages.

The language files are located under public -> translations. There you will find currently two files (locale-de_CH.json & locale-en_US.json) as well folders with component names, in case you want to structure it this way. Adapt for that the app.config.js file. Under this folder you can add as many files as you want.

The setup done for this is in the app.config.js file.

Now, you have different ways how you want to translate your text in your html's. These are the two ways which i used as an example:

```
<h4>{{ 'homeHeadline' | translate }}</h4>
<h4 translate="homeHeadline"></h4>
```

Be aware, that homeHeadline must be in the locale files, otherwise just homeHeadline will be shown instead of the text you want to have in.



## Yeoman Generator

I created for this seed also a yeoman-generator. BUT, THE GENERATOR USES AN OLD VERSION OF THIS SEED. Please take a look at:
https://github.com/damirkusar/leptir-generator


## Feedback & Improvements

If you miss something or you think i should change or add some feature, please let me know.



## Donation

If you like this seed and you think it is worth to donate something, please feel free to do that via the following link:

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
