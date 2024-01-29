import Input from '../component/shared/Input'
import { useForm } from "react-hook-form"
import classes from '../component/Login.module.scss'
import { useNavigate } from 'react-router'
import {VALIDATION_MESSAGE} from '../utils/constant'
const Login = ()=>{
    const { register, handleSubmit,  formState: { errors } } = useForm({mode: 'all'})
  const navigate =   useNavigate()
    const validationForLoginFrom = {
        email: {
            required: true
        },
        password: {
            required: true
        }
    }

    function onSubmitLoginForm (event){
        navigate('/list')
    }
    return <>
    <div className = {classes["login-container"]}>
        
        <form className = {classes["login-form"]} onSubmit = {handleSubmit(onSubmitLoginForm)}>
        <div className = {classes["login"]}>
        <div className = {classes["login-heading"]}>
            Login
        </div>
            <div className = {classes["control"]}>
                <div className = {classes["control-field"]}>
                <Input  required = {validationForLoginFrom.email.required} errors = {errors} type = "email" placeholder = "Email" id = "email" name = "email"
                register  = {register} validationSchema = {validationForLoginFrom.email}/>
                 {errors.email && errors.email.type === "required" && (
            <p className= {classes["errorMsg"]}>{VALIDATION_MESSAGE.email[errors.email.type]}</p>
          )}
                </div>
                <div className = {classes["control"]}>
                <Input required = {validationForLoginFrom.email.required}  errors = {errors} type = "password" placeholder = "Password" id = "password" name = "password"
                 validationSchema = {validationForLoginFrom.password} register  = {register} />
                 {errors.password && errors.password.type === "required" && (
            <p className={classes["errorMsg"]}>{VALIDATION_MESSAGE.password[errors.password.type]}</p>
          )}
                </div>
            </div>
            <div  className = {classes["action-control"]}>
                <button  className = {classes["login-btn"]} type = "submit">
                    SIGN IN
                </button>
            </div>
        </div>
        </form>
    </div>
     </>
}
export default Login