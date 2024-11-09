"use client"
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  // Add and remove event listeners for clicking outside of the dropdown
 useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="navbar bg-slate-800">
      <div className="flex-1 ">
        <a className="btn btn-ghost text-xl text-white sm:text-18">Muhammad Hammad ur Rehman</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end relative" ref={dropdownRef}>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
            onClick={handleDropdownToggle} // Toggle dropdown on click
          >
            <div className="w-10 rounded-full">
              <Image
                alt="image of M Hammad ur Rehman"
                src="/brght.jpg"
                width={200}
                height={200}
              />
            </div>
          </div>
          {dropdownOpen && (
            <ul
              tabIndex={0}
              role="menu"
              className="menu menu-sm dropdown-content text-white bg-slate-500 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute top-full right-0"
            >
              <li>
                <a
                  href="https://www.linkedin.com/in/mhammadurrehman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="justify-between"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hammadurrehman2006"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/m.hammadurrehman2006"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
