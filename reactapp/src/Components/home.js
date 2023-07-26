
import "./home.css";
import {Link} from "react-router-dom";
import boy from "./boy.gif";
import {AiOutlineInstagram} from 'react-icons/ai';
import {CiInstagram} from 'react-icons/ci';
import {FiLogOut} from 'react-icons/fi';
import {FiInstagram} from "react-icons/fi";
import {FaTwitter} from "react-icons/fa";
import {BiLogoGmail} from "react-icons/bi";
import {FaFacebookMessenger} from "react-icons/fa";

// import { Link } from "react-router-dom";
const Nav = () => {
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
      
    <div className="link" style={{marginRight:'10px'}}>
        <Link to = '/login' style={link1} >LOGIN</Link>
        <Link to = '/signup' style={link1} >SIGNUP</Link>
        
    </div>
    <div className="log">
    <Link to = '/login'><FiLogOut/></Link>
    </div>
    <div className="post">
          <Link to ='/post' style={link1} ><div className="postbtn"><button>POST A PROJECT </button></div></Link>
        </div>
      
      </nav>
      <div className="nav2">
      <Link to = '/home' style={linkStyle} activeStyle={hoverStyle}>HOME</Link>
      <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>ABOUT</Link>
      <Link to = '/hire' style={linkStyle} activeStyle={hoverStyle}>HIRE FREELANCERS</Link>
      <Link to = '/membership' style={linkStyle} activeStyle={hoverStyle}>MEMBERSHIP</Link>
      <Link to = '/contact' style={linkStyle} activeStyle={hoverStyle}>CONTACT</Link>
      <Link to = '/feedback' style={linkStyle} activeStyle={hoverStyle}>FEEDBACK</Link>
      
      </div>
      <div className="back1">
        <div className="text1">
        <h1 style ={{color:'black'}}>World's number 1 freelancing and</h1>
        <h1 style ={{color:'black'}}>crowdsourcing marketplace. </h1>
        </div>
        <div className="text2">
        <p style ={{color:'black'}}>We connect over 6,44,660 employers and freelancers globally from over 247 countries, regions, and territories.</p>
      </div>
      </div>
      {/* <div motion>
        <img src={boy}></img>
        </div> */}
        <div className="cards-container1">
            <div className="card1">
           
          
            </div>
            <div className="card2">
              
                     </div>
            <div className="card3">
                    </div>
          </div>
          <div className="foot1">
      
       
      <div className="foot2">
       Terms
      <p>
      <Link to = '/home' style={linkStyle} activeStyle={hoverStyle}>Privacy Policy</Link>
      </p>
      <p>
     <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Terms & Conditions</Link>
     </p>
     <p>
     <Link to = '/hire' style={linkStyle} activeStyle={hoverStyle}>Copyright Policy</Link>
     </p>
     <p>
     <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Code of Conduct</Link>
     </p>
     <p>
     <Link to = '/contact' style={linkStyle} activeStyle={hoverStyle}>Fees & Charges</Link>
     </p>
     </div>
     <div className="foot3">
       About
     <p>
     <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>About us</Link>
     </p>
     <p>
     <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>How it works</Link>
     </p>
     <p>
     <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Security</Link>
     </p>
     <p>
     <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Invester</Link>
     </p>
     <p>
     <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Stories</Link>
     </p>
     <p>
     <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Awards</Link>
     </p>
     <p>
     <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>News</Link>
     </p>
     <p>
     <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Careers</Link>
     </p>
     </div>
     <div className="foot4">
       Freelancer
       <p>
     <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Categories</Link>
     </p>
     <p>
     <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Projects</Link>
     </p>
     <p>
     <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Freelancers</Link>
     </p>
     <p>
     <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Enterprise</Link>
     </p>
     <p>
     <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Membership</Link>
     </p>
     <p>
     <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Preferred Freelancer Program</Link>
     </p>
     
    <div className="bottom">
     Copyright © 2023 Freelancer Technology Pty Limited (ACN 142 189 759) 
     </div>
     </div>
 <div className="footicons">
 <Link to = 'https://www.instagram.com/' style={{ marginRight: '20px' }}><FiInstagram size={30}/></Link>
 <Link to = 'https://twitter.com/i/flow/login?redirect_after_login=%2Flogin'style={{ marginRight: '20px' }}><FaTwitter size={30}/></Link>
 <Link to = 'https://support.google.com/mail/answer/56256?hl=en'style={{ marginRight: '20px' }}><BiLogoGmail size={30}/></Link>
 <Link to = 'https://support.google.com/mail/answer/56256?hl=en'><FaFacebookMessenger size={30}/></Link>
 </div>
    
     </div>      </div>
      
    )
};
export default Nav;




