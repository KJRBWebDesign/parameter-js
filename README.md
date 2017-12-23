# Parameter.js

# Usage

*Update an Object's(Parameter.variables{}) properties via URL parameters in Javascript*

**Although you may use a custom delimeter, "*?*" is recommended**

Parameter.js gives you a global object `Parameter`, and it's helper functions, including `Parameter.updateVariablesOnLoad(allowedVariablesArray, delimeter)`, a one-off function to update `Parameter.variables` on page load

**Example URL: *mysite.com/portfolio/videos?time=3m50s***

## Manual ; Not on Load
```javascript
function fooBar(allowedVariablesArray, delimeter) {
    Parameter.updateVariables(["time", "height", "width"], "?");
    return Parameter.variables;
}
//Will update {Parameter.variables}
```

## Automatic ;  On Load
```javascript
Parameter.updateVariablesOnLoad(["time", "height", "width"], "?");
//Will update {Parameter.variables}
```

## Helpers 
```javascript

 Parameter.onload(callback); //Shorthand for window.onload = foo();
          .parseURL(delimeter); // Parse the current URL with a custom delimeter
          .updateVariables(allowedArray, delimeter); //Looks at Parameter.variables, updates variables if they're in allowedArray
          .updateVariableOnLoad(allowedArray, delimeter); //Parses the current URL on page load and updates allowed variables
          .allowedVariables[] //array with object property names that are allowed to be changed
          .variables{} //object used to contain updated variables ;; Parameter.variables[propName] = passedValue;  
```

*Note: this probably isn't secure in any way, lol* 
