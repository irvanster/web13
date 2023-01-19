import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })
    const [validate, setValidate] = useState({error: false, message: ''})
    const navigate = useNavigate()

    const handleLogin = (event)=> {
        event.preventDefault()
        axios({
            url: 'http://localhost:5000/api/v1/auth/login',
            method:"POST",
            data: loginForm
        }).then((res)=> {
            console.log(res.data.data)
            localStorage.setItem('@userLogin', JSON.stringify(res.data.data))
            navigate('/products')
        }).catch((err)=> {
            setValidate({error: true, message: err.response.data.message})
        })
    }
    console.log(localStorage.getItem('@userLogin'))
    useEffect(()=> {
        if(localStorage.getItem('@userLogin')) {
            navigate('/products')
        }
    },[])
  return (
    <div className="bg-primary">
    <form onSubmit={handleLogin} className="bg-white w-[30%] mt-[1%] p-5 mx-auto flex flex-col justify-center items-center">
    <img width={200} src="https://www.nicepng.com/png/detail/122-1225830_coffee-shop-logo-png.png" />

      {validate.error && (
        <div className="alert alert-error shadow-lg my-3">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{validate.message}</span>
            </div>
        </div>
      )}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Username</span>
        </label>
        <input
          onChange={(e)=> setLoginForm({
            ...loginForm,
            username: e.target.value
          })}
          type="text"
          placeholder="example: jhon.doe"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          onChange={(e)=> setLoginForm({
            ...loginForm,
            password: e.target.value
          })}
          type="password"
          placeholder="• • • • • • "
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block mt-5">Login</button>
    </form>
    </div>
  );
}
