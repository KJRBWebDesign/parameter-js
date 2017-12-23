
var Parameter = {
  variables:  {},
  allowedVariables: [],
  onLoad: function(callback) {
      window.onload = callback();
  },
  parseURL: function(delimeter) {
      let varArray = window.location.href.split(delimeter).slice(1, this.length);
      Parameter.variables.array = varArray;
      return Parameter.variables.array;
  },
  updateVariables: function(allowed) {
      Parameter.allowedVariables = allowed;
      let vars = Object.keys(Parameter.variables.array);
      vars.forEach(function(item){
        var itemSplit = Parameter.variables.array[item].split("=");
        Parameter.allowedVariables.indexOf(itemSplit[0]) !== -1 ? Parameter.variables[itemSplit[0]] = itemSplit[1] : console.log("variable _" +  itemSplit[0] + "_ not allowed")/* IMPORTANT */; 
    });
  },
  updateVariablesOnLoad: function(allowed, delimeter) {
    Parameter.onLoad(function(){
      Parameter.parseURL(delimeter);
      Parameter.updateVariables(allowed);
      return Parameter.variables;
    });
  }
}

Parameter.updateVariablesOnLoad(["hello"], "?");