/*
Naming Matters

// 🔴 Dirty
const p = [1500,500,3000,200]
let t = 0;
for(const i of p){
    t+=i
}
console.log(t);

// 🟢 Clean
const prices = [1500,500,3000,200]
let total = 0;
for(const price of prices){
    total+=price
}
console.log(total);
*/


/*
Naming Classes
    ❌ WebsiteBO
    ❌ Utility
    ❌ MyFunctions
    ❌ GholamisObject
    ❌ *Manager / *Processor / *Info


    ✅ User
    ✅ Account
    ✅ QueryBuilder

Guidelines:
    1.Noun
    2.Be specific
    3.Single responsibilty
    4.Aviod generic suffixes

*/

/*
Naming Warning Sign
    ⚠️ And
    ⚠️ If
    ⚠️ Or
*/

/*
Watch for Side Effect
    🟡 CheckPassword shouldn't log users out.
    🟡 ValidationSubmission shouldn't save.
    🟡 ChargeCreditCard shouldn't send emails.
*/

/*
Avd Abbr (abbreviation)
    ◼️ it's not the 80's
    ◼️ not standard
    ◼️ we talk about code

    ❌RegUsr
    ❌RegistUser

*/


/*
Naming varibales: Booleans
// 🔴 Dirty
    open
    start
    status
    login

// 🟢 Clean
    isOpen
    done
    isActive
    loggedIn
*/

/*
Naming varibales: Be symmetrical
// 🔴 Dirty
    on/disable
    quick/slow
    lock/open
    slow/max

// 🟢 Clean
    on/off
    fast/slow
    lock/unlock
    min/max    

*/


