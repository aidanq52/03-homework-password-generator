var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 0],
    specialCharacters = ['!','@','#','$','%','^','&','*','(',')','-','_','+','='],
    button = document.getElementById("generate"),
    textArea = document.getElementById("password");

console.log( button )

function startNewPassword() {
    var passwordLength = 0;


    function isPasswordLengthCorrect( passwordLength ){

      return passwordLength >= 8 && passwordLength <= 128;
    };


    while ( ! isPasswordLengthCorrect( passwordLength ) ){

    passwordLength = parseInt(prompt ( 'Choose a password length between 8 and 128 characters'));

    };


    console.log(passwordLength);


    var options = {
        "passwordLength": passwordLength,
        "lowercase": confirm('Would you like lowercase letters in your password?'),
        "uppercase": confirm('Would you like uppercase letters in your password?'),
        "numeric": confirm('Would you like numbers in your password?'),
        "specialCharacters": confirm('Would you like special characters in your password?'),
    };


    while( options.lowercase === false && options.uppercase === false && 
        options.numeric === false && options.specialCharacters === false){

            alert("At least one of the following must be selected to proceed:");
            options.lowercase = confirm('Would you like lowercase letters in your password?');
            options.uppercase = confirm('Would you like uppercase letters in your password?');
            options.numeric = confirm('Would you like numbers in your password?');
            options.specialCharacters = confirm('Would you like special characters in your password?');
  };

  textArea.value = generatePassword( options );

}




function generatePassword ( options ){
    
    var password = '';
        possibleCharacters = [];
        requiredCharacters = [];


    if( options.lowercase ){

        possibleCharacters = possibleCharacters.concat(lowercase);

        requiredCharacters.push( lowercase[Math.floor( Math.random()* lowercase.length )] );

    }

    if ( options.uppercase ){

        possibleCharacters = possibleCharacters.concat(uppercase);

        requiredCharacters.push( uppercase[Math.floor( Math.random()* uppercase.length )] );


    }

    if ( options.numeric ){

        possibleCharacters = possibleCharacters.concat(numeric);

        requiredCharacters.push( numeric[Math.floor( Math.random()* numeric.length )] );


    }

    if ( options.specialCharacters ) {
        
        possibleCharacters = possibleCharacters.concat(specialCharacters);

        requiredCharacters.push( specialCharacters[Math.floor( Math.random()* specialCharacters.length )] );
    
    }

    for( var i = 0; i < options.passwordLength; i++ ){

        if( requiredCharacters[i]) {

            password += requiredCharacters[i];

        } else{

        password  += possibleCharacters[ Math.floor( Math.random()* possibleCharacters.length ) ];
        
        }
    
    }

    // console.log( password );
    // console.log( possibleCharacters );

    return password;

}

// generatePassword( options );

button.addEventListener("click", startNewPassword);