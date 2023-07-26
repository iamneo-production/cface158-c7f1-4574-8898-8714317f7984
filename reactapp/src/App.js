import logo from './logo.svg';
import './App.css';
import Gmail from './Components/gmail';
import Login from './Components/login';
import Signup from './Components/signup';
import Nav from './Components/home';
import About from './Components/about';
import Hire from './Components/hire';
import Contact from './Components/contact';
import Membership from './Components/membership';
import Post from './Components/post';
import store from './Components/store';
import Payment from './Components/payment';
import { Provider } from 'react-redux';
import FeedForm from './Components/feedback';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Nav/>}/>
        <Route path="/gmail" element={<Gmail/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Nav/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/hire" element={<Hire/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/membership" element={<Membership/>}/>
        <Route path="/post" element={<Post/>}/>
        <Route path="/feedback" element={<FeedForm/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
