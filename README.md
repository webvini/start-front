# Start Front

### How does it work?

Basically, this structure is helpful for the project that doesn't use any Framework, in other words, just HTML, CSS and JS. Sometimes, many developers need to start a project, but, he/she does not know any Framework, for example, Angular, Backbone and so on, then, he/she can use this structure as base. **You will be able to perform test at several devices in the same time**.

Before you start, I advise you to take a look at the items below in order to understand better.


## Javascript
We created the following structure:

- /scripts/commons/
	- Within this file, you should create your default methods, which can be used in the whole application. For example, we created **breakpoint.js**. This method is responsible for returning what the current device is.

- /scripts/modules/
	- Here, you can create all modules. We created **Car.js**, it is just an example.

- /scripts/templates/
	- Within this file, you should create yours scripts related with Handlebars Helpers. We created **flags.js**, which is used within */template/commons listCar.hbs*, responsible for toggling the THUMB tag.


## Templates with Handlebars
We are using Handlebars to work with templates. You can read about Handlebars in [http://handlebarsjs.com](http://handlebarsjs.com).


## SASS/CSS
You must follow the default SMACSS, it work this way:

- /styles/base/
	- Basically the reset file. Rule for HTML element, don't use class name ou id name, only HTML element. **(header, div, footer, span...)**

- /styles/layout/
	- Here you should have all the rules related with the structure of the application, for example, *.content, .container and .wrappers*.

- /styles/components/
	- Keep in mind that one component is something that can be used anywhere the application. Example of the component, *_buttons.scss* and *_alerts.scss*. Remember that one component **CANNOT** depend on another component.

If you want to know in depth about SMACSS, take a look at [https://smacss.com/](https://smacss.com/).


## Gulp
• gulp.config.js
- We created this file for setting the rules, you can change **the paths libraries** in the file.

Before you get starting, make sure that you have Node and NPM installed.

**Run**

```sh
npm install
```

**Test in several devices at the same time**

```sh
gulp sync
```

## License
MIT