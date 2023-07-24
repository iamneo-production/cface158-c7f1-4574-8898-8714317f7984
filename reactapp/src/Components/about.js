import "./about.css";
import {Link} from "react-router-dom";
import { FiLogOut } from "react-icons/fi";



// import { Link } from "react-router-dom";
const About = () => {
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
      
      <div className="link">
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
        </div>
       
      <div className="about">
        <div className="image1">
            <img src="https://cdn3.f-cdn.com/build/css/images/about-us/overview-company-overview.jpg"/>
        </div>
        <div className="para0">
        <b>Company Overview</b>
        </div>
        <div className="para1">
Freelancer.com is the world's largest freelancing and crowdsourcing marketplace by number of users and projects. We connect over 67,642,339 employers and freelancers globally from over 247 countries, regions and territories. Through our marketplace, employers can hire freelancers to do work in areas such as software development, writing, data entry and design right through to engineering, the sciences, sales and marketing, accounting and legal services.

Freelancer Limited is trading on the Australian Securities Exchange under the ticker ASX:FLN
 </div>
      <div className="img2">
      <img src="https://previews.123rf.com/images/watcharakongton/watcharakongton1807/watcharakongton180700231/114843927-global-network-connection-world-map-abstract-technology-background-global-business-innovation.jpg"/>
        </div> 
        <div className="para2">
        <p><b>Global Workforce</b></p>
      
Freelancer.com is the world's largest freelancing and crowdsourcing marketplace by number of users and projects. We connect over 67,642,339 employers and freelancers globally from over 247 countries, regions and territories. 

 </div>
  <div className="para3">
         <p><b>Highly Skilled, On Demand</b> </p> 
       
         Enterprise grade talent in over 2,000 skills. Talent anywhere on the globe there is electricity and internet. No other freelance marketplace is as liquid as Freelancer with over 68% of jobs bid on within 60 seconds. 
 </div>
 <div className="para4">
         <p><b>No Fees</b> </p> 
      
         Freelancer Enterprise has no access fees, compulsory subscriptions, monthly fees or annual fees. There are no fees to post a project or set up a user account. Client commissions and upgrade fees are also waived for volume customers.
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
      
    )
}
export default About;