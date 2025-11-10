import React, {useState} from 'react'
import "./Contact.css"
import { contactOptions } from '../../sources'
const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "99391f19-429e-4438-9e23-a7a6055cb3c2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Success! Your message has been sent.");
        event.target.reset(); // Clear the form
      } else {
        setResult("Error: " + data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error: Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id='contact' fade-aos="fade-zoom-in">
      <div className="wrapper">
        <div className="contact-options">
          {
            contactOptions.map((option,index)=>(
              <div className="flex-center option" data-aos="fade-right" key={index}>
                <div className="flex-center icon-wrapper">{option.icon}</div>
                <h4 className="muted">{option.title}</h4>
                <h3 className="value">{option.value}</h3>
              </div>
            ))
          }
        </div>

        <form onSubmit={onSubmit} className="contact-form" data-aos="fade-left">
          <div className="top">
            <h1 className="title">
              <span className="gradient-text">Contact Me</span>
            </h1>
            <p className="muted">
              "Feel free to reach out for collaborations, inquiries, or just to say Hello!"
            </p>
          </div>
          <div className="middle">
            <div className="flex row">
              <input type='text' placeholder='First name' name='first name' className='control' required/>
              <input type='text' placeholder='Last name' name='last name' className='control' required/>
            </div>
            <div className="flex row">
              <input type='email' placeholder='Email address' name='email' className='control' required/>
              <input type='tel' placeholder='Phone number' name='phone' className='control'/>
            </div>
            <textarea name="message" cols={30} rows={10} placeholder='Message' className='control' required></textarea>
          </div>
          <div className="flex-center bottom">
            <button type="submit" className="btn primary" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Now"}</button>
          </div>
               {result && (
            <div className={`result-message ${result.includes("Success") ? "success" : "error"}`}>
              {result}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact