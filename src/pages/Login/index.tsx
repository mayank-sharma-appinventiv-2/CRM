import React, { useState } from "react";
import InputField from "src/components/inputField";
import PasswordInput from "src/components/passwordInput";
import Button from "src/components/Button";

const Login = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleClick = () => {
    alert({ type: "Button clicked!", text, password });
  };
  return (
    <div>
      <h1>Sign In</h1>

      <h5>
        Please enter your registered email address and password to access your
        account.
      </h5>
      <InputField
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text"
        label="Text Input:"
        name="textInput"
        required
      />
      <PasswordInput value={password} onChange={handlePasswordChange} />
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default Login;
