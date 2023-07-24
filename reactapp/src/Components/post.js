import "./post.css";
import {Link} from "react-router-dom";

// import { Link } from "react-router-dom";
const Post = () => {
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
<div className="postbar">

</div>
<div className="postcontent">
Tell us what you need done
</div>
<div className="postcontent1">
Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work. 
</div>
<div className="postcontent2">
   <div className="postmini">
        <input type="text" placeholder="Choose a name for your project" className="postmini" required/>
        <hr></hr>
        <div className="postmini1">
            <p><b>Hint:It helps to be specific!</b></p>
            <p>Describe what you need and what</p>
            <ul>
                <li>Website for a Indian bakery</li>
                <li>Mobile app for fitness startup</li>
                <li>Photographers needed for my wedding</li>
            </ul>
        </div>
        <div className="postmini2">
         <p>Let us help you craft the perfect project description by answering three quick questions. Select one of the answers provided or enter your own. </p>
         
         <form>
         <p><b>Is this project for business or personal use?</b> 1 of 3</p>
         <div className="hover">
  <p><input type="radio"  value="Personal"/>
  <label>Personal</label></p>
  <p><input type="radio"  value="For an existing business"/>
  <label>For an existing business</label></p>
  <p><input type="radio"  value="For starting a new enterprise "/>
  <label>For starting a new enterprise </label></p>
  <p><input type="radio" value="Other"/>
  <label>Other</label></p>
  
  </div>
  

  <p><b>What information should successful freelancers include in their application?</b> 2 of 3 </p>
  <div className="hover">
  <p><input type="radio"  value="Past work"/>
  <label>Past work</label></p>
  <p><input type="radio"  value="Experience"/>
  <label>Experience</label></p>
  <p><input type="radio"  value="Detailed project proposals"/>
  <label>Detailed project proposals</label></p>
  <p><input type="radio" value="Other"/>
  <label>Other</label></p>
  </div>
 


  <p><b>How soon do you need your project completed</b> 3 of 3 </p>
  <div className="hover">
  <p><input type="radio"  value="ASAP"/>
  <label>ASAP</label></p>
  <p><input type="radio"  value="Within a month"/>
  <label>Within a month</label></p>
  <p><input type="radio"  value="No time limit"/>
  <label>No time limit</label></p>
  <p><input type="radio" value="Other"/>
  <label>Other</label></p>
  </div>
  <hr></hr>
  <label for="myfile">Attach a file: d</label>
<input type="file" id="myfile" name="myfile"/> 
  <div className="clearbtn">
  <input type="reset" value="Clear"/>
  
  </div>
  
  <button>Submit</button>
         </form>
        </div>
        </div>
    
</div>































    
{/*        
         <nav>
      
      <div className="link">
          <Link to = '/login' style={link1} >LOGIN </Link>
          <Link to = '/login' style={link1} >SIGNUP</Link>
      </div>
        
        </nav>
        <div className="nav2">
        <Link to = '/home' style={linkStyle} activeStyle={hoverStyle}>HOME</Link>
        <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>ABOUT</Link>
        <Link to = '/hire' style={linkStyle} activeStyle={hoverStyle}>HIRE FREELANCERS</Link>
        <Link to = '/membership' style={linkStyle} activeStyle={hoverStyle}>MEMBERSHIP</Link>
        <Link to = '/contact' style={linkStyle} activeStyle={hoverStyle}>CONTACT</Link>
        </div> */}
      </div>
    )
}
export default Post;