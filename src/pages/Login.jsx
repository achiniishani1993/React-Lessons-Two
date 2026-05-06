import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
const navigate = useNavigate();

const [username , setUsername] = useState("");
const [password , setPassword] = useState("");


const handleLoginSubmit = (event)=> {
    event.preventDefault();

const currentUsername = localStorage.getItem("username");
const currentPassword = localStorage.getItem("password");

if (username === currentUsername && password === currentPassword){
  alert("Login Success...!");
   localStorage.setItem("isLoggedIn", "true");
   navigate("/game");
}else {
  alert("Invalid password or username");
}
}

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4 bg-white shadow rounded" style={{ width: "350px" }}>
        <h4 className="text-center mb-4">Login</h4>
       <form onSubmit={handleLoginSubmit}>
        <FloatingLabel
          controlId="floatingUsername"
          label="Username"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="John"  value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </FloatingLabel>

        <Button variant="primary" type="submit" className="w-100" >
          Login
        </Button>

        <p className="text-center mt-3 mb-0">
          No account?
          <Link to="/register" className="text-primary" style={{ cursor: "pointer" }}>
            Register
          </Link>
        </p>
        </form>
      </div>
    </div>
  );
};

export default Login;