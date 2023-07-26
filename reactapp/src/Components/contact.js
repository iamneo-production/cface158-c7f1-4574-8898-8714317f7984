import "./contact.css";
import{Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";

// import { Link } from "react-router-dom";
const Contact = () => {

  const navigate=useNavigate();
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  

  let token=localStorage.getItem("token");

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    
    console.log('Form submitted');
    console.log('Name:', name);
    console.log('Email:',email);
    console.log('Message:',message);
    
    try {
      const response = await axios.post(
        "http://localhost:8181/caraddroll",
        {
          "name": name,
          "email": email,
          "message": message,
         
        },
        {
          headers: {
           "Authorization": `Bearer ${token}`,
            "cache-control": "no-control",
          },
        }
      );

      // Handle response as needed, e.g., show success message
      console.log(response.data);
      alert('message sent succesfully!');
      navigate('/home');
    } 
    catch (error) {
      console.log(error);
      window.alert("Invalid Credentials");
    }
  
               
  }



  const linkStyle = {
    color: 'white',
    textDecoration:'none',
    padding:'5px 10px',
    borderRadius: '5px',
  };
  const hoverStyle = {
    backgroundColor: 'blue',
    color: 'black',
  };
  const link1 = {
    color: 'black',
    textDecoration:'none',
    borderRadius: '10px',
    marginRight:'10px',
  }; 
    return (
        
      <div className="navbar">
         <nav>
      
      <div className="link" >
          <Link to = '/login' style={link1} >LOGIN<p> </p> </Link>
          <Link to = '/signup' style={link1} >SIGNUP</Link>
      </div>
        
        </nav>
        <div className="nav2">
        <Link to = '/home' style={linkStyle} activeStyle={hoverStyle}>HOME</Link>
        <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>ABOUT</Link>
        <Link to = '/hire' style={linkStyle} activeStyle={hoverStyle}>HIRE FREELANCERS</Link>
        <Link to = '/membership' style={linkStyle} activeStyle={hoverStyle}>MEMBERSHIP</Link>
        <Link to = '/contact' style={linkStyle} activeStyle={hoverStyle}>CONTACT</Link>
        </div>
        <form onSubmit={handleSubmit}  className="contact-form">
          <h2 className="form-heading">Send Us a Message</h2>
          <div class="form-group">
     
  <label htmlFor="name" className="form-label">Name:</label>
  <input type="text" id="name" className="form-input"  onChange={(e) => setName(e.target.value)} required />
  </div>
  <div class="form-group">
     
     <label htmlFor="email" className="form-label">Email:</label>
     <input type="text" id="email" className="form-input"  onChange={(e) => setEmail(e.target.value)} required />
     </div>
     <div class="form-group">
     
     <label htmlFor="message" className="form-label">Message:</label>
     <input type="text" id="message" className="form-input"  onChange={(e) => setMessage(e.target.value)} required />
     </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
      
    )
}
export default Contact;