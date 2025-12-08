// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import './contact.css'


// export default function Contact(){

// const navigate = useNavigate();

// //form state
// const [formData, setFormData] = useState({
    
//     firstName:"",
//     lastName: "",
//     phone: "",
//     email: "",
//     message: "",

// });


// //handle input changes
// const handleChange = (e) =>{
//     setFormData({...formData,[e.target.name]:e.target.value,});
// };


// //handle form submission
// const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Form Submitted:", formData)//for now, log the data
//     alert("Thank you for your message! Redirecting to Home...")


//     //redirect to Home
//     navigate("/");
// };



//     return(
//     <>
//         <div className="contact-container">

//             <h2>Contact Me</h2>

//             {/*Contact information panel */}

//             <div className="contact-information">
//                 <p><strong>Email:</strong> michelle.amosah@gmail.com</p>
//                 <p><strong>Phone:</strong> (416) 109 - 1234</p>
//                 <p><strong>Location:</strong> Toronto, ON, Canada</p>
//             </div>
            

//             {/*Contact form */}

//             <form className="form" onSubmit={handleSubmit}>

//                 <div className="form-group">
//                     <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required/>
//                 </div>

//                 <div className="form-group">
//                     <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required/>
//                 </div>

//                 <div className="form-group">
//                     <input type="tel" name="phone" placeholder="Contact Number" value={formData.phone} onChange={handleChange} required/>
//                 </div>

//                 <div className="form-group">
//                     <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
//                 </div>

//                 <textarea name="message" placeholder="Your message..." rows="5" value={formData.message} onChange={handleChange} required></textarea>

//                 <button type="submit" className="submit-btn">Send Message</button>

//             </form>

//         </div>    

//     </>  
//     );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./contact.css";

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    alert("Thank you for your message! Redirecting to Home...");
    navigate("/");
  };

  return (
    <section className="contact-container" data-cy="contact-page">

      <h1 className="contact-title" data-cy="contact-title">
        Contact Me
      </h1>

      {/* Contact Information Panel */}
      <div className="contact-information" data-cy="contact-info">
        <p><strong>Email:</strong> michelle.amosah@gmail.com</p>
        <p><strong>Phone:</strong> (416) 555-1234</p>
        <p><strong>Location:</strong> Toronto, ON, Canada</p>
      </div>

      {/* Contact Form */}
      <form className="form" onSubmit={handleSubmit} data-cy="contact-form">

        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            data-cy="input-firstName"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            data-cy="input-lastName"
          />
        </div>

        <input
          type="tel"
          name="phone"
          placeholder="Contact Number"
          value={formData.phone}
          onChange={handleChange}
          required
          data-cy="input-phone"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          data-cy="input-email"
        />

        <textarea
          name="message"
          placeholder="Your message..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          data-cy="input-message"
        />

        <button 
          type="submit" 
          className="submit-btn"
          data-cy="submit-button"
        >
          Send Message
        </button>

      </form>
    </section>
  );
}
