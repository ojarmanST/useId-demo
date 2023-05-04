import React from "react";
import { useId } from "react";

const PasswordField = () => {
  // Call useId at the top level of your component to generate a unique ID:
  const passwordHintId = useId();

  //everytime passwordHintId is invoked, it will be updated with a unique ID.
  return (
    <>
      <input type="password" aria-describedby={passwordHintId} />
      <p id={passwordHintId}>the password hint is: {passwordHintId}</p>
    </>
  );
};

export default PasswordField;
