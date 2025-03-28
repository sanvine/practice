import React from 'react'
import { Link } from 'react-router-dom'

const TopCourses = () => {
return (
    <div class='topcourses'>
        <h2 class='topcourse-h2'>Top Courses</h2>
        <div class='container'>
            <div class='row'>
                <div class='col-12 col-md-4 col-lg-3 mt-5'>
                    <div class='card'>
                        <img class='img-fluid w-100' src={'/images/fullstack.png'} alt='' height='200px' width='305px'  />
                        <div class='card-body'>
                            <h3 class='card-title'>Full Stack Development</h3>
                            <p class='card-text'>development of both frontend and backend portions of web applications with frameworks, libraries and databases</p>
                            
                        </div>
                    </div>
                </div>
                <div class='col-12 col-md-4 col-lg-3 mt-5'>
                    <div class='card'>
                        <img class='img-fluid w-100' src={'/images/aws.jpg'} alt='' height='200px' width='305px'/>
                        <div class='card-body'>
                            <h3 class='card-title'>Amazon Cloud Services</h3>
                            <p class='card-text'>Amazon Cloud Services offers reliable, scalable, and inexpensive cloud computing services and hands on practice.</p>
                            
                        </div>
                    </div>
                </div>
                <div class='col-12 col-md-4 col-lg-3 mt-5'>
                    <div class='card'>
                        <img class='img-fluid w-100' src={'/images/selenium.jpg'} height='200px' width='305px' alt=''/>
                        <div class='card-body'>
                            <h3 class='card-title'>Selenium Automation</h3>
                            <p class='card-text'>Web application testing using open-source tools and libraries across different browsers and operating systems. </p>
                            
                        </div>
                    </div>
                </div>
                <div class='col-12 col-md-4 col-lg-3 mt-5'>
                    <div class='card'>
                        <img class='img-fluid w-100' src={'/images/photoshop.jpg'} height='200px' width='305px' alt=''/>
                        <div class='card-body'>
                            <h3 class='card-title m-2'>Adobe Photoshop </h3><br/>
                            <p class='card-text'>Adobe Photoshop is the industry-leading digital image editing and design application that offers the tools to create anything you can imagine. </p>
                            
                        </div>
                    </div>
                </div>
                <div class='col-12 col-md-4 col-lg-3 mt-5'>
                    <div class='card'>
                        <img class='img-fluid w-100' src={'/images/autocad.jpg'} height='200px' width='305px' alt='' />
                        <div class='card-body'>
                            <h3 class='card-title'>Autocad</h3>
                            <p class='card-text'>AutoCAD software helps you easily edit, enhance, and maintain scanned drawings and plans in a AutoCAD environment. </p>
                            
                        </div>
                    </div>
                </div>
                <div class='col-12 col-md-6 col-lg-3 mt-5'>
                    <div class='card'>
                        <img class='img-fluid w-100' src={'/images/tally.jpg'} height='200px' width='305px' alt=''/>
                        <div class='card-body'>
                            <h3 class='card-title'>Tally</h3>
                            <p class='card-text'>TallyPrime brings you a powerful reports dashboard, presenting your business information in intuitive visual formats</p>
                            
                        </div>
                    </div>
                </div>
                <div class='col-12 col-md-4 col-lg-3 mt-5'>
                    <div class='card'>
                        <img class='img-fluid w-100' src={'/images/devops.jpg'} height='200px' width='305px' alt=''/>
                        <div class='card-body'>
                            <h3 class='card-title'>Devops</h3>
                            <p class='card-text'>Devops is the combination of development and operations to improve the speed and reliability of software delivery </p>
                            
                        </div>
                    </div>
                </div>
                <div class='col-12 col-md-4 col-lg-3 mt-5'>
                    <div class='card'>
                        <img class='img-fluid w-100' src={'/images/datascience.jpg'} height='200px' width='305px' alt=''/>
                        <div class='card-body'>
                            <h3 class='card-title'>Data Science</h3>
                            <p class='card-text'>principles and practices from the fields of mathematics, statistics, and computer engineering to analyze large amounts of data. </p>
                            
                        </div>
                    </div>
                </div>
                <div class='col-12 d-flex justify-content-center mt-4'>
                    <Link to='/courses'>
                        <button type='button' class='btn btn-primary mt-3'>Explore all courses</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)
}

export default TopCourses