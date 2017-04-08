/*
--------------------------
pseudo code
--------------------------
constructor ClozeCard takes text, cloze string
 builds object with keys text, cloze and a method 'partial' that returns error if cloze can't be found in string, or the string with cloze replaced by '...'
 
partial method:
    checks string with regex .test method and 
        returns error that says "<cloze> does not exist in <text>"
        or
        returns partial string by using replace(<cloze>, "...") to replace any instance of cloze

*/
// pulls in questions.js file that contains an array of questions formatted as: [{text: <text1>,cloze:<cloze1>}, ...]
var questions = require('./questions.js');
function ClozeCard( text , cloze) {
    // make it scope-safe
    // if this constructor was called without 'new', the resulting instanceof will not be the constructor itself, so loop back around wwith 'new'
    if (!(this instanceof ClozeCard)) { 
        return new ClozeCard( text, cloze);
    }
    
    // now, as you were ...
    this.text = text;
    this.cloze = cloze;
    this.getBack = function(){
        console.log('Back: '+cloze)
    };
    this.getText = function(){
        console.log('Full text: '+text);
    }
    this.getFront = function(){
        // build regular expression /<this.cloze>/gi, which looks for all instances of the cloze string (g modifier) in any case (i modifier) 
        var clozePattern = RegExp(this.cloze, "gi");
        // does cloze  exist in full string?
        if (clozePattern.test(this.text))
            // true: return text with all instances of the matching pattern replaced with "..."
            console.log( this.text.replace(clozePattern,"..."))
        else 
            // false: return the error message
            console.log( 'Error: "' + this.cloze +'" does not exist in "'+ this.text +'".')
        }
} // ClozeCard constructor

for (var i=0;i<questions.data.length;i++) {
    var thisCloze = ClozeCard(questions.data[i].text, questions.data[i].cloze);
    console.log('Card front:');
    thisCloze.getFront();
    thisCloze.getBack();
    thisCloze.getText();
}