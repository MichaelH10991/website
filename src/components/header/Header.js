import React, { useState } from "react";

const Header = () => {
  const [name, setName] = useState("");

  return <div className="Header">{name}</div>;
};

export default Header;
