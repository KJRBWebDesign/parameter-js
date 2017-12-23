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
        Parameter.allowedVariables.indexOf(itemSplit[0]) !== -1 ? Parameter.variables[itemSplit[0]] = itemSplit[1] : console.log("variable _" +  itemSplit[0] + "_ is not an allowed variable")/* IMPORTANT */; 
    });
  },
  updateVariablesOnLoad: function(allowedArray, delimeter) {
    Parameter.onLoad(function(){
      Parameter.updateVariables(allowedArray);
      return Parameter.variables;
    });
  }
}
