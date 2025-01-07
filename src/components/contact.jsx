import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formRef = useRef();

    const [form, setForm] = useState({
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        console.log("the form to send is:", form);

        emailjs
        .sendForm('service_96xvqtq', 
            'template_0uuv6c2', 
            formRef.current, {
          publicKey: '3CMc3hy90tB-UYzO4',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        )
        .finally(() => {
            setIsSubmitting(false);
            setForm({
                email: '',
                subject: '',
                message: ''
            })
        });  
    }
  return (
    <div>
        <section class="bg-white dark:bg-black">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-900  dark:text-white">Contact Me</h2>
      <p class="mb-8 lg:mb-16 font-semibold text-center text-titleColor dark:text-cyan-400 sm:text-l">Have Questions or Want to Collaborate?
      Feel free to reach out!  I’d love to hear from you. Simply fill out the form below, and I’ll get back to you as soon as possible.</p>
      <form onSubmit={sendEmail} ref={formRef} className="space-y-8">
          <div className='flex flex-col items-start'>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input 
              type="email" 
              name="email" 
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
              placeholder="name@gmail.com" 
              required 
              value={form.email}
              onChange={handleChange}/>
          </div>
          <div className='flex flex-col items-start'>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input 
              type="text" 
              name="subject" 
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
              placeholder="Let me know how I can help you" 
              required
              value={form.subject}
              onChange={handleChange} />
          </div>
          <div class="sm:col-span-2 flex flex-col items-start">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea 
              name="message" 
              rows="6" 
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
              placeholder="Leave a message..."
              required
              value={form.message}
              onChange={handleChange}></textarea>
          </div>
          <button 
          type="submit" 
          disabled={isSubmitting}
          class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg hover:bg-skillbg sm:w-fit bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >{isSubmitting ? 'Sending...' : 'Send message'}</button>
      </form>
  </div>
</section>
    </div>
  )
}

export default Contact