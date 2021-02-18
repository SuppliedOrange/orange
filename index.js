module.exports = function orange(string) {

  var isOrange = false;
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
