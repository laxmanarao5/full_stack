import React,{useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../slices/userSlice'
function Login() {
    //create dispatcher
    let dispatch=useDispatch()
    const {handleSubmit,register,reset}=useForm()
    let {userObj,loginStatus,errorMessage,status}=useSelector(state=>state.user)
    const handleLogin=(credentials)=>{
        console.log(credentials);
        let actionObj=userLogin(credentials)
        dispatch(actionObj)

    }
    let navigate=useNavigate()
    useEffect(()=>{
        if(status==="success")
        {
            navigate(`/user-profile/:${userObj.username}`)
        }
            
    },[status])

  return (
    <div>
        <div>
          <h2 className='text-success m-5'>Login</h2>
        </div>
        <div className='w-25 mx-auto'>
        <form className='form' onSubmit={handleSubmit(handleLogin)}>
            <div className='m-3'>
                <input className='form-control' type="email" {...register("email",{require:"Email is required"})} placeholder="Email address"/>
            </div>
            <div className='m-3'>
                <input className='form-control' type="password" {...register("password",{require:"Password is required"})} placeholder="Password"/>
            </div>
            <div className='m-3'>
                <button type="submit" className='btn btn-primary'>Login</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login