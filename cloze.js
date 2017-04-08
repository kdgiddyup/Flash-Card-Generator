/*
Create a ClozeCard constructor. It should accept text and cloze arguments.
ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
ClozeCard should have a property or method that contains or returns only the partial text.
ClozeCard should have a property or method that contains or returns only the full text.
ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
Use prototypes to attach these methods, wherever possible.

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); "

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText): "

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze("This doesn't work", "oops"); 
Your property and/or method names can be different, but these examples describe how you would use your flashcard objects.
Bonuses

Write your constructors such that users can call them with or without the new keyword.
Look up scope-safe constructors, and try to implement them. It takes only two additional lines of code.

--------------------------
pseudo code
--------------------------
constructor ClozeCard stakes text, cloze string
 builds object with keys text, cloze and a method 'partial' that returns error if cloze can't be found in string, or the string with cloze replaced by '...'
 
partial method:
    checks string with regex .test method and 
        returns error that says "<cloze> does not exist in <text>"
        or
        returns partial string by using replace(<cloze>, "...") to replace any instance of cloze

*/

function ClozeCard( text , cloze) {
    // make it scope-safe
    // if this constructor was called without 'new', the resulting instanceof will not be the constructor itself, so loop back around wwith 'new'
    if (!(this instanceof ClozeCard)) { 
        return new ClozeCard( text, cloze);
    }
    
    // now, as you were ...
    this.text = text;
    this.cloze = cloze;
    this.getCloze = function(){
        console.log('Cloze: '+cloze)
    };
    this.getText = function(){
        console.log('Text: '+text);
    }
    this.getPartial = function(){
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

 // testing without 'new' keyword
var testCloze = ClozeCard("My name is Kelly Davis.","name");testCloze.getText();
testCloze.getCloze();
testCloze.getPartial();
