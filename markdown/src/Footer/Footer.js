import React from "react";


function Footer(props) {
  let footerStyle = {
    marginTop: "2rem",
    textAlign: "center",
  };
  return (
    <div className="footer" style={footerStyle}>
      {props.name}  
    </div>
  );
}

export default Footer;