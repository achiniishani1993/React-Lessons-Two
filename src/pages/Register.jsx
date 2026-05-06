import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [confirmpassword, setConfirmpassword] =useState("");


  const isDisable = username !== "" && email !== "" && password !== "" && confirmpassword !== "";

  const handleSubmit = (event) =>{
  event.preventDefault();
  
  if (password.length < 8){
    alert("Password must be at least 8 characters long");
    return;
  }

  if (password !== confirmpassword){
    alert("Password do not matched, try again")
    return;
  }
   alert("Registration successfully done...!!")
  }



  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4 bg-white shadow rounded" style={{ width: "350px" }}>
        <h4 className="text-center mb-4">Register</h4>
        <form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingUsername"
          label="Username"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="John" value={username} onChange={(e)=>setUsername(e.target.value)} />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingEmail"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingConfirmPassword"
          label="Confirm Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Password" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}/>
        </FloatingLabel>

        <Button variant="primary" type="submit" className="w-100" disabled={!isDisable}>
          Submit
        </Button>
          <p className="text-center mt-3 mb-0">
          Back to -
            <Link to="/" className="text-primary" style={{ cursor: "pointer" }}>
            Login
          </Link>
        </p>
        </form>
      </div>
    </div>
  );
};

export default Register;