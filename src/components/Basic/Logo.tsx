import React from "react";
import { ReactComponent as LogoSource } from "../../assets/img/logo.svg";

const Logo: React.FC = () => {
  return (
      <div style={{
          display: `flex`,
          height: `2rem`
      }}>
          <LogoSource />
      </div>
  )
};

export default Logo;
