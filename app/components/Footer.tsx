import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
