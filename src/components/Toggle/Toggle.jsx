import React, { useContext } from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div
      className="toggle"
      onClick={handleClick}
      aria-details="toggle biplap12 Full Stack Developer Biplap Neupane"
      aria-label="toggle biplap12 Full Stack Developer Biplap Neupane"
      oncontextmenu="return false"
    >
      <Moon />
      <Sun />

      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
