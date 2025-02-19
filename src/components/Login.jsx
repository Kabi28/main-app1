import React from 'react'
import { useForm } from 'react-hook-form'
import '../css/SignUp.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const {handleSubmit,register,formState:{errors},reset}=useForm()

    const navigate = useNavigate()
    const handle = (data)=>{
        console.log(data)
    }
  return (
    <div>
        <form className='signupform' onSubmit={handleSubmit(handle)}>
            <h2>login User</h2>
            <div className="form-group">
                <label htmlFor="username">Username :</label>
                <input type="email" name='username' {...register('username',{required:'Username must be not Empty'})}/>
                {errors.username ? <p className='error'>{errors.username.message}</p>:''}
            </div>

            <div className="form-group">
                <label htmlFor="password">Password :</label>
                <input type="password" name='password' {...register('password',{required:'Email must be not Empty',minLength:{value:8,message:'Password Must Be Minimum 8 Characters'}})}/>
                {errors.password ? <p className='error'>{errors.password.message}</p>:''}
            </div>
            <button>login</button>
            <h3 onClick={()=>navigate('/signup')}>if you already Don't have an account...!</h3>
        </form>


      
    </div>
  )
}


export default Login
