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

// ð¡ Extract Method

// ð¡ Return Early
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
    â Aids the reader
    â Promotes reuse
    â Eases naming and testing
    â Avoids side-effects
*/




/*
Mayfly variables
    recipe for mayfly variables:
        ð¡ Initalize variables just-in-time
        ð¡ Do one thing

*/

/*
How many parameters?
    strive for 0-2 parameters

// ð´ Dirty
function saveUser(user,sendEmail,emailFormat,printReport,
    sendBill){
    //
}

â ï¸watch for flag arguments
// ð´ Dirty
function saveUser(user,emailUser){
    //save user
    if(emailUser){
        //email user
    }
}

// ð¢ Clean
function saveUser(user){
    // save user
}   

function emailUser(user){
    // email user
}
    
*/

/*
Signs its too long?
    â ï¸ Whitesoace & Comments
    â ï¸ Scrolling required
    â ï¸ Naming issue
    â ï¸ Multiple Conditionals
    â ï¸ Hard to digest

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