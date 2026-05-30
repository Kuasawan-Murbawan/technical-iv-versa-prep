/*

    3. Login Logic
    
    What security or logic issues?

*/

function login (email: string, password:string){


}

/*

    Issues: 1. No return types
            2. The password is likely unhashed, so may be storing raw password so security issue
            3. no maximum times the user can try to log in
            4. error is too specific, better use invalid email/password
            5. no token generated
            6. trim and lowercase the email to have better UX

    Data Validation:    - makesure email and password are valid string, not null
                        

*/