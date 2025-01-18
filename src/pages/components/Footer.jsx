import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-[#1A3232] text-white py-8">
        <div className="container mx-auto px-4">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start text-sm space-y-8 md:space-y-0">
            {/* Company Name */}
            <div>
              <h2 className="font-bold text-lg mb-4">Compa</h2>
            </div>
            {/* Tools & Resources */}
            <div>
              <h3 className="font-semibold mb-2">Tools & Resources</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Latest article
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Currency Conversion
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Fiat currency rate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Rate alert
                  </a>
                </li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
            {/* Support */}
            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Submit request
                  </a>
                </li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms and condition
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-8 text-center text-xs border-t border-gray-700 pt-4">
            Copyright © 2024 Compa. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  

