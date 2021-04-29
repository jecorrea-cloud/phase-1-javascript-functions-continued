// Your code here

//function implemented with a function definition
function saturdayFun(activity = `roller-skate`){
    return `This Saturday, I want to ${activity}!`;
}

//function implemented with a function expression
const mondayWork = function(activity = `go to the office`) { return `This Monday, I will ${activity}.`;}

//function definition 
function wrapAdjective(flair = `*`){
    return function(adj = `special`) {return `You are ${flair}${adj}${flair}!`};
}