/*
Naming Matters

// ð´ Dirty
const p = [1500,500,3000,200]
let t = 0;
for(const i of p){
    t+=i
}
console.log(t);

// ð¢ Clean
const prices = [1500,500,3000,200]
let total = 0;
for(const price of prices){
    total+=price
}
console.log(total);
*/


/*
Naming Classes
    â WebsiteBO
    â Utility
    â MyFunctions
    â GholamisObject
    â *Manager / *Processor / *Info


    â User
    â Account
    â QueryBuilder

Guidelines:
    1.Noun
    2.Be specific
    3.Single responsibilty
    4.Aviod generic suffixes

*/

/*
Naming Warning Sign
    â ï¸ And
    â ï¸ If
    â ï¸ Or
*/

/*
Watch for Side Effect
    ð¡ CheckPassword shouldn't log users out.
    ð¡ ValidationSubmission shouldn't save.
    ð¡ ChargeCreditCard shouldn't send emails.
*/

/*
Avd Abbr (abbreviation)
    â¼ï¸ it's not the 80's
    â¼ï¸ not standard
    â¼ï¸ we talk about code

    âRegUsr
    âRegistUser

*/


/*
Naming varibales: Booleans
// ð´ Dirty
    open
    start
    status
    login

// ð¢ Clean
    isOpen
    done
    isActive
    loggedIn
*/

/*
Naming varibales: Be symmetrical
// ð´ Dirty
    on/disable
    quick/slow
    lock/open
    slow/max

// ð¢ Clean
    on/off
    fast/slow
    lock/unlock
    min/max    

*/


