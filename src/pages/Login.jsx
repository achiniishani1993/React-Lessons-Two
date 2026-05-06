import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4 bg-white shadow rounded" style={{ width: "350px" }}>
        <h4 className="text-center mb-4">Login</h4>

        <FloatingLabel
          controlId="floatingUsername"
          label="Username"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="John" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>

        <p className="text-center mt-3 mb-0">
          No account?
          <Link to="/register" className="text-primary" style={{ cursor: "pointer" }}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;