import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import "./navstyle.css";
let initial = {
  email: "",
  password: "",
};
export default function Move() {
  const [state, setState] = useState(initial);
  let praveen = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let ganesh = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div>
      <div id="move">
        <img
          src="https://imgs.search.brave.com/S_J4On_uyOiXS4eNRLBA07SDJzhxGm9rqKXl9WQb2Ys/rs:fit:500:500:1/g:ce/aHR0cHM6Ly9mcmVl/c3RhcS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDMv/dW5zcGxhc2gtbG9n/by5qcGc"
          alt=""
        />
        <h1>Login</h1>
        <p>Welcome Back</p>
        <a href="https:www.facebook.com">
          <Button size="lg" id="sw" colorScheme="facebook" color="white">
            Login With Facebook
          </Button>
        </a>
        <p>or</p>
      </div>
      <form onSubmit={ganesh}>
        <div id="inin">
          <div>
            <div>
              <h3>E-Mail</h3>
            </div>
            <Input
              size="lg"
              id="inone"
              type="email"
              border="2px solid black"
              value={state.email}
              placeholder="Enter-Email"
              name="email"
              onChange={praveen}
              htmlSize={10}
              variant="outline"
              focusBorderColor="pink.400"
            />
          </div>
          <br />
          <div id="ram">
            <p>Password</p>
            <Input
              id="intwo"
              size="lg"
              type="password"
              border="2px solid black"
              value={state.password}
              placeholder="Enter-Password"
              name="password"
              onChange={praveen}
              htmlSize={10}
              variant="outline"
              focusBorderColor="pink.400"
            />
          </div>
        </div>
        <br />
        <Input
          size="lg"
          type="submit"
          id="button"
          backgroundColor="black"
          color="white"
          value="Login"
        />
      </form>
    </div>
  );
}