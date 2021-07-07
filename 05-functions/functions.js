/*
When to create a function
    Duplication
    Indentation (arrow code)
    Unclear intent 
    > 1task

*/

/*
Duplication
*/

/*
Excessive Indentation: Arrow Code

if
    if
        if
            if
                do stuff
            endif
        endif
    endif
endif

// 💡 Extract Method

// 💡 Return Early
function isValidUsername (username){
    const minUsernameLength = 6;
    if(username.length < minUsernameLength){
        return false
    }

    const maxUsernameLength = 25;
    if(username.length > maxUsernameLength){
        return false
    }

    //some functionality

}

// avoid arrow code: fail fast


*/

/*
Unclear intent 
*/

/*
Do one thing
    ✅ Aids the reader
    ✅ Promotes reuse
    ✅ Eases naming and testing
    ✅ Avoids side-effects
*/




/*
Mayfly variables
    recipe for mayfly variables:
        💡 Initalize variables just-in-time
        💡 Do one thing

*/

/*
How many parameters?
    strive for 0-2 parameters

// 🔴 Dirty
function saveUser(user,sendEmail,emailFormat,printReport,
    sendBill){
    //
}

⚠️watch for flag arguments
// 🔴 Dirty
function saveUser(user,emailUser){
    //save user
    if(emailUser){
        //email user
    }
}

// 🟢 Clean
function saveUser(user){
    // save user
}   

function emailUser(user){
    // email user
}
    
*/

/*
Signs its too long?
    ⚠️ Whitesoace & Comments
    ⚠️ Scrolling required
    ⚠️ Naming issue
    ⚠️ Multiple Conditionals
    ⚠️ Hard to digest

    "Rarely be over 20 lines
     Hardly ever over 100 lines
     No more than 3 parameters"
     Robert C.Martin
*/

/*
Kinds of Exceptions
    Unrecoverable
        Null reference
        File not found
        Access denied
    Recoverable
        Retry connection
        Try different file
        Wait and try again    
    Ignorable
        Logging click

*/