import React, { useState } from "react";
import CheckMember from "./CheckMember";
import Provision from "./Provision";

const SignupContainer: React.FC = () => {
  const [isMember, setIsMeber] = useState<boolean>(false);

  const renderSignup = () => {
    if (isMember) {
      return <CheckMember />;
    } else {
      return <Provision />;
    }
  };

  return <>{renderSignup()}</>;
};

export default SignupContainer;
