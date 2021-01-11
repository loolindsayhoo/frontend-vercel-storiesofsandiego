// 4

import React from 'react';
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function StoryForm() {

    // const [fromName, setFromName] = useState('')
    // const [replyTo, setReplyTo] = useState('')
    // const [phoneNumber, setPhoneNumber] = useState('')
    // const [submissionName, setSubmissionName] = useState('')
    // const [story, setStory] = useState('')

    // const handleFromNameChange = (e) => {
    //     setFromName(e.target.value)
    // }

    // const handleReplyToChange = (e) => {
    //     setReplyTo(e.target.value)
    // }

    // const handlePhoneNumberChange = (e) => {
    //     setPhoneNumber(e.target.value)
    // }

    // const handleSubmissionNameChange = (e) => {
    //     setSubmissionName(e.target.value)
    // }

    // const handleStoryChange = (e) => {
    //     setStoryChange(e.target.value)
    // }

    const onSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_1bghah9', 'template_dw2qqor', e.target, 'user_gEdomN1uPIxGwzSJ9gWdL')
        .then(res => {
        // Email successfully sent alert
            Swal.fire({
                title: 'Email Successfully Sent',
                icon: 'success'
            })
        })
        // Email Failed to send Error alert
        .catch(err => {
            Swal.fire({
                title: 'Email Failed to Send',
                icon: 'error'
            })
            console.error('Email Error:', err)
        })

        // setFromName('')
        // setReplyTo('')
        // setPhoneNumber('')
        // setSubmissionName('')
        // setStoryChange('')

        e.target.reset()

    }

    return (
        <div className="story-form-submission">
            <form onSubmit={onSubmit} >
                <div className="story-form-field">
                    <label for="fromName" >NAME / NOMBRE:</label>
                    <input id="fromName" type="text" name="fromName" className="" />
                </div>

                <div className="story-form-field">
                    <label for="replyTo" >EMAIL / CORREO DE ELECTRONICA:</label>
                    <input id="replyTo" type="email" name="replyTo" className="" />
                </div>

                <div className="story-form-field">
                    <label for="phoneNumber">PHONE / TELEPHONO:</label>
                    <input id="phoneNumber" type="text" name="phoneNumber" className="" />
                </div>

                <div className="story-form-field">
                    <label for="image">LINK TO IMAGE. (WE  CAN'T ACCEPT FILES AT THIS TIME) / ENLACE A LA IMAGEN. (NO PODEMOS ACEPTAR ARCHIVOS EN ESTE MOMENTO):</label>
                    <input id="image" type="text" name="image" className="" /> <br />
                    <span>Good sites to host images: <a href="https://cloudinary.com/">Cloudinary</a> or <a href="https://imgur.com/">Imgur</a></span>
                </div>

                <div className="story-form-field">
                    <label for="submissionName" >WHAT NAME WOULD YOU LIKE US TO USE ON YOUR SUBMISSION? / CUAL ES EL NOMBRE USAR EN EL SUBMISSION?</label>
                    <input id="submissionName" type="text" name="submissionName" className="" />
                </div>

                <div className="story-form-field">
                    <label for="story" >STORY / HISTORIA:</label><br />
                    <textarea id="story" type="textarea" cols="60" rows="20" name="story" className="" ></textarea>
                </div>

                <div>
                    <button type='submit'>SEND</button>
                </div>
            </form>
            
        </div>
    );
}

export default StoryForm;