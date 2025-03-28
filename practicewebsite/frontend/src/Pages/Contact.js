import React from 'react'
import Chat from '../Subpages/Chat'

const Contact = () => {
return (
    <div>
        <div class='contactbg container'>
            <h2 class='contact-h2'>Contact Us</h2>
            <p class='contact-p'>Got Quistions? Let's Connect</p>
            <div class='d-flex justify-content-center'>
                <div class='contact-num'>
                    <p>Call us - 1234567890</p>
                </div>
            </div>
            <div class='d-flex justify-content-center'>
                <div class='contact-num'>
                    <p>E-mail us - codetech@gmail.com</p>
                </div>
            </div>
            <div class='d-flex justify-content-center'>
                <div class='contact-num'>
                    <p>Chat with us - 1234567890</p>
                </div>
            </div>
        </div>

        
        <div class='comment container'>
            <h3 class='contact-h3'>Leave a Comment</h3>
            <div class='row'>
                <div class='col-12 col-sm-12 col-md-12 col-lg-6 pe-5'>
                    <form>
                        <div class='form-element'>
                            <label class='form-label'>Name</label>
                            <input class='form-control h-100 w-100' type='text'/>
                        </div><br></br>
                        <div class='form-element'>
                        <label class='form-label'>E-mail</label>
                        <input class='form-control h-100 w-100' type='text' size='50'/>
                        </div><br></br>
                        <div class='form-element'>
                        <label class='form-label'>Phone</label>
                        <input class='form-control h-100 w-100' type='text' size='50'/>
                        </div><br></br>
                        <div class='form-element'>
                        <label class='form-label'>Message</label>
                        <textarea class='form-control h-100 w-100' rows={5} cols={50}></textarea>
                        </div>
                        <button class='contact-btn mb-5' type='submit'>Submit</button>
                    </form>
                </div>
                <div class='col-12 col-sm-12 col-md-12 col-lg-6 pe-5 ps-5 pb-5'>
                    <img class='comment-img col-12 col-sm-12 col-md-12 col-lg-6' src="/images/comment.jpg" alt="" />
                </div>
            </div>
        </div>
        <Chat />
    </div>
)
}

export default Contact