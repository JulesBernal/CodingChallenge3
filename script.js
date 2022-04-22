const years = [2000,2010,2020,2030,2040];
const cityArray=['Richmond','Edmonton','Washington','Redlands','Atlanta'];
const boolData=[true,false,false,false,true];
const arrayPush = function (newIndex,pushValue){
    return newIndex.push(pushValue);
}

function arrayChecker(arrayType){
    let userInput;
if ("boolean"===typeof arrayType[0]){
    userInput=prompt(`The Array you choose is ${choice}, add a boolean value.`);
        arrayPush(boolData,userInput)
}
else if ("number"===typeof arrayType[0]){
  userInput=Number(prompt(`The Array you choose is ${choice}, add a year value. Eg. 2050`));
        arrayPush(years,userInput);
}
else if ("string"===typeof arrayType[0]){
    userInput=prompt(`The Array you choose is ${choice}, add a city as a string, E.g. 'houston`);
        arrayPush(cityArray,userInput);
}
}

const choice=prompt(`Which Array do you want to interact with, number, boolean, or strings?`)
if (choice==='boolean'){
    arrayChecker(boolData);
    console.log(boolData);
}
else if (choice===`strings`){

    arrayChecker(cityArray);
    console.log(cityArray);
}
else if (choice===`number`){
    arrayChecker(years);
    console.log(years);
}
else{
    alert(`Please enter a valid Response.`)
}
