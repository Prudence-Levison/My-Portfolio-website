'use client';
import React, { useState } from 'react';
import Github from "../../public/images/github-icon.png";
import Linkedin from '../../public/images/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [formData, setFormData] = useState({ email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setFeedback('✅ Message sent successfully!');
        setFormData({ email: '', subject: '', message: '' });
      } else {
        setFeedback('❌ Failed to send message.');
        console.error(result.error);
      }
    } catch (err) {
      setFeedback('❌ Something went wrong.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='grid md:grid-cols-2 my-12 py-12 gap-4 relative' id="contact">
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900  to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2'></div>

      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          I'm on the lookout for new opportunities! Whether it's a question or just a quick hello, don’t hesitate to reach out — I’ll get back to you soon.
        </p>

        <div className='socials flex flex-row gap-1'>
          <div className='p-2'>
          <Link href='https://github.com/Prudence-Levison'>
            <Image src={Github} alt='github-icon' width={35} height={35}/>
          </Link>
           </div>
          <Link href='https://www.linkedin.com/in/prudence-chikwumnazu-levison-18892b209?utm_source=share&utm_'>
            <Image src={Linkedin} alt='linkedin-icon' />
          </Link>
        </div>
      </div>

      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='email' className='text-white mb-2 font-medium block text-sm'>
              Your Email
            </label>
            <input
              name='email'
              type='email'
              required
              placeholder='youremail@gmail.com'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='subject' className='text-white mb-2 font-medium block text-sm'>
              Subject
            </label>
            <input
              name='subject'
              type='text'
              required
              placeholder='Just saying hi'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='message' className='text-white mb-2 font-medium block text-sm'>
              Message
            </label>
            <textarea
              name='message'
              placeholder='Let’s talk about...'
              required
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {feedback && <p className='text-sm text-white mt-4'>{feedback}</p>}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
