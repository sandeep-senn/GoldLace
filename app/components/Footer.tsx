import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#3a2b1e] text-[#f5f5f5] py-10 px-6 mt-20">
  <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    {/* Column 1: Logo / Name */}
    <div>
      <h2 className="text-3xl font-[Cinzel] font-bold mb-4">GoldLace</h2>
      <p className="text-sm">Where elegance meets excellence.</p>
    </div>

    {/* Column 2: Quick Links */}
    <div>
      <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">Products</a></li>
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </div>

    {/* Column 3: Contact */}
    <div>
      <h3 className="text-xl font-semibold mb-3">Contact</h3>
      <p className="text-sm">Email: support@goldlace.com</p>
      <p className="text-sm">Phone: +91-9876543210</p>
      <div className="flex justify-center md:justify-start gap-4 mt-3">
        <a href="#" className="hover:opacity-75">Instagram</a>
        <a href="#" className="hover:opacity-75">Facebook</a>
        <a href="#" className="hover:opacity-75">WhatsApp</a>
      </div>
    </div>
  </div>

  {/* Bottom line */}
  <div className="mt-10 border-t border-[#ffffff22] pt-4 text-center text-sm text-[#ccc]">
    &copy; 2025 GoldLace. All rights reserved.
  </div>
</footer>
  )
}

export default Footer