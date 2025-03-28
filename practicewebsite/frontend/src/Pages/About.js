import React from 'react'
import Chat from '../Subpages/Chat'

const About = () => {
return (
    <div class='container'>
        <div class='about mt-5'>
            <h1 class='about-h1'>About us</h1>
        </div>
            <div class='row'>
                <div class='col d-flex justify-content-center'>
                    <img src='/images/about.jpg'  class='aboutimg mt-5' alt=''/>
                </div>
                <div class='col'>
                    <p class='about-para mt-5 pt-3'>
                        Welcome to CodeTech Learn, where learning meets innovation! We are dedicated to providing high-quality educational experiences, both online and offline, to learners of all ages. Our mission is to empower individuals by equipping them with the skills and knowledge they need to succeed in today’s fast-paced world.<br /><br></br>
                        we believe that learning should be accessible and flexible to individual needs. Our founders, passionate educators with years of experience, set out to create a platform that blends traditional teaching methods with modern technology. Whether you prefer in-person classes or the convenience of online learning, we have a solution that works for you.
                    </p>
                </div>
            </div>
            <div class='upskill mt-5 p-5'>
                <div class='row'>
                    <div class='col'>
                        <h1 class='upskill-h1'>Upskill With Code Tech Learn</h1>
                        <p class='upskill-para d-flex justify-content-center'>At our programming institute, we are dedicated to empowering individuals with the skills and knowledge needed to excel in the ever-evolving tech industry. Our upskilling programs are designed to cater to learners of all levels, from beginners to advanced professionals, with a focus on both foundational concepts and cutting-edge technologies.<br></br><br></br> Through hands-on training, real-world projects, and expert guidance, we help students master essential programming languages, web and mobile development, data science, machine learning, and cloud computing. Our comprehensive curriculum not only strengthens technical skills but also emphasizes problem-solving, collaboration, and industry best practices, ensuring that our graduates are equipped to thrive in today’s fast-paced digital world.</p>
                    </div>
                    <div class='col d-flex justify-content-center'>
                        <img src='/images/upskill.png' alt='' class='upskill-img'/>
                    </div>
                </div>
            </div>
        <Chat />
    </div>

)
}

export default About