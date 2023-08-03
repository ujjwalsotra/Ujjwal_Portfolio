import './stylesheet/Formstyles.css';
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form=useRef();
  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_kcp90o5','template_ovf2p34',form.current,'NXydp-EdrctJsL5O1')
    .then((result)=>{
      console.log(result.text);
    },(error)=>{
      console.log(error.text);
    })
  }
  return (
    <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type='text' name='name'></input>
        <label>Email</label>
        <input type='email' name='email'></input>
        <label>Message</label>
        <textarea rows="6" placeholder='Type Your Message here' name='message'/>
        <input type='submit' value='send' style={{backgroundColor:"orangered"}}/>
        </form>
    </div>
  )
}

export default Form