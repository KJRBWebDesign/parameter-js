# parameter-js

# Usage

*Update a global Javascript object on page load with URL parameters using a custom delimeter*

**Although you may use a custom delimeter, "*?*" is recommended**


## Manual
```javascript
var x = function(allowed, delimeter) {
  Parameter.onLoad(function(){
    Parameter.parseURL(delimeter);
    Parameter.updateVariables(allowed);
    return Parameter.vars;
}
```

## Automatic
```javascript
Parameter.updateVariablesOnload(["hello"], "?");
```

## Helper Functions 
```javascript

 Parameter.onload(callback); //Shorthand for window.onload = foo();
          .parseURL(delimeter); // Parse the current URL with a custom delimeter
          .updateVariables(allowedArray); //Looks at Parameter.vars and updates the variable if the variable is in allowedArray
          .updateVariableOnLoad(allowedArray, delimeter); //Parses the current URL on page load and updates allowed variables

```
