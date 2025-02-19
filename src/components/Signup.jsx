import React from 'react'
import { useForm } from 'react-hook-form'
import '../css/Signup.css'
import { useNavigate } from 'react-router-dom'
import { use } from 'react'

const Signup = () => {
    const {handleSubmit,register,formState:{errors},reset}=useForm()

    const navigate = useNavigate();

    const handle = (data)=>{
        console.log(data)
    }
  return (
    <div>
        <form className='signupform' onSubmit={handleSubmit(handle)}>
            <h2>SignUp User</h2>
            <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input type="email" name='email' {...register('email',{required:'Email must be not Empty'})}/>
                {errors.email ? <p className='error'>{errors.email.message}</p>:''}
            </div>

            <div className="form-group">
                <label htmlFor="password">Password :</label>
                <input type="password" name='password' {...register('password',{required:'Email must be not Empty',minLength:{value:8,message:'Password Must Be Minimum 8 Characters'}})}/>
                {errors.password ? <p className='error'>{errors.password.message}</p>:''}
            </div>
            <button>SignUp</button>
            <h3 onClick={()=>navigate('/login')}>if you already have an account...!</h3>
        </form>


      
    </div>
  )
}

export default Signup
