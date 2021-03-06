/*
   π‘ Clear intent
   π‘ Use the right tool
   π‘ Bite-size logic
   π‘ Sometimes code isn't the answer
*/

/*
Compare Booleans Implicitly
// π΄ Dirty
if(loggedIn === true){
    // do something
}

// π’ Clean
if(loggedIn){
    // do something
}
*/

/*
Assign Booleans Implicitly
// π΄ Dirty
let goingToEatKebab;
if(cashInWallet > 6){
    goingToEatKebab = true;
}else{
    goingToEatKebab = false;
}

// π’ Clean
let goingToEatKebab = cashInWallet > 6;

    β Fewer lines
    β No separate initialization
    β No repetition
    β Reads like speech π£οΈ

*/

/*
Don't be anti-negative

// π΄ Dirty
if(!isNotLoggedIn){
    // do something
}

// π’ Clean
if(loggedIn){
    // do something
}
*/

/*
Ternary is elegant
// π΄ Dirty
let registrationFee;
if(isSpeaker){
    registrationFee = 0;
}else{
    registrationFee = 5;
}

// π’ Clean
let registrationFee = isSpeaker ? 0 : 50;

    β DRY ( Don't Repeat Yourself)
    β YAGNI ( You Aren't Gonna Need It)
*/


/*
Avoid being "Stringly" Typed
// π΄ Dirty
if(employee === 'manager'){
    // do something
}

// π’ Clean (use enums)
const employeeType = {
    manager: 'manager'
}
if(employee === employeeType.manager){
    // do something
}
    β No typos
    β Intellisense support
    β Documents states
    β Searchable

*/

/*
Magic Numbers

// π΄ Dirty
if(age > 21){
    // do something πΊπΊπΊ
}

// π’ Clean
const legalDrinkingAge = 21; // 
if(age > legalDrinkingAge){
    // do something πΊπΊπΊ
}

// π΄ Dirty
if(status === 2){
    // do something 
}

// π’ Clean (use enums)
if(status === Status.Active){
    // do something 
}

*/

/*
Complex Conditionals

// Intermediate Variables

// π΄ Dirty
if(emloyee.age > 55
    && employee.yearsEmployed > 10
    && employee.IsRetired === true
    ){
    //do something
}

// π’ Clean 
const eligibleForPension = employee.age > minRetirementAge
        && employee.yearsEmployed > MinPensionEmploymentYears
        && employee.isRetired;
if(eligibleForPension){
    // do something
}

Encapsulate Complex Conditionals
// π΄ Dirty
if( 
    (fileExtension === 'mp4' || 
     fileExtension === 'mkv' || 
     fileExtension === 'avi' || 
    ) && (isAdmin || isActiveFile)
){} 

// π’ Clean
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
// π΄ Dirty
const matchingUsers = [];
for(const user of users){
    if(user.accountBalance < minimumAccountBalance
        && user.status === Status.Active)
        ){
            matchingUsers.push(user)
        }
}
return matchingUsers

// π’ Clean
return users.filter(user => user.accountBalance < minimumAccountBalance)
            .filter(user => user.status === Status.active)

*/

/**
//sometimes code isn't the answer
Table Driven Methods


// π΄ Dirty
if(age < 20){
    return 345
}else if(age < 30){
    return 419
}else if(age < 40){
    return 476
}else if(age < 50){
    return 516
}

// π’ Clean
// hold data in database
return Repository.getInsuranceRate(age);

    β Great for dynamic logic
    β Avoids hard coding
    β Write less code
    β Easily changeable without a code change/app deployment

 */
