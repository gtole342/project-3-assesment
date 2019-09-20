import React from "react";

const Nav = props =>{
  return(
    <ul>
      <li><a href="/" onClick={props.previousUser}>{"<< Previous User"}</a></li>
      <li>{"|"}</li>
      <li><a href="/" onClick={props.nextUser}>{"Next User >>"}</a></li>
    </ul>
  );
}
export default Nav;