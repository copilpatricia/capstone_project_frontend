import { useRef, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

function SignUser() {
  const userCtx = useContext(UserContext);
  const { setUser } = userCtx;

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
      const res = await axios.post("https://blog-app-backend-nrpv.onrender.com/api/users/signin", {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      });
      console.log(res.data);
      setUser(res.data);
      localStorage.setItem("blogUser", JSON.stringify(res.data));
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
      const res = await axios.post("https://blog-app-backend-nrpv.onrender.com/api/users/signup", {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      });
      console.log(res.data);
      setUser(res.data);
      localStorage.setItem("blogUser", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="main_container">
      {showSignUp ? (
        <div>
          <form className="form_container" onSubmit={handleSignIn}>
            <h3 className="title_form">Welcome!</h3>

            <input
              className="input_form"
              ref={emailInputRef}
              name="email"
              id="email"
              type="text"
              placeholder="Email"
            />

            <input
              className="input_form"
              ref={passwordInputRef}
              name="password"
              id="password"
              type="password"
              placeholder="Password"
            />
            <button type="submit" className="button_form">
              Sign In
            </button>
            <span className="span_form">
              Don't have an account?{" "}
              <button onClick={() => setShowSignUp(!showSignUp)} className="span_button">
                Sign Up
              </button>
            </span>
          </form>
        </div>
      ) : (
        <div>
          <form className="form_container" onSubmit={handleSignUp}>
            <h3 className="title_form">Welcome!</h3>
            <input
              className="input_form"
              ref={emailInputRef}
              name="email"
              id="email"
              type="text"
              placeholder="Email"
            />
            <input
              className="input_form"
              ref={passwordInputRef}
              name="password"
              id="password"
              type="password"
              placeholder="Password"
            />
            <button type="submit" className="button_form">
              Sign Up
            </button>
            <span className="span_form">
              Already have an account?{" "}
              <button onClick={() => setShowSignUp(!showSignUp)} className="span_button">
                Sign In
              </button>
            </span>
          </form>
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
