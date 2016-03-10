#material-meta-ui

AngularJS directive and a sample application for the automated UI forms generation.

The automated generation is JSON metadata driven and the generated UI forms are based on Angular Material.


## Code Example

In the controller:

```javascript
$scope.sampleMetadata = [
    {
       "id": "name",
       "widget": "textfield",
       "label": "Name :",
       "label-left" : true
    },
    {
        "id": "isGeek",
        "widget": "checkbox",
        "label": "Geek :"
    }
];

$scope.valueObj = {};
```

and the corresponding html:

```html
<gkc-meta-ui metadata="sampleMetadata" model="valueObj"></gkc-meta-ui>
```

would yield the following UI form:

![Simple Form Screenshot](https://raw.githubusercontent.com/grkacy/material-meta-ui/master/doc/images/simpleform.png)

The data representing the form (*valueObj*) after user types 'Greg' and clicks the checkbox will look as follows:

```
{
  "name": "Greg",
  "isGeek": true
}
```


## Motivation

I had a few occasions in my professional career where metadata driven approach for generating UI views was used. These views were typically forms based settings views (a.k.a property sheets). 
This approach could be used in conjunction with auto generation of corresponding DB bindings and (or) REST calls manipulating on the data. 

This approach is especially handy where extensive and numerous settings forms are needed or when we want quickly to prototype a UI.

This project is a stab at this use case using AngularJS and Angular Material.

## Installation

Install required tools: gulp and bower:

```
npm install -g gulp bower
```

After cloning the project run at the root of the project folder

```
gulp serve
```

This will open the sample application.

The sample application has two sections. First section shows the simple usage of the directive.
The second section - 'UI Builder' is a builder app allowing to quickly create sample forms.

## API Reference

The Metadata JSON definition supports currently the following attributes:

* **id** : string id of the widget (used to reference the data in the value object)

* **widget** : type of widget *textfield* | *checkbox* | *switch* | *select* | *datepicker* | *heading* | *separator*

* **label** : string label describing the filed

* **value** : initial value for the field

* **tooltip** : tooltip text

* **icon** : font awesome spec for an icon (example: "fa fa-eye fa-lg")

Besides, the following attributes exist and are specific for particular widgets:

* **type** : type of text field (example: password) 

* **label-left** : if *true* the label will be placed on the left side of the widget, if *false* the label will be above the field

* **options** : a list of option values for *select* widget  

* **width** : width of a widget (example: "300px")

The below example should give a good idea how to use it:
        
```
[
    {
        "widget": "subheader",
        "label": "General"
    },
    {
        "id": "texfield1",
        "widget": "textfield",
        "label": "Text Field",
        "label-left": true,
        "value": "",
        "tooltip": "This is a text field",
        "width": "300px"
    },
    {
        "widget": "divider"
    },
    {
        "id": "textfield2",
        "widget": "textfield",
        "label": "Another Text Field",
        "tooltip": "Standard Material text field"
    },
    {
        "id": "textfield3",
        "widget": "textfield",
        "type": "password",
        "label": "Password Field",
        "tooltip": "Password text field"
    },
    {
        "widget": "divider"
    },
    {
        "id": "checkbox1",
        "widget": "checkbox",
        "label": "Check Box",
        "value": true,
        "tooltip": "This is a checkbox",
        "icon": "fa fa-eye fa-lg"
    },
    {
        "id": "switch1",
        "widget": "switch",
        "label": "Switch",
        "tooltip": "This is a a switch",
        "icon": "fa fa-star fa-lg"
    },
    {
        "widget": "divider"
    },
    {
        "id": "select1",
        "widget": "select",
        "label": "Select",
        "label-left": true,
        "width": "150px",
        "options": [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4"
        ],
        "value": "Option 1",
        "tooltip": "This is an example of pull down choice"
    },
    {
        "id": "datepicker1",
        "widget": "datepicker",
        "label": "Some Date",
        "label-left": true,
        "tooltip": "This is a date picker "
    },
    {
        "widget": "divider"
    },
    {
        "id": "select2",
        "widget": "select",
        "label": "Select",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "value": "Option B",
        "tooltip": "This is another example of pull down choice"
    }
]

```


## Testing/Running

- `gulp` to build an optimized version of your application in folder dist
- `gulp` serve` to start BrowserSync server on your source files with live reload
- `gulp serve:dist` to start BrowserSync server on your optimized application without live reload
- `gulp test` to run your unit tests with Karma
- `gulp test:auto` to run your unit tests with Karma in watch mode
- `gulp protractor` to launch your e2e tests with Protractor
- `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files
- `gulp clean` to clean stuff 

## Todos

This is still bit of a toy but if time allows I am planing to grow it

1. Supporting REGEX validation for text fields
2. Support for text area, number field
3. Support for read only fields
4. Support for pre populated value objects
5. More flexible layout for widgets
6. Packaging the directive in standalone library
7. Support for Material icons
8. More elaborate builder
9. Write more tests
10. Add code comments
11. and more

## Tech

The following open source technologies are used here

* [AngularJS] - HTML enhanced for web apps!
* [Angular Material] - great UI framework for modern web apps
* [generator-gulp-angular] - great AngularJS boilerplate starter generator
* [Ace Editor] - awesome web-based text editor
* [Gulp] - the streaming build system

## License

MIT
