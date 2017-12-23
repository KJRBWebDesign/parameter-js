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
  updateVariables: function(allowed,delimeter) {
      Parameter.allowedVariables = allowed;
      let vars = Object.keys(Parameter.variables.array);
      Parameter.parseURL(delimeter) /* Parse URL */
      vars.forEach(function(item){
        let itemSplit = Parameter.variables.array[item].split("=");
            prop = itemSplit[0],
            value = itemSplit[1];
        Parameter.allowedVariables.indexOf(prop) !== -1 ? Parameter.variables[prop] = value : console.log("variable _" +  prop + "_ is not an allowed variable")/* IMPORTANT */; 
    });
  },
  updateVariablesOnLoad: function(allowedArray, delimeter) {
    Parameter.onLoad(function(){
      Parameter.updateVariables(allowedArray, delimeter);
      return Parameter.variables;
    });
  }
}
Parameter.updateVariablesOnLoad(["hello"], "?");
