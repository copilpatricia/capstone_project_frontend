import { useRef, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

function SignUser() {
    const userCtx = useContext(UserContext);
    const {setUser} = userCtx


  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (emailInputRef.current.value === "") {
      emailInputRef.current.focus();
      return;
    }
    if (passwordInputRef.current.value === "") {
      passwordInputRef.current.focus();
      return;
    }
    // POST request to the backend
    try {
      const res = await axios.post("http://localhost:4000/api/users/signin", {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      });
      console.log(res.data);
      setUser(res.data);
      localStorage.setItem("blogUser", JSON.stringify(res.data))
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (emailInputRef.current.value === "") {
      emailInputRef.current.focus();
      return;
    }
    if (passwordInputRef.current.value === "") {
      passwordInputRef.current.focus();
      return;
    }

    // POST request to the backend
    try {
      const res = await axios.post("http://localhost:4000/api/users/signup", {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      });
      console.log(res.data);
      setUser(res.data)
      localStorage.setItem("blogUser", JSON.stringify(res.data))
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      {showSignUp ? (
        <div>
          <form
            className="form_container"
            onSubmit={handleSignIn}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <h3>Sign In</h3>
            <label htmlFor="email">Email</label>
            <input
              ref={emailInputRef}
              name="email"
              id="email"
              type="text"
              placeholder="Email"
            />
            <label htmlFor="password">Password</label>
            <input
              ref={passwordInputRef}
              name="password"
              id="password"
              type="password"
              placeholder="Password"
            />
            <button type="submit">Sign In</button>
          </form>
          <span>
            Don't have an account?{" "}
            <button onClick={() => setShowSignUp(!showSignUp)}>Sign Up</button>
          </span>
        </div>
      ) : (
        <div>
          <form
            className="form_container"
            onSubmit={handleSignUp}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <h3>Sign Up</h3>
            <label htmlFor="email">Email</label>
            <input
              ref={emailInputRef}
              name="email"
              id="email"
              type="text"
              placeholder="Email"
            />
            <label htmlFor="password">Password</label>
            <input
              ref={passwordInputRef}
              name="password"
              id="password"
              type="password"
              placeholder="Password"
            />
            <button type="submit">Sign Up</button>
          </form>
          <span>
            Already have an account?{" "}
            <button onClick={() => setShowSignUp(!showSignUp)}>Sign In</button>
          </span>
        </div>
      )}
    </main>
  );
}

export default SignUser;

// no control form = useRef - for this form doesn't need to react with what the user is going to type
// control form = useState - when the user type React knows that something is going to change - starting to filter



// extract the user information

//passwordInputRef.current.value
//emailInputRef

// create an object to store the values
// push the object inside an array