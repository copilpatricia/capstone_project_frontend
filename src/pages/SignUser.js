import { useRef } from "react";

function SignUser() {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleSubmit = (e) => {
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
    <>
      <form onSubmit={handleSubmit} className="form_container">
        <h3>Sign in</h3>
        <label htmlFor="email">Email</label>
        <input
          ref={emailInputRef}
          name="email"
          id="email"
          type="text"
          placeholder="Email"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          ref={passwordInputRef}
          name="password"
          id="password"
          type="text"
          placeholder="Password"
        />
        <button type="submit">Sign In</button>
      </form>
      <span>
        Don't have an account? <button>Sign Up</button>
      </span>
    </>
  );
}

export default SignUser;

// {
  /* <br />
      <form className="form_container">
        <h3>Sign up</h3>
        <label htmlFor="email">Email</label>
        <input  name="email" id="email" type="text" />
        <br />
        <label htmlFor="password">Password</label>
        <input name="password" id="password" type="text" />
      </form>
      <span>
        Don't have an account? <button>Sign Up</button>
      </span> */
// }
