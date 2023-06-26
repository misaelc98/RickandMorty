import { useState } from "react";
import style from "./Form.module.css";
import validate from "../Validations/Validations";


const Form = ({login}) => {
  
const [user,setUser] = useState({
    email:"",
    password:"",
});

const [errors,setErrors] = useState ({
    email:"",
    password:"",
})

function handleChange(e) { 
    setUser({
        ...user,
        [e.target.name]: e.target.value,})

    setErrors(validate({
        ...user,
        [e.target.name]: e.target.value
}))
};

function handleSubmit(e) {
    e.preventDefault();

    if(!errors.email && !errors.password){
        login(user)
    }else{
        alert("INVALID INFORMATION")}
    };
    


    return(



        <div className={style.formContainer}>
            
        <form type="submit" onSubmit={handleSubmit}>
            <div className={style.credencial}>
                <label htmlFor="email">E-mail</label>
                    <input
                    placeholder="ricksanchez@rym.com"
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div className={style.credencial}>
                <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <button className={style.submitButton} type="submit">Log In</button>
        </form>
        </div>
    )

};

export default Form;