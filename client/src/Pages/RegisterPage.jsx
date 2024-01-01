import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import "./RegisterPage.css";
import { toast } from "react-toastify";
import { UserContext } from "../UserContext";

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const {setUser} = useContext(UserContext);

  async function registerUser(ev) {
    ev.preventDefault();

    try {
      console.log(`Before Response ${name}`);


      await axios.post('/register', {
        name,
        email,
        password,
      }).then((response)=>{
        console.log(response.data.success);
        if(!response.data.success){
          toast(response.data.message);
        }
        else{
          toast('Registered Successfully');
          window.location.href = '/login';
        }
      });
  
    } 
    catch (e) {
      toast('Registration Failed!');
    }

  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-20">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input type="text" placeholder="John Doe" value={name} onChange={(ev) => setName(ev.target.value)} required className="text-black"/>
          <input type="email" placeholder="your@email.com" value={email} onChange={(ev) => setEmail(ev.target.value)} required className="text-black"/>
          <input type="password" placeholder="password" value={password} onChange={(ev) => setPassword(ev.target.value)} required className="text-black"/>
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member? <Link className="underline text-green" to={'/login'}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

