import React from 'react'

const Choose = () => {
return (
    <div>
        <h2 class='choose-h2 mb-4'>Why choose CodeTech Learn?</h2>
            <div class='container choose-div'>
                <div class='row'>
                    <div class='col-12 col-sm-12 col-md-6 col-lg-6'>
                        <img class='choose-img' src={'/images/choose.jpg'} alt="" />
                    </div>
                    <div class='col-12 col-sm-12 col-md-6 col-lg-6 '>
                        <h3 class='choose-left d-flex justify-content-center'>Online Courses</h3>
                        <h3 class='choose-left d-flex justify-content-center'>Offline Training Courses</h3>
                        <h3 class='choose-left d-flex justify-content-center'>One to One Training</h3>
                        <h3 class='choose-left d-flex justify-content-center'>Dedicated query session</h3>
                        <h3 class='choose-left d-flex justify-content-center'>Expert Trainers</h3>
                    </div>
                </div>
                
            </div>
    </div>
)
}

export default Choose