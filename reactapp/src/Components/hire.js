import "./hire.css";
import {Link} from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

// import { Link } from "react-router-dom";
const Hire = () => {
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
    marginRight:'10px',
    textDecoration:'none',
    borderRadius: '10px',

  }; 
  
    return (
        
      <div className="navbar">
       
         <nav>
      
      <div className="link">
          <Link to = '/login' style={link1} >LOGIN </Link>
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
        <div className="overall">
        <div className="css1">
           <label>
            <p><b>What work do you require?</b></p>
       
        
        <select>
          <option value="select a category of work">select a category of work</option>
          <option value="Websites IT & Software">Websites IT & Software</option>
          <option value="Mobile">Mobile</option>
          <option value="Writing">Writing</option>
          <option value="Design">Design</option>
          <option value="Data Entry">Data Entry</option>
          <option value="Product Sourcing & Manufacturing">Product Sourcing & Manufacturing</option>
          <option value="Sales & Marketing">Sales & Marketing</option>
          

        </select>
      

        <p><b>Countries</b></p>
        
        
        <select>
          <option value="Search Countries">select a country of work</option>
          <option value="America">America</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Costaricca">Costarica</option>
          <option value="Dubai">Dubai</option>
          <option value="England">England</option>
          <option value="France">France</option>
          
        </select>

        <p><b>Hourly Rate</b></p>
        
        
        <select>
          <option value="Hourly Rate">select rate</option>
          <option value="less than rs 1000 per hour"> less than rs 1000 per hour</option>
          <option value="less than rs 1500 per hour">less than rs 1500 per hour</option>
          <option value="less than rs 2000 per hour">less than rs 2000 per hour</option>
          <option value="less than rs 2500 per hour">less than rs 2500 per hour</option>
          <option value="less than rs 3000 per hour">less than rs 3000 per hour</option>
          <option value="less than rs 3500 per hour">less than rs 3500 per hour</option>
          
        </select>

        <p>Exams</p>
        <select>
          <option value="Hourly Rate">select exams</option>
          <option value="HTML Level 1">HTML Level 1</option>
          <option value="HTML Level 2">HTML Level 2</option>
          <option value="HTML Level 3">HTML Level 3</option>
          <option value="Javascript Level l">Javascript Level l</option>
          <option value="Javascript Level 2">Javascript Level 2</option>
          <option value="Javascript Level 3">Javascript Level 3</option>
          <option value="Java Level 1">Java Level 1</option>
          <option value="Java Level 2">Java Level 2</option>
          <option value="Java Level 3">Java Level 3</option>
        </select>
      </label>
      <div className="btn">
              <Link to="/login"><button>Hire</button></Link>
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
 
    
     </div>
      </div>
      </div>
    )
}
export default Hire;