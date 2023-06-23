function validate (user){
    
    
    let errors = {};

    if(!user.email){
        errors.email = "Enter your e-mail";
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)){
        errors.email = "Invalid e-mail";
    }    
    if (user.email.length >= 35){
        errors.email = "E-mail too long";
    } 
    if (!/\d/.test(user.password)){
        errors.password = "Password must contain a letter";
    }
    if (user.password.length <6 || user.password.length > 10){
        errors.password = "Invalid Password"
    }
    
    return errors;
};

export default validate;