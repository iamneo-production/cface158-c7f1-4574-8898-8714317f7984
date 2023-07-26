

import {Link} from "react-router-dom";
import "./membership.css";
import { FiLogOut } from "react-icons/fi";
const Membership=()=> {
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
    
    <div className="App">
         <nav>
      
      <div className="link" >
          <Link to = '/login' style={link1} >LOGIN<p> </p> </Link>
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
        <div className="cards-container2">
            <div className="carda">
                <div className="carda1">
              <p style={{fontSize:'50px'}}>Basic</p>
              <p style={{fontSize:'60px'}}><b>$ 4.99</b></p>
              <p>per month</p>

              </div>
              <div className="btn">
              <Link to="/payment"><button>Get Started</button></Link>
              </div>
              <div className="content1">
                <ul>                
                <li className="minicontent">50 Bids Per Month</li>
                <li className="minicontent">50 Skills </li>
                <li className="minicontent">Unlock Rewards </li>
                <li className="minicontent">Unlimited Project Bookmarks</li>
                <li className="minicontent">Preferred Freelancer Eligible*</li>
                <li className="minicontent">Custom Cover Photo </li>
                <li className="minicontent">3 Free Highlighted Contest Entries Per Month</li>
                <li className="minicontent">12 Free Sealed Contest Entries Per Month </li>
                <li className="minicontent">5 Employer Followings</li>
                </ul>
                
                </div>
            </div>
            <div className="cardb">
            <div className="carda2">
            <p style={{fontSize:'50px'}}>Plus</p>
            <p style={{fontSize:'60px'}}>$ 6.99</p>
              <p>per month</p>
            </div>
            <div className="btn">
              <Link to="/payment"><button>Get Started</button></Link>
              </div>
            <div className="content1">
                <ul>                
                <li className="minicontent">100 Bids Per Month</li>
                <li className="minicontent">80 Skills </li>
                <li className="minicontent">Client Engagement</li>
                <li className="minicontent">Daily Withdrawal Requests</li>
                <li className="minicontent">Unlock Rewards </li>
                <li className="minicontent">Unlimited Project Bookmarks</li>
                <li className="minicontent">Preferred Freelancer Eligible*</li>
                <li className="minicontent">Custom Cover Photo </li>
                <li className="minicontent">5 Free Highlighted Contest Entries Per Month</li>
                <li className="minicontent">25 Free Sealed Contest Entries Per Month </li>
                <li className="minicontent">10 Employer Followings</li>
                <li className="minicontent">Free Sealed Projects</li>
                <li className="minicontent">Premium Freelancer Insights</li>
                <li className="minicontent">High Value Project Bidding*</li>
                </ul>
                </div>
            </div>
            <div className="cardc">
            <div className="carda3">
              <p style={{fontSize:'50px'}}>Professional</p>
              <p style={{fontSize:'60px'}}><b>$ 8.99</b></p>
              <p>per month</p>
              </div>
              <div className="btn">
              <Link to="/payment"><button>Get Started</button></Link>
              </div>
              <div className="content1">
                <ul>                
                <li className="minicontent">300 Bids Per Month</li>
                <li className="minicontent">100 Skills </li>
                <li className="minicontent">Client Engagement</li>
                <li className="minicontent">Bid Insights</li>
                <li className="minicontent">Daily Withdrawal Requests</li>
                <li className="minicontent">Unlock Rewards </li>
                <li className="minicontent">Unlimited Project Bookmarks</li>
                <li className="minicontent">Preferred Freelancer Eligible*</li>
                <li className="minicontent">Custom Cover Photo </li>
                <li className="minicontent">15 Free Highlighted Contest Entries Per Month</li>
                <li className="minicontent">75 Free Sealed Contest Entries Per Month </li>
                <li className="minicontent">20 Employer Followings</li>
                <li className="minicontent">Free Sealed Projects</li>
                <li className="minicontent">Premium Freelancer Insights</li>
                <li className="minicontent">15 External Invoicings</li>
                <li className="minicontent">High Value Project Bidding*</li>
                </ul>
                </div>
    </div>
    <div className="cardc">
    <div className="carda4">
              <p style={{fontSize:'50px'}}>Premier</p>
              <p style={{fontSize:'60px'}}>$ 10.99</p>
              <p>per month</p>
              </div>
              <div className="btn">
              <Link to="/payment"><button>Get Started</button></Link>
              </div>
              <div className="content1">
                <ul>                
                <li className="minicontent">1500 Bids Per Month</li>
                <li className="minicontent">400 Skills </li>
                <li className="minicontent">Client Engagement</li>
                <li className="minicontent">Bid Insights</li>
                <li className="minicontent">Daily Withdrawal Requests</li>
                <li className="minicontent">Unlock Rewards </li>
                <li className="minicontent">Unlimited Project Bookmarks</li>
                <li className="minicontent">Preferred Freelancer Eligible*</li>
                <li className="minicontent">Custom Cover Photo </li>
                <li className="minicontent">35 Free Highlighted Contest Entries Per Month</li>
                <li className="minicontent">150 Free Sealed Contest Entries Per Month </li>
                <li className="minicontent">Unlimited Employer Followings</li>
                <li className="minicontent">Free Sealed Projects</li>
                <li className="minicontent">Premium Freelancer Insights</li>
                <li className="minicontent">15 External Invoicings</li>
                <li className="minicontent">Free NDA Projects</li>
                <li className="minicontent">High Value Project Bidding*</li>
                </ul>
                </div>
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
  );
}

export default Membership;