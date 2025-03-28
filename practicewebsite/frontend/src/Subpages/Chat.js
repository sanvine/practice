import React, { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Chat = () => {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[phone,setPhone]=useState()
    const[value,setValue]=useState();

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/v1/applicationpath',{name,email,password,phone})
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
        axios.post('http://localhost:8000/api/v1/login',{email:email1,password:password1})
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
        <div class='container chat mt-5'>
            <div class='row'>
                <div class='col-12 col-lg-4 d-flex justify-content-center'>
                    <img src='/images/chat.jpg' alt='' />
                </div>
                <div class='col-12 col-lg-4 d-flex justify-content-center'>
                    <h3 class='chat-h3'>Talk to our career development specialist</h3>
                </div>
                <div class='col-12 col-lg-4 ps-5 mt-4'>
                    <div class='d-flex justify-content-center'>
                        <button class='chat-btn'data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                            <FaWhatsapp class='pe-1' />
                            Chat With Us
                        </button>
                    </div>
                </div>
                
            </div>
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
                        <Link to='/login'>
                            <button className='btn btn-default rounded w-100 bg-secondary text-decoration-none'>Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
)
}

export default Chat