# Angular 2/Typescript D3 Bar Chart

This example illustrates the basics of creating a simple bar chart using Angular 2, Typescript, and D3.  The Bar Chart is the obligatory first D3 demo and is analagous to 'Hello World' in a new language. Those who have been around Angular 2 development since the alpha days will probably remember the [ng-Vegas demo].  This example pays tribute to that early example and both modularizes/modernizes the demo for the latest Angular 2 beta.  This is also the first in a series of demos using Angular 2, Typescript, and D3.  It is best-suited for programmers moving into A2 and Typescript development as well as D3 for the first time.

Since this is a basic demo, the application is built in 'dev' mode only.  If you are interested in creating production (bundled) A2 applications without use of a third-party bundler, then the [statistical analysis of tabular data] demo should be of interest.

Author:  Jim Armstrong - [The Algorithmist]

@algorithmist

theAlgorithmist [at] gmail [dot] com

Angular 2: Beta 17

## Installation

Installation involves all the usual suspects

  - npm and gulp installed globally
  - Clone the repository
  - npm install
  - get coffee (this is the most important step)

## Introduction

The goals of this demo are 

* Add to the body of knowledge on how to create and run Angular 2/Typescript applications
* Begin a demo series on Angular2/Typescript and D3
* Create an excuse for another cup of coffee

I hope that you find something instructive from the code and are interested in improving the demo in some way.

### Version
1.0.0

### Building and Running the demo

All source files are provided in a *src* folder.  Gulp is used to build and run the demo.  Available development and tasks are summarized below.

```sh
gulp clean (deletes everything in the dev folder)
gulp copy:html (copies the index.html file from /src to /dev)
gulp copy:templates (copies all angular 2 templates files into dev folder)
gulp copy:css (copies all css files into dev folder - you can add a build step if you like SaSS)
gulp copy:assets (copies all visual assets into dev folder)
gulp copy:framework (copies all Angular 2 framework files into appropriate location - should only need to be done once)
gulp tslint (lints all Typescript files in the source)
gulp compile (compiles all src .ts files and places them in the appropriate build location)
gulp serve (launch a browser and run the application while watching for file changes)
gulp copy:all (copies everything except the framework files)
gulp build:all (build a complete, ready-to-run application)
```

After installing the demo, execute _gulp build:all_ to create a ready-to-run application in the *dev* folder.  Execute _gulp serve_ to serve up the application and run the debug version of the demo. 

This demo uses the same chart styles as the [ng-Vegas demo].  Modify the styling as you see fit.

After the initial build, you need only execute the specific task needed for any modifications, and modification is recommended :)

The demo has been tested in late-model Chrome on a Mac. 


### Contributions

Contributions and coffee are highly encouraged as I believe the best demo is one that allows ample room for improvement. In particular, the UI could use some visual enhancement :)

Unless it is a very tiny mod or bug fix, please place your complete source in a new folder, i.e. 'using-jspm' or 'new-framework'.  Submit pull requests to theAlgorithmist [at] gmail [dot] com.


License
----

Apache 2.0

**Free Software? Yeah, Homey plays that**

[//]: # (kudos http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[The Algorithmist]: <http://algorithmist.net>
[ng-Vegas demo]: <https://github.com/gdi2290/ng-vegas-angular2-d3>
[statistical analysis of tabular data]: <https://github.com/theAlgorithmist/Table>