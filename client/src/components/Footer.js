import React from 'react';

const Footer = () => {
  return (
    <div>
      <hr />
      <footer>
        &copy; 2020 Created by:
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a target="_blank" href="https://github.com/ahmedali8">
          Ahmed Ali <i className="fa fa-github"></i>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
