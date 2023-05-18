import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.instagram.com/miko_ahmad_s/" className="home__social-icon" target="_blank"
        // penggunaan ini agak mencegah terjadinya phising
        rel="noreferrer"
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/micho-ahmad-s-6a4686124/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/RaitoMiko"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
