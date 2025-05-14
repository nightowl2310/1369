import React from 'react';
// Assuming you use external CSS

const Footer = () => {
  return (
    <footer className="footer bg-black text-slate-400 px-7 py-4 font-sans">
      <div className="footer-logo max-w-6 flex items-center justify-center">
        <img src="/path-to-your-logo.png" alt="Logo" />
      </div>
      <div className="flex justify-center items-center gap-6 footer-links my-4"> 
        <a className='mx-0 my-4 text-slate-400 font-semibold hover:scale-110 duration-300' href="/privacy">Privacy Policy</a>
        <a className='mx-0 my-4 text-slate-400 font-semibold hover:scale-110 duration-300' href="/about">About</a>
        <a className='mx-0 my-4 text-slate-400 font-semibold hover:scale-110 duration-300' href="/contacts">Contacts</a>
        <a className='mx-0 my-4 text-slate-400 font-semibold hover:scale-110 duration-300' href="/blogs">Blogs</a>
        <a className='mx-0 my-4 text-slate-400 font-semibold hover:scale-110 duration-300' href="/terms">Terms & Conditions</a>
      </div>
      <div className="footer-bottom font-light flex justify-center items-center gap-2 text-sm text-slate-400">
        © 2025 Growth X Pro Ventures Private Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
