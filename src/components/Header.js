import React from "react";

import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <a href="/">
        <img src={Logo} alt="logo" />
      </a>
    </header>
  );
}
