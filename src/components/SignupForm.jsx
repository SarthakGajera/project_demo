import React, { useState } from "react";
import account from "../Appwrite/appwriteConfig";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await account.create("unique()", email, password, name);
      alert("Sign up successfull.Please Login in.");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>SignUp</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">SignUp</button>
    </form>
  );
};

export default SignupForm;
