/*
   💡 Clear intent
   💡 Use the right tool
   💡 Bite-size logic
   💡 Sometimes code isn't the answer
*/

/*
Compare Booleans Implicitly
// 🔴 Dirty
if(loggedIn === true){
    // do something
}

// 🟢 Clean
if(loggedIn){
    // do something
}
*/

/*
Assign Booleans Implicitly
// 🔴 Dirty
let goingToEatKebab;
if(cashInWallet > 6){
    goingToEatKebab = true;
}else{
    goingToEatKebab = false;
}

// 🟢 Clean
let goingToEatKebab = cashInWallet > 6;

    ✅ Fewer lines
    ✅ No separate initialization
    ✅ No repetition
    ✅ Reads like speech 🗣️

*/

/*
Don't be anti-negative

// 🔴 Dirty
if(!isNotLoggedIn){
    // do something
}

// 🟢 Clean
if(loggedIn){
    // do something
}
*/

/*
Ternary is elegant
// 🔴 Dirty
let registrationFee;
if(isSpeaker){
    registrationFee = 0;
}else{
    registrationFee = 5;
}

// 🟢 Clean
let registrationFee = isSpeaker ? 0 : 50;

    ✅ DRY ( Don't Repeat Yourself)
    ✅ YAGNI ( You Aren't Gonna Need It)
*/


/*
Avoid being "Stringly" Typed
// 🔴 Dirty
if(employee === 'manager'){
    // do something
}

// 🟢 Clean (use enums)
const employeeType = {
    manager: 'manager'
}
if(employee === employeeType.manager){
    // do something
}
    ✅ No typos
    ✅ Intellisense support
    ✅ Documents states
    ✅ Searchable

*/

/*
Magic Numbers

// 🔴 Dirty
if(age > 21){
    // do something 🍺🍺🍺
}

// 🟢 Clean
const legalDrinkingAge = 21; // 
if(age > legalDrinkingAge){
    // do something 🍺🍺🍺
}

// 🔴 Dirty
if(status === 2){
    // do something 
}

// 🟢 Clean (use enums)
if(status === Status.Active){
    // do something 
}

*/

/*
Complex Conditionals

// Intermediate Variables

// 🔴 Dirty
if(emloyee.age > 55
    && employee.yearsEmployed > 10
    && employee.IsRetired === true
    ){
    //do something
}

// 🟢 Clean 
const eligibleForPension = employee.age > minRetirementAge
        && employee.yearsEmployed > MinPensionEmploymentYears
        && employee.isRetired;
if(eligibleForPension){
    // do something
}

Encapsulate Complex Conditionals
// 🔴 Dirty
if( 
    (fileExtension === 'mp4' || 
     fileExtension === 'mkv' || 
     fileExtension === 'avi' || 
    ) && (isAdmin || isActiveFile)
){} 

// 🟢 Clean
if(validFileRequest(fileExtension,active)){
}

function(fileExtension,isActiveFile,isAdmin){
    const validFileExtensions = ['mp4','mkv','avi'];
    const validFileType = validFileExtensions.includes(fileExtension);
    const userIsAllowedToViewFile = isActiveFile || isAdmin;
    return validFileType && userIsAllowedToViewFile

    // we can refactor further...
}

*/

/*
Be declarative if possible
// 🔴 Dirty
const matchingUsers = [];
for(const user of users){
    if(user.accountBalance < minimumAccountBalance
        && user.status === Status.Active)
        ){
            matchingUsers.push(user)
        }
}
return matchingUsers

// 🟢 Clean
return users.filter(user => user.accountBalance < minimumAccountBalance)
            .filter(user => user.status === Status.active)

*/

/**
//sometimes code isn't the answer
Table Driven Methods


// 🔴 Dirty
if(age < 20){
    return 345
}else if(age < 30){
    return 419
}else if(age < 40){
    return 476
}else if(age < 50){
    return 516
}

// 🟢 Clean
// hold data in database
return Repository.getInsuranceRate(age);

    ✅ Great for dynamic logic
    ✅ Avoids hard coding
    ✅ Write less code
    ✅ Easily changeable without a code change/app deployment

 */
