// an array of text/cloze objects that serve as flashcard data
var questions = [
    {
        text: 'George Washington was our first president.',
        cloze: 'George Washington'
    },
    {
        text: 'Alexander Hamilton was a Founding Father as well as founder of the United States Coast Guard.',
        cloze: 'Alexander Hamilton'
    },
    {
        text: 'America\'s 44th president was Barack Obama.',
        cloze: 'Barack Obama'
    },
    {
        text: 'Abraham Lincoln was born in the Commonwealth of Kentucky.',
        cloze: 'Kentucky'
    },
    {
        text: 'John F. Kennedy was America\'s 35th president.',
        cloze: '35th'
    },
    {
        text: 'The Constitution of the United States was written in 1787.',
        cloze: '1787'
    },
        {
        text: 'President Thomas Jefferson purchased the Louisiana Territory from France in 1803.',
        cloze: 'Thomas Jefferson'
    },
    {
        text: ' The opening shots of the American Revolution were fired at Lexington and Concord, Massachusetts, in April 1775.',
        cloze: '1775'
    },
    {
    
        text: 'The Battle of Gettysburg was the turning point in the Civil War for the North.',
        cloze: 'Gettysburg'
    },
    {
    
        text: 'Manifest Destiny is the belief that the United States should own all of the land between the Atlantic and Pacific Oceans.',
        cloze: 'Manifest Destiny'
    },   
];
// make this data available to other node applications
exports.data = questions;