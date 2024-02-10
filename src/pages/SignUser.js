import { useRef, useState } from "react";

function SignUser() {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(emailInputRef.current.value);
    console.log(passwordInputRef.current.value);

    if (emailInputRef.current.value === "") {
        emailInputRef.current.focus();
        return;
      }
      if (passwordInputRef.current.value === "") {
        passwordInputRef.current.focus();
        return;
      }
    
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(emailInputRef.current.value);
    console.log(passwordInputRef.current.value);

    if (emailInputRef.current.value === "") {
        emailInputRef.current.focus();
        return;
      }
      if (passwordInputRef.current.value === "") {
        passwordInputRef.current.focus();
        return;
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
              placeholder="Email or phone"
            />
            <label htmlFor="password">Password</label>
            <input
              ref={passwordInputRef}
              name="password"
              id="password"
              type="text"
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
              placeholder="Email or phone"
            />
            <label htmlFor="password">Password</label>
            <input
              ref={passwordInputRef}
              name="password"
              id="password"
              type="text"
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