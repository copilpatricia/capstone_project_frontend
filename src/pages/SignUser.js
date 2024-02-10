function SignUser() {
    return (
    <>
      <form>
        <label htmlFor="email">Email</label>
        <input name="email" id="email" type="text" placeholder="Email or phone" />
        <br />
        <label htmlFor="password">Password</label>
        <input name="password" id="password" type="text" />
      </form>
      <span>
        Don't have an account?{" "}
        <button>Sign Up</button>
      </span>
    </>

    )
  }
  
  export default SignUser;
  