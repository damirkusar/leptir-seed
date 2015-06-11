# Leptir - the seed for professional AngularJS apps

`AngularJS seed structured in modules with Gulp, Browserify, Angular-UI, Bootstrap, SCSS, Karma & Jasmine & out of the box.`

I started this project because I wanted to create my own AngularJS seed which fits my needs. I hope, that it will serve yours too.

This project is a more feature-rich and structured starting point for professional web applications.
It integrates AngularJS with Gulp, Browserify, Angular-UI, Bootstrap, SCSS, Karma & Jasmine out of the box.

The project is structured into modules along with examples of angular services, directives, controllers and config such as routes & menu.
All this is separated to keep the module maintainable & clear.

## Getting Started
To get started, just clone the repository and install the node & bower dependencies.



### Prerequisites

To clone the repository, you will need git. You can download and install git from [http://git-scm.com/](http://git-scm.com/).

To be able to install the node packages, you will need to install node.js and its package manager (npm).
You can download and install node.js from [http://nodejs.org/](http://nodejs.org/).



### Clone repository

Clone the repository using [git][git]:

```
git clone https://github.com/damirkusar/???.git
cd ???
```

If you just want to clone the repository without the commit history then you can do:

```bash
git clone --depth=1 https://github.com/damirkusar/???.git <your-project-name>
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



### Run the Application in production

If you want to run your project on a common web server, you will need to build the project.
You can also make changes in the gulpfile if you need to.

To create a dist folder with your files, simply do

```bash
gulp build
```

This will create a new folder dist. The content of this folder can be published on a public web server.
Now, your app can be accessed through the internet as well.



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

This can be changed in the 'karma.conf.js' file in these to properties like this:

```bash
autoWatch: false,
singleRun: true,
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



## Contact

For more information & contact form please check out http://kusar.ch/ or http://damirkusar.ch/





[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[kusar]: http://kusar.ch/
[damirkusar]: http://damirkusar.ch/
