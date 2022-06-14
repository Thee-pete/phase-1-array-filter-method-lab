// Code your solution here
function findMatching(drivers, stringName){
     
     const matchingDrivers = drivers.filter(function(name){
        return name.toUpperCase() == stringName.toUpperCase();
     });
     return matchingDrivers;
    
}
const drivers = [];
drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');

function fuzzyMatch(drivers, stringLetters){
    const newDriverList = drivers.filter(function(name){
        return name.startsWith(stringLetters);
    });
    return newDriverList;
}

function matchName(drivers, stringName){
    const matchingNames = drivers.filter(function( driver){      
            return driver.name == stringName;    
    });
    return matchingNames;
}