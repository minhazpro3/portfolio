import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  
  function onSubmit(e) {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_n7s66zn', e.target, 'user_JYf3GchBoPDlzJ5tKJYqC')
      .then((result) => {
          alert('message send successful !')
      }, (error) => {
          
      });
      e.target.reset()
  };
    return (
      <div className="bg-blue-200 mb-8">
        <div className="container mx-auto">
        <h2 className=" text-white text-2xl bg-green-500   px-3 d-inline-block w-64 mx-auto py-3 px-5  rounded-full rounded-br-none rounded-tl-none">Contact With Me</h2>
            <div className="grid  sm:grid-cols-1 md:grid-cols-2 gap-2 mt-8">
            <div>
              <img src="https://i.ibb.co/C0hKvw1/rvb-de-base-185361734-removebg-preview.png" alt="" />
              </div>
              <div className="  border-2 p-8">
              <form onSubmit={onSubmit}>
      <input className=" border-4 w-full px-1 " name="name" required type="text"  placeholder="Name" />
      <br/>
      <input className="my-3 border-4 w-full px-1" name="email" required type="email" placeholder="Email" />
      <br/>
      <textarea className="mb-3 border-4 w-full px-1" type="text"  name="message" placeholder="Message"  required />
    <br/>
      <input className="w-full bg-green-400 text-white  py-1 rounded cursor-allowed"  type="submit" value="Send message" />
    </form>
              </div>
             
            </div>
        </div>
        </div>
    );
};

export default Contact;