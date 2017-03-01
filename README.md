# Start Front

### How is it work?

Basically, this is structure is helpful for the project that not use any Framework, in other words, just HTML, CSS and JS.
Sometimes, many developers need start a project, but, he/she does not knows any Framework, for example, Angular, Backbone and so on, then,
he/she can use this structure as base. **You will able to test in several devices in the same time**.

Before start, I advise you take a look items bellow in order to understand better.


## Javascript
We created the following structure:

- /scripts/commons/
	- Within this file, you should create your default methods, which can be used in the all application. For example, we created **breakpoint.js**. This method is responsible for return what is the current device.

- /scripts/modules/
	- Here, you can create the all modules. We created **Car.js**, it is just example.

- /scripts/templates/
	- Within this file, you should create script related with Handlebars Helpers. We created **flags.js**, which is used within */template/commons listCar.hbs*, it responsible for toggle THUMB tag.


## Templates with Handlebars
We are useing Handlebars to work with tamplates. You can read about Handlebars in [http://handlebarsjs.com](http://handlebarsjs.com).


## Sass/CSS
You must follow the default SMACSS, it work this way:

- /styles/base/
	- Basically the reset file, in other words, rules for HTML element, not use class name ou id name, only HTML element.

- /styles/layout/
	- Here should have all the rules related with the structure of the application, for example, *.content, .container and .wrappers*.

- /styles/components/
	- Keep in mind that one component is some that can be use in any part in the application. Example of the component, *_buttons.scss* and *_alerts.scss*. Make sure that one component **CAN NOT** depend on another component.

If you want to know in depth about SMACSS, take a look in [https://smacss.com/](https://smacss.com/).


## Gulp
• gulp.config.js
- We created this file for settings the rules, you can change **the paths libraries** in the file.

Before you get start, make sure that you have Node and NPM installed in your the PC.

**Run**

```sh
npm install
```

**Test in several devices in the same time**

```sh
gulp sync
```

## License
MIT