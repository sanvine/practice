import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'

const Nav = () => {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[phone,setPhone]=useState()
    const[value,setValue]=useState();

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://codetech-ww6o.onrender.com/api/v1/applicationpath',{name,email,password,phone})
        .then((result)=>{
            console.log(result)
            toast.success("registered successfully")  
        })
        .catch(err=>console.log(err))
        }

            
    const[email1,setEmail1]=useState()
    const[password1,setPassword1]=useState()
    
    const handleSubmit1=(e)=>{
        e.preventDefault()
        axios.post('https://codetech-ww6o.onrender.com/api/v1/login',{email:email1,password:password1})
        .then((result)=>{
            console.log(result)
            setValue(result.data)
            if(result.data==="success"){
                toast.success("login successfully")
                setValue('')
                window.location.href="https://wa.me/918884011518"
            }
        })
        .catch(err=>console.log(err))
    }

return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary w-100 h-100">
            <div class="container">
            <Link to='/'>
                <img class='nav-img' src={'/images/logo.png'} alt="" />
            </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link class='text-decoration-none' to='/'>
                        <li class="nav-item">
                            <a class="nav-link me-5 active" aria-current="page" href="##">Home</a>
                        </li>
                        </Link>
                        <Link class='text-decoration-none' to='/about'>
                        <li class="nav-item">
                            <a class="nav-link me-5"  href="##">About us</a>
                        </li>
                        </Link>
                        <Link class='text-decoration-none' to='/courses'>
                        <li class="nav-item dropdown">
                                <a class="nav-link me-5" href="/courses" role="button">
                                    Courses
                                </a>
                        </li>
                        </Link>
                        <Link class='text-decoration-none' to='/contact'>
                        <li class="nav-item">
                            <a href='##' class="nav-link me-5">Contact us</a>
                        </li>
                        </Link>
                        <li class="nav-item">
                            <button type='button' class='btn btn-success rounded me-5 mt-1' data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Login</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form onSubmit={handleSubmit1}>
                        <span class='text-danger'>{value}</span>
                        <div className='mb-3'>
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input type='text' required='true' placeholder='enter Email' autoComplete='off' name='email' className='form-control rounded-0' value={email1} onChange={(e)=>setEmail1(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password">
                                <strong>Password</strong>
                            </label>
                            <input type='text' required='true' placeholder='enter Password' autoComplete='off' name='password' className='form-control rounded-0' value={password1} onChange={(e)=>setPassword1(e.target.value)} />
                        </div>
                        <button type='submit' class="btn btn-primary w-100">Login</button>
                    </form>
                    </div>
                    <div class="modal-footer">
                        <a class='me-auto text-secondary text-decoration-none' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" href='##'>create new account</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor="name">
                                    <strong>Username</strong>
                                </label>
                                <input type='text' required='true' placeholder='enter Name' autoComplete='off' name='name' className='form-control rounded-0' value={name} onChange={(e)=>setName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="email">
                                    <strong>Email</strong>
                                </label>
                                <input type='text' required='true' placeholder='enter Email' autoComplete='off' name='email' className='form-control rounded-0' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="password">
                                    <strong>Password</strong>
                                </label>
                                <input type='text' required='true' placeholder='enter Password' autoComplete='off' name='password' className='form-control rounded-0' value={password} onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="phone">
                                    <strong>Phone Number</strong>
                                </label>
                                <input type='text' required='true' placeholder='enter phone number' autoComplete='off' name='phone' className='form-control rounded-0' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                            </div>
                            <button type='submit' className='btn btn-success rounded'>Register</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <Link to='/'>
                            <button data-bs-dismiss="modal" className='btn btn-default rounded w-100 bg-secondary text-decoration-none'>Return Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Nav
