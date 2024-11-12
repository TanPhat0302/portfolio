import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_chgw4dm',
      'template_9u0axba',
      formRef.current,
      '-dNdbtW4jeN5D_Sgv'
    )
    .then(
      (result) => {
        alert('Message Sent Successfully');
        formRef.current?.reset();
      },
      (error) => {
        console.error('Error:', error);
        alert('An error occurred, please try again');
      }
    );
  };

  return (
    <div className='bg-[#0f0715] rounded-lg p-4'>
      <h1 className='text-white text-3xl font-bold'>Contact me</h1>
      <form ref={formRef} className='mt-8 block w-full overflow-hidden' onSubmit={handleSubmit}>
        <div className='flex flex-row items-center justify-between gap-4'>
          <input
            type='text'
            name='firstname'
            placeholder='First Name'
            className='flex-1 bg-black text-white px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
          />
          <input
            type='text'
            name='lastname'
            placeholder='Last Name'
            className='flex-1 bg-black text-white px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
          />
        </div>

        <div className='flex flex-row mt-5 items-center justify-between gap-4'>
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            className='flex-1 bg-black text-white px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
          />
          <input
            type='text'
            name='phone'
            placeholder='Phone number'
            className='flex-1 bg-black text-white px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
          />
        </div>
        <textarea
          name='message'
          className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[3.5px] border-gray-200 border-opacity-15 outline-none'
          rows={7}
          placeholder='Message'
        />

        <div className='mt-4'>
          <button
            type='submit'
            className='px-8 py-3.5 bg-[#7947df] rounded-lg text-white hover:bg-[#5c2fb7] transition-all'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
