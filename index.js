exports.orange = function orange(string) {

  let yayitsanorange = "Looks like you've got an orange there. Way to go pal!";
  let dontlooklikeanorange = "Nope, that doesn't look like an orange. Not from around town at least";
  
  if (typeof string !== "string") throw new TypeError("Oranges are strings, just strings.");
  if (string.toLowerCase() == "orange") {
   return yayitsanorange
  }
  
  else {
  return dontlooklikeanorange
  };
};

exports.includesOrange = function includesOrange(string) {

  let yayitsanorange = "I sense an orange among us.";
  let dontlooklikeanorange = "Just rotten apples here. ROTTEN. APPLES";
  
  if (typeof string !== "string") throw new TypeError("You might want to look for an orange in a string");
  if (string.toLowerCase().includes("orange")) {
   return yayitsanorange
  }
  
  else {
  return dontlooklikeanorange
  };
};

exports.hasOrange = function hasOrange(string) {

  let yayitsanorange = "There is an orange here! An orange!";
  let dontlooklikeanorange = "Reeks of darn vegetables. No oranges here";
  
  if (!Array.isArray(string)) throw new TypeError("i looked far and wide. i couldn't find an array :(");
  
  if (string.toString().toLowerCase().includes("orange")) {
    var letsmakeitastring = string.map(String)
    var lowercasethearray = letsmakeitastring.map(oj => oj.toLowerCase());
    console.log(lowercasethearray);
    let newarray = lowercasethearray
    
    let wefoundorange = newarray.indexOf("orange");
    return yayitsanorange + "\n Array Index: " + wefoundorange;
  }
  
  else {
  return dontlooklikeanorange
  };
};

exports.mixedOrange = function mixedOrange(string) {
  

  let yayitsanorange = "ORANGE D E T E C T E D";
  let dontlooklikeanorange = "Our Arch Wizard tells us there is no orange here. Thanks Megumin.";
 
  
  if (typeof string !== "string") throw new TypeError("Well this is weird but are you sure your value is a string?");
  if (string.length > 6) { return dontlooklikeanorange }
  
  var orangesort =  ["a", "e", "g", "n", "o", "r"]
  var stringsort = string.split("").sort()

  
for (var i = 0; i < stringsort.length; ++i) {
    if (orangesort[i] !== stringsort[i]) return dontlooklikeanorange;
  }
  return yayitsanorange;
};
 
exports.badlyMixedOrange = function badlyMixedOrange(string) {
  

  let yayitsanorange = "Found an orange, we have";
  let dontlooklikeanorange = "Critical Error: No Oranges";
 
  
  if (typeof string !== "string") throw new TypeError("This is a STRING-only club, sorry pal.");
  
  
  var thecoolerstring = string.split("").sort()
  
  let anorangearray = ['o','r','a','n','g','e'];
  
  if ( anorangearray.every(orng => thecoolerstring.includes(orng)) ) {
    
  return yayitsanorange;
  }
  
  else {
    
   return dontlooklikeanorange;
  };
};
