import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FaFacebook, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const emailAddress = 'phunghoanghuy8@gmail.com';
  const [emailTooltip, setEmailTooltip] = useState(emailAddress);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setEmailTooltip('Đã sao chép!');
    setTimeout(() => {
      setEmailTooltip(emailAddress);
    }, 2000); // Reset tooltip after 2 seconds
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_xcgr3ob',      // <-- Thay bằng Service ID của bạn
        'template_picynjn',     // <-- Thay bằng Template ID của bạn
        form.current,
        '8pcYBIgUrsx6yNMrO'       // <-- Thay bằng Public Key của bạn
      )
      .then(
        () => {
          setStatus('Message Sent Successfully!');
          form.current.reset();
        },
        (error) => {
          setStatus(`Failed to send message. Error: ${error.text}`);
        }
      );
  };

  return (
    <main className="main-content">
      <section className="contact-hero">
        <div className="corner-border top"></div>
        <div className="corner-border left"></div>
        <div className="corner-border bottom"></div>
        <div className="corner-border right"></div>
        <div className="container" data-aos="fade-up">
          <div className="contact-content">
            <h1 className="contact-title">CONTACT</h1>
            <p className="contact-subtitle">Reach Out And Collaborate With Me</p>
            <div className="social-icons">
               <a href="#" onClick={handleCopyEmail} className="tooltip-container" data-tooltip={emailTooltip}>
                 <FaEnvelope />
                </a>
               <a href="https://web.facebook.com/hoang.phung.536900" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
               <a href="#" onClick={(e) => e.preventDefault()} target="_blank" rel="noopener noreferrer" className="tooltip-container" data-tooltip="Chưa có link Instagram">
                 <FaInstagram />
                </a>
               <a href="https://github.com/hoangphung123" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input type="text" name="from_name" placeholder="Name" required />
              <input type="email" name="from_email" placeholder="Email" required />
              <textarea name="message" placeholder="Enter your message" rows="4" required></textarea>
              <button type="submit"><span>Send Message</span></button>
            </form>
            {status && <p className="status-message">{status}</p>}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact; 