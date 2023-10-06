import React from "react";
import SignupContainer from "./signup/SignupContainer";
import Modal from "../components/Modal";

const SignupPage: React.FC = () => {
  return (
    <>
      <SignupContainer />
      <Modal />
    </>
  );
};
export default SignupPage;
