# Parameter.js

# Usage

*Update a global Javascript object on page load with URL parameters using a custom delimeter*

**Although you may use a custom delimeter, "*?*" is recommended**

parameter.js gives you a global object, `Parameter`, and it's helper functions, including `Parameter.updateVariablesOnLoad(allowedVariablesArray, delimeter)` which is a one-off function to update variable on page load

**Example URL: *mysite.com/portfolio/videos?time=3m50s***

```javascript


```

## Manual ; Not on Load
```javascript
function fooBar(allowedVariablesArray, delimeter) {
    Parameter.parseURL(delimeter);
    Parameter.updateVariables(allowedVariablesArray);
    return Parameter.vars;
    
    //Will update {Parameter.variabless}
}
```

## Automatic ;  On Load
```javascript
Parameter.updateVariablesOnLoad(["hello"], "?");

//Will update {Parameter.variables}
```

## Helpers 
```javascript

 Parameter.onload(callback); //Shorthand for window.onload = foo();
          .parseURL(delimeter); // Parse the current URL with a custom delimeter
          .updateVariables(allowedArray); //Looks at Parameter.vars and updates the variable if the variable is in allowedArray
          .updateVariableOnLoad(allowedArray, delimeter); //Parses the current URL on page load and updates allowed variables
          .allowedVariables[] //array with object property names that are allowed to be changed
          .variables{} //object used to contain updated variables ;; Parameter.variables[propName] = passedValue;  
```
