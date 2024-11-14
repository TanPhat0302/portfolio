import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });

  const validateForm = () => {
    const newErrors = { firstname: '', lastname: '', email: '', phone: '', message: '' };
    let isValid = true;

    // Validate First Name
    if (!formRef.current?.firstname.value.trim()) {
      newErrors.firstname = 'First name is required';
      isValid = false;
    }

    // Validate Last Name
    if (!formRef.current?.lastname.value.trim()) {
      newErrors.lastname = 'Last name is required';
      isValid = false;
    }

    // Validate Email
    const email = formRef.current?.email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate Phone (optional but can restrict it to digits if desired)
    const phone = formRef.current?.phone.value.trim();
    const phoneRegex = /^[0-9]+$/;
    if (phone && !phoneRegex.test(phone)) {
      newErrors.phone = 'Phone number can only contain digits';
      isValid = false;
    }

    // Validate Message
    if (!formRef.current?.message.value.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm() || !formRef.current) return;

    emailjs.sendForm(
      'service_chgw4dm',
      'template_9u0axba',
      formRef.current,
      '-dNdbtW4jeN5D_Sgv'
    )
    .then(
      () => {
        alert('Message Sent Successfully');
        formRef.current?.reset();
        setErrors({ firstname: '', lastname: '', email: '', phone: '', message: '' });
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
          <div className='flex-1'>
            <input
              type='text'
              name='firstname'
              placeholder='First Name'
              className='bg-black text-white px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
            />
            {errors.firstname && <p className='text-red-500 text-sm'>{errors.firstname}</p>}
          </div>
          <div className='flex-1'>
            <input
              type='text'
              name='lastname'
              placeholder='Last Name'
              className='bg-black text-white px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
            />
            {errors.lastname && <p className='text-red-500 text-sm'>{errors.lastname}</p>}
          </div>
        </div>

        <div className='flex flex-row mt-5 items-center justify-between gap-4'>
          <div className='flex-1'>
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              className='bg-black text-white px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
            />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
          </div>
          <div className='flex-1'>
            <input
              type='text'
              name='phone'
              placeholder='Phone number'
              className='bg-black text-white px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
            />
            {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
          </div>
        </div>

        <div className='mt-5'>
          <textarea
            name='message'
            className='w-full bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[3.5px] border-gray-200 border-opacity-15 outline-none'
            rows={7}
            placeholder='Message'
          />
          {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
        </div>

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
