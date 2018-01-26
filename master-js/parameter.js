var Parameter = {
  variables:  {}, 
  allowedVariables: [],
  helpers: {
    redundancyChecker: function(varsArray) {
      varsArray.forEach(function(item){ 
        let itemSplit = Parameter.variables.array[item].split("="), prop = itemSplit[0], value = itemSplit[1];
        Parameter.allowedVariables.indexOf(prop) !== -1 ? Parameter.variables[prop] = value : console.log("variable _" +  prop + "_ is not an allowed variable");
      });
    }
  }, 
  parseURL: function(delimeter) {
      let varArray = window.location.href.split(delimeter).slice(1, this.length);
      Parameter.variables.array = varArray;
      return Parameter.variables.array;
  },
  updateVariables: function(allowedArray,delimeter) {
      Parameter.allowedVariables = allowedArray;
      Parameter.parseURL(delimeter);
      Parameter.helpers.redundancyChecker(Object.keys(Parameter.variables.array));
      
  },
  updateVariablesOnLoad: function(allowedArray, delimeter, callback) {
    window.onload = function(){
      Parameter.updateVariables(allowedArray, delimeter);
    }
  }

}
Parameter.updateVariablesOnLoad(["variablesToUpdate"], "?"); 
