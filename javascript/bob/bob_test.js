var Bob = function() {
  this.hey = function(string) {

    //store the punctuation mark or last character of the string
    //this works only for a string containing a single statement
    var punctuation_mark = string[string.length - 1];

    // first check for all caps, if true, return chill out response
    if(string == string.toUpperCase() && isOnlyNumeric(string) == false) {
      return 'Woah, chill out!';
    }
    else if(punctuation_mark == '.' || punctuation_mark == '!' || isOnlyNumeric(string) == true) {
        return 'Whatever.';
    }
    else if(punctuation_mark == '?') {
      return 'Sure.';
    }
    else
      return 'Whatever.';
  };

};

var isOnlyNumeric = function(string) {
  var has_an_alphabet = false;

  for (var character in string) {
    // check if it's an uppercase alphabetical character by checking the ascii value
    var i = 65; // initialize i to ascii value of 'A'
    while(i <= 90 && has_an_alphabet == false) {
      if(string.charCodeAt(character) == i) {
        has_an_alphabet = true;
      }
      i++;
    }

    // check if it's an lowercase alphabetical character by checking the ascii value
    var i = 97; // initialize i to ascii value of 'a'
    while(i <= 122 && has_an_alphabet == false) {
      if(string.charCodeAt(character) == i) {
        has_an_alphabet = true;
      }
      i++;
    }
  }

  if(has_an_alphabet == true) {
    return false;
  }
  else {
    return true;
  }
};

var bob = new Bob();