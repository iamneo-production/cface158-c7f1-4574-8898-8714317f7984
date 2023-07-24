import "./contact.css";
import {Link} from "react-router-dom";

// import { Link } from "react-router-dom";
const Contact = () => {
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
        <form className="contact-form">
          <h2 className="form-heading">Send Us a Message</h2>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
      
    )
}
export default Contact;