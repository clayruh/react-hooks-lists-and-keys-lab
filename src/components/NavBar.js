import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {links.map( (links) => (
      <a href={`#${links}`} key={links}>{links}</a>
    ))}
  </nav>;
}

export default NavBar;
